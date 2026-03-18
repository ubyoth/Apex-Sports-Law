import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/knowledge`;

// Use /og/default.jpg until you create /og/knowledge.jpg
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

type Post = {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date?: string; // ideal: "2026-03-03" (ISO). your current data may be "Feb 27, 2026"
  readTime?: string;
  author?: string;
};

/**
 * Parses either:
 *  - ISO: "2026-03-03"
 *  - Human: "Feb 27, 2026"
 * Returns a Date (UTC) or null.
 */
function parsePostDate(input?: string): Date | null {
  if (!input) return null;

  // ISO YYYY-MM-DD
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/;
  const mIso = input.match(iso);
  if (mIso) {
    const y = Number(mIso[1]);
    const mo = Number(mIso[2]);
    const d = Number(mIso[3]);
    // Construct in UTC to avoid timezone shifting the day.
    const dt = new Date(Date.UTC(y, mo - 1, d));
    return Number.isNaN(dt.getTime()) ? null : dt;
  }

  // "Feb 27, 2026" (or "Mar 3, 2026")
  // Use Date.parse on a normalized string; then re-wrap as UTC date-only for stability.
  const parsed = new Date(input);
  if (!Number.isNaN(parsed.getTime())) {
    const y = parsed.getUTCFullYear();
    const mo = parsed.getUTCMonth();
    const d = parsed.getUTCDate();
    return new Date(Date.UTC(y, mo, d));
  }

  return null;
}

/** Returns "Mar 3, 2026" for display (or "Updated" if missing/invalid). */
function formatDisplayDate(input?: string): string {
  const dt = parsePostDate(input);
  if (!dt) return "Updated";

  return dt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Returns ISO "YYYY-MM-DD" for SEO/structured data (or undefined if missing/invalid). */
function formatIsoDate(input?: string): string | undefined {
  const dt = parsePostDate(input);
  if (!dt) return undefined;

  const y = dt.getUTCFullYear();
  const m = String(dt.getUTCMonth() + 1).padStart(2, "0");
  const d = String(dt.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

const KnowledgeCentre: React.FC = () => {
  const POSTS_PER_CLICK = 4;
  const [visiblePosts, setVisiblePosts] = useState<number>(POSTS_PER_CLICK);

  const handleLoadMore = () => setVisiblePosts((prev) => prev + POSTS_PER_CLICK);

  const posts = BLOG_POSTS as unknown as Post[];

  const blogJsonLd = useMemo(() => {
    const items = posts.slice(0, Math.min(posts.length, 20)).map((post) => {
      const iso = formatIsoDate(post.date);

      return {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        url: `${SITE_URL}/knowledge/${post.slug}`,
        image: post.imageUrl ? [post.imageUrl] : undefined,
        author: post.author
          ? { "@type": "Person", name: post.author }
          : { "@type": "Organization", name: "Apex Sports Law" },
        publisher: { "@type": "Organization", name: "Apex Sports Law" },

        // SEO-friendly dates if available
        datePublished: iso,
        dateModified: iso,
      };
    });

    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Apex Sports Law Knowledge Centre",
      url: PAGE_URL,
      description:
        "Legal insights on sports law, FIFA regulations, football contracts, arbitration and dispute resolution.",
      blogPost: items,
    };
  }, [posts]);

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Sports Law Articles & Legal Briefs | Apex Sports Law Knowledge Centre</title>
        <meta
          name="description"
          content="Legal insights on sports law, FIFA regulations, football contracts, arbitration and dispute resolution from Apex Sports Law in Lagos, Nigeria."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta
          property="og:title"
          content="Apex Knowledge Centre | Sports Law Articles & Legal Briefs"
        />
        <meta
          property="og:description"
          content="Read legal briefs on football contracts, transfers, FIFA regulations, arbitration and dispute resolution."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Apex Sports Law Knowledge Centre | Sports Law Articles & Legal Briefs"
        />
        <meta
          name="twitter:description"
          content="Legal briefs on football contracts, transfers, FIFA regulations, arbitration and dispute resolution."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(blogJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background-light dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white mb-6">
              Knowledge Centre
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xl leading-relaxed">
              Strategic analysis and regulatory updates. Stay informed, stay ahead.
            </p>
          </div>

          {/* Legal Insights Section */}
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Grid */}
            <div className="lg:w-2/3 space-y-12">
              <div className="flex items-center justify-between border-b border-accent-gold/10 pb-6 mb-8">
                <h2 className="text-2xl font-bold text-black dark:text-white uppercase tracking-tighter">
                  Legal Briefs
                </h2>

                <div className="flex overflow-x-auto gap-4 no-scrollbar">
                  {["All Briefs", "Corporate Law", "Sports Law", "ADR Tips"].map((cat, i) => (
                    <button
                      key={cat}
                      type="button"
                      className={`px-4 py-2 rounded-lg text-[10px] font-black whitespace-nowrap uppercase tracking-widest transition-all ${
                        i === 0
                          ? "bg-accent-gold text-black"
                          : "bg-white dark:bg-black text-slate-400 border border-slate-200 dark:border-accent-gold/20"
                      }`}
                      aria-pressed={i === 0}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {posts.slice(0, visiblePosts).map((post) => {
                  const displayDate = formatDisplayDate(post.date);
                  const isoDate = formatIsoDate(post.date);

                  return (
                    <article
                      key={post.slug}
                      className="bg-white dark:bg-secondary-grey/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-accent-gold/5 group flex flex-col"
                    >
                      <div className="relative h-56 overflow-hidden">
                        <img
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                          src={post.imageUrl}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="absolute top-4 left-4 bg-black text-accent-gold text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest border border-accent-gold/20">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-8 flex-grow flex flex-col">
                        <p className="text-[10px] text-accent-gold font-black uppercase mb-3 tracking-widest opacity-70">
                          {isoDate ? (
                            <time dateTime={isoDate}>{displayDate}</time>
                          ) : (
                            displayDate
                          )}
                          {post.readTime ? ` • ${post.readTime}` : ""}
                        </p>

                        <Link to={`/knowledge/${post.slug}`} aria-label={`Open article: ${post.title}`}>
                          <h3 className="text-xl font-bold mb-4 text-black dark:text-white leading-tight group-hover:text-accent-gold transition-colors cursor-pointer">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed flex-grow">
                          {post.excerpt}
                        </p>

                        <Link
                          to={`/knowledge/${post.slug}`}
                          className="text-accent-gold text-xs font-bold flex items-center gap-2 mb-6 group-hover:gap-3 transition-all"
                          aria-label={`Read full brief: ${post.title}`}
                        >
                          Read Full Brief <span className="material-icons text-sm">east</span>
                        </Link>

                        <div className="pt-6 border-t border-slate-100 dark:border-accent-gold/10 flex items-center justify-between">
                          <span className="text-xs font-bold text-black dark:text-slate-300">
                            By {post.author || "Apex Sports Law"}
                          </span>

                          <div className="flex gap-4">
                            <button
                              type="button"
                              className="text-slate-400 hover:text-accent-gold transition-colors"
                              aria-label="Share post"
                            >
                              <span className="material-icons text-xl">share</span>
                            </button>
                            <button
                              type="button"
                              className="text-slate-400 hover:text-accent-gold transition-colors"
                              aria-label="Bookmark post"
                            >
                              <span className="material-icons text-xl">bookmark_border</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Load More */}
              <div className="flex justify-center pt-8">
                {visiblePosts < posts.length && (
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    className="flex items-center gap-3 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-10 py-4 rounded-xl font-bold transition-all group"
                    aria-label="Load more articles"
                  >
                    Load More Articles
                    <span className="material-icons text-lg group-hover:rotate-180 transition-transform duration-700">
                      refresh
                    </span>
                  </button>
                )}
              </div>

                        {/* Firm News Section */}
          <div className="mb-20">
            <h2 className="text-xs font-black text-accent-gold uppercase tracking-[0.4em] mb-8 border-l-4 border-accent-gold pl-6">
              Latest Firm News
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* News 1: Summit */}
              <div className="bg-white dark:bg-secondary-grey/10 rounded-3xl p-8 border border-slate-100 dark:border-accent-gold/20 flex flex-col justify-between hover:border-accent-gold/50 transition-all group">
                <div>
                  <span className="text-[10px] text-accent-gold font-black mb-4 block uppercase tracking-widest">
                    Summit
                  </span>

                  <a
                    href="https://www.linkedin.com/posts/yahaya-othman_afbs2025-transformingourgame-footballlaw-activity-7388866930625032193-AdSa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABI1RvEBgSAEWasGt15rYarYPXCa2FHuYF8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-6"
                  >
                    <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-accent-gold transition-colors leading-tight">
                      Founding Partner Attended the Africa Football Business Summit 2025 in Mombasa,
                      Kenya
                    </h3>
                  </a>

                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    Engaging with global sports leaders on the evolution of football law and
                    business transformations across the continent.
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    October 2025
                  </span>
                  <span className="material-icons text-accent-gold group-hover:translate-x-2 transition-transform">
                    east
                  </span>
                </div>
              </div>

              {/* News 2: Firm Launch */}
              <div className="bg-black dark:bg-secondary-grey/20 rounded-3xl p-8 border border-accent-gold/20 flex flex-col justify-between shadow-2xl">
                <div>
                  <span className="text-[10px] text-accent-gold font-black mb-4 block uppercase tracking-widest">
                    Official Launch
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                    Apex Sports Law Officially Launches in Lagos
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="block mb-2">
                      Founded in August 2025 by Yahaya Oruma Othman, Esq., with experience in
                      corporate law, arbitration, and commercial dispute resolution.
                    </span>
                    <span className="block italic text-slate-500">
                      Providing professional and confidential legal assistance in football or other
                      sports-related matters.
                    </span>
                  </p>
                </div>

                <div className="mt-8">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                    August 2025
                  </span>
                </div>
              </div>
            </div>
          </div>

              {/* All briefs link list (always rendered for discovery) */}
              <section className="mt-16">
                <h2 className="text-xl font-bold text-black dark:text-white mb-4">All Legal Briefs</h2>

                <nav aria-label="All legal briefs">
                  <ul className="space-y-3">
                    {posts.map((post) => {
                      const displayDate = formatDisplayDate(post.date);
                      const isoDate = formatIsoDate(post.date);

                      return (
                        <li
                          key={`all-${post.slug}`}
                          className="flex items-baseline justify-between gap-4"
                        >
                          <Link
                            to={`/knowledge/${post.slug}`}
                            className="text-accent-gold font-semibold hover:underline"
                          >
                            {post.title}
                          </Link>

                          <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            {isoDate ? <time dateTime={isoDate}>{displayDate}</time> : displayDate}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </section>
            </div>

            
            {/* Sidebar */}
            <aside className="lg:w-1/3 space-y-10">
              <div className="bg-black rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden border border-accent-gold/20">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6 leading-tight">
                    Stay Ahead <br />
                    <span className="text-accent-gold">of the Law</span>
                  </h2>
                  <p className="text-slate-400 mb-10 text-sm leading-relaxed">
                    Subscribe to the Apex Legal Insights newsletter for monthly updates delivered
                    straight to your inbox.
                  </p>

                  <div className="space-y-4">
                    <input
                      className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-4 px-5 outline-none focus:ring-2 focus:ring-accent-gold/40 transition-all"
                      placeholder="Your email address"
                      type="email"
                      autoComplete="email"
                      aria-label="Email address"
                    />
                    <button
                      type="button"
                      className="w-full bg-accent-gold text-black font-black py-4 rounded-xl hover:bg-yellow-600 transition-all uppercase text-sm tracking-widest"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>

                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-gold/5 rounded-full blur-3xl" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowledgeCentre;
