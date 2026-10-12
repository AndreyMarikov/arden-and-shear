import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import ServiceMenu from "@/components/ServiceMenu";
import SiteFrame from "@/components/SiteFrame";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Explore barbering, hair studio, color, and grooming services with clear starting prices at Arden & Shear.",
  alternates: { canonical: "/services" },
  openGraph: { type: "website", url: "/services", title: "Services & Pricing | Arden & Shear", siteName: "Arden & Shear", description: "Explore barbering, hair studio, color, and grooming services with clear starting prices.", images: [{ url: "/assets/social/og-image.png", width: 1200, height: 630, alt: "Arden & Shear services and pricing" }] },
  twitter: { card: "summary_large_image", title: "Services & Pricing | Arden & Shear", description: "Explore barbering, hair studio, color, and grooming services with clear starting prices.", images: ["/assets/social/og-image.png"] },
};

export default function ServicesPage() {
  return (
    <SiteFrame>
      <main id="main">
        <PageIntro eyebrow="Services & pricing" title={<>Good work, <em>clear prices.</em></>} description="From a clean skin fade to a considered color change, every service starts with a conversation and a plan." action={{ href: "/contact", label: "Ask us a question" }} />
        <section className="section wrap services-page" aria-labelledby="service-menu-title">
          <div className="service-note"><CheckCircle2 size={20} aria-hidden="true" /><p>All prices are in US dollars. Color, length, and density can affect the final cost; we confirm everything before we begin.</p></div>
          <h2 id="service-menu-title" className="sr-only">Full service menu</h2>
          <ServiceMenu />
        </section>
        <section className="section tint" aria-labelledby="service-cta-title">
          <div className="wrap contact-band-inner"><div><p className="eyebrow">Not sure what to book?</p><h2 id="service-cta-title">Tell us what you're after.</h2></div><Link className="btn btn-dark" href="/contact">Get in touch <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </section>
      </main>
    </SiteFrame>
  );
}
