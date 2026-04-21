import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { SERVICES } from "@/components/services-data";
import { HowItWorks } from "@/components/how-it-works";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — FreshFold Laundry" },
      {
        name: "description",
        content:
          "Wash & fold, dry cleaning, ironing, express delivery, shoe and carpet cleaning. Discover all FreshFold services.",
      },
      { property: "og:title", content: "Services — FreshFold Laundry" },
      { property: "og:description", content: "Every laundry service you need, picked up and delivered." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section className="bg-gradient-hero">
        <SectionHeader
          eyebrow="What we do"
          title="Services tailored to your wardrobe"
          description="Quality care for everything you wear, plus extras for shoes, rugs, and special pieces."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </Section>
      <HowItWorks />
      <CtaBand />
    </>
  );
}