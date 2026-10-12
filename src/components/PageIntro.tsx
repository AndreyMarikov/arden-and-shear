import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export default function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: ReactNode; description: string; action?: { href: string; label: string } }) {
  return (
    <section className="page-intro wrap" aria-labelledby="page-title">
      <div className="page-intro-copy rule-block">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p className="lead">{description}</p>
        {action && <Link className="link-arrow page-intro-link" href={action.href}>{action.label}<ArrowRight size={18} strokeWidth={1.75} aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
