import fs from "fs";
import path from "path";

const SITE_URL = "https://apexsportslaw.com";
const DIST_DIR = path.resolve("dist");
const SOURCE_HTML = path.join(DIST_DIR, "index.html");

const articles = [
  {
    route: "/knowledge/fake-agent-nightmare",
    title:
      "Football Trials, Fake Agents, and FIFA RSTP Article 19ter: What Players Must Know | Apex Sports Law Knowledge Centre",
    description:
      "Learn how FIFA RSTP Article 19ter protects players from fake agent scams during football trials. Understand mandatory trial forms, duration limits, and legal safeguards.",
    image:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1772573045/FIFA_trials_vs._fake_agent_scam_2_pvl7g0.png",
    publishedTime: "2026-03-03T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/fifa-club-licensing-regulations",
    title:
      "The FIFA Club Licensing Regulations: Responsibilities of Member Associations and Nigerian Clubs | Apex Sports Law Knowledge Centre",
    description:
      "This article explores the responsibilities of member associations under the FIFA Club Licensing Regulations, with a focus on their impact on football clubs in Nigeria.",
    image:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1773854494/stadium_zjpyi2.avif",
    publishedTime: "2026-03-03T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/bridge-transfers-in-football",
    title:
      "Bridge Transfers in Football: FIFA Rules Every Player and Agent Must Know | Apex Sports Law Knowledge Centre",
    description:
      "Understand FIFA’s bridge transfer rules under the RSTP, the 16-week presumption, potential sanctions, and practical compliance tips for clubs, players, and agents.",
    image:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1773854542/footballer_and_boots_sliwwr.avif",
    publishedTime: "2026-02-18T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge/new-ifab-football-regulations",
    title:
      "The New IFAB Football Regulations: What Players, Clubs and Officials Should Know | Apex Sports Law Knowledge Centre",
    description:
      "A practical overview of the latest IFAB football regulation changes on throw-ins, goal kicks, substitutions, injuries and VAR protocol developments.",
    image:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1773785854/Gemini_Generated_Image_oiwmmqoiwmmqoiwm_eyyahq.png",
    publishedTime: "2026-03-17T00:00:00+01:00",
    author: "Yahaya Othman",
    type: "article",
  },
  {
    route: "/knowledge",
    title:
      "Sports Law Articles & Legal Briefs | Apex Sports Law Knowledge Centre",
    description:
      "Legal insights on sports law, FIFA regulations, football contracts, arbitration and dispute resolution from Apex Sports Law in Lagos, Nigeria.",
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
