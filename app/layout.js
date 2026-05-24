import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

export const metadata = {
  title: {
    default: "Custom Software Development Company | Strategeon Softwares",
    template: "%s | Strategeon Softwares",
  },
  description:
    "Strategeon Softwares builds custom web apps, mobile apps, SaaS platforms, and end-to-end software systems for growing US businesses. Free consultation available.",
  metadataBase: new URL("https://strategeonsoftwares.com"),
  keywords: [
    "custom software development",
    "web app development company",
    "mobile app development",
    "SaaS development company",
    "full stack development agency",
    "software development company USA",
    "React Next.js development",
    "custom web application development",
  ],
  verification: {
    google: "X65B3QzqQhI3rKBCqemGAETxzuqg32FBOAWOSCqEiNk",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Custom Software Development Company | Strategeon Softwares",
    description:
      "Full-stack software development for growing US businesses. Custom web apps, mobile apps, cloud systems, and end-to-end delivery.",
    url: "https://strategeonsoftwares.com",
    siteName: "Strategeon Softwares",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | Strategeon Softwares",
    description:
      "Full-stack software development for growing US businesses. Custom web apps, mobile apps, cloud systems, and end-to-end delivery.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Strategeon Softwares",
  url: "https://strategeonsoftwares.com",
  description:
    "Strategeon Softwares builds custom web apps, mobile apps, cloud platforms, and end-to-end software systems for growing businesses.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7901 4th St N # 21548",
    addressLocality: "Saint Petersburg",
    addressRegion: "FL",
    postalCode: "33702",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-640-227-4748",
    contactType: "customer service",
    email: "info@strategeonsoftwares.com",
    availableLanguage: "English",
  },
  areaServed: "US",
  serviceType: "Software Development",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Strategeon Softwares",
  url: "https://strategeonsoftwares.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
