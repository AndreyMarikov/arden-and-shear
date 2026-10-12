/** All editable business content lives here. Every business detail is fictional. */

export const SITE_URL = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
export const ALLOW_INDEXING = process.env.ALLOW_INDEXING === "true";

export const brand = {
  name: "Arden & Shear",
  descriptor: "Barbers & Hair Studio",
  tagline: "Sharp lines, soft landings.",
  description:
    "Arden & Shear is a fictional barbershop and hair studio: precise cuts, honest color, and unhurried appointments. A web-design portfolio concept.",
};

export const logos = {
  compact: { src: "/brand/logo-compact.svg", width: 243, height: 40 },
  compactLight: { src: "/brand/logo-compact-light.svg", width: 243, height: 40 },
};

export const contact = {
  phone: "(503) 555-0142",
  phoneHref: "tel:+15035550142",
  email: "hello@ardenandshear.example",
  address: ["214 Alder Row", "Alderbrook, OR 97000"],
};

export const hours = [
  { days: "Tuesday – Friday", time: "9 am – 7 pm" },
  { days: "Saturday", time: "8 am – 5 pm" },
  { days: "Sunday – Monday", time: "Closed" },
];

/**
 * Icons always show. Each defaults to the platform's homepage so the links visibly work in the demo.
 * Set INSTAGRAM_URL / FACEBOOK_URL / TIKTOK_URL to your real accounts, or set one to an empty value to make that icon static.
 */
export const socials = [
  { id: "instagram", label: "Instagram", href: process.env.INSTAGRAM_URL ?? "https://www.instagram.com/" },
  { id: "facebook", label: "Facebook", href: process.env.FACEBOOK_URL ?? "https://www.facebook.com/" },
  { id: "tiktok", label: "TikTok", href: process.env.TIKTOK_URL ?? "https://www.tiktok.com/" },
] as const;

export type Service = { name: string; price: number; from?: boolean; note?: string };
export type ServiceGroup = { id: string; title: string; blurb: string; icon: "scissors" | "palette" | "users"; items: Service[] };

export const serviceGroups: ServiceGroup[] = [
  {
    id: "barbering", title: "Barbering", icon: "scissors",
    blurb: "Scissor and clipper work, finished with a razor.",
    items: [
      { name: "Classic cut", price: 42, note: "45 min" },
      { name: "Skin fade", price: 48, note: "50 min" },
      { name: "Beard sculpt", price: 30, note: "30 min" },
      { name: "Hot-towel shave", price: 45, note: "40 min" },
      { name: "Kids’ cut, 12 & under", price: 30 },
    ],
  },
  {
    id: "studio", title: "Hair studio", icon: "palette",
    blurb: "Cutting, color and care for every length.",
    items: [
      { name: "Cut & blow-dry", price: 68, from: true, note: "60 min" },
      { name: "Single-process color", price: 95, from: true },
      { name: "Balayage", price: 180, from: true, note: "3 hrs" },
      { name: "Gloss & tone", price: 65 },
      { name: "Scalp treatment", price: 40 },
    ],
  },
  {
    id: "together", title: "Together", icon: "users",
    blurb: "Pairings and small favors worth asking about.",
    items: [
      { name: "Cut + beard", price: 68, note: "75 min" },
      { name: "Wedding-day prep", price: 120, from: true },
      { name: "Senior cut, 65+", price: 34 },
      { name: "Maintenance trim, within 3 weeks", price: 30 },
    ],
  },
];

export const highlights = [
  { label: "Skin fade", price: "$48", icon: "scissors" },
  { label: "Shave", price: "$45", icon: "sparkles" },
  { label: "Balayage", price: "from $180", icon: "palette" },
] as const;

export const team = [
  { name: "Mateo Arden", icon: "razor" as const, role: "Founder · Master barber", specialty: "Skin fades & razor work", base: "/assets/team/team-01",
    bio: "Fifteen years behind the chair. Mateo opened the shop to prove a haircut can take an hour and still feel like a good use of one." },
  { name: "Priya Shah", icon: "palette" as const, role: "Senior stylist", specialty: "Color & balayage", base: "/assets/team/team-02",
    bio: "Priya mixes every formula by hand and plans color around how you actually style your hair on a Tuesday." },
  { name: "Jonah Whitlock", icon: "mustache" as const, role: "Barber", specialty: "Beards & scissor cuts", base: "/assets/team/team-03",
    bio: "A scissor-over-comb traditionalist with a soft spot for a well-kept beard line." },
  { name: "Lena Okafor", icon: "scissors" as const, role: "Stylist", specialty: "Texture & curls", base: "/assets/team/team-04",
    bio: "Lena cuts curls dry, shape first, so what you see in the mirror is what you take home." },
];

/** Order is the reading order of the three-column layout; ratios match the cropped files in public/assets/gallery. */
export const gallery: { base: string; alt: string; ratio: string }[] = [
  { alt: "Dark wavy cut with a skin fade and a trimmed beard, side profile", ratio: "4/5" },
  { alt: "Auburn hair in a loose, messy bun with face-framing strands", ratio: "1/1" },
  { alt: "Swept-back brown cut with a clean taper, side profile", ratio: "4/5" },
  { alt: "Layered bob with caramel highlights, in the salon", ratio: "3/2" },
  { alt: "Tousled blonde bob with soft, wavy ends", ratio: "4/5" },
  { alt: "Dark curls with a low taper, head tilted down", ratio: "1/1" },
  { alt: "Long dark waves with soft caramel dimension", ratio: "4/5" },
  { alt: "Curly textured top with a tight fade, seen from behind in the salon", ratio: "3/2" },
  { alt: "Long, straight hair with honey balayage, from behind", ratio: "1/1" },
  { alt: "Tight curls on top with a low fade and a short beard", ratio: "4/5" },
  { alt: "Slicked-back cut with a skin fade and a groomed beard", ratio: "1/1" },
  { alt: "Curly top with a crisp fade, rear three-quarter view", ratio: "3/2" },
].map((g, i) => ({ ...g, base: `/assets/gallery/cut-${String(i + 1).padStart(2, "0")}` }));

export const photos = {
  hero: { base: "/assets/hero/hero", alt: "A stylist trimming a client's hair with scissors and a comb in a bright, plant-filled salon", ratio: "4/3" },
  interiors: [
    { base: "/assets/interior/interior-01", alt: "A row of barber chairs facing arched mirrors in warm afternoon light", ratio: "4/5" },
    { base: "/assets/interior/interior-02", alt: "The open salon floor with a slatted reception counter and tall windows", ratio: "3/2" },
  ],
};

export const principles = [
  { icon: "clock", title: "Unhurried", text: "Every appointment carries buffer time, so nobody is watching the door." },
  { icon: "messages", title: "Consulted", text: "We talk first, cut second. You’ll know the plan before the first snip." },
  { icon: "check", title: "Kept", text: "Free neckline and fringe touch-ups for two weeks after any cut." },
] as const;
