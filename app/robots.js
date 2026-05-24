export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://strategeonsoftwares.com/sitemap.xml",
    host: "https://strategeonsoftwares.com",
  };
}
