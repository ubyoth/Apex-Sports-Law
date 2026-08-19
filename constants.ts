
import { PracticeArea, SuccessStory, BlogPost, TeamMember } from './types';

export const FOUNDER_BIO: TeamMember = {
  name: 'Yahaya Oruma Othman, Esq.',
  role: 'Founder & Principal Partner',
  imageUrl: 'https://res.cloudinary.com/dq7vjblwd/image/upload/v1771278933/1740250408076_jnhl5j.jpg',
  bio: `Yahaya Oruma Othman is the Founder and Principal Partner of Apex Sports Law. He holds an LL.B from the University of Jos and was called to the Nigerian Bar in 2015 as a Barrister and Solicitor of the Supreme Court of Nigeria. He is a member of the Nigerian Bar Association (NBA) and an Associate of the Chartered Institute of Arbitrators (United Kingdom).

With ten years of experience in private practice, Yahaya has advised clients on corporate transactions, arbitration, contract law, labour and employment disputes, garnishee proceedings, and commercial litigation. His track record includes successfully representing parties in high-stakes disputes, navigating complex regulatory environments, and delivering pragmatic solutions to commercial challenges.

He played a key role in the Gombe State House of Assembly Election Petition (2019), where his advocacy contributed to a favorable judgment and earned professional commendation from senior counsel. His intellectual property practice has grown through work with businesses and creators on trademark protection, copyright enforcement, and licensing structures aligned with Nigeria's IP regime and international best practices.

Yahaya's professional interests include corporate advisory, arbitration, sports law. He established Apex Sports Law to provide legal counsel to footballers, agents and clubs on: football contracts and player transfers, FIFA transfer regulations, sports arbitration and dispute resolution, image rights and sponsorship agreements. Delivered with the agility, transparency, and cost-efficiency of a specialist boutique firm.`,
  qualifications: [
    'Master in International Sports Law (in view) – ISDE', 
    'LL.B, University of Jos',
    'Business of Sports Institute (BOI), Sports Business & Administration Course',
    'Barrister & Solicitor of the Supreme Court of Nigeria (2015)',
    'Member, Nigerian Bar Association (NBA)',
    'Associate, Chartered Institute of Arbitrators (UK)'
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'sports',
    title: 'Sports Law & Athlete Representation',
    description: 'Specialized legal management for the modern sports professional.',
    icon: 'sports_soccer',
    services: [
      'Athlete contracts and negotiations',
      'Image rights and licensing',
      'Endorsement and sponsorship agreements',
      'Regulatory compliance for sports orgs'
    ]
  },
  {
    id: 'corporate-advisory',
    title: 'Corporate & Commercial Advisory',
    description: 'Strategic guidance for businesses at every stage of growth.',
    icon: 'business',
    services: [
      'Corporate restructuring and CAC filings',
      'Business incorporation (LLC, Ltd/Gte)',
      'Commercial contract drafting and review',
      'Risk assessment and governance'
    ]
  },
  {
    id: 'labour',
    title: 'Employment & Labour Disputes',
    description: 'Protecting rights and interests in the professional workspace.',
    icon: 'gavel',
    services: [
      'Employment contract negotiation',
      'Workplace dispute resolution',
      'Disciplinary and termination advisory',
      'Labour law regulatory compliance'
    ]
  },
  {
    id: 'ip',
    title: 'Intellectual Property & Brand Protection',
    description: 'Securing the value of your creative and industrial assets.',
    icon: 'verified_user',
    services: [
      'Trademark registration',
      'Copyright protection and licensing',
      'Intellectual property enforcement',
      'Brand management and protection'
    ]
  },
  {
    id: 'arbitration',
    title: 'Dispute Resolution & ADR',
    description: 'Resolving conflicts through strategic litigation and alternative means.',
    icon: 'balance',
    services: [
      'Debt recovery and enforcement',
      'Mediation and Arbitration',
      'Civil and Commercial Litigation',
      'Alternative Dispute Resolution (ADR)'
    ]
  }
];

export const SUCCESS_STORIES: SuccessStory[] = [
  {
    id: 'ss1',
    category: 'Sports Law',
    title: 'Ballers Support & LawInSport Mentorship',
    challenge: 'Amateur athletes transitioning to professional sports usually lack adequate legal protection and contract navigation expertise.',
    result: 'Established partnership with Ballers Support for pro bono services. Also, our founding partner participated in LawInSport Global Mentoring Scheme (2023).',
    imageUrl: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop'
  },
  {
    id: 'ss2',    
    category: 'Intellectual Property',
    title: 'Athlete Image Rights & Brand Protection',
    challenge: 'Athletes in creative industries faced challenges in trademark registration and commercial exploitation of their digital likeness.',
    result: 'Successfully reviewed and negotiated image rights and copyright provisions in athlete contracts, aligning them with international standards.',
    imageUrl: 'https://images.unsplash.com/photo-1453941403708-3c32160971fd?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 'ss3',
    category: 'Corporate & Commercial',
    title: 'Strategic Restructuring & CAC Compliance',
    challenge: 'Businesses required complex corporate structuring, governance realignment, and regulatory compliance across multiple entities.',
    result: 'Successfully completed nine (9) corporate restructuring matters before the CAC, including post-incorporation amendments and shareholding realignments.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'ss4',    
    category: 'Labour Law',
    title: 'Recovery of ₦1M+ in Employment Disputes',
    challenge: 'An employee faced wrongful denial of salary arrears and earned bonuses in a complex workplace conflict.',
    result: 'Secured the successful recovery of arrears exceeding ₦1,000,000 and negotiated over a dozen employment agreements for diverse clients.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
  }
];

export const BLOG_POSTS: BlogPost[] = [
    {
  id: "bp1",
  title:
    "Termination of a Football Contract with Just Cause: A Glance at Article 14 of the FIFA RSTP",
  excerpt:
    "Article 14 of the FIFA Regulations on the Status and Transfer of Players governs when a player or club may lawfully terminate a football contract with just cause, without compensation or sporting sanctions.",
  author: "Yahaya Othman",
  date: "2026-05-22",
  readTime: "5 minute read",
  category: "Sports Law",
  imageUrl:
    "https://res.cloudinary.com/dq7vjblwd/image/upload/v1779473746/businessman-signing-sports-contract-with-soccer-ball-desk_1235831-54791_ivilyz.png",
  featured: true,
  slug: "termination-of-football-contract-with-just-cause",
  content: `
Article 14 of the FIFA Regulations on the Status and Transfer of Players (RSTP) governs when a player or club may terminate a football contract with just cause.
While contractual stability remains a fundamental principle in football law, FIFA and CAS jurisprudence recognise that certain breaches may justify unilateral termination without compensation or sporting sanctions.
This article examines the meaning of just cause, the principles developed through FIFA and CAS decisions, and the legal framework governing contractual disputes in professional football.
  `,
},
  
  
  {
    id: "bp2",
    title: "FIFA’s Trial Rules vs. Africa’s Fake Agent Nightmare",
    excerpt:
      "The debilitating effects of fake agents scams under the guise of football trials are on the rise. These scams are defined by the pay-to-play philosphy, selling false hopes and dreams to desperate players. However, what do the regulations say on trials?",
    author: "Yahaya Othman",
    date: "2026-03-03",
    readTime: "5 min read",
    category: "Sports Law",
    imageUrl:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1772573045/FIFA_trials_vs._fake_agent_scam_2_pvl7g0.png",
    featured: true,
    slug: "fake-agent-nightmare",
    content: `
There is an increase in fake agent scams under the guise of football trials. These scams are defined by the pay-to-play philosophy, selling false hopes and dreams to desperate players.

However, what do the regulations say on trials?
    `,
  },

   {
    id: "bp3",
    title: "FIFA Parents’ Education on Football Agents: Key Takeaways for Parents of Young Footballers",
    excerpt:
      "A practical guide to FIFA’s rules on football agents: minors, contracts, fees, trials, and how parents can protect young players from exploitation.",
    author: "Yahaya Othman",
    date: "2026-04-01",
    readTime: "3 min read",
    category: "Sports Law",
    imageUrl:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1775040418/FIFA_parents_education_kpumiw.jpg",
    featured: true,
    slug: "fifa-parents-education-on-football",
    content: `
FIFA recently published the Parents’ Education on Football Agents (PEFA), a handbook aimed at promoting a fair, transparent, and ethical agent ecosystem centred on the well-being of minors. 
The document also demystifies the role of football agents and equips parents with the knowledge needed to safeguard their children’s interests.
    `,
  },

  {
    id: "bp4",
    title:  "The New IFAB Football Regulations: What Players, Clubs and Officials Should Know",
  excerpt:
    "A practical overview of the latest IFAB football regulation changes on throw-ins, goal kicks, substitutions, injuries and VAR protocol developments.",
  author: "Yahaya Othman",
  date: "2026-03-17",
  readTime: "4 min read",
  category: "Sports Law",
  imageUrl:
  "https://res.cloudinary.com/dq7vjblwd/image/upload/w_2093,q_auto,c_crop,f_auto/v1773785854/Gemini_Generated_Image_oiwmmqoiwmmqoiwm_eyyahq.png",
  featured: true,
  slug: "new-ifab-football-regulations",
  content: `IFAB has approved a number of football regulation changes aimed at reducing time-wasting, minimising stoppages, and increasing effective playing time.`,
},
      

  {
    id: "bp5",
    title: "Bridge Transfers in Football: FIFA Rules Every Player and Agent Must Know",
    excerpt:
      "This article examines the regulatory framework, legal implications, and compliance risks in bridge transfers. Legal practitioners must carefully evaluate intermediary structures to avoid sanctions.",
    author: "Yahaya Othman",
    date: "2026-02-18",
    readTime: "3 min read",
    category: "Sports Law",
    imageUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2093&auto=format&fit=crop",
    featured: true,
    slug: "bridge-transfers-in-football",
    content: `Bridge transfers have become a focal issue in international football regulation.

This article examines the regulatory framework, legal implications, and compliance risks.

Legal practitioners must carefully evaluate intermediary structures to avoid sanctions.`,
  },

  {
  id: "bp6",
  title: "The FIFA Club Licensing Regulations: Responsibilities of Member Associations and Nigerian Clubs",
    excerpt:
      "This article explores the responsibilities of member associations under the FIFA CLR, with a particular focus on their impact on football clubs in Nigeria.",
    author: "Yahaya Othman",
    date: "2026-03-03",
    readTime: "3 min read",
    category: "Sports Law",
    imageUrl:
      "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    featured: true,
    slug: "fifa-club-licensing-regulations",
    content: `The FIFA Club Licensing Regulations is a foundational document with the overall goal of standardizing and elevating football club management globally.`,
  },

  {
    id: "bp7",
    title:
      "Termination of a Football Contract with Just Cause: Abusive Conduct (Part II)",
    excerpt:
      "An examination of Article 14(2) of the FIFA RSTP and the circumstances in which abusive conduct by a club or player may justify termination of a football contract with just cause.",
    author: "Yahaya Othman",
    date: "2026-06-02",
    readTime: "6 min read",
    category: "Sports Law",
    imageUrl:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1787097201/connor-coyne-OgqWLzWRSaI-unsplash_smotmo.jpg",
    featured: true,
    slug: "fifa-article-14-2-abusive-conduct-football-contract",
    content: `
Article 14(2) of the FIFA Regulations on the Status and Transfer of Players provides that abusive conduct aimed at forcing the counterparty to terminate or change the terms of a football contract may constitute just cause for termination.

This article examines abusive conduct by clubs and players, relevant FIFA and CAS jurisprudence, and the circumstances in which Article 14(2) may be relied upon to terminate a football contract.
    `,
  },

    {
    id: "bp8",
    title:
      "Termination of a Football Contract with Just Cause for Outstanding Salaries (Part III)",
    excerpt:
      "Article 14bis of the FIFA Regulations on the Status and Transfer of Players addresses the termination of football contracts where clubs fail to pay players their agreed remuneration.",
    author: "Yahaya Othman",
    date: "2026-08-05",
    readTime: "5 min read",
    category: "Sports Law",
    imageUrl:
      "https://res.cloudinary.com/dq7vjblwd/image/upload/v1787128212/Gemini_Generated_Image_jok1osjok1osjok1_zjixnk.jpg",
    featured: true,
    slug: "termination-football-contract-outstanding-salaries-fifa-article-14bis",
    content: `
Clubs have an absolute duty to consistently pay their players the agreed remuneration as and when due. This is the principle that underscores Article 14bis of the FIFA Regulations on the Status and Transfer of Players. This provision was specifically introduced in 2018 to address the incessant incidents of failure and delay by clubs to pay the agreed remuneration to players.
In fact, majority of disputes between players and clubs brought before the Dispute Resolution Chamber (DRC) and, eventually to CAS, centers on non-payment of salaries and other accruals.
This article will examine the specific provisions and the procedures for enforcement when there is a default.
    `,
  },
];
