import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { TONE_BG, type Service } from "./services-data";

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="group relative flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <span className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${TONE_BG[service.tone]}`}>
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
      <button
        type="button"
        className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
      >
        Learn more <ArrowRight className="h-4 w-4" />
      </button>
    </motion.article>
  );
}