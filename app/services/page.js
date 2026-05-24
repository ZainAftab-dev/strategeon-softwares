import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
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
      <section className="section">
        <div className="container grid grid-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="card" key={service.title}>
                <Icon size={38} className="card-icon" />
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul>
                  {service.bullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>
      </section>
      <section className="section section-soft">
        <div className="container split">
          <div className="copy">
            <span className="eyebrow">Technology stack</span>
            <h2>Modern tools selected for speed, reliability, and maintainability.</h2>
            <p>
              We match technology to the business problem instead of forcing a
              trendy stack onto every product.
            </p>
          </div>
          <div className="card">
            <div className="tech-row logo-tech-row service-tech-row">
              {technologyLogos.map((tech) => (
                <span className="tech-logo" key={tech.name}>
                  <img src={tech.icon} alt="" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">Engagement models</span>
              <h2>Choose the delivery shape that fits your stage.</h2>
            </div>
          </div>
          <div className="grid grid-3">
            {["Launch a new product", "Improve an existing system", "Add an expert delivery team"].map((item) => (
              <article className="card" key={item}>
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
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
