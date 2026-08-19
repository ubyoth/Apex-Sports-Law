import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { BLOG_POSTS } from "../constants";

const SITE_URL = "https://apexsportslaw.com";

const PostDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find the post that matches the URL slug
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // If no post is found
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Article Not Found</h1>
      </div>
    );
  }

  const pageUrl = `${SITE_URL}/knowledge/${post.slug}`;
  const pageTitle = post.title;
  const pageDesc = post.excerpt || post.title;
  const pageImage = post.imageUrl || `${SITE_URL}/og/default.jpg`;

  // Clean date for schema
  const isoDate = post.date ? new Date(post.date).toISOString() : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": [pageImage],
    "author": {
      "@type": "Person",
      "name": post.author || "Apex Sports Law"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Apex Sports Law",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/logo.png`
      }
    },
    "url": pageUrl,
    "datePublished": isoDate,
    "dateModified": isoDate,
    "mainEntityOfPage": pageUrl
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Apex Sports Law</title>
        <meta name="description" content={pageDesc} />
        <link rel="canonical" href={pageUrl} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:image" content={pageImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDesc} />
        <meta name="twitter:image" content={pageImage} />

        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black py-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Back Button */}
          <Link
            to="/knowledge"
            className="text-accent-gold text-sm font-bold mb-6 inline-block"
          >
            ← Back to Knowledge Centre
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-black mb-4 text-black dark:text-white">
            {post.title}
          </h1>

          {/* Meta Info */}
          <p className="text-sm text-slate-500 mb-8">
            {post.date} • {post.readTime} • By {post.author}
          </p>

          {/* Article Content */}
          <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>

        </div>
      </div>
    </>
  );
};

export default PostDetail;
