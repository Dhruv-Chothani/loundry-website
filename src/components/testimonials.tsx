import { Star } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "./section";

const REVIEWS = [
  {
    name: "Sophia Chen",
    role: "Marketing Lead",
    quote:
      "FreshFold gave me my Sundays back. Pickup was on time, clothes came back perfectly folded.",
    initials: "SC",
  },
  {
    name: "Marcus Reid",
    role: "Software Engineer",
    quote:
      "Best dry cleaning I've used in years. My suits look brand new and the app is dead simple.",
    initials: "MR",
  },
  {
    name: "Aisha Patel",
    role: "Mom of three",
    quote:
      "The express service is a lifesaver. Same-day turnaround when the kids made a mess of everything.",
    initials: "AP",
  },
];

export function Testimonials() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Loved by locals"
        title="What our customers say"
        description="Trusted by thousands of households and small businesses across the city."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <FadeIn key={r.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:shadow-card">
              <div className="flex gap-0.5 text-[oklch(0.78_0.16_85)]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand text-sm font-bold text-brand-foreground">
                  {r.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}