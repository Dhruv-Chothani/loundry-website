import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "./section";
import { cn } from "@/lib/utils";

const PLANS = [
  {
    name: "Basic",
    price: 19,
    tagline: "For light, occasional loads",
    features: ["Wash & fold up to 10 lbs", "48-hour turnaround", "Free pickup over $30", "Eco-friendly detergent"],
    cta: "Start Basic",
    featured: false,
  },
  {
    name: "Standard",
    price: 39,
    tagline: "Most popular for households",
    features: ["Wash, dry & fold up to 25 lbs", "Next-day delivery", "Free pickup & delivery", "Stain treatment included", "Hangered shirts on request"],
    cta: "Choose Standard",
    featured: true,
  },
  {
    name: "Premium",
    price: 79,
    tagline: "Full-service white glove",
    features: ["Unlimited wash & fold", "Same-day express", "Priority dry cleaning (5 items)", "Garment repairs included", "Dedicated account manager"],
    cta: "Go Premium",
    featured: false,
  },
];

export function PricingPlans() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {PLANS.map((plan, i) => (
        <FadeIn key={plan.name} delay={i * 0.08}>
          <div
            className={cn(
              "relative flex h-full flex-col rounded-3xl border p-8 transition-all",
              plan.featured
                ? "border-transparent bg-gradient-brand text-brand-foreground shadow-glow scale-[1.02]"
                : "border-border bg-card shadow-soft hover:shadow-card",
            )}
          >
            {plan.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-card px-4 py-1 text-xs font-semibold text-primary shadow-soft">
                Most popular
              </span>
            )}
            <h3 className={cn("text-lg font-semibold", plan.featured ? "text-brand-foreground" : "text-foreground")}>
              {plan.name}
            </h3>
            <p className={cn("mt-1 text-sm", plan.featured ? "text-brand-foreground/80" : "text-muted-foreground")}>
              {plan.tagline}
            </p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-5xl font-bold tracking-tight">${plan.price}</span>
              <span className={cn("text-sm", plan.featured ? "text-brand-foreground/80" : "text-muted-foreground")}>
                /month
              </span>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={cn("mt-0.5 h-4 w-4 shrink-0", plan.featured ? "text-brand-foreground" : "text-primary")} />
                  <span className={plan.featured ? "text-brand-foreground/95" : "text-foreground"}>{f}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              size="pill"
              variant={plan.featured ? "secondary" : "brand"}
              className="mt-8 w-full"
            >
              <Link to="/contact">{plan.cta}</Link>
            </Button>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}