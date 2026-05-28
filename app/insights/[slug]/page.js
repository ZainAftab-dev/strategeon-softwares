import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag } from "lucide-react";
import { articles } from "@/data/articles";
import { CTA } from "@/components/CTA";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `https://strategeonsoftwares.com/insights/${article.slug}`,
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `https://strategeonsoftwares.com/insights/${article.slug}`,
      type: "article",
      publishedTime: article.publishDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

function ArticleTable({ table }) {
  return (
    <div className="article-table-wrap">
      <table className="article-table">
        <thead>
          <tr>
            {table.headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleSection({ section }) {
  return (
    <div className="article-section">
      {section.heading && <h2>{section.heading}</h2>}
      {section.content && <p>{section.content}</p>}
      {section.table && <ArticleTable table={section.table} />}
      {section.afterTable && <p>{section.afterTable}</p>}
      {section.list && (
        <ul className="article-list">
          {section.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {section.afterContent && <p>{section.afterContent}</p>}
      {section.subsections &&
        section.subsections.map((sub, i) => (
          <div key={i} className="article-subsection">
            <h3>{sub.subheading}</h3>
            <p>{sub.text}</p>
          </div>
        ))}
    </div>
  );
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishDate,
    author: {
      "@type": "Organization",
      name: "Strategeon Softwares",
      url: "https://strategeonsoftwares.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Strategeon Softwares",
      url: "https://strategeonsoftwares.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://strategeonsoftwares.com/insights/${article.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="article-hero">
        <div className="container">
          <Link href="/insights" className="article-back">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <div className="article-meta">
            <span className="pill">{article.tag}</span>
            <span className="article-meta-item">
              <Clock size={14} /> {article.readTime}
            </span>
            <span className="article-meta-item">
              <Tag size={14} /> {article.publishDate}
            </span>
          </div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-intro">{article.intro}</p>
        </div>
      </div>

      <div className="article-body">
        <div className="container container-narrow">
          {article.sections.map((section, i) => (
            <ArticleSection key={i} section={section} />
          ))}

          {article.cta && (
            <div className="article-cta-box">
              <h3>{article.cta.heading}</h3>
              <p>{article.cta.text}</p>
              <Link href={article.cta.link} className="btn btn-primary">
                {article.cta.buttonText} <ArrowRight size={16} />
              </Link>
            </div>
          )}

          <div className="article-footer-nav">
            <Link href="/insights" className="btn btn-light">
              <ArrowLeft size={16} /> All Insights
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Talk to Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <CTA />
    </>
  );
}
