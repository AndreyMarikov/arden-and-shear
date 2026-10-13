import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const EXTENSIONS = [".webp", ".jpg", ".jpeg", ".png", ".avif"];

/** Returns the public URL of the first matching file for a base path, or null. */
export function resolvePhoto(base: string): string | null {
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(process.cwd(), "public", base + ext))) return `/arden-and-shear${base}${ext}`;
  }
  return null;
}

type Props = { base: string; alt: string; ratio: string; sizes: string; priority?: boolean; className?: string };

export default function Photo({ base, alt, ratio, sizes, priority, className = "" }: Props) {
  const src = resolvePhoto(base);
  return (
    <div className={`photo ${className}`} style={{ aspectRatio: ratio }}>
      {src ? <Image src={src} alt={alt} fill sizes={sizes} priority={priority} /> : <span className="photo-empty" aria-hidden="true" />}
    </div>
  );
}
