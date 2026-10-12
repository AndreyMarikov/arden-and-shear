import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageIntro from "@/components/PageIntro";
import Gallery from "@/components/Gallery";
import Photo, { resolvePhoto } from "@/components/Photo";
import SiteFrame from "@/components/SiteFrame";
import { gallery, photos } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A look at haircut shapes, clean fades, color, and the little details that make a style feel personal.",
  alternates: { canonical: "/gallery" },
  openGraph: { type: "website", url: "/gallery", title: "Gallery | Arden & Shear", siteName: "Arden & Shear", description: "A look at haircut shapes, clean fades, color, and the little details that make a style feel personal.", images: [{ url: "/assets/social/og-image.png", width: 1200, height: 630, alt: "Arden & Shear haircut and salon gallery" }] },
  twitter: { card: "summary_large_image", title: "Gallery | Arden & Shear", description: "Haircut shapes, clean fades, color, and considered details.", images: ["/assets/social/og-image.png"] },
};

export default function GalleryPage() {
  const items = gallery.flatMap((item) => {
    const src = resolvePhoto(item.base);
    return src ? [{ src, alt: item.alt, ratio: item.ratio }] : [];
  });

  return (
    <SiteFrame>
      <main id="main">
        <PageIntro eyebrow="The work" title={<>Every cut has <em>its own shape.</em></>} description="A small selection of fades, texture, color, and detail work—different people, different hair, no one-size-fits-all finish." action={{ href: "/services", label: "Explore services" }} />
        <section className="section wrap" aria-labelledby="gallery-list-title">
          <h2 id="gallery-list-title" className="sr-only">Haircut and color gallery</h2>
          {items.length ? <Gallery items={items} /> : <p className="muted">Gallery images will appear here.</p>}
        </section>
        <section className="section tint" aria-labelledby="space-title">
          <div className="wrap">
            <div className="section-head"><p className="eyebrow">Inside the studio</p><h2 id="space-title">A place to settle in.</h2></div>
            <div className="interior-gallery">
              {photos.interiors.map((photo) => <Photo key={photo.base} {...photo} sizes="(min-width: 800px) 45vw, 92vw" />)}
            </div>
            <div className="section-end-link"><Link className="link-arrow" href="/contact">Come see us <ArrowRight size={18} aria-hidden="true" /></Link></div>
          </div>
        </section>
      </main>
    </SiteFrame>
  );
}
