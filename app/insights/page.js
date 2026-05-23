import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { insights } from "@/data/site";

export const metadata = {
  title: "Insights | OZ Software Agency"
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking for better"
        highlight="digital products"
        text="Guides and strategy notes for founders, operators, and marketing teams planning custom software."
      />
      <section className="section">
        <div className="container grid grid-3">
          {insights.map((post) => (
            <article className="card" key={post.title}>
              <span className="pill">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <Link className="btn btn-light" href="/contact">
                Discuss This Topic <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
