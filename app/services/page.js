import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { AnimateInView, StaggerContainer, FadeItem, SlideLeft, SlideRight } from "@/components/AnimateInView";
import { services, technologyLogos } from "@/data/site";

export const metadata = {
  title: "Services | Strategeon Softwares",
  description: "Custom web apps, mobile development, cloud deployment, software modernization, and growth technology built for scale."
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full stack software services for"
        highlight="growth"
        text="Everything your business needs to plan, design, build, launch, and improve modern digital products."
      />

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <StaggerContainer className="grid grid-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <FadeItem key={service.title}>
                  <article className="card card-hover">
                    <Icon size={38} className="card-icon" />
                    <h3>{service.title}</h3>
                    <p>{service.summary}</p>
                    <ul>
                      {service.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                </FadeItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Tech stack */}
      <section className="section section-soft">
        <div className="container split">
          <SlideLeft className="copy">
            <span className="eyebrow">Technology stack</span>
            <h2>Modern tools selected for speed, reliability, and maintainability.</h2>
            <p>
              We match technology to the business problem instead of forcing a
              trendy stack onto every product.
            </p>
          </SlideLeft>
          <SlideRight>
            <div className="card">
              <div className="tech-row service-tech-row logo-tech-row">
                {technologyLogos.map((tech) => (
                  <span className="tech-logo" key={tech.name}>
                    <img src={tech.icon} alt="" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </SlideRight>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section">
        <div className="container">
          <AnimateInView className="section-head">
            <div>
              <span className="eyebrow">Engagement models</span>
              <h2>Choose the delivery shape that fits your stage.</h2>
            </div>
          </AnimateInView>
          <StaggerContainer className="grid grid-3">
            {["Launch a new product", "Improve an existing system", "Add an expert delivery team"].map((item) => (
              <FadeItem key={item}>
                <article className="card card-hover">
                  <CheckCircle2 size={34} className="card-icon" />
                  <h3>{item}</h3>
                  <p>
                    We define scope, timeline, owners, success metrics, and the
                    practical next release before development begins.
                  </p>
                  <Link className="btn btn-light" href="/contact">
                    Talk to Us <ArrowRight size={16} />
                  </Link>
                </article>
              </FadeItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}
