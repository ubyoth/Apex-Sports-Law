import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const SLUG = "new-ifab-football-regulations";
const PAGE_URL = `${SITE_URL}/knowledge/${SLUG}`;

const OG_IMAGE = "https://res.cloudinary.com/dq7vjblwd/image/upload/v1773785854/Gemini_Generated_Image_oiwmmqoiwmmqoiwm_eyyahq.png";
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

const TITLE =
  "The New IFAB Football Regulations: What Players, Clubs and Officials Should Know";
const DESCRIPTION =
  "A practical overview of the latest IFAB football regulation changes on throw-ins, goal kicks, substitutions, injuries and VAR protocol developments.";

const PUBLISHED_ISO = "2026-03-17";
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

const NewIFABFootballRegulations: React.FC = () => {
  const displayDate = formatDisplayDate(PUBLISHED_ISO);

  const related = [
    {
      title: "Bridge Transfers in Football: FIFA Rules Every Player and Agent Must Know",
      slug: "bridge-transfers-in-football",
      note: "Bridge transfers, FIFA RSTP risks, sanctions, and compliance guidance.",
    },
    {
      title: "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare",
      slug: "fake-agent-nightmare",
      note: "Trials, fake agents, and player protection under FIFA rules.",
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

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <p>
              Since its inception, football and its regulations have undergone, and are 
              undergoing, constant modifications to give the game more dynamism and thrill
              that fans desperately crave. Following calls from the International Football 
              Association Board’s (IFAB)  {" "}
            <a
             href="https://theifab.com/news/advisory-panels-of-the-ifab-discuss-further-ways-of-improving-match-flow-and-redu/"
             target="_blank"
             rel="noopener noreferrer"
             className="text-accent-gold font-semibold hover:underline"
            >
             Football and Technical Advisory Panels
            </a>{" "} has approved a number of changes aimed at reducing
              time-wasting, minimising stoppages, and increasing effective playing time.
            </p>

            <p>
              According to a {" "}
            <a
             href="https://www.premierleague.com/en/news/3860720"
             target="_blank"
             rel="noopener noreferrer"
             className="text-accent-gold font-semibold hover:underline"
            >
             report
            </a>{" "} published by the Premier League in January 2024, the
              ball is in play for only about 55 minutes in a typical 90-minute match, with
              the remainder lost to substitutions, delays, goal kicks, and other stoppages.
              The new IFAB measures are intended to address these interruptions and keep
              the game moving.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Throw-Ins and Goal Kicks
            </h2>

            <p>
              Building on the goalkeeper ball-holding restrictions introduced earlier, IFAB
              has extended the countdown principle to throw-ins and goal kicks.
            </p>

            <p>
              Where the referee considers that a restart is taking too long, or is being
              deliberately delayed, a visible five-second countdown may begin. If the ball
              is not put back into play before the countdown expires, possession is
              forfeited.
            </p>

            <p>
              In the case of a delayed throw-in, the opposition is awarded the throw-in. In
              the case of a delayed goal kick, the opposition is awarded a corner kick. The
              objective is clear: to discourage tactical delay and preserve the tempo of the
              match.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Time-Limited Substitutions
            </h2>

            <p>
              IFAB has also introduced stricter substitution timing. A player being
              replaced must leave the field within ten seconds after the substitution board
              is displayed, or after the referee’s signal where no board is used.
            </p>

            <p>
              If the player does not leave within that time, the player must still exit, but
              the substitute may not enter until the first stoppage after one minute has
              passed following the restart. This rule is designed to prevent slow exits that
              disrupt the rhythm of the game.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Off-Field Treatment and Assessment
            </h2>

            <p>
              Another significant development concerns players who go down injured while
              the match is in progress, or whose injury causes the game to be stopped. In
              such circumstances, the player may be required to leave the field and remain
              off for one minute after play restarts.
            </p>

            <p>
              The policy appears aimed at discouraging feigned or tactical injuries that are
              used to break momentum, waste time, or relieve pressure on a team under
              sustained attack.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              VAR Protocol Developments
            </h2>

            <p>
              IFAB has also approved targeted adjustments to the Video Assistant Referee
              protocol. These changes do not amount to a wholesale expansion of VAR, but
              they do widen its role in a few specific situations.
            </p>

            <p>VAR may now intervene in three notable cases:</p>

            <ul className="list-disc pl-6">
              <li>red cards arising from an incorrect second yellow card;</li>
              <li>
                mistaken identity, where the wrong player or team is penalised with a red
                or yellow card; and
              </li>
              <li>
                an incorrectly awarded corner kick, but only where the review can happen
                immediately without delaying the restart, and only where the competition
                adopts that option.
              </li>
            </ul>

            <p>
              These are limited and deliberate adjustments intended to reduce obvious
              officiating errors without turning every decision into a prolonged review
              exercise.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Global Implications for Football
            </h2>

            <p>
              These changes will have implications far beyond elite European football. They
              will influence match administration, player behaviour, officiating, and
              competition operations wherever the game is played, whether in the most remote
              regions of Africa or in highly commercialised leagues elsewhere.
            </p>

            <p>
              For clubs, officials, and competition organisers, adaptation will be
              essential. Some leagues still do not operate with Video Assistant Referee
              infrastructure, and stadiums without the required equipment may need
              substantial upgrades before certain protocols can be implemented fully.
            </p>

            <p>
              For those already navigating FIFA and football-regulatory obligations, our
              brief on{" "}
              <Link
                to="/knowledge/bridge-transfers-in-football"
                className="text-accent-gold font-semibold hover:underline"
              >
                bridge transfers under the FIFA RSTP
              </Link>{" "}
              provides further insight into how regulatory changes can create legal and
              operational exposure for clubs and players.
            </p>

            <h2 className="text-2xl font-bold text-black dark:text-white pt-6">
              Conclusion
            </h2>

            <p>
              The broader question is whether football is becoming over-regulated, or
              whether these developments are exactly what the modern game requires. There
              will certainly be debate over whether expanding VAR intervention is beneficial
              for football. Even so, the central policy direction is unmistakable: IFAB is
              seeking to protect effective playing time, discourage gamesmanship, and reduce
              avoidable officiating errors.
            </p>

            <p>
              Clubs, players, coaches, and match officials should familiarise themselves
              with these changes early. In practice, even seemingly small procedural
              adjustments can materially affect match outcomes, disciplinary exposure, and
              competitive strategy.
            </p>

            <ul className="list-disc pl-6">
              <li>Review the practical impact of restart-delay sanctions.</li>
              <li>Train players and officials on substitution timing and injury rules.</li>
              <li>Assess whether competition infrastructure can support updated VAR use.</li>
            </ul>

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

export default NewIFABFootballRegulations;

