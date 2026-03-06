import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "bridge-transfers-in-football";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

// Use a specific image when you have it; fallback is fine for now
const OG_IMAGE = `${SITE_URL}/og/${SLUG}.jpg`;
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "Bridge Transfers in Football: FIFA Rules Every Player and Agent Must Know";
const DESCRIPTION =
  "Understand FIFA’s bridge transfer rules under the RSTP, the 16-week presumption, potential sanctions, and practical compliance tips for clubs, players, and agents.";

const PUBLISHED_ISO = "2026-02-18";
const AUTHOR_NAME = "Yahaya Othman";

// ✅ SEO-safe: ISO remains ISO (schema + dateTime); display is formatted
function formatDisplayDate(iso: string) {
  // Use UTC to avoid off-by-one date shifts in some timezones
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

const NewLegalBrief: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  // Internal linking targets (topic cluster)
  const related = [
    {
      title: "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare",
      slug: "fake-agent-nightmare",
      note: "Trials, FIFA RSTP Article 19ter, and how players avoid scams.",
    },
    {
      title:
        "The FIFA Club Licensing Regulations: Responsibilities of Member Associations and Nigerian Clubs",
      slug: "fifa-club-licensing-regulations",
      note: "SIPALF criteria, compliance responsibilities, and enforcement.",
    },
  ];

  const breadcrumbJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Knowledge Centre",
          item: `${SITE_URL}/knowledge`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: TITLE,
          item: PAGE_URL,
        },
      ],
    }),
    []
  );

  const articleJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
      headline: TITLE,
      description: DESCRIPTION,
      image: [OG_IMAGE, OG_IMAGE_FALLBACK],
      datePublished: PUBLISHED_ISO,
      dateModified: PUBLISHED_ISO,
      author: { "@type": "Person", name: AUTHOR_NAME },
      publisher: {
        "@type": "Organization",
        name: "Apex Advocates & Solicitors",
        url: SITE_URL,
      },
    }),
    []
  );

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>{TITLE} | Apex Advocates Knowledge Centre</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Apex Advocates & Solicitors" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />

        {/* Prefer the dedicated OG image, but include fallback */}
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:image" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:secure_url" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Article specifics */}
        <meta
          property="article:published_time"
          content={`${PUBLISHED_ISO}T00:00:00+01:00`}
        />
        <meta property="article:author" content={AUTHOR_NAME} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Visible Breadcrumbs (internal linking + UX) */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-slate-500">
              <li>
                <Link to="/" className="hover:text-accent-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  to="/knowledge"
                  className="hover:text-accent-gold transition-colors"
                >
                  Knowledge Centre
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 dark:text-slate-300 line-clamp-1">
                {TITLE}
              </li>
            </ol>
          </nav>

          {/* Back Link */}
          <Link
            to="/knowledge"
            className="text-accent-gold text-sm font-bold mb-6 inline-block"
          >
            ← Back to Knowledge Centre
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-black mb-6 text-black dark:text-white">
            {TITLE}
          </h1>

          {/* Meta (SEO-safe time element) */}
          <p className="text-sm text-slate-500 mb-10">
            <time dateTime={PUBLISHED_ISO}>{displayDate}</time> • 3 min read • By{" "}
            {AUTHOR_NAME}
          </p>

          {/* Article Body */}
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              Unarguably, transfers have become the backbone of the football business. In the
              2024/2025 transfer window, Transfermarkt.com ranked Chelsea Football Club of
              England as the top earner in Europe, generating €198.00M in sales (outgoings).
              Twenty-six (26) players left the club during the transfer window.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              What is a Bridge Transfer?
            </h2>

            <p>
              Players move from one club to another annually, whether on loan or permanently.
              While this presents a reason for great enthusiasm for fans and supporters, it can
              spiral into a complex web of arbitration, litigation, and sanctions for erring
              parties who do not strictly follow the regulations.
            </p>

            <p>
              FIFA defines a bridge transfer as a situation where clubs collaborate to move
              players through a “bridge” club to a destination club, with the bridge club never
              fielding the player. For example, Player Y transfers from Club A to Club B and
              moves to Club C a few days or weeks later, without ever playing for Club B.
            </p>

            <p>
              According to an article published by Onside Law,{" "}
              <em>Navigating FIFA’s Bridge Transfer Rules in the Transfer Market</em>:
            </p>

            <blockquote className="border-l-4 border-accent-gold/60 pl-4 italic text-slate-600 dark:text-slate-300">
              Historically, bridge transfers have been used for various reasons, usually with a
              view to gain an undue economic advantage. This could be to pay less training
              compensation or solidarity mechanism, to reduce fiscal obligations due to differing
              tax rules across different countries or even to allow for illicit payments or salary
              by the new club (Club C), via the bridge club, to the player or their agent(s).
            </blockquote>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              FIFA Rules and Sanctions
            </h2>

            <p>
              Article 5 of the FIFA Regulation on the Status and Transfer of Players (RSTP)
              states that no player or club shall be involved in a bridge transfer. Unless
              established to the contrary, it is presumed that, if two consecutive transfers,
              national or international, of the same player occur within 16 weeks, the parties
              (clubs and players) involved in those two transfers have participated in a bridge
              transfer.
            </p>

            {/* ✅ Internal linking: keep it natural, not spammy */}
            <p>
              If you’re an agent or player evaluating a “trial” opportunity, see our companion
              brief on{" "}
              <Link
                to="/knowledge/fake-agent-nightmare"
                className="text-accent-gold font-semibold hover:underline"
              >
                FIFA trials and fake agent scams (RSTP Article 19ter)
              </Link>
              .
            </p>

            <p>
              The FIFA Disciplinary Committee, by the FIFA Disciplinary Code, will impose
              sanctions on any party subject to the FIFA Statutes and regulations involved in
              the transfer.
            </p>

            <p>
              Cameron Archer re-signed for Aston Villa from Sheffield United and eventually
              joined Southampton in the 2024/2025 transfer window. The move is currently under
              scrutiny by FIFA for being a bridge transfer.
            </p>

            <p>
              In April 2021, French clubs Paris FC and Angers SCO became the first to be
              sanctioned by the FIFA Disciplinary Committee for violating regulations on bridge
              transfers. The FIFA Disciplinary Committee imposed a national and international
              transfer ban and a fine against the clubs.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              How Can Football Clubs in Nigeria Conduct Themselves?
            </h2>

            <p>
              Football clubs in Nigeria must acquaint themselves with the provisions to avoid
              being in breach. Ignorance of the law is not an excuse. Millions of Naira could go
              into payment of fines, legal representation, and related costs.
            </p>

            <p>
              Secondly, Nigerian clubs should maintain transparency in all transfer dealings.
              This includes clear communication about player movements and ensuring that all
              transfers comply with FIFA regulations. Documenting agreements and transactions
              properly will safeguard against disputes.
            </p>

            <p>
              Thirdly, clubs will benefit from engaging legal experts acquainted with FIFA
              regulations. These professionals can provide guidance on navigating complex
              transfer situations and ensure that clubs remain compliant with all applicable
              rules.
            </p>

            <p>
              For broader club governance and compliance systems, you may also find value in our
              brief on{" "}
              <Link
                to="/knowledge/fifa-club-licensing-regulations"
                className="text-accent-gold font-semibold hover:underline"
              >
                FIFA Club Licensing Regulations and SIPALF criteria
              </Link>
              .
            </p>

            <ul className="list-disc pl-6">
              <li>Know the RSTP bridge transfer rules and timelines.</li>
              <li>Maintain transparent documentation for every transfer step.</li>
              <li>Engage qualified sports-law counsel before executing transfers.</li>
            </ul>

            {/* ✅ Practice CTA (internal linking to money pages) */}
            <div className="mt-10 p-8 rounded-2xl border border-accent-gold/20 bg-black text-white">
              <h3 className="text-xl font-bold text-accent-gold mb-3">
                Need support on a transfer, contract, or FIFA compliance issue?
              </h3>
              <p className="text-slate-300 mb-6">
                Explore our Sports Law practice or send a confidential inquiry for a fast
                review of your situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/practices/sports"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-accent-gold text-black font-black uppercase tracking-widest text-xs hover:bg-yellow-600 transition-all"
                >
                  Sports Law Practice
                </Link>
                <Link
                  to="/contact#direct-inquiry"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                >
                  Contact the Firm
                </Link>
              </div>
            </div>
          </div>

          {/* ✅ Related briefs section (internal linking cluster) */}
          <section className="mt-16 pt-10 border-t border-slate-100 dark:border-accent-gold/10">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
              Related Legal Briefs
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/knowledge/${item.slug}`}
                  className="block p-6 rounded-2xl border border-slate-200 dark:border-accent-gold/10 hover:border-accent-gold/40 transition-all"
                >
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {item.note}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-widest">
                    Read brief <span className="material-icons text-sm">east</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
};

export default NewLegalBrief;