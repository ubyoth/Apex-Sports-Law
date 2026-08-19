import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";

const SLUG =
  "termination-football-contract-outstanding-salaries-fifa-article-14bis";

const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

const OG_IMAGE =
  "https://res.cloudinary.com/dq7vjblwd/image/upload/v1787128212/Gemini_Generated_Image_jok1osjok1osjok1_zjixnk.jpg";

const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "Termination of a Football Contract with Just Cause for Outstanding Salaries (Part III)";

const DESCRIPTION =
  "An analysis of FIFA Article 14bis on termination of football contracts for outstanding salaries, including the two-month salary rule, notice requirements, and FIFA and CAS jurisprudence.";

const PUBLISHED_ISO = "2026-08-05";

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

const TerminationOutstandingSalaries: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  const related = [
    {
      title:
        "Termination of a Football Contract with Just Cause: A Glance at Article 14 of the FIFA RSTP",
      slug: "termination-of-football-contract-with-just-cause",
      note:
        "An overview of Article 14 of the FIFA RSTP and the principles governing termination with just cause.",
    },
    {
      title:
        "Termination of a Football Contract with Just Cause: Abusive Conduct (Part II)",
      slug: "termination-football-contract-abusive-conduct",
      note:
        "An analysis of abusive conduct under Article 14(2) and when it may justify termination with just cause.",
    },
    {
      title:
        "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare",
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
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": PAGE_URL,
      },
      headline: TITLE,
      description: DESCRIPTION,
      image: [OG_IMAGE, OG_IMAGE_FALLBACK],
      datePublished: PUBLISHED_ISO,
      dateModified: PUBLISHED_ISO,
      author: {
        "@type": "Person",
        name: AUTHOR_NAME,
      },
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
        <meta
          property="og:image:secure_url"
          content={OG_IMAGE_FALLBACK}
        />
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
              Clubs have an absolute duty to consistently pay their players the
              agreed remuneration as and when due. This is the principle that
              underscores Article 14bis of the FIFA Regulations on the Status and
              Transfer of Players. This provision was specifically introduced in
              2018 to address the incessant incidents of failure and delay by
              clubs to pay the agreed remuneration to players.
            </p>

            <p>
              In fact, majority of disputes between players and clubs brought
              before the Dispute Resolution Chamber (DRC) and, eventually to CAS,
              centers on non-payment of salaries and other accruals.
            </p>

            <p>
              This article will examine the specific provisions and the
              procedures for enforcement when there is a default.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Article 14bis of the FIFA Regulations on the Status and Transfer of
              Players
            </h2>

            <p>
              Article 14bis of the FIFA Regulations on the Status and Transfer of
              Players provides that:
            </p>

            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <a
                  href="https://digitalhub.fifa.com/m/696d877ea35ca761/original/Regulations-on-the-Status-and-Transfer-of-Players-January-2025-edition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-gold hover:underline"
                >
                  <em>
                    In the case of a club unlawfully failing to pay a player at
                    least two monthly salaries on their due dates, the player
                    will be deemed to have a just cause to terminate his contract,
                    provided that he has put the debtor club in default in writing
                    and has granted a deadline of at least 15 days for the debtor
                    club to fully comply with its financial obligation(s).
                    Alternative provisions in contracts existing at the time of
                    this provision coming into force may be considered.
                  </em>
                </a>
              </li>

              <li>
                <a
                  href="https://digitalhub.fifa.com/m/696d877ea35ca761/original/Regulations-on-the-Status-and-Transfer-of-Players-January-2025-edition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-gold hover:underline"
                >
                  <em>
                    For any salaries of a player which are not due on a monthly
                    basis, the pro-rata value corresponding to two months shall
                    be considered. Delayed payment of an amount which is equal to
                    at least two months shall also be deemed a just cause for the
                    player to terminate his contract, subject to him complying
                    with the notice of termination as per paragraph 1 above.
                  </em>
                </a>
              </li>

              <li>
                <a
                  href="https://digitalhub.fifa.com/m/696d877ea35ca761/original/Regulations-on-the-Status-and-Transfer-of-Players-January-2025-edition.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-gold hover:underline"
                >
                  <em>
                    Collective bargaining agreements validly negotiated by
                    employers’ and employees’ representatives at domestic level
                    in accordance with national law may deviate from the
                    principles stipulated in paragraphs 1 and 2 above. The terms
                    of such an agreement shall prevail.
                  </em>
                </a>
              </li>
            </ol>

            <p>
              From the provisions reproduced above, it undeniable that if a club
              fails to pay a player two monthly salary payments, the player will
              be deemed to have just cause to terminate their contract, provided
              certain conditions are met. This means that the right to terminate
              a contract for non-payment only becomes exercisable when the player
              has:
            </p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Notified the debtor club of their default in writing (a default
                notice); and
              </li>
              <li>
                Given the debtor club a minimum of 15 days to comply with its
                financial obligations.
              </li>
            </ol>

            <p>
              In <em>CAS 2006/A/1180 Galatasaray SK v. Franck Ribéry &
              Olympique de Marseille</em>, Frank Ribery joined Turkish giants,
              Galatasaray SK, on loan from Metz in 2005. The loan move was hugely
              successful and Galatasaray excercised the option to sign the french
              player on a long-term deal. After five months with the club, the
              player was owed several months of wages estimated to be around
              262,000 euros. The french international notified the club about the
              breach and demanded for an immediate settlement of the debts owed,
              threatening to walk away from the club if the clubs fails to pay the
              outstanding salaries. The club failed to fulfil its obligations
              within the notice period allowed.
            </p>

            <p>
              Consequently, Ribery terminated the contract with just cause and
              signed for Olympique de Marseille as a free agent. Displeased by the
              action of the player, Galatasaray filed a complaint against Ribery
              and Olympique de Marseille, demanding for compensation of 10 million
              euros. The FIFA DRC accordingly dismissed the claim, stating that
              the player had legally terminated the contract because of months of
              unpaid wages. Dissatisfied with the outcome, Galatasaray appealed to
              the Court of Arbitration for Sport. Consequently, CAS upheld the
              decision of the DRC, concluding that Ribery justifiably left the
              club and not liable to pay any compensation.
            </p>

            <p>
              The CAS went on to establish the core of what article 14bis (1)
              espouses--an aggrieved party cannot simply walk away from a contract
              without notifying the other party of the breach, and giving the
              party an opportunity to rectify the breach.
            </p>

            <p>
              It is also important to note that delayed payment of other forms of
              remuneration can also entitle a player to abruptly terminate his
              contract with a club. While this is not absolute, certain
              circumstances like the quantum at stake, the extent of delay and how
              parties have conducted themselves are considered.
            </p>

            <p>
              Generally, what is considered as just cause is not absolute; the
              circumstances of every case would be analysed and considered to
              reach a just determination based on the provisions.
            </p>

            <p>
              In DRC decision of 12 January 2023, Doumbia, a club claimed it had
              legally deducted taxes from a player’s salary. The DRC first checked
              the contract for any clause allowing tax deductions. There was none.
              The club then had to prove with other evidence that the deductions
              were lawful, but it could not. Therefore, the club failed to
              overcome the normal rule that the full salary was due.
            </p>

            <p>
              Although, the DRC eventually decided that the player had just cause
              to terminate the contract for unpaid salaries, the DRC gave the club
              the opportunity to justify the deductions made on the player’s
              salary. The point being made is that deductions did not automatically
              give rise to just cause, until the club was unable to justify those
              deductions.
            </p>

            <p>
              Lastly, the provisions of Article 14bis (3) can be varied by
              collective bargaining agreements validly entered in between
              employers’ and employees’ at domestic level in accordance with
              national laws. When such agreements are in place, I.e, they were
              entered into validly and comply with national laws, such arrangement
              shall supersede the provisions of Article 14bis.
            </p>

            <p>
              Our next article will cover whether poor (sporting) performance is
              ground to terminate a contractual relationship with just cause.
            </p>

            {/* Internal links added separately from the article body */}
            <div className="mt-8 p-6 rounded-2xl border border-accent-gold/20 bg-slate-50 dark:bg-white/5">
              <p className="text-base">
                <strong className="text-black dark:text-white">
                  Related articles in this series:
                </strong>
              </p>

              <ul className="list-disc pl-6 mt-3 space-y-2 text-base">
                <li>
                  <Link
                    to="/knowledge/termination-of-football-contract-with-just-cause"
                    className="text-accent-gold font-semibold hover:underline"
                  >
                    Termination of a Football Contract with Just Cause: A
                    Glance at Article 14 of the FIFA RSTP
                  </Link>
                </li>

                <li>
                  <Link
                    to="/knowledge/termination-football-contract-abusive-conduct"
                    className="text-accent-gold font-semibold hover:underline"
                  >
                    Termination of a Football Contract with Just Cause: Abusive
                    Conduct (Part II)
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-8 rounded-2xl border border-accent-gold/20 bg-black text-white">
            <h3 className="text-xl font-bold text-accent-gold mb-3">
              Need legal support on football contracts, unpaid salaries, or FIFA
              proceedings?
            </h3>

            <p className="text-slate-300 mb-6">
              Explore our Sports Law practice or send a confidential inquiry for
              a tailored review of your matter.
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

export default TerminationOutstandingSalaries;
