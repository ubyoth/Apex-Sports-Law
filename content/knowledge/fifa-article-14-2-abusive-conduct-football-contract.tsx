import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "fifa-article-14-2-abusive-conduct-football-contract";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

const OG_IMAGE =
  "https://res.cloudinary.com/dq7vjblwd/image/upload/v1787097201/connor-coyne-OgqWLzWRSaI-unsplash_smotmo.jpg";

const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "Termination of a Football Contract with Just Cause: Abusive Conduct (Part II)";

const DESCRIPTION =
  "An examination of Article 14(2) of the FIFA RSTP, including abusive conduct by clubs and players, FIFA regulations, and relevant CAS jurisprudence on termination with just cause.";

const PUBLISHED_ISO = "2026-06-02";
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

const FIFAArticle14AbusiveConduct: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  const related = [
    {
      title:
        "Termination of a Football Contract with Just Cause: A Glance at Article 14 of the FIFA RSTP",
      slug: "termination-of-football-contract-with-just-cause",
      note:
        "An overview of Article 14 of the FIFA RSTP, contractual stability, just cause, FIFA jurisprudence, and CAS principles.",
    },
    {
      title:
        "FIFA Parents’ Education on Football Agents: Key Takeaways for Parents of Young Footballers",
      slug: "fifa-parents-education-on-football",
      note:
        "A practical guide to FIFA’s rules on football agents, minors, contracts, fees, trials, and safeguarding.",
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
            <time dateTime={PUBLISHED_ISO}>{displayDate}</time> • 6 min read •
            By {AUTHOR_NAME}
          </p>

          {/* Article Body */}
          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">

            <p>
              The foundation of every professional football contract is mutual
              consent and binding obligations. Both the club and the player agree
              to specific rights and duties, governed by the law of contract, that
              compel them to adhere to the terms.
            </p>

            <p>
              However, there are instances in which either party, by its actions or
              omissions, engages in conduct regarded as abusive.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Article 14(2) of the FIFA Regulations on the Status and Transfer of Players
            </h2>

            <p>
              Article 14(2) of the FIFA Regulations on the Status and Transfer of
              Players provides:
            </p>

            <blockquote className="border-l-4 border-accent-gold pl-6 italic text-slate-600 dark:text-slate-400">
            <a
             href="https://digitalhub.fifa.com/m/40da0f707efdd011/original/FIFA-Commentary-on-the-FIFA-Regulations-for-the-Status-and-Transfer-of-Players-2023-edition.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className="text-accent-gold font-semibold hover:underline"
            >
             Any abusive conduct of a party aiming at forcing the counterparty to terminate or change the terms of the contract shall entitle the counterparty (a player or a club) to terminate the contract with just cause.
            </a>
            </blockquote>

            <p>
              The provision can be understood as covering conduct that is aimed at
              forcing the other party to terminate a contract or forcing the other
              party to vary its terms.
            </p>

            <p>
              Where such conduct is established, the aggrieved party may terminate
              the contract with just cause.
            </p>

            <p>
              For a broader examination of termination with just cause under Article
              14 of the FIFA RSTP, see our earlier article:
              {" "}
              <Link
                to="/knowledge/termination-of-football-contract-with-just-cause"
                className="text-accent-gold font-semibold hover:underline"
              >
                Termination of a Football Contract with Just Cause: A Glance at
                Article 14 of the FIFA RSTP
              </Link>
              .
            </p>

            <p>
              Over the years, the Court of Arbitration for Sport (CAS) has held in
              numerous decisions that conduct intended to encourage another party
              to terminate a validly entered contract or vary its terms will not be
              tolerated.
            </p>

            <p>
              Relevant decisions include CAS 2015/A/4286{" "}
              <em>
                Sebino Plaku v. Wroclawski Klub Sportowy Slask Wroclaw S.A.
              </em>{" "}
              and CAS 2014/A/3642{" "}
              <em>
                Erik Salkic v. Football Union of Russia (FUR) & Professional
                Football Club Arsenal
              </em>
              .
            </p>

            <p>
              The burden of proof is on the party alleging abusive conduct, as
              provided under Article 13, paragraph 5 of the Procedural Rules.
            </p>

            <p>
              An allegation of abusive conduct may be made against either a club or
              a player. The Regulations also give the FIFA Dispute Resolution
              Chamber discretion to assess what constitutes abusive conduct in the
              circumstances of each case.
            </p>

            <p>
              Importantly, the conduct must be directed toward one of two outcomes:
              forcing the other party to terminate the contract and/or forcing the
              other party to vary the terms of the contract.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Abusive Conduct by a Football Club
            </h2>

            <p>
              The FIFA Commentary on the Regulations on the Status and Transfer of
              Players 2023 Edition outlines several circumstances in which a club's
              conduct may be regarded as abusive.
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                A club deciding to separate a player from the rest of the team
                and/or making the player train alone for a prolonged period,
                potentially during unconventional hours and without supervision by
                coaching staff.
              </li>

              <li>
                Not allowing the player to participate in the club's activities
                outside training sessions and matches, such as public events and
                social media appearances.
              </li>

              <li>
                Reducing the time available for the player to make use of
                physiotherapy and medical services.
              </li>

              <li>
                The sudden removal of non-financial contractual benefits, such as
                accommodation and motor vehicle usage.
              </li>
            </ol>

            <p>
              While all four scenarios may constitute abusive conduct, the first
              scenario is distinct because it directly interferes with the player's
              fundamental duty to train and play football for the club.
            </p>

            <p>
              The other scenarios concern ancillary aspects of the employment
              relationship, including exclusion from non-football club activities,
              restricted access to medical services, and the sudden withdrawal of
              contractual benefits such as housing and motor vehicle usage.
            </p>

            <p>
              CAS jurisprudence has developed a number of questions to determine
              whether keeping a player away from the first team constitutes abusive
              conduct. The FIFA Commentary contains nine questions relevant to this
              assessment.
            </p>

            <p>
              In CAS 2011/A/2428,{" "}
              <em>I. v. CJSC FC Krylia Sovetov</em>, and other awards, CAS has
              repeatedly recognised that football is a team sport and that the
              majority of training would need to take place as part of a team or
              squad and with a football.
            </p>

            <p>
              Accordingly, where a player needs to regain fitness, is recovering
              from a short or long-term injury, or has been absent from the team for
              an extended period, temporarily restricting the player to reserve-team
              training may be justified.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              CAS Jurisprudence Before Article 14(2)
            </h2>

            <p>
              Before the introduction of Article 14(2), CAS decisions represented
              an essential component in developing the principles that later became
              reflected in the provision.
            </p>

            <p>
              The introduction of the specific provision provided greater clarity
              and legal certainty by allowing an aggrieved party to expressly rely
              on Article 14(2) as a basis for termination.
            </p>

            <p>
              Before paragraph 2 was introduced, CAS held that the expulsion of a
              player for eight days was insufficient to give the player just cause
              to terminate the contract. See CAS 2014/A/3643{" "}
              <em>
                Club Promotora del Pachuca de C.V. v. Facundo Gabriel Coria & FIFA
              </em>
              .
            </p>

            <p>
              However, an expulsion lasting 30 days was considered sufficient to
              provide grounds for termination with just cause. See CAS 2013/A/3074{" "}
              <em>
                Club KS Lechia Gdańsk v. Bedi Buval
              </em>
              .
            </p>

            <p>
              One of the early disputes based specifically on Article 14(2) was CAS
              2020/A/6950{" "}
              <em>
                Football Club FCSB SA v. Lukasz Gikiewicz
              </em>
              .
            </p>

            <p>
              In that case, Polish player Lukasz Gikiewicz was banished from the
              first team and required to train with the reserve team shortly after
              signing a professional contract with the club.
            </p>

            <p>
              He was also removed from the team's WhatsApp platform, his car was
              replaced with an old Daewoo, and his monthly salary was not paid.
            </p>

            <p>
              After repeatedly demanding reinstatement into the first team and
              payment of his salary, the player terminated the contract with just
              cause, relying on Article 14(2) of the FIFA RSTP.
            </p>

            <p>
              The FIFA Dispute Resolution Chamber granted the player's relief and
              found that the club had engaged in a series of abusive behaviours
              intended to make the player terminate his contract.
            </p>

            <p>
              The full details of the award are available{" "}
              <a
                href="https://www.football-legal.com/content/a-classical-case-of-bullying-and-harassing-an-unwanted-player-lack-of-specific-request-to-mitigate-the-compensation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-gold font-semibold hover:underline"
              >
                here
              </a>
              .
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Abusive Conduct by a Player
            </h2>

            <p>
              A player's conduct may also constitute abusive behaviour under
              Article 14(2). This may arise where a player deliberately attempts to
              force a premature transfer by refusing to train or play without
              justification while the club refuses to release the player.
            </p>

            <p>
              In such circumstances, the club may technically have just cause to
              terminate the contract because of the player's breach of his
              contractual obligations to train and play.
            </p>

            <p>
              However, termination may effectively give the player what they want:
              departure from the club. Although the player may be liable for
              compensation, the club would nevertheless lose the player's services
              and skills.
            </p>

            <p>
              In CAS 2021/A/8216{" "}
              <em>Besiktas AS v. Loris Sven Karius</em>, it was held that the burden
              of proving abusive conduct by a player lies with the club.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Conclusion
            </h2>

            <p>
              Article 14(2) of the FIFA RSTP provides an important safeguard against
              conduct designed to undermine the contractual relationship between a
              football club and player.
            </p>

            <p>
              Abusive conduct may arise from actions intended to force the
              counterparty to terminate a contract or to accept a variation of its
              terms. The provision applies to both clubs and players, and the party
              alleging abusive conduct bears the burden of establishing it.
            </p>

            <p>
              The assessment ultimately depends on the facts and circumstances of
              each case, with FIFA and CAS jurisprudence providing important
              guidance on the circumstances in which conduct may justify termination
              with just cause.
            </p>

            <p>
              The next article in this series will examine termination with just
              cause on the basis of outstanding salaries.
            </p>
          </div>

          <div className="mt-10 p-8 rounded-2xl border border-accent-gold/20 bg-black text-white">
            <h3 className="text-xl font-bold text-accent-gold mb-3">
              Need legal support on football contracts, FIFA regulations, or
              contractual disputes?
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

export default FIFAArticle14AbusiveConduct;
