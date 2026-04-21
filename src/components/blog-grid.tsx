import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { POSTS } from "./blog-data";

export function BlogGrid() {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
      {POSTS.map((post, i) => (
        <motion.article
          key={post.slug}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-1 flex-col p-6">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full bg-brand-soft px-2.5 py-1 font-semibold text-primary">
                {post.category}
              </span>
              <span className="text-muted-foreground">{post.readTime}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-snug text-foreground">{post.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
            <button
              type="button"
              className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
            >
              Read more <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
}