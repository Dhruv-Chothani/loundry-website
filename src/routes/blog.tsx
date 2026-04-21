import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeader } from "@/components/section";
import { BlogGrid } from "@/components/blog-grid";
import { CtaBand } from "@/components/cta-band";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Tips — FreshFold Laundry" },
      { name: "description", content: "Laundry tips, fabric care guides, and stain removal cheat sheets to help your clothes last longer." },
      { property: "og:title", content: "Blog & Tips — FreshFold Laundry" },
      { property: "og:description", content: "Practical advice from our laundry experts." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <Section className="bg-gradient-hero">
        <SectionHeader
          eyebrow="Journal"
          title="Tips, guides & fabric care"
          description="Get the most from your wardrobe with practical advice from our laundry pros."
        />
        <BlogGrid />
      </Section>
      <CtaBand />
    </>
  );
}