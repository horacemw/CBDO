import {
  Scale,
  Landmark,
  ShieldCheck,
  UsersRound,
  HandHeart,
  Sprout,
} from "lucide-react";
import type { FocusArea } from "@/types/content";

const map = {
  scale: Scale,
  landmark: Landmark,
  "shield-check": ShieldCheck,
  "users-round": UsersRound,
  "hand-heart": HandHeart,
  sprout: Sprout,
} as const;

interface Props {
  icon: FocusArea["icon"];
  className?: string;
}

export function FocusAreaIcon({ icon, className }: Props) {
  const Comp = map[icon];
  return <Comp className={className} aria-hidden="true" />;
}
