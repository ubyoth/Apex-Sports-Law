
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
  const POSTS_PER_CLICK = 6;

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

      <div className="min-h-screen bg-white font-sans text-ink">

        {/* Knowledge Centre Hero */}
        <section className="relative py-16 lg:py-20 bg-[#202020] overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#B99A55]/[0.06] rounded-full blur-[130px] -translate-y-1/2 translate-x-1/4" />
          </div>

          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">           

              <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-semibold tracking-tight text-white mb-5">
                Knowledge Centre
              </h1>

              <div className="w-12 h-[2px] bg-[#B99A55] mb-6" />

              <p className="text-sm md:text-base text-neutral-300 max-w-2xl leading-relaxed font-light">
                Strategic analysis, legal perspectives and regulatory
                updates across business, commercial law and the sports
                industry.
              </p>
            </div>
          </div>
        </section>

        {/* Main Knowledge Centre Content */}
        <section className="py-14 lg:py-20 bg-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

            {/* Main Article Column */}
            <div className="space-y-12">

              {/* Legal Briefs Header */}
              <div className="flex items-end justify-between gap-4 border-b border-[#E9E6DE] pb-6">
                <div>              

                  <h2 className="text-2xl md:text-[1.8rem] font-semibold text-ink tracking-tight">
                    Insights & Analysis
                  </h2>
                </div>

                <span className="text-[11px] text-muted font-medium whitespace-nowrap">
                  {posts.length} Articles
                </span>
              </div>

              {/* Article Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
                {posts.slice(0, visiblePosts).map((post) => {
                  const displayDate = formatDisplayDate(post.date);
                  const isoDate = formatIsoDate(post.date);
                  const isBookmarked = bookmarkedPosts.includes(post.slug);

                  return (
                    <article
                      key={post.slug}
                      className="bg-white overflow-hidden border border-[#E9E6DE] hover:border-[#D9D5CA] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col"
                    >
                      {/* Article Image */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#F4F2ED]">
                        <img
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                          src={post.imageUrl}
                          alt={post.title}
                          loading="lazy"
                          decoding="async"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

                        <span className="absolute top-4 left-4 bg-white text-[#454545] text-[9px] font-semibold px-3 py-2 uppercase tracking-[0.13em]">
                          {post.category}
                        </span>
                      </div>

                      {/* Article Information */}
                      <div className="p-5 md:p-6 flex-grow flex flex-col">

                        <p className="text-[10px] text-[#A88B4D] font-semibold uppercase mb-3 tracking-[0.12em]">
                          {isoDate ? (
                            <time dateTime={isoDate}>{displayDate}</time>
                          ) : (
                            displayDate
                          )}
                          {post.readTime ? `  ·  ${post.readTime}` : ""}
                        </p>

                        <Link
                          to={`/knowledge/${post.slug}`}
                          aria-label={`Open article: ${post.title}`}
                        >
                          <h3 className="text-base md:text-lg font-semibold mb-3 text-ink leading-snug tracking-tight group-hover:text-[#A88B4D] transition-colors">
                            {post.title}
                          </h3>
                        </Link>

                        <p className="text-[13px] text-[#666666] mb-6 line-clamp-3 leading-[1.8] flex-grow">
                          {post.excerpt}
                        </p>

                        <Link
                          to={`/knowledge/${post.slug}`}
                          className="text-[#A88B4D] text-[10px] font-semibold uppercase tracking-[0.14em] flex items-center gap-2 mb-5 group-hover:gap-3 transition-all"
                          aria-label={`Read full brief: ${post.title}`}
                        >
                          Read Full Brief
                          <span className="material-icons text-sm">
                            east
                          </span>
                        </Link>

                        <div className="pt-4 border-t border-[#E9E6DE] flex items-center justify-between gap-3">
                          <span className="text-[10px] font-medium text-[#737373] truncate">
                            By {post.author || "Apex Advocates"}
                          </span>

                          <div className="flex items-center gap-3 shrink-0">
                            <button
                              type="button"
                              onClick={() => handleShare(post)}
                              className="text-[#888888] hover:text-[#A88B4D] transition-colors"
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
                                  ? "text-[#A88B4D]"
                                  : "text-[#888888] hover:text-[#A88B4D]"
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
              <div className="flex justify-center pt-4">
                {visiblePosts < posts.length && (
                  <button
                    type="button"
                    onClick={handleLoadMore}
                    className="inline-flex items-center gap-3 border border-[#D9D5CA] text-[#454545] hover:border-[#A88B4D] hover:text-[#A88B4D] px-7 py-3.5 font-semibold uppercase tracking-[0.13em] text-[10px] transition-colors duration-300 group"
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
              <section className="pt-8 border-t border-[#E9E6DE]">

                <div className="mb-7">
             

                  <h2 className="text-2xl md:text-[1.8rem] font-semibold text-ink tracking-tight">
                    Latest Firm News
                  </h2>

                  <div className="w-10 h-[2px] bg-[#B99A55] mt-4" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Summit News */}
                  <div className="bg-white p-6 border border-[#E9E6DE] flex flex-col justify-between hover:border-[#D9D5CA] transition-colors duration-300 group">
                    <div>
                      <span className="text-[9px] text-[#A88B4D] font-semibold mb-3 block uppercase tracking-[0.16em]">
                        Summit
                      </span>

                      <a
                        href="https://www.linkedin.com/posts/yahaya-othman_afbs2025-transformingourgame-footballlaw-activity-7388866930625032193-AdSa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABI1RvEBgSAEWasGt15rYarYPXCa2FHuYF8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-4"
                      >
                        <h3 className="text-base md:text-lg font-semibold text-ink group-hover:text-[#A88B4D] transition-colors leading-snug tracking-tight">
                          Founding Partner Attended the Africa Football
                          Business Summit 2025 in Mombasa, Kenya
                        </h3>
                      </a>

                      <p className="text-[13px] text-[#666666] leading-[1.8] mb-7">
                        Engaging with global sports leaders on the evolution
                        of football law and business transformations across
                        the continent.
                      </p>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-[#E9E6DE]">
                      <span className="text-[9px] text-[#888888] font-medium uppercase tracking-[0.12em]">
                        October 2025
                      </span>

                      <span className="material-icons text-[#A88B4D] text-lg group-hover:translate-x-1 transition-transform">
                        east
                      </span>
                    </div>
                  </div>

                  {/* Official Launch */}
                  <div className="bg-[#F4F2ED] p-6 border border-[#E9E6DE] flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-[#A88B4D] font-semibold mb-3 block uppercase tracking-[0.16em]">
                        Official Launch
                      </span>

                      <h3 className="text-base md:text-lg font-semibold text-ink mb-4 leading-snug tracking-tight">
                        Apex Advocates Officially Launches in Lagos
                      </h3>

                      <p className="text-[13px] text-[#555555] leading-[1.8]">
                        <span className="block mb-3">
                          Founded in August 2025 by Yahaya Oruma Othman,
                          Esq., specializing in corporate law, dispute
                          resolution, arbitration, and sports law.
                        </span>

                        <span className="block italic text-[#737373]">
                          Providing professional and confidential legal
                          representation for institutional and individual
                          clients.
                        </span>
                      </p>
                    </div>

                    <div className="mt-7 pt-4 border-t border-[#D9D5CA]">
                      <span className="text-[9px] text-[#888888] font-medium uppercase tracking-[0.12em]">
                        August 2025
                      </span>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default KnowledgeCentre;
