import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { reviews, stats, values } from "@/data/site";

export const metadata = {
  title: "About | OZ Software Agency",
  description: "Learn how OZ Software Agency delivers full stack development, design, cloud, and growth technology for growing businesses."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A software partner built for"
        highlight="business results"
        text="OZ Software Agency combines strategy, design, engineering, cloud, and growth technology so clients can launch stronger digital products."
      />
      <section className="section">
        <div className="container split">
          <div className="copy">
            <span className="eyebrow">Our story</span>
            <h2>We build the systems behind companies that are ready to grow.</h2>
            <p>
              OZ was shaped around a simple promise: full stack development,
              full service delivery, and full commitment to the business outcome.
              That means fewer handoffs, clearer communication, and products
              designed to perform after launch.
            </p>
          </div>
          <div className="stats">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-soft">
        <div className="container grid grid-3">
          {values.map((value) => (
            <article className="card" key={value.title}>
              <h3>{value.title}</h3>
              <p>{value.summary}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container feedback-layout">
          <aside className="feedback-summary">
            <span className="eyebrow">Client feedback</span>
            <h2>Trusted by growing teams.</h2>
            <div className="rating-box">
              <strong>4.9</strong>
              <span>average project rating</span>
            </div>
          </aside>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <div className="review-top">
                  <span className="avatar">{review.initials}</span>
                  <div>
                    <h3>{review.name}</h3>
                    <span>{review.location}</span>
                  </div>
                  <strong className="score">{review.rating}</strong>
                </div>
                <p className="verified">✓ {review.order}</p>
                <h4>{review.headline}</h4>
                <p>{review.quote}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
