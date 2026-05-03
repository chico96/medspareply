"use client";

import { useMemo, useState } from "react";
import { generateReviewReply, services, tones, type ReplyTone, type ReviewReplyInput } from "@/lib/replyGenerator";
import styles from "./page.module.css";

const exampleInput: ReviewReplyInput = {
  reviewText:
    "Loved my Hydrafacial with Mia. The spa felt calm and my skin looked so refreshed before my event.",
  rating: 5,
  serviceType: "Hydrafacial",
  tone: "warm",
};

export function FreeGenerator() {
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
      <div className={styles.sectionEyebrow}>Free local generator</div>
      <div className={styles.generatorHeader}>
        <div>
          <h2 id="generator-title">Turn a med-spa review into a polished reply in seconds.</h2>
          <p>
            Deterministic and private by design: no API calls, no keys, no review data leaving the browser.
          </p>
        </div>
        <span className={styles.localBadge}>Local-only MVP</span>
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
              <select value={rating} onChange={(event) => setRating(Number(event.target.value))}>
                {[5, 4, 3, 2, 1].map((value) => (
                  <option key={value} value={value}>
                    {value} stars
                  </option>
                ))}
              </select>
            </label>

            <label>
              Service
              <select value={serviceType} onChange={(event) => setServiceType(event.target.value)}>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Tone
              <select value={tone} onChange={(event) => setTone(event.target.value as ReplyTone)}>
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
            <button type="button" onClick={resetExample}>Reset example</button>
          </div>
          <small className={styles.privacyNote}>Runs locally in your browser. Paste, generate, copy, and leave.</small>
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
              <span>Private follow-up</span>
              <button type="button" onClick={() => copyText("follow-up", reply.privateFollowUp)}>
                {copied === "follow-up" ? "Copied" : "Copy"}
              </button>
            </div>
            <p>{reply.privateFollowUp}</p>
          </div>
          <div className={styles.outputCard}>
            <div className={styles.outputHeader}>
              <span>Safety notes</span>
              <button type="button" onClick={() => copyText("notes", reply.safetyNotes.join("\n"))}>
                {copied === "notes" ? "Copied" : "Copy"}
              </button>
            </div>
            <ul>
              {reply.safetyNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
