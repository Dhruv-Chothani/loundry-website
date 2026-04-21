import { CalendarCheck, WashingMachine, Truck } from "lucide-react";
import { Section, SectionHeader, FadeIn } from "./section";

const STEPS = [
  {
    n: "01",
    icon: CalendarCheck,
    title: "Schedule Pickup",
    description: "Book online in 30 seconds. Pick a slot that fits your day.",
  },
  {
    n: "02",
    icon: WashingMachine,
    title: "We Clean",
    description: "Sorted, washed, and folded by pros — handled with care.",
  },
  {
    n: "03",
    icon: Truck,
    title: "We Deliver",
    description: "Fresh laundry back to your door, neatly packed and ready.",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        eyebrow="How it works"
        title="Three simple steps"
        description="From pickup to delivery, we make laundry effortless."
      />
      <div className="relative grid gap-8 md:grid-cols-3">
        <div className="absolute left-1/2 top-12 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-border to-transparent md:block" />
        {STEPS.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <div className="relative flex flex-col items-center rounded-3xl bg-card p-8 text-center shadow-soft">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-brand text-brand-foreground shadow-glow">
                <s.icon className="h-7 w-7" />
              </span>
              <span className="mt-4 text-xs font-semibold tracking-widest text-muted-foreground">
                STEP {s.n}
              </span>
              <h3 className="mt-1 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}