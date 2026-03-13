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
        <title>Contact a Sports Lawyer in Nigeria | Apex Sports Law</title>
        <meta
          name="description"
          content="Contact Apex Sports Law in Lagos, Nigeria for sports law advice, football contracts, transfers, FIFA regulations, arbitration and dispute resolution."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Sports Law" />
        <meta property="og:title" content="Contact | Apex Sports Law" />
        <meta
          property="og:description"
          content="Reach Apex Sports Law for sports law, FIFA regulations, arbitration and corporate advisory in Nigeria."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Apex Sports Law" />
        <meta
          name="twitter:description"
          content="Reach Apex Sports Law for sports law, FIFA regulations, arbitration and corporate advisory in Nigeria."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: PAGE_URL,
            name: "Contact Apex Sports Law",
            mainEntity: {
              "@type": "LegalService",
              name: "Apex Sports Law",
              url: SITE_URL,
              areaServed: "NG",
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

      <div className="min-h-screen bg-white dark:bg-black">
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
              <h1 className="text-5xl md:text-7xl font-black text-white mb-8">
                Let&apos;s Discuss <br />
                <span className="text-accent-gold">Your Case</span>
              </h1>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                We are ready to provide you with expert legal guidance. Excellence, precision, and
                confidentiality are our cornerstones.
              </p>
              <div className="flex flex-wrap gap-10">
                <div className="flex items-center text-accent-gold">
                  <span className="material-icons mr-3">verified</span>
                  <span className="font-black uppercase tracking-widest text-xs">
                    Partner-led service
                  </span>
                </div>
                <div className="flex items-center text-accent-gold">
                  <span className="material-icons mr-3">security</span>
                  <span className="font-black uppercase tracking-widest text-xs">
                    Confidential handling
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div
              id="direct-inquiry"
              className="bg-white dark:bg-secondary-grey/5 rounded-3xl p-10 lg:p-14 shadow-2xl border border-slate-100 dark:border-accent-gold/10 scroll-mt-32"
            >
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Submit Inquiry</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-8">
                Our online inquiry form is temporarily unavailable.
              </p>

              <div className="rounded-2xl border border-accent-gold/20 bg-slate-50 dark:bg-black p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="material-icons text-accent-gold text-3xl">info</span>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      Contact Us Directly
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Please email or call us directly for inquiries while the contact form is being updated.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:info@apexsportslaw.com"
                    className="flex-1 bg-accent-gold text-black py-4 px-6 rounded-xl font-black text-center hover:bg-yellow-600 transition-all"
                  >
                    Email Us
                  </a>

                  <a
                    href="tel:+2348163216169"
                    className="flex-1 border border-accent-gold text-accent-gold py-4 px-6 rounded-xl font-black text-center hover:bg-accent-gold hover:text-black transition-all"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  Connect With Us
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                  Apex Sports Law is located in Lagos, Nigeria, providing access to
                  corporate clients and individuals across Nigeria.
                </p>

                <div className="space-y-10">
                  {contactItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0 border border-accent-gold/10 group-hover:bg-accent-gold transition-all group-hover:scale-110">
                        <span className="material-icons text-accent-gold text-3xl group-hover:text-black">
                          {item.icon}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
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

              <div className="bg-black/5 dark:bg-secondary-grey/20 rounded-3xl p-10 border border-accent-gold/10 relative overflow-hidden">
                <h2 className="text-xl font-bold text-black dark:text-white mb-8 border-l-4 border-accent-gold pl-4 uppercase tracking-widest text-xs">
                  Office Hours
                </h2>

                <div className="space-y-5 relative z-10">
                  <div className="flex justify-between items-center pb-5 border-b border-accent-gold/5">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">
                      Monday - Friday
                    </span>
                    <span className="font-bold text-black dark:text-white">08:00 AM - 05:00 PM</span>
                  </div>

                  <div className="flex justify-between items-center pb-5 border-b border-accent-gold/5">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Saturday</span>
                    <span className="font-bold text-black dark:text-white">9:00 AM - 1:00 PM</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Sunday</span>
                    <span className="font-bold text-accent-gold italic">CLOSED</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[550px] relative group border-8 border-white dark:border-accent-gold/10">
            <img
              alt="Map view for Lagos office"
              className="w-full h-full object-cover grayscale opacity-60 transition-transform duration-1000 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7RbIvs-VjDvluQIDkAhTwL3gU3bsj5MBbvBFlBub-T1dwj47NoD8yyzHcrsXuehcgzHlSVm6bgEdBJ2HLXXPiMxkLwR7XuXnkmUAzyZqzBzzqwU4CrOELJfNQCuPwm46qKqNCn-uFjE3WzY0LT4CgGNMmdanSTqOe5pM2xcqCc1vQKdJ3jHbIcR_w7uiO7TXFIdTrtcFhbFtVTl51uJ7oF3ec_uwsrkN3gwX9RCr3KhyMG9vckqFQn-ZC1uYQUpk23CeVwTEjUMA"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

            <div className="absolute top-10 left-10 bg-black dark:bg-black p-10 rounded-3xl shadow-2xl border border-accent-gold/30 max-w-sm backdrop-blur-xl bg-opacity-90">
              <h3 className="text-2xl font-bold text-white mb-3">Lagos Office</h3>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">
                Centrally located in Lagos for our corporate partners.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent-gold text-black px-8 py-4 rounded-xl font-bold text-sm inline-flex items-center gap-3 hover:bg-yellow-600 transition-all"
              >
                Navigate <span className="material-icons text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
