import { faqItems, contentExamples, toolkitFeatures } from "@/lib/marketing";
import { FreeGenerator } from "./FreeGenerator";
import styles from "./page.module.css";

const included = [
  "Review reply generator with service-aware safety notes",
  "Copy blocks for Google, Yelp, and RealSelf-style public responses",
  "Local SEO prompts for treatment pages, city pages, and GBP posts",
  "Escalation language for low ratings, clinical concerns, and refunds",
];

const steps = [
  "Paste the review and select rating, service, and tone.",
  "Use the public reply and private follow-up checklist.",
  "Upgrade to the toolkit when your team needs repeatable SOPs and content.",
];

export default function Home() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a className={styles.brand} href="#top">
          <span>✦</span> MedSpaReply
        </a>
        <div className={styles.navLinks}>
          <a href="#generator">Generator</a>
          <a href="#toolkit">Toolkit</a>
          <a href="#pricing">Pricing</a>
          <a href="#waitlist">Waitlist</a>
        </div>
      </nav>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <div className={styles.pill}>AI review replies + local SEO content for med spas</div>
          <h1>Premium reputation marketing for aesthetic clinics that move fast.</h1>
          <p>
            MedSpaReply helps owners, managers, and front-desk teams answer reviews, protect trust,
            and turn everyday guest feedback into local search content—without exposing private data.
          </p>
          <div className={styles.ctas}>
            <a className={styles.primaryCta} href="#generator">Try the free generator</a>
            <a className={styles.secondaryCta} href="#toolkit">See the $49 toolkit</a>
          </div>
          <div className={styles.metrics} aria-label="Product highlights">
            <span><strong>0</strong> external APIs</span>
            <span><strong>3</strong> reply outputs</span>
            <span><strong>$49</strong> launch toolkit</span>
          </div>
        </div>
        <div className={styles.heroCard}>
          <div className={styles.cardHeader}>Today&apos;s response queue</div>
          <div className={styles.reviewBubble}>“Loved my laser results, but check-in was confusing.”</div>
          <div className={styles.replyPreview}>
            <span>Suggested reply</span>
            <p>
              Thank you for trusting us with your laser visit. We&apos;re glad you shared both the win and
              the check-in note—our team will review it so your next visit feels even smoother.
            </p>
          </div>
        </div>
      </section>

      <FreeGenerator />

      <section className={styles.offer} id="toolkit">
        <div>
          <div className={styles.sectionEyebrow}>Launch offer</div>
          <h2>The $49 MedSpa Review + Local SEO Toolkit</h2>
          <p>
            A plug-and-play operating kit for teams that want premium reply quality before investing in
            a full software subscription.
          </p>
        </div>
        <div className={styles.priceCard}>
          <span>Founding price</span>
          <strong>$49</strong>
          <p>One-time toolkit mock offer for MVP validation.</p>
          <a href="#waitlist">Request early access</a>
        </div>
      </section>

      <section className={styles.problemSolution}>
        <div className={styles.problemCard}>
          <span>Problem</span>
          <h2>Every unanswered review is a missed local SEO signal.</h2>
          <p>
            Med spas juggle clinical nuance, privacy constraints, and high guest expectations. Generic
            replies feel robotic, while delayed replies reduce trust and visibility.
          </p>
        </div>
        <div className={styles.solutionCard}>
          <span>Solution</span>
          <h2>Fast replies with guardrails your team can actually use.</h2>
          <p>
            MedSpaReply combines service-aware templates, safety reminders, and content prompts so
            reputation work becomes a weekly growth habit.
          </p>
        </div>
      </section>

      <section className={styles.splitSection}>
        <div>
          <div className={styles.sectionEyebrow}>How it works</div>
          <h2>From review to revenue loop.</h2>
        </div>
        <ol className={styles.steps}>
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className={styles.included}>
        <div className={styles.sectionEyebrow}>What&apos;s included</div>
        <h2>Built for aesthetic medicine workflows.</h2>
        <div className={styles.featureGrid}>
          {included.map((item) => <article key={item}>{item}</article>)}
        </div>
      </section>

      <section className={styles.pricing} id="pricing">
        <div>
          <div className={styles.sectionEyebrow}>Pricing</div>
          <h2>Start free. Upgrade when the system saves your team hours.</h2>
        </div>
        <div className={styles.pricingGrid}>
          <article>
            <span>Free</span>
            <strong>$0</strong>
            <p>Use the local review reply generator on this page.</p>
          </article>
          <article className={styles.highlightPlan}>
            <span>Toolkit</span>
            <strong>$49</strong>
            <p>Templates, SOPs, and local SEO prompts for launch partners.</p>
          </article>
          <article>
            <span>Future platform</span>
            <strong>Waitlist</strong>
            <p>Team seats, saved brand voice, and monthly content workflows.</p>
          </article>
        </div>
      </section>

      <section className={styles.examples}>
        <div>
          <div className={styles.sectionEyebrow}>SEO/content examples</div>
          <h2>Turn review insights into local search assets.</h2>
        </div>
        <div className={styles.exampleGrid}>
          {contentExamples.map((example) => (
            <article key={example.title}>
              <span>{example.title}</span>
              <p>{example.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.toolkitList}>
        <h2>Toolkit contents</h2>
        <ul>
          {toolkitFeatures.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>

      <section className={styles.faq}>
        <div className={styles.sectionEyebrow}>FAQ</div>
        <h2>Questions med-spa teams ask first.</h2>
        <div className={styles.faqGrid}>
          {faqItems.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.waitlist} id="waitlist">
        <div>
          <div className={styles.sectionEyebrow}>Founder / early access</div>
          <h2>Help shape the med-spa reputation growth system.</h2>
          <p>
            Join the mock early-access list for launch validation. This form is intentionally local and
            does not submit data yet.
          </p>
        </div>
        <form className={styles.waitlistForm} action="#waitlist">
          <input aria-label="Name" placeholder="Your name" />
          <input aria-label="Clinic email" placeholder="Clinic email" type="email" />
          <input aria-label="Med spa city" placeholder="City / market" />
          <button type="button">Join early access</button>
          <small>Mock form: no data is sent or stored.</small>
        </form>
      </section>
    </main>
  );
}
