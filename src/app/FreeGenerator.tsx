"use client";

import { useMemo, useState } from "react";
import { generateReviewReply, services, tones, type ReplyTone } from "@/lib/replyGenerator";
import styles from "./page.module.css";

export function FreeGenerator() {
  const [reviewText, setReviewText] = useState(
    "Loved my Hydrafacial with Mia. The spa felt calm and my skin looked so refreshed before my event.",
  );
  const [rating, setRating] = useState(5);
  const [serviceType, setServiceType] = useState("Hydrafacial");
  const [tone, setTone] = useState<ReplyTone>("warm");

  const reply = useMemo(
    () => generateReviewReply({ reviewText, rating, serviceType, tone }),
    [rating, reviewText, serviceType, tone],
  );

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
        <form className={styles.formPanel} onSubmit={(event) => event.preventDefault()}>
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
        </form>

        <div className={styles.outputPanel} aria-live="polite">
          <div className={styles.outputCard}>
            <span>Public reply</span>
            <p>{reply.publicReply}</p>
          </div>
          <div className={styles.outputCard}>
            <span>Private follow-up</span>
            <p>{reply.privateFollowUp}</p>
          </div>
          <div className={styles.outputCard}>
            <span>Safety notes</span>
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
