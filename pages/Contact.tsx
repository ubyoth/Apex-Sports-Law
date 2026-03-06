import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const SITE_URL = "https://apexsportslaw.com";
const PAGE_URL = `${SITE_URL}/contact`;
const OG_IMAGE = `${SITE_URL}/og/contact.jpg`;
const OG_IMAGE_FALLBACK = `${SITE_URL}/og/default.jpg`;

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Contact: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: Record<string, string> = {};
    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      // Netlify Forms: POST to "/" so Netlify captures it
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });

      if (!res.ok) throw new Error("Form submission failed");

      // BrowserRouter: clean route
      navigate("/thank-you");
    } catch {
      alert("Sorry—your message could not be sent. Please try again.");
    }
  };

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
        {/* Primary SEO */}
        <title>Contact a Sports Lawyer in Nigeria | Apex Advocates & Solicitors</title>
        <meta
          name="description"
          content="Contact Apex Advocates & Solicitors in Lagos, Nigeria for sports law advice, football contracts, transfers, FIFA regulations, arbitration and dispute resolution."
        />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Apex Advocates & Solicitors" />
        <meta property="og:title" content="Contact | Apex Advocates & Solicitors" />
        <meta
          property="og:description"
          content="Reach Apex Advocates & Solicitors for sports law, FIFA regulations, arbitration and corporate advisory in Nigeria."
        />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Fallback social image (safe if contact.jpg isn't created yet) */}
        <meta property="og:image" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:secure_url" content={OG_IMAGE_FALLBACK} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact | Apex Advocates & Solicitors" />
        <meta
          name="twitter:description"
          content="Reach Apex Advocates & Solicitors for sports law, FIFA regulations, arbitration and corporate advisory in Nigeria."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        {/* Structured Data: Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            url: PAGE_URL,
            name: "Contact Apex Advocates & Solicitors",
            mainEntity: {
              "@type": "LegalService",
              name: "Apex Advocates & Solicitors",
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
        {/* Hero */}
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

        {/* Main Content */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Form */}
            <div
              id="direct-inquiry"
              className="bg-white dark:bg-secondary-grey/5 rounded-3xl p-10 lg:p-14 shadow-2xl border border-slate-100 dark:border-accent-gold/10 scroll-mt-32"
            >
              <h2 className="text-3xl font-bold text-black dark:text-white mb-4">Submit Inquiry</h2>
              <p className="text-slate-500 dark:text-slate-400 mb-12">
                Expect a response within one business day.
              </p>

              {/* Netlify Form */}
              <form
                name="contact"
                method="POST"
                action="/thank-you"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <input type="hidden" name="form-name" value="contact" />

                <p className="hidden">
                  <label>
                    Don&apos;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label
                      htmlFor="contact-name"
                      className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-3">
                    <label
                      htmlFor="contact-email"
                      className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="contact-service"
                    className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest"
                  >
                    Legal Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all appearance-none"
                  >
                    <option value="Corporate Advisory">Corporate Advisory</option>
                    <option value="Sports">Sports</option>
                    <option value="Intellectual Property">Intellectual Property</option>
                    <option value="Dispute Resolution">Dispute Resolution</option>
                    <option value="CAC Issues">CAC Issues</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-black text-black dark:text-accent-gold uppercase tracking-widest"
                  >
                    Case Description
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-accent-gold/20 bg-slate-50 dark:bg-black text-black dark:text-white focus:ring-2 focus:ring-accent-gold/20 outline-none transition-all resize-none min-h-[180px]"
                    placeholder="Briefly summarize your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-gold text-black py-5 rounded-xl font-black text-lg hover:bg-yellow-600 transition-all shadow-xl shadow-accent-gold/20 flex items-center justify-center gap-3 group"
                >
                  Submit Inquiry{" "}
                  <span className="material-icons group-hover:translate-x-1 transition-transform">
                    send
                  </span>
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
                  Connect With Us
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
                  Apex Advocates &amp; Solicitors is located in Lagos, Nigeria, providing access to
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

        {/* Map Section */}
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