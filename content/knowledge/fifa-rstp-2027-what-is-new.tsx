import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const TITLE =
  "The FIFA Regulations on the Status and Transfer of Players (RSTP) 2027: What is New?";

const DESCRIPTION =
  "An overview of the key changes discussed in relation to the FIFA Regulations on the Status and Transfer of Players (RSTP) 2027, including governance, compensation, transfer fees, menstrual health, family leave and international transfer certificates.";

const CANONICAL_URL =
  "https://apexsportslaw.com/knowledge/fifa-rstp-2027-what-is-new";

const IMAGE_URL =
  "https://res.cloudinary.com/dq7vjblwd/image/upload/v1793725839/anthony-maw-rFg2FJy_XA4-unsplash_ada94h.jpg";

const PUBLISHED_DATE = "2026-11-03";

const FIFARSTP2027 = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: IMAGE_URL,
    author: {
      "@type": "Person",
      name: "Yahaya Othman",
    },
    publisher: {
      "@type": "Organization",
      name: "Apex Sports Law",
      url: "https://apexsportslaw.com",
    },
    datePublished: PUBLISHED_DATE,
    dateModified: PUBLISHED_DATE,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": CANONICAL_URL,
    },
    articleSection: "Sports Law",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://apexsportslaw.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Knowledge Centre",
        item: "https://apexsportslaw.com/knowledge-centre",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: TITLE,
        item: CANONICAL_URL,
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{TITLE} | Apex Sports Law</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={CANONICAL_URL} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={CANONICAL_URL} />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="article:published_time" content={PUBLISHED_DATE} />
        <meta property="article:author" content="Yahaya Othman" />
        <meta property="article:section" content="Sports Law" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />

        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="bg-white text-black">
        {/* Article hero */}
        <section className="bg-black text-white">
          <div className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-24">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 text-sm text-gray-300"
            >
              <Link
                to="/"
                className="transition-colors hover:text-[#C8A96B]"
              >
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                to="/knowledge-centre"
                className="transition-colors hover:text-[#C8A96B]"
              >
                Knowledge Centre
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#C8A96B]">Sports Law</span>
            </nav>

            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#C8A96B]">
              Sports Law
            </p>

            <h1 className="max-w-4xl font-serif text-3xl leading-tight md:text-5xl md:leading-tight">
              {TITLE}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-300">
              <span>By Yahaya Othman</span>
              <span>November 3, 2026</span>
            </div>
          </div>
        </section>

        {/* Featured image */}
        <section className="mx-auto max-w-5xl px-6 pt-10 md:px-10 md:pt-14">
          <img
            src={IMAGE_URL}
            alt={TITLE}
            className="max-h-[560px] w-full rounded-sm object-cover"
          />
        </section>

        {/* Article body */}
        <article className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
          <div className="space-y-6 text-base leading-8 text-gray-800 md:text-lg md:leading-9">
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

            <h2 className="pt-4 font-serif text-2xl text-black md:text-3xl">
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

            <h2 className="pt-4 font-serif text-2xl text-black md:text-3xl">
              Liquidated Compensation
            </h2>

            <p>
              By the provision of Article 17.1, parties can now agree,
              beforehand, the amount of compensation that accrues when there is
              termination without just cause. This is one of the effects of the
              Lassana Diarra’s decision. However, the Football Tribunal can
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

            <h2 className="pt-4 font-serif text-2xl text-black md:text-3xl">
              Players Share in Transfer Fees
            </h2>

            <p>
              Football players now can contractually agree to participate in
              their own transfer fees. Article 21bis of RSTP 2027 allows
              players involved in a permanent international transfer, where the
              player would receive a fixed annual remuneration of less than
              Euros 150,000.00, a share of the transfer compensation. The
              selling club must pay the player  5% of the transfer fee paid by
              the buying club.
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

            <h2 className="pt-4 font-serif text-2xl text-black md:text-3xl">
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

            <h2 className="pt-4 font-serif text-2xl text-black md:text-3xl">
              Pregnancy, Adoption and Family Leave
            </h2>

            <p>
              Under the new revised Article 18quater, pregnancy, adoption and
              leave for female players are now the bedrock of the provision. The
              validity of an employment contract cannot be made subject to a
              pregnancy test, and when a club terminates a player’s contract
              during her pregnancy or leave, there is a presumption that such a
              termination was made without just cause.
            </p>

            <p>
              When such a presumption is not rebutted or the termination
              without just cause is confirmed, the player will be entitled to
              compensation equivalent to six months pay, and the club will be
              banned from registering female players for two consecutive
              transfer windows.
            </p>

            <h2 className="pt-4 font-serif text-2xl text-black md:text-3xl">
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
        </article>

        {/* Related articles are separate from the supplied article body */}
        <section className="border-t border-gray-200 bg-gray-50">
          <div className="mx-auto max-w-5xl px-6 py-12 md:px-10 md:py-16">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#9A7B3F]">
              Continue Reading
            </p>

            <h2 className="mb-8 font-serif text-2xl text-black md:text-3xl">
              Related Legal Briefs
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Link
                to="/knowledge/termination-of-football-contract-with-just-cause"
                className="group border border-gray-200 bg-white p-6 transition-colors hover:border-[#C8A96B]"
              >
                <p className="mb-2 text-xs uppercase tracking-wider text-[#9A7B3F]">
                  Sports Law
                </p>
                <h3 className="font-serif text-xl text-black transition-colors group-hover:text-[#9A7B3F]">
                  Termination of a Football Contract with Just Cause
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Explore the legal principles governing termination of
                  football contracts with just cause.
                </p>
              </Link>

              <Link
                to="/knowledge/bridge-transfers-in-football"
                className="group border border-gray-200 bg-white p-6 transition-colors hover:border-[#C8A96B]"
              >
                <p className="mb-2 text-xs uppercase tracking-wider text-[#9A7B3F]">
                  Sports Law
                </p>
                <h3 className="font-serif text-xl text-black transition-colors group-hover:text-[#9A7B3F]">
                  Bridge Transfers in Football
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Read more about transfer-related regulatory issues in
                  professional football.
                </p>
              </Link>
            </div>

            <div className="mt-10">
              <Link
                to="/knowledge-centre"
                className="inline-flex items-center border-b border-[#C8A96B] pb-1 text-sm font-medium text-black transition-colors hover:text-[#9A7B3F]"
              >
                Return to Knowledge Centre
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FIFARSTP2027;
