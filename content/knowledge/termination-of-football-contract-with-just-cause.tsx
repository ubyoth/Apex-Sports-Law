import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "termination-of-football-contract-with-just-cause";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

const OG_IMAGE =
  "https://res.cloudinary.com/dq7vjblwd/image/upload/v1779473746/businessman-signing-sports-contract-with-soccer-ball-desk_1235831-54791_ivilyz.png";
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "Termination of a Football Contract with Just Cause: A Glance at Article 14 of the FIFA RSTP";

const DESCRIPTION =
  "An overview of Article 14 of the FIFA Regulations on the Status and Transfer of Players, including just cause termination, contractual stability, FIFA jurisprudence, and CAS principles.";

const PUBLISHED_ISO = "2026-05-22";
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

const FootballContractJustCause: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  const related = [
    {
      title:
        "FIFA Parents’ Education on Football Agents: Key Takeaways for Parents of Young Footballers",
      slug: "fifa-parents-education-on-football",
      note:
        "A practical guide to FIFA’s rules on agents, minors, contracts, fees, and safeguarding young players.",
    },
    {
      title: "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare",
      slug: "fake-agent-nightmare",
      note:
        "Trials, FIFA RSTP Article 19ter, and how players can avoid fake football agents and scams.",
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
        <script type="application/ld+json">
          {JSON.stringify(articleJsonLd)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-20">
        <article className="max-w-3xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-2 text-slate-500">
              <li>
                <Link
                  to="/"
                  className="hover:text-accent-gold transition-colors"
                >
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
            <time dateTime={PUBLISHED_ISO}>{displayDate}</time> • 5 min read •
            By {AUTHOR_NAME}
          </p>

          {/* Article Body */}
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              A player and a club typically enter into a fixed-term contract that
              clearly defines their respective rights and obligations. These terms
              govern the relationship for the full duration of the agreement.
              While contracts generally terminate upon expiry or by mutual
              agreement under Article 13 of the FIFA Regulations on the Status and
              Transfer of Players (RSTP), early termination may occur in the event
              of breach, without prejudice to any compensation payable to the
              injured party.
            </p>

            <p>
              The conditions, criteria, and circumstances that govern when and how
              a party to a football contract can unilaterally terminate the
              contractual relationship are extensively discussed under Article 14
              of the FIFA RSTP.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Article 14 of the FIFA RSTP
            </h2>

            <p>
              Article 14 of the FIFA Regulations on the Status and Transfer of
              Players provides that:
            </p>

            <blockquote className="border-l-4 border-accent-gold pl-6 italic text-slate-600 dark:text-slate-400">
              “A contract may be terminated by either party without consequences
              of any kind (either payment of compensation or imposition of
              sporting sanctions) where there is just cause.”
            </blockquote>

            <blockquote className="border-l-4 border-accent-gold pl-6 italic text-slate-600 dark:text-slate-400">
              “Any abusive conduct of a party aiming at forcing the counterparty
              to terminate or change the terms of the contract shall entitle the
              counterparty (a player or a club) to terminate the contract with
              just cause.”
            </blockquote>

            <p>
              These provisions encapsulate the principle of contractual stability
              — pacta sunt servanda — which remains central to modern football
              contractual relations. Accordingly, a party may only terminate a
              football contract unilaterally without legal consequences where the
              conduct of the counterparty fundamentally undermines the contractual
              relationship.
            </p>

            <p>
              However, the party whose conduct triggered the termination with just
              cause is often exposed to legal and sporting consequences. In many
              cases, that party may be required to pay compensation and may also
              face sporting sanctions under Article 17 of the RSTP. Effectively,
              the defaulting party is treated as though it terminated the contract
              without just cause.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              What Constitutes Just Cause?
            </h2>

            <p>
              The RSTP does not provide an exhaustive definition of “just cause.”
              Instead, the determination depends on the specific facts and
              circumstances of each case, as well as the actions or omissions that
              led to the breakdown of the contractual relationship.
            </p>

            <p>
              Over time, FIFA jurisprudence and CAS decisions have shaped the
              concept into a well-established principle within football dispute
              resolution practice.
            </p>

            <p>
              In CAS 2019/A/6452 Sport Lisboa e Benfica Futebol SAD v. Bilal
              Ould-Chickh & FC Utrecht B.V. & FIFA, the FIFA Dispute Resolution
              Chamber and the Court of Arbitration for Sport held that:
            </p>

            <blockquote className="border-l-4 border-accent-gold pl-6 italic text-slate-600 dark:text-slate-400">
              “Good cause (and thus just cause) to lawfully terminate an
              employment contract exists when the fundamental terms and conditions
              which formed the basis of the contractual arrangement are no longer
              respected by one of the parties.”
            </blockquote>

            <p>
              The FIFA Commentary on the Status and Transfer of Players (2023
              Edition) identifies several important considerations in determining
              whether just cause exists.
            </p>

            <ul className="list-disc pl-6">
              <li>
                Whether the breach of contractual obligations is egregious
              </li>
              <li>
                Whether the severity of the breach makes continuation of the
                contractual relationship unreasonable
              </li>
              <li>
                Whether termination represents a last resort — ultima ratio — for
                the injured party
              </li>
            </ul>

            <p>
              A critical consideration is whether the injured party provided the
              counterparty with sufficient notice and opportunity to remedy the
              breach before proceeding with termination.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              CAS and Swiss Law Jurisprudence
            </h2>

            <p>
              Swiss law principles and CAS jurisprudence have significantly shaped
              how just cause is interpreted within international football law.
            </p>

            <p>
              In CAS 2020/A/7253 Al Faisaly FC v. Doukoure Abdoulaye, the
              Respondent terminated his contract after the Appellant failed to pay
              his monthly salary. The CAS was tasked with determining whether the
              termination was justified.
            </p>

            <p>
              Drawing from Swiss law and established CAS jurisprudence, the Court
              defined just cause as:
            </p>

            <blockquote className="border-l-4 border-accent-gold pl-6 italic text-slate-600 dark:text-slate-400">
              “…when the relevant breach by the other party (or other impeding
              circumstances) is of such nature, or has reached such a level of
              seriousness, that the essential conditions under which the contract
              was entered into are no longer present and the injured party cannot
              in good faith be expected to continue the employment relationship.”
            </blockquote>

            <p>
              Parties are generally encouraged to expressly stipulate what
              constitutes just cause within their contracts. This promotes legal
              certainty and creates a clearer framework for enforcing contractual
              rights and obligations.
            </p>

            <p>
              Nevertheless, FIFA dispute resolution bodies are not strictly bound
              by contractual wording alone. The FIFA Dispute Resolution Chamber
              will still assess the specific facts and surrounding circumstances of
              each case when determining whether just cause genuinely exists.
            </p>

            {/* Internal linking opportunity */}
            <p>
  This article forms Part I of our analysis of termination with just cause under
  Article 14 of the FIFA RSTP. Continue with{" "}
  <Link
    to="/knowledge/fifa-article-14-2-abusive-conduct-football-contract"
    className="text-accent-gold font-semibold hover:underline"
  >
    Part II: Abusive Conduct
  </Link>{" "}
  for an examination of abusive conduct by clubs and players and the relevant
  FIFA and CAS jurisprudence.
</p>

<p>
  You can also read our analysis on{" "}
  <Link
    to="/knowledge/fifa-parents-education-on-football"
    className="text-accent-gold font-semibold hover:underline"
  >
    FIFA Parents’ Education on Football Agents
  </Link>{" "}
  and our guide on{" "}
  <Link
    to="/knowledge/fake-agent-nightmare"
    className="text-accent-gold font-semibold hover:underline"
  >
    fake football agents and trial scams
  </Link>
  .
</p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Express Grounds Under the RSTP
            </h2>

            <p>
              The RSTP expressly recognises certain grounds as constituting just
              cause. These include abusive conduct by a club under Article 14(2)
              and outstanding salaries under Article 14bis.
            </p>

            <p>
              However, a mere allegation of just cause does not automatically
              establish its existence. FIFA and CAS require objective scrutiny of
              the contractual terms and surrounding facts before recognising a
              unilateral termination as lawful.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Conclusion
            </h2>

            <p>
              Article 14 of the FIFA RSTP serves as one of the key safeguards of
              contractual fairness in professional football. While the principle
              of contractual stability remains paramount, FIFA and CAS recognise
              that certain breaches fundamentally destroy the trust and conditions
              necessary for the continuation of the employment relationship.
            </p>

            <p>
              The existence of just cause ultimately depends on the seriousness of
              the breach, the surrounding circumstances, and whether termination
              was truly the last reasonable option available to the injured party.
            </p>
          </div>

          <div className="mt-10 p-8 rounded-2xl border border-accent-gold/20 bg-black text-white">
            <h3 className="text-xl font-bold text-accent-gold mb-3">
              Need legal support on football regulations, contractual disputes, or
              FIFA proceedings?
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
                    Read brief{" "}
                    <span className="material-icons text-sm">east</span>
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

export default FootballContractJustCause;
