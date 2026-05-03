"use client";

import { useMemo, useState } from "react";
import { track } from "@vercel/analytics";
import {
  generateReviewReply,
  services,
  tones,
  type ReplyTone,
  type ReviewReplyInput,
} from "@/lib/replyGenerator";
import styles from "./page.module.css";

const exampleInput: ReviewReplyInput = {
  reviewText:
    "Loved my Hydrafacial with Mia. The spa felt calm and my skin looked refreshed before my event.",
  rating: 5,
  serviceType: "Hydrafacial",
  tone: "warm",
};

type FreeGeneratorProps = {
  toolkitHref?: string;
  toolkitLabel?: string;
  toolkitTarget?: string;
  toolkitRel?: string;
};

export function FreeGenerator({
  toolkitHref,
  toolkitLabel,
  toolkitTarget,
  toolkitRel,
}: FreeGeneratorProps = {}) {
  const [reviewText, setReviewText] = useState(exampleInput.reviewText);
  const [rating, setRating] = useState(exampleInput.rating);
  const [serviceType, setServiceType] = useState(exampleInput.serviceType);
  const [tone, setTone] = useState<ReplyTone>(exampleInput.tone);
  const [generatedInput, setGeneratedInput] = useState<ReviewReplyInput>(exampleInput);
  const [copied, setCopied] = useState<string | null>(null);

  const reply = useMemo(() => generateReviewReply(generatedInput), [generatedInput]);

  function generateReply() {
    setGeneratedInput({ reviewText, rating, serviceType, tone });
    setCopied(null);
    track("free_generator_click", {
      action: "generate_reply",
      rating,
      serviceType,
      tone,
    });
  }

  function resetExample() {
    setReviewText(exampleInput.reviewText);
    setRating(exampleInput.rating);
    setServiceType(exampleInput.serviceType);
    setTone(exampleInput.tone);
    setGeneratedInput(exampleInput);
    setCopied(null);
  }

  async function copyText(label: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(label);
  }

  return (
    <section className={styles.generator} id="generator" aria-labelledby="generator-title">
      <div className={styles.generatorHeader}>
        <div>
          <div className={styles.sectionEyebrow}>Free generator · runs in your browser</div>
          <h2 id="generator-title">
            Try it: turn a med-spa review into a polished, HIPAA-aware reply.
          </h2>
          <p>
            No login, no API key, no review text leaving your device. The free generator
            handles <strong>one reply at a time</strong>. The $49 toolkit gives your front
            desk the full template bank, the negative-review triage SOP, the 7-question
            safety check, the GBP prompts, and the 4-week content calendar — so replying
            to a week of reviews is a 20-minute Tuesday block, not a Sunday project.
          </p>
        </div>
        <span className={styles.localBadge}>Local-only · private</span>
      </div>

      <div className={styles.generatorGrid}>
        <form
          className={styles.formPanel}
          onSubmit={(event) => {
            event.preventDefault();
            generateReply();
          }}
        >
          <label>
            Review text
            <textarea
              value={reviewText}
              onChange={(event) => setReviewText(event.target.value)}
              rows={7}
              placeholder="Paste a Google review here..."
            />
          </label>

          <div className={styles.fieldGrid}>
            <label>
              Rating
              <select
                value={rating}
                onChange={(event) => setRating(Number(event.target.value))}
              >
                {[5, 4, 3, 2, 1].map((value) => (
                  <option key={value} value={value}>
                    {value} stars
                  </option>
                ))}
              </select>
            </label>

            <label>
              Service
              <select
                value={serviceType}
                onChange={(event) => setServiceType(event.target.value)}
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Tone
              <select
                value={tone}
                onChange={(event) => setTone(event.target.value as ReplyTone)}
              >
                {tones.map((toneOption) => (
                  <option key={toneOption} value={toneOption}>
                    {toneOption[0].toUpperCase() + toneOption.slice(1)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className={styles.generatorActions}>
            <button type="submit">Generate reply</button>
            <button type="button" onClick={resetExample}>
              Reset example
            </button>
          </div>
          <small className={styles.privacyNote}>
            Runs locally in your browser. Paste, generate, copy, and leave — review text is
            never sent anywhere.
          </small>
        </form>

        <div className={styles.outputPanel} aria-live="polite">
          <div className={`${styles.outputCard} ${styles.primaryOutput}`}>
            <div className={styles.outputHeader}>
              <span>Public reply</span>
              <button type="button" onClick={() => copyText("public", reply.publicReply)}>
                {copied === "public" ? "Copied" : "Copy reply"}
              </button>
            </div>
            <p>{reply.publicReply}</p>
          </div>
          <div className={styles.outputCard}>
            <div className={styles.outputHeader}>
              <span>Private follow-up checklist</span>
              <button
                type="button"
                onClick={() => copyText("follow-up", reply.privateFollowUp)}
              >
                {copied === "follow-up" ? "Copied" : "Copy"}
              </button>
            </div>
            <p>{reply.privateFollowUp}</p>
          </div>
          <div className={styles.outputCard}>
            <div className={styles.outputHeader}>
              <span>HIPAA-aware safety reminders</span>
              <button
                type="button"
                onClick={() => copyText("notes", reply.safetyNotes.join("\n"))}
              >
                {copied === "notes" ? "Copied" : "Copy"}
              </button>
            </div>
            <ul>
              {reply.safetyNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
            <small>Wording reminders only — not legal or medical advice.</small>
          </div>
        </div>
      </div>

      <div className={styles.generatorUpsell}>
        <div>
          <span className={styles.upsellEyebrow}>When one reply is not enough</span>
          <strong>
            Free generator = one reply. $49 toolkit = the whole front-desk system.
          </strong>
          <p>
            20 paste-ready review-reply templates across 5★ to 1★, the 8-step
            negative-review triage with sign-off block, the HIPAA-aware safety
            checklist, the GBP + 4-week content calendar, the local SEO prompts, and
            the operating cadence — as a 31-page complete PDF, six focused PDFs, and
            editable Markdown / CSV source files. 7-day satisfaction refund.
          </p>
        </div>
        <a
          className={styles.upsellCta}
          href={toolkitHref ?? "#toolkit"}
          target={toolkitTarget}
          rel={toolkitRel}
          onClick={() =>
            track("stripe_cta_click", { location: "free_generator_upsell" })
          }
        >
          {toolkitLabel ?? "Get the $49 toolkit"}
        </a>
      </div>
    </section>
  );
}
