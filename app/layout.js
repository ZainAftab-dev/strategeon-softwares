import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";

export const metadata = {
  title: "Strategeon Softwares | Full Stack Development Solutions",
  description:
    "Strategeon Softwares builds scalable web apps, mobile apps, cloud platforms, and end-to-end software systems for growing businesses.",
  metadataBase: new URL("https://strategeonsoftwares.com"),
  openGraph: {
    title: "Strategeon Softwares | Full Stack Development Solutions",
    description:
      "Full stack development solutions that drive real business results. Web apps, mobile, cloud, and end-to-end delivery.",
    url: "https://strategeonsoftwares.com",
    siteName: "Strategeon Softwares",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategeon Softwares | Full Stack Development Solutions",
    description:
      "Full stack development solutions that drive real business results. Web apps, mobile, cloud, and end-to-end delivery.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingScreen />
        <CustomCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
