import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { insights } from "@/data/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | OZ Software Agency`,
    description: post.summary,
  };
}

export default function ArticlePage({ params }) {
  const post = insights.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="article-page">
      <div className="container article-container">
        <Link href="/insights" className="article-back">
          <ArrowLeft size={16} /> Back to Insights
        </Link>
        <span className="pill">{post.tag}</span>
        <h1 className="article-title">{post.title}</h1>
        <p className="article-summary">{post.summary}</p>
        <div className="article-divider" />
        <div className="article-body">
          {post.content.map((section) => (
            <div key={section.heading} className="article-section">
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
        <div className="article-cta">
          <h3>Ready to build something that works?</h3>
          <p>Share your goals and we will help shape the next practical step.</p>
          <Link className="btn btn-primary" href="/contact">
            Start a Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
