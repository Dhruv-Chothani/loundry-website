import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Section } from "./section";

export function CtaBand() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand px-8 py-16 text-center shadow-glow sm:px-16 sm:py-20">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
        <h2 className="relative text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl lg:text-5xl">
          Ready for fresher laundry, faster?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base text-brand-foreground/85 sm:text-lg">
          Schedule your first pickup in under a minute. No subscription required.
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="xl" variant="secondary">
            <Link to="/contact">Book a pickup</Link>
          </Button>
          <Button asChild size="xl" variant="outline" className="border-white/40 bg-transparent text-brand-foreground hover:bg-white/10 hover:text-brand-foreground">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}