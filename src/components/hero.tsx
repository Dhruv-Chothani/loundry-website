import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-laundry.png";

const TRUST = [
  { icon: ShieldCheck, label: "100% care guarantee" },
  { icon: Clock, label: "24h turnaround" },
  { icon: Leaf, label: "Eco detergents" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-lavender-soft blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-brand-soft blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:pb-28 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-primary shadow-soft backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Free pickup & delivery in your area
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Your laundry,{" "}
            <span className="text-gradient-brand">our responsibility.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0">
            Schedule a pickup, we wash, dry, fold, and deliver — fresh and on time.
            Premium care for your everyday clothes and special pieces.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button asChild size="xl" variant="brand">
              <Link to="/contact">
                Book pickup <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="soft">
              <Link to="/services">View services</Link>
            </Button>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground lg:justify-start">
            {TRUST.map((t) => (
              <li key={t.label} className="flex items-center gap-2">
                <t.icon className="h-4 w-4 text-primary" />
                {t.label}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-card to-brand-soft p-6 shadow-card">
            <img
              src={heroImage}
              alt="Friendly FreshFold delivery person carrying clean folded laundry"
              width={1024}
              height={1024}
              className="h-full w-full object-contain"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="absolute -left-4 top-12 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:flex"
          >
            <div>
              <div className="text-xs text-muted-foreground">Pickup booked</div>
              <div className="text-sm font-semibold text-foreground">Tomorrow · 9:00 AM</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 -right-2 hidden items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft sm:flex"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-mint text-foreground">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <div className="text-xs text-muted-foreground">Trusted by</div>
              <div className="text-sm font-semibold text-foreground">12,000+ households</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}