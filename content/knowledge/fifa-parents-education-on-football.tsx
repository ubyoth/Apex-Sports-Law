import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "fifa-parents-education-on-football";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

const OG_IMAGE = "https://res.cloudinary.com/dq7vjblwd/image/upload/v1775040418/FIFA_parents_education_kpumiw.jpg";
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "FIFA Parents’ Education on Football Agents: Key Takeaways for Parents of Young Footballers";
const DESCRIPTION =
  "A practical guide to FIFA’s rules on football agents: minors, contracts, fees, trials, and how parents can protect young players from exploitation.";

const PUBLISHED_ISO = "2026-04-01";
const AUTHOR_NAME = "Yahaya Othman";

function formatDisplayDate(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(d);
}

const FIFAParentsEducation: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  const related = [
    {
      title: "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare",
      slug: "fake-agent-nightmare",
      note: "Trials, FIFA RSTP Article 19ter, and how players avoid scams.",
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
        name: "Apex Sports Law",
        url: SITE_URL,
      },
    }),
    []
  );

  return (
    <>
      <Helmet>
        <title>{TITLE} | Apex Sports Law Knowledge Centre</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />

        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta property="og:image" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:secure_url" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta
          property="article:published_time"
          content={`${PUBLISHED_ISO}T00:00:00+01:00`}
        />
        <meta property="article:author" content={AUTHOR_NAME} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-20">
        <article className="max-w-3xl mx-auto px-6">
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

          <Link
            to="/knowledge"
            className="text-accent-gold text-sm font-bold mb-6 inline-block"
          >
            ← Back to Knowledge Centre
          </Link>

          <h1 className="text-4xl font-black mb-6 text-black dark:text-white">
            {TITLE}
          </h1>

          <p className="text-sm text-slate-500 mb-10">
            <time dateTime={PUBLISHED_ISO}>{displayDate}</time> • 4 min read • By{" "}
            {AUTHOR_NAME}
          </p>

          {/* Article Body */}
<div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
  <p>
    FIFA recently published the FIFA Parents’ Education on Football Agents (PEFA),
    a pioneering document seeking to build a fair, transparent, and ethical football
    agent ecosystem that places the well-being of minors at its core. This handbook
    was developed in collaboration with the Football Agent Working Group and
    Loughborough University as part of FIFA’s 2023–2027 Strategic Objectives,
    particularly Goal 2, which focuses on protecting the integrity of the game and
    safeguarding participants, especially minors.
  </p>

  <p>
    The document unravels the multi-level relationships between football agents,
    minors, and their parents, while emphasising the decisive role parents play in
    their children’s professional football journey.
  </p>

  <p>
    It also demystifies the role of football agents in the modern football ecosystem
    and equips parents with the necessary knowledge to ensure that their children’s
    well-being remains central to every decision.
  </p>

  <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
    The Core Purpose of the FIFA PEFA Handbook
  </h2>

  <p>
    The primary objective of the handbook is to provide parents with clear,
    practical guidance when dealing with football agents, ensuring that the best
    interests of minors are prioritised at all times.
  </p>

  <p>
    The framework is rooted in the United Nations Convention on the Rights of the
    Child (UNCRC), which is built around three fundamental principles:
  </p>

  <ul className="list-disc pl-6">
    <li>Protection – safeguarding children from harm and exploitation</li>
    <li>Provision – supporting holistic development, including education</li>
    <li>Participation – involving the child’s views according to their maturity</li>
  </ul>

  <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
    Stages of Engagement Between Players and Football Agents
  </h2>

  <p>
    The handbook outlines four key stages of engagement between players and
    football agents. Each stage is supported by FIFA Parents’ Guides, which provide
    practical tools such as checklists, questions, and tips for parents.
  </p>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    1. Preparation to Engage
  </h3>

  <p>
    This stage covers the role of parents, the functions of legitimate agents, how
    agents are regulated, how to handle unsolicited approaches, how to choose the
    right agent, and how to identify fake agents.
  </p>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    2. Entering into a Representation Relationship
  </h3>

  <p>
    This stage focuses on representation agreements and the importance of avoiding
    inducements or improper incentives.
  </p>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    3. Working with the Football Agent
  </h3>

  <p>
    This includes collaboration between all parties, domestic and international
    trials, transfers, employment contracts, service fees, and risks such as human
    trafficking.
  </p>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    4. Ending the Representation Relationship
  </h3>

  <p>
    This stage addresses termination of representation agreements, whether by
    natural expiry, mutual agreement, or unilateral termination with just cause.
    Importantly, parents should not feel trapped in any representation arrangement.
  </p>

  <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
    Key Takeaways from the FIFA Handbook
  </h2>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    Agent Licensing and Verification
  </h3>

  <ul className="list-disc pl-6">
    <li>Only FIFA-licensed individuals may provide agent services</li>
    <li>Parents must verify the Digital License Card via QR code</li>
    <li>
      Additional authorisation is required to represent minors (valid for 3 years)
    </li>
  </ul>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    Protection of Minors
  </h3>

  <ul className="list-disc pl-6">
    <li>Strict limits exist on when agents can approach minors</li>
    <li>International trials are heavily restricted</li>
    <li>
      Transfers under 18 are generally prohibited except under RSTP Article 19
    </li>
    <li>All such transfers require FIFA approval via TMS</li>
    <li>Parents must countersign agreements and accompany minors on trials</li>
  </ul>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    Representation Agreements
  </h3>

  <ul className="list-disc pl-6">
    <li>Must be in writing</li>
    <li>Must not exceed 2 years</li>
    <li>No automatic renewal</li>
    <li>Only one active agreement at a time</li>
    <li>
      Independent legal advice from a sports lawyer is strongly recommended
    </li>
  </ul>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    Fees and Inducements
  </h3>

  <ul className="list-disc pl-6">
    <li>
      Fees must relate to specific services, typically signing professional
      contracts
    </li>
    <li>No upfront payments for trials or player placement</li>
    <li>Inducements such as gifts or cash are prohibited</li>
  </ul>

  {/* Internal linking opportunity */}
  <p>
    For practical insights on identifying fraudulent intermediaries, see our guide on{" "}
    <Link
      to="/knowledge/fake-agent-nightmare"
      className="text-accent-gold font-semibold hover:underline"
    >
      fake football agents and trial scams
    </Link>
    .
  </p>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    Trials, Transfers and Contracts
  </h3>

  <ul className="list-disc pl-6">
    <li>Parents should accompany minors during trials</li>
    <li>Verify the legitimacy of clubs and opportunities</li>
    <li>
      Contracts must comply with FIFA rules (including a 3-year maximum for minors)
    </li>
    <li>Balance football ambitions with education and well-being</li>
  </ul>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    Human Trafficking and Exploitation Risks
  </h3>

  <ul className="list-disc pl-6">
    <li>Beware of fake agents promising trials or contracts</li>
    <li>Avoid paying money for opportunities</li>
    <li>Watch for confiscation of documents</li>
    <li>Report suspicious activity to FIFA and relevant authorities</li>
  </ul>

  <h3 className="text-xl font-semibold text-black dark:text-white pt-4">
    Termination and Switching Agents
  </h3>

  <ul className="list-disc pl-6">
    <li>
      Agreements can end through expiry, mutual consent, or unilateral termination
      with just cause
    </li>
    <li>
      The “two-month rule” allows agents to approach players only in the final two
      months of an existing agreement
    </li>
  </ul>

  <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
    Conclusion
  </h2>

  <p>
    The FIFA Parents’ Education on Football Agents handbook is an essential
    resource for parents whose children aspire to professional football. It provides
    practical guidance to help navigate agent relationships, avoid exploitation,
    and prioritise the child’s development and welfare.
  </p>

  <p>
    The handbook is available for free download via FIFA’s digital hub.
  </p>
</div>

            
            <div className="mt-10 p-8 rounded-2xl border border-accent-gold/20 bg-black text-white">
              <h3 className="text-xl font-bold text-accent-gold mb-3">
                Need legal support on football regulations, compliance, or disputes?
              </h3>
              <p className="text-slate-300 mb-6">
                Explore our Sports Law practice or send a confidential inquiry for a
                tailored review of your matter.
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

export default FIFAParentsEducation;
