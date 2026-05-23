import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "OZ Software Agency | Full Stack Development Solutions",
  description:
    "OZ Software Agency builds scalable web apps, mobile apps, cloud platforms, and end-to-end software systems for growing businesses.",
  metadataBase: new URL("https://oz-agency.vercel.app"),
  openGraph: {
    title: "OZ Software Agency | Full Stack Development Solutions",
    description:
      "Full stack development solutions that drive real business results. Web apps, mobile, cloud, and end-to-end delivery.",
    url: "https://oz-agency.vercel.app",
    siteName: "OZ Software Agency",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OZ Software Agency | Full Stack Development Solutions",
    description:
      "Full stack development solutions that drive real business results. Web apps, mobile, cloud, and end-to-end delivery.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
