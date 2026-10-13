import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import SiteFrame from "@/components/SiteFrame";
import TeamGrid from "@/components/TeamGrid";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the fictional barber and stylist team at Arden & Shear, with specialties spanning barbering, texture, and color.",
  alternates: { canonical: "/team" },
  openGraph: { type: "website", url: "/team", title: "Meet the Team | Arden & Shear", siteName: "Arden & Shear", description: "Meet the fictional barber and stylist team, with specialties spanning barbering, texture, and color.", images: [{ url: "/arden-and-shear/assets/social/og-image.png", width: 1200, height: 630, alt: "Meet the Arden & Shear team" }] },
  twitter: { card: "summary_large_image", title: "Meet the Team | Arden & Shear", description: "Meet the fictional barber and stylist team, with specialties spanning barbering, texture, and color.", images: ["/arden-and-shear/assets/social/og-image.png"] },
};

export default function TeamPage() {
  return (
    <SiteFrame>
      <main id="main">
        <PageIntro eyebrow="The people behind the chairs" title={<>Good hands. <em>Good people.</em></>} description="A small team with different strengths and one shared belief: the best result starts by listening." action={{ href: "/services", label: "Explore their services" }} />
        <section className="section tint" aria-labelledby="team-list-title">
          <div className="wrap">
            <h2 id="team-list-title" className="sr-only">Our team</h2>
            <TeamGrid />
          </div>
        </section>
        <section className="section wrap team-cta">
          <p className="eyebrow">Ready when you are</p>
          <h2>Bring a reference. Bring a question. Bring yourself.</h2>
          <p className="lead">We'll talk through what suits you, what maintenance looks like, and where to start.</p>
          <Link className="btn btn-dark" href="/contact">Contact the studio <ArrowRight size={18} aria-hidden="true" /></Link>
        </section>
      </main>
    </SiteFrame>
  );
}
