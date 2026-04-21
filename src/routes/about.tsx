import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader, FadeIn } from "@/components/section";
import { Testimonials } from "@/components/testimonials";
import { CtaBand } from "@/components/cta-band";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";
import aboutImg from "@/assets/about-laundry.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About FreshFold — Our Story & Mission" },
      { name: "description", content: "Learn about FreshFold's mission to make laundry effortless with eco-friendly cleaning and human care." },
      { property: "og:title", content: "About FreshFold — Our Story & Mission" },
      { property: "og:description", content: "Learn about FreshFold's mission to make laundry effortless." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, title: "People first", text: "Every garment is treated like our own." },
  { icon: Leaf, title: "Eco-conscious", text: "Plant-based detergents and energy-efficient washes." },
  { icon: Sparkles, title: "Premium care", text: "Stain treatment, sorting, and quality checks on every order." },
  { icon: Users, title: "Community", text: "Supporting local jobs and small businesses." },
];

const STATS = [
  { n: "12k+", l: "Happy households" },
  { n: "98%", l: "On-time delivery" },
  { n: "4.9★", l: "Average rating" },
  { n: "1.2M", l: "Lbs cleaned" },
];

function AboutPage() {
  return (
    <>
      <Section className="bg-gradient-hero">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <span className="mb-4 inline-flex items-center rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              About FreshFold
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Laundry, made <span className="text-gradient-brand">human again</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              FreshFold started in 2019 with a simple idea: give people their weekends back.
              We pair professional cleaners with a friendly app — so you spend less time on chores
              and more on what matters.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-card p-4 shadow-soft">
                  <div className="text-2xl font-bold text-gradient-brand">{s.n}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-20 blur-2xl" aria-hidden />
              <img
                src={aboutImg}
                alt="Stack of freshly folded shirts with a sprig of lavender"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative aspect-square w-full rounded-[2rem] object-cover shadow-card"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl bg-card p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-foreground">Our mission</h2>
              <p className="mt-3 text-muted-foreground">
                To make professional laundry care so easy and reliable that it disappears from your
                to-do list. We blend craft, technology, and genuine kindness into every wash.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="rounded-3xl bg-card p-8 shadow-soft">
              <h2 className="text-2xl font-bold text-foreground">Our vision</h2>
              <p className="mt-3 text-muted-foreground">
                A city where no one wastes a Sunday on laundry, where every garment lasts longer,
                and where local cleaners thrive on great jobs.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeader eyebrow="Our values" title="What we stand for" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Testimonials />
      <CtaBand />
    </>
  );
}