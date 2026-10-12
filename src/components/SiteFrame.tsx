import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { brand, contact, logos } from "@/content/site";

const leftLinks = [
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
];
const rightLinks = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <Header leftLinks={leftLinks} rightLinks={rightLinks} ctaHref={contact.phoneHref} ctaLabel="Call to book" logo={logos.compact} brandName={brand.name} />
      {children}
      <Footer />
    </>
  );
}
