import {
  Shirt,
  Sparkles,
  Wind,
  Zap,
  Footprints,
  Sofa,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  tone: "brand" | "lavender" | "mint";
};

export const SERVICES: Service[] = [
  {
    slug: "wash-fold",
    title: "Wash & Fold",
    icon: Shirt,
    description: "Everyday laundry washed, dried, and neatly folded — ready to put away.",
    tone: "brand",
  },
  {
    slug: "dry-cleaning",
    title: "Dry Cleaning",
    icon: Sparkles,
    description: "Gentle, eco-friendly dry cleaning for suits, dresses, and delicates.",
    tone: "lavender",
  },
  {
    slug: "ironing",
    title: "Ironing Service",
    icon: Wind,
    description: "Crisp, professionally pressed shirts and trousers, on hangers.",
    tone: "mint",
  },
  {
    slug: "express",
    title: "Express Delivery",
    icon: Zap,
    description: "Need it today? Same-day turnaround for urgent loads.",
    tone: "brand",
  },
  {
    slug: "shoes",
    title: "Shoe Cleaning",
    icon: Footprints,
    description: "Sneakers, leather, suede — refreshed and restored to like-new.",
    tone: "lavender",
  },
  {
    slug: "carpet",
    title: "Carpet Cleaning",
    icon: Sofa,
    description: "Deep-cleaning for rugs and carpets — pickup and delivery included.",
    tone: "mint",
  },
];

export const TONE_BG: Record<Service["tone"], string> = {
  brand: "bg-brand-soft text-primary",
  lavender: "bg-lavender-soft text-lavender",
  mint: "bg-[oklch(0.95_0.05_175)] text-[oklch(0.45_0.08_175)]",
};