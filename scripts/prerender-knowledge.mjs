import fs from "fs";
import path from "path";

const SITE_URL = "https://apexsportslaw.com";
const DIST_DIR = path.resolve("dist");
const SOURCE_HTML = path.join(DIST_DIR, "index.html");

const articles = [
  {
    route: "/knowledge/termination-of-football-contract-with-just-cause",
    title: "Termination of a Football Contract with Just Cause: A Glance at Article 14 of the FIFA RSTP | Apex Sports Law Knowledge Centre",
    description: "Article 14 of the FIFA Regulations on the Status and Transfer of Players (RSTP) governs when a player or club may terminate a football contract with just cause.",
    image: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1779473746/businessman-signing-sports-contract-with-soccer-ball-desk_1235831-54791_ivilyz.png",
    publishedTime: "2026-05-22T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/fake-agent-nightmare",
    title: "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare | Apex Sports Law Knowledge Centre",
    description: "The debilitating effects of fake agents scams under the guise of football trials are on the rise. These scams are defined by the pay-to-play philosophy.",
    image: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1772573045/FIFA_trials_vs._fake_agent_scam_2_pvl7g0.png",
    publishedTime: "2026-03-03T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/fifa-parents-education-on-football",
    title: "FIFA Parents’ Education on Football Agents: Key Takeaways for Parents | Apex Sports Law Knowledge Centre",
    description: "A practical guide to FIFA’s rules on football agents: minors, contracts, fees, trials, and how parents can protect young players from exploitation.",
    image: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1775040418/FIFA_parents_education_kpumiw.jpg",
    publishedTime: "2026-04-01T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/new-ifab-football-regulations",
    title: "The New IFAB Football Regulations: What Players, Clubs and Officials Should Know | Apex Sports Law Knowledge Centre",
    description: "A practical overview of the latest IFAB football regulation changes on throw-ins, goal kicks, substitutions, injuries and VAR protocol developments.",
    image: "https://res.cloudinary.com/dq7vjblwd/image/upload/w_2093,q_auto,c_crop,f_auto/v1773785854/Gemini_Generated_Image_oiwmmqoiwmmqoiwm_eyyahq.png",
    publishedTime: "2026-03-17T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/bridge-transfers-in-football",
    title: "Bridge Transfers in Football: FIFA Rules Every Player and Agent Must Know | Apex Sports Law Knowledge Centre",
    description: "This article examines the regulatory framework, legal implications, and compliance risks in bridge transfers.",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop",
    publishedTime: "2026-02-18T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/fifa-club-licensing-regulations",
    title: "The FIFA Club Licensing Regulations: Responsibilities of Member Associations and Nigerian Clubs | Apex Sports Law Knowledge Centre",
    description: "This article explores the responsibilities of member associations under the FIFA CLR, with a particular focus on their impact on football clubs in Nigeria.",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    publishedTime: "2026-03-03T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/fifa-article-14-2-abusive-conduct-football-contract",
    title: "Termination of a Football Contract with Just Cause: Abusive Conduct (Part II) | Apex Sports Law Knowledge Centre",
    description: "An examination of Article 14(2) of the FIFA RSTP and the circumstances in which abusive conduct by a club or player may justify contract termination.",
    image: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1787097201/connor-coyne-OgqWLzWRSaI-unsplash_smotmo.jpg",
    publishedTime: "2026-06-02T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/termination-football-contract-outstanding-salaries-fifa-article-14bis",
    title: "Termination of a Football Contract with Just Cause for Outstanding Salaries (Part III) | Apex Sports Law Knowledge Centre",
    description: "Article 14bis of the FIFA Regulations on the Status and Transfer of Players addresses the termination of football contracts where clubs fail to pay salaries.",
    image: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1787128212/Gemini_Generated_Image_jok1osjok1osjok1_zjixnk.jpg",
    publishedTime: "2026-08-05T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/fifa-rstp-2027-what-is-new",
    title: "The FIFA Regulations on the Status and Transfer of Players (RSTP) 2027: What is New? | Apex Sports Law Knowledge Centre",
    description: "An overview of the key changes introduced in the FIFA RSTP 2027, covering governance, liquidated compensation, players’ share, and menstrual health.",
    image: "https://res.cloudinary.com/dq7vjblwd/image/upload/v1793725839/anthony-maw-rFg2FJy_XA4-unsplash_ada94h.jpg",
    publishedTime: "2026-11-03T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge",
    title: "Sports Law Articles & Legal Briefs | Apex Sports Law Knowledge Centre",
    description: "Legal insights on sports law, FIFA regulations, football contracts, arbitration and dispute resolution from Apex Sports Law in Lagos, Nigeria.",
    image: "https://apexsportslaw.com/og/default.jpg",
    type: "website",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function stripExistingHeadTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\s+name=["']description["'][^>]*>/gi, "")
    .replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>/gi, "")
    .replace(/<meta\s+property=["']article:[^"']+["'][^>]*>/gi, "")
    .replace(
      /<script\s+type=["']application\/ld\+json["'][\s\S]*?<\/script>/gi,
      ""
    );
}

function buildHeadTags(article) {
  const pageUrl = `${SITE_URL}${article.route}`;

  const tags = [
    `<title>${escapeHtml(article.title)}</title>`,
    `<meta name="description" content="${escapeHtml(article.description)}" />`,
    `<link rel="canonical" href="${escapeHtml(pageUrl)}" />`,
    `<meta name="robots" content="index,follow" />`,
    `<meta property="og:type" content="${article.type}" />`,
    `<meta property="og:site_name" content="Apex Sports Law" />`,
    `<meta property="og:title" content="${escapeHtml(article.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(article.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(pageUrl)}" />`,
    `<meta property="og:image" content="${escapeHtml(article.image)}" />`,
    `<meta property="og:image:secure_url" content="${escapeHtml(article.image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(article.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(article.description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(article.image)}" />`,
  ];

  if (article.type === "article") {
    tags.push(
      `<meta property="article:published_time" content="${escapeHtml(article.publishedTime)}" />`,
      `<meta property="article:author" content="${escapeHtml(article.author)}" />`
    );
  }

  return tags.join("\n    ");
}

if (!fs.existsSync(SOURCE_HTML)) {
  console.error("dist/index.html not found. Run the Vite build first.");
  process.exit(1);
}

const sourceHtml = fs.readFileSync(SOURCE_HTML, "utf8");

for (const article of articles) {
  const cleanedHtml = stripExistingHeadTags(sourceHtml);
  const injectedHtml = cleanedHtml.replace(
    "</head>",
    `    ${buildHeadTags(article)}\n  </head>`
  );

  const outputDir = path.join(DIST_DIR, article.route.replace(/^\//, ""));
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, "index.html"), injectedHtml, "utf8");

  console.log(`Created: ${path.join(outputDir, "index.html")}`);
}

console.log("Knowledge Centre prerender files created successfully.");
