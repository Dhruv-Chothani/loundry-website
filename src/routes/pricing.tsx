import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/section";
import { PricingPlans } from "@/components/pricing-plans";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — FreshFold Laundry" },
      { name: "description", content: "Transparent monthly plans for every household. Cancel anytime, no hidden fees." },
      { property: "og:title", content: "Pricing — FreshFold Laundry" },
      { property: "og:description", content: "Transparent monthly plans for every household. Cancel anytime." },
    ],
  }),
  component: PricingPage,
});

const FAQS = [
  { q: "Do you offer one-off service?", a: "Yes — pay-as-you-go pricing starts at $1.95/lb with no subscription required." },
  { q: "What if I'm not home for pickup?", a: "Leave your bag at the door. Our driver scans the QR code on your bag and you get a confirmation text." },
  { q: "Is delivery really free?", a: "Pickup and delivery are free on every monthly plan and on one-off orders over $30." },
  { q: "What detergents do you use?", a: "Hypoallergenic, plant-based detergents by default. Premium and fragrance-free options available." },
];

function PricingPage() {
  return (
    <>
      <Section className="bg-gradient-hero">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple, honest pricing"
          description="Pick a plan that fits your routine. Switch or cancel any time."
        />
        <PricingPlans />
      </Section>

      <Section>
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {FAQS.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-semibold text-foreground">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}