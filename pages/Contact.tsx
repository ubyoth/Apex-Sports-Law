import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/contact`;
const OG_IMAGE = `${SITE_URL}/screenshot.png`;

const Contact: React.FC = () => {
  const contactItems: Array<{
    icon: string;
    title: string;
    detail: string;
    link?: string;
  }> = [
    {
      icon: "email",
      title: "Email Us",
      detail: "info@apexsportslaw.com",
      link: "mailto:info@apexsportslaw.com",
    },
    {
      icon: "phone",
      title: "Call Our Office",
      detail: "+234 8163216169",
      link: "tel:+2348163216169",
    },
    {
      icon: "location_on",
      title: "Visit Us",
      detail: "Lagos, Nigeria",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Professional Lawyers in Lagos | Apex Advocates</title>
        <meta
          name="description"
          content="Contact Apex Advocates, a full-service commercial law practice in Lagos, Nigeria, for legal counsel in corporate law, dispute resolution, employment, regulatory compliance, intellectual property, and sports law across Africa."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates" />
        <meta property="og:title" content="Contact Us | Apex Advocates" />
        <meta
          property="og:description"
          content="Reach Apex Advocates for corporate legal counsel, dispute resolution, employment, regulatory compliance, intellectual property, and sports law in Nigeria and across Africa."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Apex Advocates" />
        <meta
          name="twitter:description"
          content="Reach Apex Advocates for corporate legal counsel, dispute resolution, employment, regulatory compliance, intellectual property, and sports law in Nigeria and across Africa."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: PAGE_URL,
            name: "Contact Apex Advocates",
            mainEntity: {
              "@type": "LegalService",
              name: "Apex Advocates",
              url: SITE_URL,
              areaServed: ["NG", "Africa"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "NG",
              },
              email: "info@apexsportslaw.com",
              telephone: "+2348163216169",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-black font-sans">
        <section className="relative py-24 bg-black overflow-hidden border-b border-accent-gold/10">
          <div className="absolute inset-0 opacity-20 pointer-events-none grayscale">
            <img
              alt="Legal background"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6B4OarqlSjDfdNwcGUGG2twihUBwmXCkKUbdCx6fv3Ypk1-ThdeP1zfQ5ybmmdm5WB2rx8bHV3W40dA5VzEVk7hhWfDa7oakYb9z8SaNPpLr5QCJn64GnYcoCX9SQR19IrOtP8y0Ju8EwL6bsQ7MQRh6uRL9WEt3hMNB0FRFrKvldh44HRGnFbpn6qFDegs9Ap5FXfeBqOey0dz5u6ufnsi-5GqOuLfMDWxwSZpEtHf_YVXGsUG-JslaPwx8wZIF9A5jQDSHT7c"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black to-black" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-semibold text-white mb-6">
                Get in Touch with <span className="text-accent-gold">Apex Advocates</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div
              id="direct-inquiry"
              className="bg-white dark:bg-secondary-grey/5 p-10 lg:p-14 shadow-2xl border border-neutral-100 dark:border-accent-gold/10 scroll-mt-32"
            >
              <div className="border border-accent-gold/20 bg-neutral-50 dark:bg-black p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-icons text-accent-gold text-3xl">info</span>
                  <div>
                    <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                      Contact Us Directly
                    </h3>
              
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@apexsportslaw.com"
                    className="flex-1 bg-accent-gold text-black py-4 px-6 font-black text-center hover:bg-yellow-600 transition-all"
                  >
                    Email Us
                  </a>

                  <a
                    href="tel:+2348163216169"
                    className="flex-1 border border-accent-gold text-accent-gold py-4 px-6 font-black text-center hover:bg-accent-gold hover:text-black transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-semibold text-black dark:text-white mb-6">
                  Connect With Us
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-200 leading-relaxed mb-12">
                  Apex Advocates is a full-service commercial law practice headquartered in Lagos, Nigeria, serving businesses, institutions, and individual clients across Nigeria and broader Africa.
                </p>

                <div className="space-y-10">
                  {contactItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-accent-gold/10 flex items-center justify-center flex-shrink-0 border border-accent-gold/10 group-hover:bg-accent-gold transition-all">
                        <span className="material-icons text-accent-gold text-2xl group-hover:text-black">
                          {item.icon}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-sans text-[10px] font-black text-neutral-400 uppercase tracking-widest mb-1">
                          {item.title}
                        </h3>

                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-2xl font-bold text-black dark:text-white hover:text-accent-gold transition-colors"
                          >
                            {item.detail}
                          </a>
                        ) : (
                          <p className="text-2xl font-bold text-black dark:text-white">
                            {item.detail}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/5 dark:bg-secondary-grey/20 p-10 border border-accent-gold/10 relative overflow-hidden">
                <h2 className="font-sans font-bold text-black dark:text-white mb-8 border-l-4 border-accent-gold pl-4 uppercase tracking-widest text-xs">
                  Office Hours
                </h2>

                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-center pb-5 border-b border-accent-gold/5">
                    <span className="font-semibold text-neutral-600 dark:text-neutral-200">
                      Monday - Friday
                    </span>
                    <span className="font-bold text-black dark:text-white">08:00 AM - 05:00 PM</span>
                  </div>

                  <div className="flex justify-between items-center pb-5 border-b border-accent-gold/5">
                    <span className="font-semibold text-neutral-600 dark:text-neutral-200">Saturday</span>
                    <span className="font-bold text-black dark:text-white">9:00 AM - 1:00 PM</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-neutral-600 dark:text-neutral-200">Sunday</span>
                    <span className="font-bold text-accent-gold italic">CLOSED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
