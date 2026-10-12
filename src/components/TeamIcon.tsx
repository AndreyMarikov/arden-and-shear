import { Icon, Palette, Scissors } from "lucide-react";
import { mustache, razor } from "@lucide/lab";

export type TeamIconId = "razor" | "palette" | "mustache" | "scissors";

type Props = { id: TeamIconId; size?: number };

export default function TeamIcon({ id, size = 28 }: Props) {
  const common = { size, strokeWidth: 1.5, "aria-hidden": true as const, focusable: false as const };

  switch (id) {
    case "razor":
      return <Icon iconNode={razor} {...common} />;
    case "mustache":
      return <Icon iconNode={mustache} {...common} />;
    case "palette":
      return <Palette {...common} />;
    case "scissors":
      return <Scissors {...common} />;
  }
}
