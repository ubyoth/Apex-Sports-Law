import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "fifa-club-licensing-regulations";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

// Use a specific image when you have it; fallback is fine for now
const OG_IMAGE = "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop";
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE = "FIFA Club Licensing Regulations: What Member Associations Must Do";
const DESCRIPTION =
  "A practical breakdown of the FIFA Club Licensing Regulations (CLR): objectives, SIPALF criteria, A/B/C grading, and what member associations must implement to license clubs effectively.";

const PUBLISHED_ISO = "2026-03-03";
const AUTHOR_NAME = "Yahaya Othman";

// ✅ SEO-safe date formatting: keep ISO for schema + dateTime, format only for display
function formatDisplayDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`); // UTC prevents date shifting
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

const NewLegalBrief: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  // Internal-link cluster (related briefs)
  const related = [
    {
      title: "Bridge Transfers in Football: FIFA Rules Every Player and Agent Must Know",
      slug: "bridge-transfers-in-football",
      note: "RSTP bridge transfer prohibition, 16-week presumption, and sanctions risk.",
    },
    {
      title: "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare",
      slug: "fake-agent-nightmare",
      note: "Trials under RSTP Article 19ter, FIFA Trial Form and scam red flags.",
    },
  ];

  const breadcrumbJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Knowledge Centre", item: `${SITE_URL}/knowledge` },
        { "@type": "ListItem", position: 3, name: TITLE, item: PAGE_URL },
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

        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Fallback social image */}
        <meta property="og:image" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:secure_url" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Article specifics */}
        <meta property="article:published_time" content={`${PUBLISHED_ISO}T00:00:00+01:00`} />
        <meta property="article:author" content={AUTHOR_NAME} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-20">
        <article className="max-w-3xl mx-auto px-6">
          {/* Visible Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-slate-500">
              <li>
                <Link to="/" className="hover:text-accent-gold transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/knowledge" className="hover:text-accent-gold transition-colors">
                  Knowledge Centre
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 dark:text-slate-300 line-clamp-1">{TITLE}</li>
            </ol>
          </nav>

          {/* Back Link */}
          <Link to="/knowledge" className="text-accent-gold text-sm font-bold mb-6 inline-block">
            ← Back to Knowledge Centre
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-black mb-6 text-black dark:text-white">{TITLE}</h1>

          {/* Meta (SEO-safe time element) */}
          <p className="text-sm text-slate-500 mb-10">
            <time dateTime={PUBLISHED_ISO}>{displayDate}</time> • 4 min read • By {AUTHOR_NAME}
          </p>

          {/* Article Body */}
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              The FIFA Club Licensing Regulations (FIFA CLR) is a foundational document with the
              overall goal of standardizing and elevating football club management globally. The FIFA
              Congress in Munich in 2006 set minimum requirements across five important categories:
              Sporting, Infrastructure, Personnel and Administrative, Legal, and Financial (SIPALF).
            </p>

            <p>
              To ensure compliance with the regulations and foster sustainable development, member
              associations must adopt these rules without alterations. However, they can introduce
              additional criteria that align with national objectives and the specific context of
              their football ecosystem. This article explores the responsibilities of member
              associations under the FIFA CLR, with a particular focus on their impact on football
              clubs in Nigeria.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Objectives of the FIFA Club Licensing Regulations
            </h2>

            <p>
              The FIFA CLR was designed to achieve key objectives. Firstly, the regulations ensure
              that clubs meet specific standards while maintaining competitive balance and fairness
              in football competitions.
            </p>

            <p>
              Secondly, the regulations aim to formalize club operations and management by setting
              high standards for how football clubs should be managed globally. Also, clubs are
              encouraged to uphold the highest ethical standards and ensure a safe and secure match
              environment.
            </p>

            <p>
              Financial transparency is crucial for the sustainability and credibility of football
              clubs. Globally, the enforcement of financial sustainability practices has compelled
              clubs to be more circumspect.
            </p>

            {/* ✅ Natural internal link */}
            <p>
              If your question is about transfer structures and compliance risk, see our brief on{" "}
              <Link
                to="/knowledge/bridge-transfers-in-football"
                className="text-accent-gold font-semibold hover:underline"
              >
                FIFA bridge transfer rules and the 16-week presumption
              </Link>
              .
            </p>

            <p>
              Lastly, clear ownership structures must be established to help prevent conflicts of
              interest and ensure the proper governance of clubs.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              FIFA CLR Grading Criteria
            </h2>

            <p>According to Article 2.1.1.1 of the FIFA CLR, the criteria are divided into three categories:</p>

            <h3 className="text-xl font-bold text-black dark:text-white pt-2">“A” Criteria — Mandatory</h3>
            <p>
              Failure to meet any item in “A” criteria results in the denial of the license to
              participate in confederation/national club competitions.
            </p>

            <h3 className="text-xl font-bold text-black dark:text-white pt-2">
              “B” Criteria — Mandatory with Sanctions
            </h3>
            <p>
              Non-fulfillment of “B” criteria leads to specific sanctions, but defaulting clubs may
              still receive a license to compete.
            </p>

            <h3 className="text-xl font-bold text-black dark:text-white pt-2">“C” Criteria — Best Practice</h3>
            <p>
              These are recommended practices. Non-compliance does not result in sanctions or license
              denial, although certain “C” criteria may become mandatory.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Responsibilities of Member Associations
            </h2>

            <p>
              Member associations such as the Nigeria Football Federation (NFF) play a pivotal role
              in implementing and enforcing the FIFA CLR. The NFF must conduct periodic assessment
              and verification exercises to ensure that clubs meet the required criteria through
              thorough documentation and on-site inspections.
            </p>

            <p>
              Regular monitoring must be carried out to ensure ongoing compliance with the regulations.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Supporting Club Development
            </h2>

            <p>
              To help clubs meet the licensing criteria, member associations should provide educational
              programs, seminars or training for club officials on the requirements and benefits of
              the FIFA CLR.
            </p>

            <p>
              Furthermore, member associations should provide expert advice on infrastructure
              development, financial management, and legal compliance to applicants.
            </p>

            {/* ✅ Natural internal link to another topical brief */}
            <p>
              For player-facing compliance risks (especially “trial fee” scams), also read{" "}
              <Link
                to="/knowledge/fake-agent-nightmare"
                className="text-accent-gold font-semibold hover:underline"
              >
                FIFA trials vs. fake agents (RSTP Article 19ter)
              </Link>
              .
            </p>

            <ul className="list-disc pl-6">
              <li>Adopt FIFA CLR without altering the minimum requirements.</li>
              <li>
                Run periodic verification: documentation checks and on-site inspections before issuing
                licenses.
              </li>
              <li>Monitor clubs throughout the season to ensure ongoing compliance with SIPALF criteria.</li>
              <li>Provide training and practical support to clubs on infrastructure, finance, and legal compliance.</li>
              <li>Facilitate access to funding/grants to help clubs meet licensing requirements.</li>
            </ul>

            {/* ✅ Practice CTA (money pages) */}
            <div className="mt-10 p-8 rounded-2xl border border-accent-gold/20 bg-black text-white">
              <h3 className="text-xl font-bold text-accent-gold mb-3">
                Need a compliance review or governance support for a club or football stakeholder?
              </h3>
              <p className="text-slate-300 mb-6">
                We advise on sports regulatory compliance, dispute strategy, contracts, and related
                governance issues.
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

          {/* Related briefs section */}
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
                  <h3 className="text-lg font-bold text-black dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.note}</p>
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
