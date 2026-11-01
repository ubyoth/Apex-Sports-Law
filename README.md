# Apex Advocates — Official Website

Apex Advocates is a premier full-service commercial law firm based in Lagos, Nigeria, delivering partner-led legal counsel across Corporate & Commercial Advisory, Dispute Resolution & Arbitration, Labour & Employment Law, and specialized Sports Law & Governance.

This repository contains the production codebase for the Apex Advocates web platform, including its SEO-optimized Knowledge Centre, practice area portfolio, and client conversion funnels.

---

## Overview

The platform is designed to:
- Establish **authoritative commercial legal leadership** across enterprise, labor, arbitration, and sports sectors in Nigeria and broader Africa.
- Serve as a **high-trust client acquisition channel** for corporate entities, investors, institutions, and individuals.
- Establish **thought leadership** in corporate advisory and specialized sports governance.
- Deliver **high-performance, SEO-first legal briefs** targeting corporate stakeholders, executives, and legal professionals.

---

## Key Capabilities

### 1. Practice Architecture (Full-Service Model)
Structured presentation of four core practice pillars:
- **Corporate & Commercial Advisory:** M&A, CAC regulatory compliance, corporate governance, FDI, and commercial contract drafting.
- **Dispute Resolution & Commercial Arbitration:** Litigation, domestic and international arbitration, and structured mediation.
- **Labour & Employment Law:** Executive compensation, NIC litigation, workplace policy, and union engagements.
- **Sports Law & Governance:** Player contracts, FIFA Football Tribunal & CAS arbitration, image rights, and regulatory defense.

### 2. Knowledge Centre (Content Engine)
- Long-form, SEO-optimized legal articles and regulatory analysis.
- Structured for discoverability (Google indexing, rich LinkedIn/X social previews).
- Focus areas:
  - FIFA Regulations (RSTP, agents, transfers)
  - Commercial contracts, arbitration, and labor dispute governance
  - Intellectual property protection and image rights

### 3. SEO Infrastructure
- Server-compatible metadata via `react-helmet-async`
- Open Graph (OG) and Twitter Card optimization
- Canonical URL enforcement
- Structured data (Schema.org: `WebSite`, `LegalService`, `BlogPosting`, `ItemList`)
- Dynamic XML sitemap indexing (`sitemap.xml`)

### 4. Conversion Layer
- Embedded consultation funnel (Calendly integration for partner scheduling)
- Direct contact pathways across all practice groups

---

## Tech Stack

- **Frontend:** React (TypeScript) + Vite + Tailwind CSS  
- **Routing:** React Router DOM  
- **SEO & Metadata:** react-helmet-async  
- **Hosting:** Firebase Hosting  
- **Assets:** Cloudinary CDN (images), static OG images  

---

## Project Structure

```bash
/src
  /components        # Global UI components (Navbar, Footer, Modals, Buttons)
  /content/knowledge # Static legal brief pages
  /pages             # Core route pages (Home, Practices, KnowledgeCentre, PostDetail, About, Contact, etc.)
  /constants         # Firm metadata, practice definitions, success stories, and blog posts
  /types             # TypeScript interface declarations
/public
  /og                # Open Graph social preview images
  sitemap.xml        # Search engine sitemap index
