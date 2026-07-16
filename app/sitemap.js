import { articles } from "@/data/articles";

export default function sitemap() {
  const base = "https://strategeonsoftwares.com";
  const now = new Date();

  const pages = [
    { url: "/",            priority: 1.0, changeFrequency: "weekly"  },
    { url: "/about",       priority: 0.9, changeFrequency: "monthly" },
    { url: "/services",    priority: 0.9, changeFrequency: "monthly" },
    { url: "/work",        priority: 0.8, changeFrequency: "weekly"  },
    { url: "/process",     priority: 0.8, changeFrequency: "monthly" },
    { url: "/insights",    priority: 0.7, changeFrequency: "weekly"  },
    { url: "/contact",     priority: 0.9, changeFrequency: "monthly" },
    { url: "/privacy",     priority: 0.3, changeFrequency: "yearly"  },
  ];

  const staticEntries = pages.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const articleEntries = articles.map((article) => ({
    url: `${base}/insights/${article.slug}`,
    lastModified: new Date(article.publishDate),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...articleEntries];
}
