
import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "fifa-rstp-2027-what-is-new";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

const OG_IMAGE =
  "https://res.cloudinary.com/dq7vjblwd/image/upload/v1793725839/anthony-maw-rFg2FJy_XA4-unsplash_ada94h.jpg";
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "The FIFA Regulations on the Status and Transfer of Players (RSTP) 2027: What is New?";

const DESCRIPTION =
  "An overview of the key changes introduced in the FIFA Regulations on the Status and Transfer of Players (RSTP) 2027, covering governance, liquidated compensation, players’ share in transfer fees, menstrual health, family leave and international transfer certificates.";

const PUBLISHED_ISO = "2026-11-03";
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

const FIFARSTP2027: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  const related = [
    {
      title:
        "Termination of a Football Contract with Just Cause for Outstanding Salaries (Part III)",
      slug: "termination-football-contract-outstanding-salaries-fifa-article-14bis",
      note:
        "An examination of FIFA RSTP Article 14bis and the circumstances in which outstanding salaries may justify termination of a football contract.",
    },
    {
      title: "Bridge Transfers in Football",
      slug: "bridge-transfers-in-football",
      note:
        "Explore the regulatory issues surrounding bridge transfers in professional football.",
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
            <time dateTime={PUBLISHED_ISO}>{displayDate}</time> • 4 min read • By{" "}
            {AUTHOR_NAME}
          </p>

          {/* Article Body */}
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              The highly riveting Football Law Annual Review (FLAR) 2026 held
              in Budapest on Thursday, 29th October 2026 on the new FIFA
              Regulations on the Status and Transfer of Players (RSTP)
              highlighted the key alterations that will shape the international
              transfer system from 1st January 2027.
            </p>

            <p>
              As Emilio Garcia Silvero, FIFA&apos;s Chief Legal and Compliance
              Officer, stated in his opening remarks, “the FIFA RSTP 2027 is not
              a small update; it is a new chapter for the international
              transfer system.” This is indeed a revolution because, for the
              first time, the rules governing the transfer system were not
              written by FIFA alone, but in conjunction with players, clubs and
              the various leagues.
            </p>

            <p>
              We have outlined and highlighted some of the key changes
              introduced into the RSTP 2027 that are worthy of note:
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Governance Framework
            </h2>

            <p>
              According to Article 1.2 of the RSTP 2027, FIFA can no longer make
              alterations to the regulations unilaterally, unless by consensus
              with other players, leagues, clubs and trade unions. The Global
              Social Dialogue Platform for Professional Football now recognizes
              FIFPRO, World League Associations and European Football Clubs as
              key global partners, concretized by the Memorandum of
              Understanding executed between FIFA and FIFPRO.
            </p>

            <p>
              Decisively also, the new framework gives credence to collective
              agreements arrived at by nation-states which will take precedence
              over the applicability of the RSTP.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Liquidated Compensation
            </h2>

            <p>
              By the provision of Article 17.1, parties can now agree,
              beforehand, the amount of compensation that accrues when there is
              termination without just cause. This is one of the effects of
              the Lassana Diarra’s decision. However, the Football Tribunal can
              reduce such an amount if it considers it excessively high or
              disregard it altogether if it is manifestly unfair.
            </p>

            <p>
              Additionally, for players with fixed annual remuneration of up to
              USD150,000.00 (or its equivalent), any agreement on the financial
              compensation payable to the player must guarantee the residue of
              the value of the contract, i.e, the amount the player would have
              received from the day of breach till the end of his contract.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Players Share in Transfer Fees
            </h2>

            <p>
              Football players now can contractually agree to participate in
              their own transfer fees. Article 21bis of RSTP 2027 allows
              players involved in a permanent international transfer, where the
              player would receive a fixed annual remuneration of less than
              Euros 150,000.00, a share of the transfer compensation. The
              selling club must pay the player{"  "}5% of the transfer fee paid
              by the buying club.
            </p>

            <p>
              This arrangement can be set aside where it is prohibited by
              national laws, or when a collective bargaining agreement provides
              for an equivalent arrangement.
            </p>

            <p>
              This new provision now elevates the status of the player from
              being merely an object in a transaction to an active participant
              in his own transfer.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Female Players and Menstrual Health
            </h2>

            <p>
              Article 18quinquies of the new RSTP relates to the menstrual
              health and menstrual cycle of female players. A female player can
              now be absent from match days or training upon presentation of a
              medical certificate from a gynaecologist or specialist doctor.
              The article explicitly provides that “...the player shall be
              entitled to receive her full remuneration when exercising these
              rights related to menstrual health.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Pregnancy, Adoption and Family Leave
            </h2>

            <p>
              Under the new revised Article 18quater, pregnancy, adoption and
              leave for female players are now the bedrock of the provision.
              The validity of an employment contract cannot be made subject to
              a pregnancy test, and when a club terminates a player’s contract
              during her pregnancy or leave, there is a presumption that such
              a termination was made without just cause.
            </p>

            <p>
              When such a presumption is not rebutted or the termination
              without just cause is confirmed, the player will be entitled to
              compensation equivalent to six months pay, and the club will be
              banned from registering female players for two consecutive
              transfer windows.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              International Transfer Certificate (ITC)
            </h2>

            <p>
              Under the old regime, the former association has to issue the ITC
              within 72 hours otherwise the new association can proceed to
              register the player. Under the new RSTP 2027, the time limit has
              been extended to 5 calender days after an application has been
              made, and the “former association can indicate whether the former
              club wishes to reserve financial claims against the player and/or
              the new club.” (Art.11.3 Annex 3).
            </p>

            <p>
              In extreme circumstances, FIFA may allow the registration of a
              player within one working day of receipt of the ITC request, if
              that will prevent irreparable harm to the player. (Art.11.6 Annex
              3)
            </p>

            <p>
              We need to emphasize that these new regulations will only apply
              to transfers and disputes that occur after 1 January 2027.
            </p>

            <p>Let us know what you provision interests you the most.</p>
          </div>

          <div className="mt-10 p-8 rounded-2xl border border-accent-gold/20 bg-black text-white">
            <h3 className="text-xl font-bold text-accent-gold mb-3">
              Need legal support on football regulations, compliance, or disputes?
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

export default FIFARSTP2027;
