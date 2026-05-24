import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { AnimatedStats } from "@/components/AnimatedStats";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import { AnimateInView, StaggerContainer, FadeItem, SlideLeft, SlideRight } from "@/components/AnimateInView";
import { stats, values } from "@/data/site";

export const metadata = {
  title: "About | Strategeon Softwares",
  description: "Learn how Strategeon Softwares delivers full stack development, design, cloud, and growth technology for growing businesses."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A software partner built for"
        highlight="business results"
        text="Strategeon Softwares combines strategy, design, engineering, cloud, and growth technology so clients can launch stronger digital products."
      />

      {/* Story + stats */}
      <section className="section">
        <div className="container split">
          <SlideLeft className="copy">
            <span className="eyebrow">Our story</span>
            <h2>We build the systems behind companies that are ready to grow.</h2>
            <p>
              Strategeon was shaped around a simple promise: full stack development,
              full service delivery, and full commitment to the business outcome.
              That means fewer handoffs, clearer communication, and products
              designed to perform after launch.
            </p>
          </SlideLeft>
          <SlideRight>
            <AnimatedStats stats={stats} className="stats" />
          </SlideRight>
        </div>
      </section>

      {/* Values */}
      <section className="section section-soft">
        <div className="container">
          <StaggerContainer className="grid grid-3">
            {values.map((value) => (
              <FadeItem key={value.title}>
                <article className="card card-hover">
                  <h3>{value.title}</h3>
                  <p>{value.summary}</p>
                </article>
              </FadeItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container split">
          <SlideLeft className="copy">
            <span className="eyebrow">Client feedback</span>
            <h2>Trusted by growing teams.</h2>
            <div className="rating-box" style={{ marginTop: "20px" }}>
              <strong>4.9</strong>
              <span>average project rating</span>
            </div>
          </SlideLeft>
          <SlideRight>
            <ReviewsCarousel />
          </SlideRight>
        </div>
      </section>

      <CTA />
    </>
  );
}
