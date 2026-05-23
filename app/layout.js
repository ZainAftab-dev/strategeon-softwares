import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "OZ Software Agency | Full Stack Development Solutions",
  description:
    "OZ Software Agency builds scalable web apps, mobile apps, cloud platforms, and end-to-end software systems for growing businesses."
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
