
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BLOG_POSTS } from "../constants";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/knowledge`;
const OG_IMAGE = `${SITE_URL}/og/default.jpg`;

type Post = {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date?: string;
  readTime?: string;
  author?: string;
};

function parsePostDate(input?: string): Date | null {
  if (!input) return null;

  const iso = /^(\d{4})-(\d{2})-(\d{2})$/;
  const mIso = input.match(iso);

  if (mIso) {
    const y = Number(mIso[1]);
    const mo = Number(mIso[2]);
    const d = Number(mIso[3]);
    const dt = new Date(Date.UTC(y, mo - 1, d));
    return Number.isNaN(dt.getTime()) ? null : dt;
  }

  const parsed = new Date(input);

  if (!Number.isNaN(parsed.getTime())) {
    const y = parsed.getUTCFullYear();
    const mo = parsed.getUTCMonth();
    const d = parsed.getUTCDate();
    return new Date(Date.UTC(y, mo, d));
  }

  return null;
}

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
  const [bookmarkedPosts, setBookmarkedPosts] = useState<string[]>([]);

  const handleLoadMore = () =>
    setVisiblePosts((prev) => prev + POSTS_PER_CLICK);

  const posts = useMemo(() => {
    return (BLOG_POSTS as unknown as Post[]).slice().sort((a, b) => {
      const dateA = parsePostDate(a.date)?.getTime() ?? 0;
      const dateB = parsePostDate(b.date)?.getTime() ?? 0;
      return dateB - dateA;
    });
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("apexBookmarkedPosts");

    if (saved) {
      try {
        setBookmarkedPosts(JSON.parse(saved));
      } catch {
        setBookmarkedPosts([]);
      }
    }
  }, []);

  const toggleBookmark = (slug: string) => {
    setBookmarkedPosts((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug];

      localStorage.setItem(
        "apexBookmarkedPosts",
        JSON.stringify(updated)
      );

      return updated;
    });
  };

  const handleShare = async (post: Post) => {
    const articleUrl = `${SITE_URL}/knowledge/${post.slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: articleUrl,
        });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(articleUrl);
        alert("Article link copied to clipboard.");
      } else {
        window.prompt("Copy this link:", articleUrl);
      }
    } catch (error) {
      console.error("Share failed:", error);
    }
  };

  const blogJsonLd = useMemo(() => {
    const items = posts
      .slice(0, Math.min(posts.length, 20))
      .map((post) => {
        const iso = formatIsoDate(post.date);

        return {
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          url: `${SITE_URL}/knowledge/${post.slug}`,
          image: post.imageUrl ? [post.imageUrl] : undefined,
          author: post.author
            ? { "@type": "Person", name: post.author }
            : { "@type": "Organization", name: "Apex Advocates" },
          publisher: {
            "@type": "Organization",
            name: "Apex Advocates",
          },
          datePublished: iso,
          dateModified: iso,
        };
      });

    return {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Apex Advocates Knowledge Centre",
      url: PAGE_URL,
      description:
        "Legal insights on corporate law, commercial dispute resolution, employment law, arbitration, and sports law.",
      blogPost: items,
    };
  }, [posts]);

  return (
    <>
      <Helmet>
        <title>
          Legal Articles & Insights | Apex Advocates Knowledge Centre
        </title>

        <meta
          name="description"
          content="Expert legal insights on corporate law, commercial dispute resolution, labor law, arbitration, and sports law from Apex Advocates in Lagos, Nigeria."
        />

        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta
          property="og:title"
          content="Apex Knowledge Centre | Legal Articles & Insights"
        />
        <meta
          property="og:description"
          content="Read legal briefs on corporate advisory, dispute resolution, commercial arbitration, and sports law."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Apex Advocates Knowledge Centre | Legal Articles & Insights"
        />
        <meta
          name="twitter:description"
          content="Legal briefs on corporate advisory, dispute resolution, commercial arbitration, and sports law."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(blogJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black font-sans">

        {/* Knowledge Centre Hero */}
        <section className="relative py-20 lg:py-24 bg-black overflow-hidden border-b border-accent-gold/20">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/20 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="text-accent-gold text-xs font-bold uppercase tracking-[0.25em] mb-5">
                Research & Perspectives
              </p>

              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                Knowledge Centre
              </h1>

              <div className="w-16 h-1 bg-accent-gold mb-6" />

              <p className="text-base md:text-lg text-neutral-300 max-w-2xl leading-relaxed font-light">
                Strategic analysis, legal perspectives and regulatory updates
                across business, commercial law and the sports industry.
              </p>
            </div>
          </div>
        </section>

        {/* Main Knowledge Centre Content */}
        <section className="py-16 lg:py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

              {/* Main Article Column */}
              <div className="lg:w-2/3 min-w-0 space-y-12">

                {/* Legal Briefs Header */}
                <div className="flex flex-col gap-6 border-b border-accent-gold/20 pb-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                        Insights & Analysis
                      </p>

                      <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white tracking-tight">
                        Legal Briefs
                      </h2>
                    </div>

                    <span className="text-xs text-neutral-400 font-semibold">
                      {posts.length} Articles
                    </span>
                  </div>

                  <div className="flex overflow-x-auto gap-3 no-scrollbar">
                    {[
                      "All Briefs",
                      "Corporate Law",
                      "Sports Law",
                      "ADR Tips",
                    ].map((cat, i) => (
                      <button
                        key={cat}
                        type="button"
                        className={`px-4 py-2.5 text-[10px] font-bold whitespace-nowrap uppercase tracking-widest transition-all duration-300 border ${
                          i === 0
                            ? "bg-accent-gold text-black border-accent-gold"
                            : "bg-transparent text-neutral-500 border-neutral-200 dark:border-accent-gold/20 hover:border-accent-gold hover:text-accent-gold"
                        }`}
                        aria-pressed={i === 0}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Article Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                  {posts.slice(0, visiblePosts).map((post) => {
                    const displayDate = formatDisplayDate(post.date);
                    const isoDate = formatIsoDate(post.date);
                    const isBookmarked = bookmarkedPosts.includes(post.slug);

                    return (
                      <article
                        key={post.slug}
                        className="bg-white dark:bg-secondary-grey/10 overflow-hidden border border-neutral-200 dark:border-accent-gold/10 shadow-lg hover:shadow-2xl hover:border-accent-gold/30 transition-all duration-500 group flex flex-col"
                      >
                        {/* Article Image */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-secondary-grey">
                          <img
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            src={post.imageUrl}
                            alt={post.title}
                            loading="lazy"
                            decoding="async"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

                          <span className="absolute top-4 left-4 bg-black text-accent-gold text-[10px] font-bold px-3 py-2 uppercase tracking-widest border border-accent-gold/30">
                            {post.category}
                          </span>
                        </div>

                        {/* Article Information */}
                        <div className="p-6 md:p-7 flex-grow flex flex-col">

                          <p className="text-[10px] text-accent-gold font-bold uppercase mb-4 tracking-widest">
                            {isoDate ? (
                              <time dateTime={isoDate}>{displayDate}</time>
                            ) : (
                              displayDate
                            )}
                            {post.readTime ? `  •  ${post.readTime}` : ""}
                          </p>

                          <Link
                            to={`/knowledge/${post.slug}`}
                            aria-label={`Open article: ${post.title}`}
                          >
                            <h3 className="text-lg md:text-xl font-semibold mb-4 text-black dark:text-white leading-snug tracking-tight group-hover:text-accent-gold transition-colors">
                              {post.title}
                            </h3>
                          </Link>

                          <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-7 line-clamp-3 leading-relaxed flex-grow font-light">
                            {post.excerpt}
                          </p>

                          <Link
                            to={`/knowledge/${post.slug}`}
                            className="text-accent-gold text-[10px] font-bold uppercase tracking-widest flex items-center gap-3 mb-6 group-hover:gap-5 transition-all"
                            aria-label={`Read full brief: ${post.title}`}
                          >
                            Read Full Brief
                            <span className="material-icons text-sm">
                              east
                            </span>
                          </Link>

                          <div className="pt-5 border-t border-neutral-200 dark:border-accent-gold/10 flex items-center justify-between gap-3">
                            <span className="text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 truncate">
                              By {post.author || "Apex Advocates"}
                            </span>

                            <div className="flex items-center gap-4 shrink-0">
                              <button
                                type="button"
                                onClick={() => handleShare(post)}
                                className="text-neutral-400 hover:text-accent-gold transition-colors"
                                aria-label={`Share post: ${post.title}`}
                                title="Share article"
                              >
                                <span className="material-icons text-lg">
                                  share
                                </span>
                              </button>

                              <button
                                type="button"
                                onClick={() => toggleBookmark(post.slug)}
                                className={`transition-colors ${
                                  isBookmarked
                                    ? "text-accent-gold"
                                    : "text-neutral-400 hover:text-accent-gold"
                                }`}
                                aria-label={
                                  isBookmarked
                                    ? `Remove bookmark for: ${post.title}`
                                    : `Bookmark post: ${post.title}`
                                }
                                title={
                                  isBookmarked
                                    ? "Remove bookmark"
                                    : "Bookmark article"
                                }
                              >
                                <span className="material-icons text-lg">
                                  {isBookmarked
                                    ? "bookmark"
                                    : "bookmark_border"}
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Load More */}
                <div className="flex justify-center pt-6">
                  {visiblePosts < posts.length && (
                    <button
                      type="button"
                      onClick={handleLoadMore}
                      className="inline-flex items-center gap-4 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-8 py-4 font-bold uppercase tracking-widest text-xs transition-all duration-300 group"
                      aria-label="Load more articles"
                    >
                      Load More Articles

                      <span className="material-icons text-base group-hover:rotate-180 transition-transform duration-700">
                        refresh
                      </span>
                    </button>
                  )}
                </div>

                {/* Latest Firm News */}
                <section className="pt-8">
                  <div className="border-l-4 border-accent-gold pl-5 mb-8">
                    <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                      Updates & Announcements
                    </p>

                    <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white tracking-tight">
                      Latest Firm News
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Summit News */}
                    <div className="bg-white dark:bg-secondary-grey/10 p-7 border border-neutral-200 dark:border-accent-gold/10 flex flex-col justify-between hover:border-accent-gold/40 transition-all duration-300 group">
                      <div>
                        <span className="text-[10px] text-accent-gold font-bold mb-4 block uppercase tracking-widest">
                          Summit
                        </span>

                        <a
                          href="https://www.linkedin.com/posts/yahaya-othman_afbs2025-transformingourgame-footballlaw-activity-7388866930625032193-AdSa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABI1RvEBgSAEWasGt15rYarYPXCa2FHuYF8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block mb-6"
                        >
                          <h3 className="text-lg md:text-xl font-semibold text-black dark:text-white group-hover:text-accent-gold transition-colors leading-snug tracking-tight">
                            Founding Partner Attended the Africa Football
                            Business Summit 2025 in Mombasa, Kenya
                          </h3>
                        </a>

                        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 font-light">
                          Engaging with global sports leaders on the evolution
                          of football law and business transformations across
                          the continent.
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-5 border-t border-neutral-200 dark:border-accent-gold/10">
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                          October 2025
                        </span>

                        <span className="material-icons text-accent-gold group-hover:translate-x-2 transition-transform">
                          east
                        </span>
                      </div>
                    </div>

                    {/* Official Launch */}
                    <div className="bg-black p-7 border border-accent-gold/20 flex flex-col justify-between shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-accent-gold/5 rounded-full blur-[80px]" />

                      <div className="relative z-10">
                        <span className="text-[10px] text-accent-gold font-bold mb-4 block uppercase tracking-widest">
                          Official Launch
                        </span>

                        <h3 className="text-lg md:text-xl font-semibold text-white mb-6 leading-snug tracking-tight">
                          Apex Advocates Officially Launches in Lagos
                        </h3>

                        <p className="text-sm text-neutral-300 leading-relaxed font-light">
                          <span className="block mb-3">
                            Founded in August 2025 by Yahaya Oruma Othman,
                            Esq., specializing in corporate law, dispute
                            resolution, arbitration, and sports law.
                          </span>

                          <span className="block italic text-neutral-400">
                            Providing professional and confidential legal
                            representation for institutional and individual
                            clients.
                          </span>
                        </p>
                      </div>

                      <div className="mt-8 pt-5 border-t border-accent-gold/10 relative z-10">
                        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">
                          August 2025
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* All Legal Briefs */}
                <section className="pt-8 border-t border-neutral-200 dark:border-accent-gold/10">
                  <div className="mb-6">
                    <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-2">
                      Browse Our Library
                    </p>

                    <h2 className="text-xl md:text-2xl font-semibold text-black dark:text-white tracking-tight">
                      All Legal Briefs
                    </h2>
                  </div>

                  <nav aria-label="All legal briefs">
                    <ul className="divide-y divide-neutral-200 dark:divide-accent-gold/10">
                      {posts.map((post) => {
                        const displayDate = formatDisplayDate(post.date);
                        const isoDate = formatIsoDate(post.date);

                        return (
                          <li
                            key={`all-${post.slug}`}
                            className="flex items-start justify-between gap-4 py-4"
                          >
                            <Link
                              to={`/knowledge/${post.slug}`}
                              className="text-sm text-neutral-700 dark:text-neutral-200 font-medium hover:text-accent-gold transition-colors leading-relaxed"
                            >
                              {post.title}
                            </Link>

                            <span className="text-[10px] text-neutral-400 whitespace-nowrap pt-1">
                              {isoDate ? (
                                <time dateTime={isoDate}>{displayDate}</time>
                              ) : (
                                displayDate
                              )}
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

                {/* Newsletter */}
                <div className="bg-black p-8 lg:p-9 text-white shadow-xl relative overflow-hidden border border-accent-gold/20">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent-gold/5 rounded-full blur-[100px]" />

                  <div className="relative z-10">
                    <p className="text-accent-gold text-[10px] font-bold uppercase tracking-[0.25em] mb-5">
                      Stay Informed
                    </p>

                    <h2 className="text-xl md:text-2xl font-semibold text-white mb-5 tracking-tight">
                      Apex Legal Insights
                    </h2>

                    <div className="w-12 h-1 bg-accent-gold mb-6" />

                    <p className="text-neutral-300 mb-8 text-sm leading-relaxed font-light">
                      Subscribe to the Apex Legal Insights newsletter for
                      monthly updates delivered straight to your inbox.
                    </p>

                    <div className="space-y-4">
                      <input
                        className="w-full bg-white/5 border border-white/20 text-white placeholder:text-neutral-500 py-3.5 px-4 text-sm outline-none focus:border-accent-gold transition-colors"
                        placeholder="Your email address"
                        type="email"
                        autoComplete="email"
                        aria-label="Email address"
                      />

                      <button
                        type="button"
                        className="w-full bg-accent-gold text-black font-bold py-4 hover:bg-yellow-600 transition-all uppercase text-xs tracking-widest"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KnowledgeCentre;
