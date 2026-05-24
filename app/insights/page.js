import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/data/site";

export const metadata = {
  title: "Insights | Strategeon Softwares",
  description: "Practical guides and strategy notes for founders and operators planning custom software, MVPs, and digital growth systems."
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking for better"
        highlight="digital products"
        text="Curated guides and research for founders, operators, and marketing teams planning custom software."
      />
      <section className="section">
        <div className="container grid grid-3">
          {insights.map((post) => (
            <article className="card" key={post.title}>
              <span className="pill">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <a
                className="btn btn-light"
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
