
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

      <div className="min-h-screen bg-white font-sans text-[#202020]">
        {/* Contact Hero */}
        <section className="relative overflow-hidden border-b border-white/10 bg-[#202020] py-24 md:py-28">
          <div className="pointer-events-none absolute inset-0 opacity-20 grayscale">
            <img
              alt="Legal background"
              className="h-full w-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi6B4OarqlSjDfdNwcGUGG2twihUBwmXCkKUbdCx6fv3Ypk1-ThdeP1zfQ5ybmmdm5WB2rx8bHV3W40dA5VzEVk7hhWfDa7oakYb9z8SaNPpLr5QCJn64GnYcoCX9SQR19IrOtP8y0Ju8EwL6bsQ7MQRh6uRL9WEt3hMNB0FRFrKvldh44HRGnFbpn6qFDegs9Ap5FXfeBqOey0dz5u6ufnsi-5GqOuLfMDWxwSZpEtHf_YVXGsUG-JslaPwx8wZIF9A5jQDSHT7c"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#202020]/70 via-[#202020]/90 to-[#202020]" />

          <div className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-[#B99A55]/10 blur-[140px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
             

              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Get in Touch with{" "}
                <span className="text-[#B99A55]">Apex Advocates</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-[#FAF9F6] py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Direct Inquiry */}
              <div
                id="direct-inquiry"
                className="scroll-mt-28 border border-[#E9E6DE] bg-white p-6 md:p-10 lg:p-12"
              >
                <div className="space-y-7 border border-[#E9E6DE] bg-[#FAF9F6] p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <span className="material-icons text-2xl text-[#A88B4D]">
                      info
                    </span>

                    <div>
                      <h3 className="mb-2 text-xl font-semibold tracking-tight text-[#202020]">
                        Contact Us Directly
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href="mailto:info@apexsportslaw.com"
                      className="flex-1 border border-[#B99A55] bg-[#B99A55] px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#202020] transition-all duration-300 hover:border-[#A88B4D] hover:bg-[#A88B4D]"
                    >
                      Email Us
                    </a>

                    <a
                      href="tel:+2348163216169"
                      className="flex-1 border border-[#202020] bg-transparent px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[#202020] transition-all duration-300 hover:bg-[#202020] hover:text-white"
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-12">
                <div>
                  <h2 className="mb-5 text-3xl font-semibold tracking-tight text-[#202020] md:text-4xl">
                    Connect With Us
                  </h2>

                  <p className="mb-10 text-base font-light leading-8 text-[#666666]">
                    Apex Advocates is a full-service commercial law practice headquartered in Lagos, Nigeria, serving businesses, institutions, and individual clients across Nigeria and broader Africa.
                  </p>

                  <div className="space-y-8">
                    {contactItems.map((item) => (
                      <div
                        key={item.title}
                        className="group flex items-start gap-5"
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#E9E6DE] bg-white transition-all duration-300 group-hover:border-[#B99A55] group-hover:bg-[#B99A55]/10">
                          <span className="material-icons text-xl text-[#A88B4D]">
                            {item.icon}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <h3 className="mb-2 font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-[#888888]">
                            {item.title}
                          </h3>

                          {item.link ? (
                            <a
                              href={item.link}
                              className="break-words text-lg font-semibold text-[#202020] transition-colors duration-300 hover:text-[#A88B4D] md:text-xl"
                            >
                              {item.detail}
                            </a>
                          ) : (
                            <p className="text-lg font-semibold text-[#202020] md:text-xl">
                              {item.detail}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="relative overflow-hidden border border-[#E9E6DE] bg-white p-7 md:p-9">
                  <div className="mb-7 border-l-2 border-[#B99A55] pl-4">
                    <h2 className="font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[#202020]">
                      Office Hours
                    </h2>
                  </div>

                  <div className="relative z-10 space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E9E6DE] pb-5">
                      <span className="text-sm font-medium text-[#666666]">
                        Monday - Friday
                      </span>
                      <span className="text-sm font-semibold text-[#202020]">
                        08:00 AM - 05:00 PM
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E9E6DE] pb-5">
                      <span className="text-sm font-medium text-[#666666]">
                        Saturday
                      </span>
                      <span className="text-sm font-semibold text-[#202020]">
                        9:00 AM - 1:00 PM
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#666666]">
                        Sunday
                      </span>
                      <span className="text-sm font-semibold italic text-[#A88B4D]">
                        CLOSED
                      </span>
                    </div>
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
