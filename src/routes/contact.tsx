import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section, SectionHeader, FadeIn } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Pickup — FreshFold Laundry" },
      { name: "description", content: "Schedule a laundry pickup or get in touch with the FreshFold team. We respond within 1 business hour." },
      { property: "og:title", content: "Contact & Book Pickup — FreshFold Laundry" },
      { property: "og:description", content: "Schedule a laundry pickup or get in touch with the FreshFold team." },
    ],
  }),
  component: ContactPage,
});

const INFO = [
  { icon: MapPin, title: "Visit us", lines: ["1247 Market St, Suite 300", "San Francisco, CA 94103"] },
  { icon: Phone, title: "Call", lines: ["(415) 555-0142", "Mon–Sat 7am–9pm"] },
  { icon: Mail, title: "Email", lines: ["hello@freshfold.co", "support@freshfold.co"] },
];

type Submission = { name: string; email: string; message: string; createdAt: string };

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    setError(null);

    try {
      const key = "freshfold:submissions";
      const existing = JSON.parse(localStorage.getItem(key) || "[]") as Submission[];
      existing.push({ name, email, message, createdAt: new Date().toISOString() });
      localStorage.setItem(key, JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <>
      <Section className="bg-gradient-hero">
        <SectionHeader
          eyebrow="Get in touch"
          title="Book a pickup or say hi"
          description="Tell us what you need and we'll respond within one business hour."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-border bg-card p-8 shadow-card"
            >
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-soft text-primary">
                    <CheckCircle2 className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-foreground">Thanks — we got it!</h3>
                  <p className="mt-2 max-w-sm text-muted-foreground">
                    A team member will reach out shortly to confirm your pickup details.
                  </p>
                  <Button
                    type="button"
                    variant="soft"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full name</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="h-11 rounded-xl"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="What can we help with? (Pickup time, address, special instructions…)"
                      className="rounded-xl"
                    />
                  </div>
                  {error && <p className="text-sm text-destructive">{error}</p>}
                  <Button type="submit" size="xl" variant="brand" className="w-full sm:w-auto">
                    <Send className="mr-1 h-4 w-4" /> Send message
                  </Button>
                </div>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {INFO.map((i) => (
                <div key={i.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-soft text-primary">
                    <i.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{i.title}</div>
                    {i.lines.map((l) => (
                      <div key={l} className="text-sm text-muted-foreground">{l}</div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="overflow-hidden rounded-2xl border border-border shadow-soft">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-soft via-card to-lavender-soft">
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute inset-0 h-full w-full text-primary/30"
                    aria-hidden
                  >
                    <path d="M0,180 Q100,120 200,180 T400,160" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M0,220 Q100,160 200,220 T400,200" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
                    <circle cx="200" cy="150" r="8" fill="currentColor" />
                    <circle cx="200" cy="150" r="20" fill="currentColor" opacity="0.2" />
                  </svg>
                  <div className="absolute bottom-4 left-4 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-soft">
                    📍 FreshFold HQ
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}