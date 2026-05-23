import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>OZ Software Agency</h3>
            <p>
              Full stack development solutions for businesses that need modern,
              scalable, high-performing web and mobile applications.
            </p>
            <p>Real solutions. Real results.</p>
          </div>
          <div>
            <h4>Pages</h4>
            <div className="footer-links">
              {navItems.slice(1, 7).map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <div className="footer-links">
              <Link href="/insights">Insights</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/work">Case Studies</Link>
            </div>
          </div>
          <div>
            <h4>Contact</h4>
            <p><Mail size={16} /> ozsoftwareagency@gmail.com</p>
            <p><Phone size={16} /> +1 (640) 227-4748</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 OZ Software Agency. All rights reserved.</span>
          <span>Full Stack Development · Real Solutions · Real Results</span>
        </div>
      </div>
    </footer>
  );
}
