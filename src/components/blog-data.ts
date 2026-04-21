import blogTips from "@/assets/blog-tips.jpg";
import blogFabric from "@/assets/blog-fabric.jpg";
import blogStains from "@/assets/blog-stains.jpg";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
};

export const POSTS: Post[] = [
  {
    slug: "10-laundry-tips",
    title: "10 Laundry Tips That Make Your Clothes Last Longer",
    excerpt: "Small habits that save your favorite shirts from premature wear and fading.",
    image: blogTips,
    category: "Tips",
    readTime: "5 min read",
  },
  {
    slug: "fabric-care-101",
    title: "Fabric Care 101: Decode Every Garment Tag",
    excerpt: "From cashmere to linen — learn the right wash and dry cycles for each material.",
    image: blogFabric,
    category: "Guide",
    readTime: "7 min read",
  },
  {
    slug: "stain-removal",
    title: "The Ultimate Stain Removal Cheat Sheet",
    excerpt: "Wine, oil, ink — a step-by-step guide to rescuing fabrics from anything.",
    image: blogStains,
    category: "How-to",
    readTime: "6 min read",
  },
];