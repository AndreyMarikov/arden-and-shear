type SocialIconId = "instagram" | "facebook" | "tiktok";

type Props = { id: SocialIconId; size?: number };

/**
 * Social-platform marks are brand assets, not a second general-purpose icon set.
 * All interface and decorative UI icons use Lucide; these inline SVGs keep
 * platform marks recognizable without adding another icon-library dependency.
 */
export default function SocialIcon({ id, size = 20 }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: false,
  } as const;

  if (id === "instagram") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (id === "facebook") {
    return (
      <svg {...common} viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.6 21v-8.15h2.75l.41-3.18H13.6V7.64c0-.92.26-1.55 1.59-1.55h1.69V3.24c-.29-.04-1.29-.12-2.46-.12-2.44 0-4.11 1.49-4.11 4.23v2.32H7.55v3.18h2.76V21h3.29Z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.07 1.76 4.14 1.13 1.16 2.7 1.69 4.24 1.83v4.01c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.85-.02 8.77-.08 1.4-.54 2.79-1.35 3.94-1.31 1.93-3.59 3.19-5.93 3.23-1.44.08-2.89-.31-4.11-1.08-2.03-1.28-3.44-3.59-3.65-5.99-.02-.5-.03-1-.01-1.49.18-1.91 1.12-3.74 2.62-4.97 1.7-1.44 4.07-2.12 6.28-1.71.02 1.48-.04 2.95-.04 4.43-.99-.32-2.15-.23-3.03.37-.64.41-1.13 1.05-1.31 1.79-.15.37-.11.77-.11 1.16.24 1.88 2.05 3.46 3.96 3.29 1.27-.01 2.53-.76 3.19-1.85.21-.37.44-.75.45-1.18.1-2.12.06-4.23.07-6.35.01-4.14-.01-8.28.02-12.42z" />
    </svg>
  );
}
