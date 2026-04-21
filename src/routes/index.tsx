import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";
import { Section, SectionHeader } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { SERVICES } from "@/components/services-data";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { PricingPlans } from "@/components/pricing-plans";
import { BlogGrid } from "@/components/blog-grid";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FreshFold — Premium Laundry Pickup & Delivery" },
      {
        name: "description",
        content:
          "Schedule a laundry pickup in seconds. Wash & fold, dry cleaning, ironing, express, shoe and carpet cleaning — delivered fresh to your door.",
      },
      { property: "og:title", content: "FreshFold — Premium Laundry Pickup & Delivery" },
      {
        property: "og:description",
        content:
          "Schedule a laundry pickup in seconds. Wash & fold, dry cleaning, ironing, express, shoe and carpet cleaning — delivered fresh to your door.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Section>
        <SectionHeader
          eyebrow="Our services"
          title="Care for every fabric, every routine"
          description="From everyday laundry to delicate dry cleaning, we cover it all — picked up and delivered."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>

      <HowItWorks />

      <Section>
        <SectionHeader
          eyebrow="Simple pricing"
          title="Plans for every household"
          description="Pay as you go or save with a monthly plan — cancel anytime."
        />
        <PricingPlans />
      </Section>

      <Testimonials />

      <Section className="bg-surface">
        <SectionHeader
          eyebrow="Tips & guides"
          title="From our journal"
          description="Practical advice to keep your wardrobe looking fresh between visits."
        />
        <BlogGrid />
      </Section>

      <CtaBand />
    </>
  );
}
