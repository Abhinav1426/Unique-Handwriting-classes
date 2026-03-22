export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-5 mx-auto">Contact</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4">
            Get in <span className="text-amber">Touch</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Ready to help your child write with confidence? Reach out today to learn about class
            timings, fees, and enrollment.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Address */}
          <div className="bg-white rounded-2xl p-7 border border-border shadow-card">
            <div className="w-12 h-12 rounded-xl bg-amber-light flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                  stroke="#E8963A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="10" r="3" stroke="#E8963A" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-cormorant font-600 text-navy text-xl mb-3">Our Location</h3>
            <address className="not-italic text-muted text-sm leading-relaxed">
              <strong className="text-navy text-sm">Unique Handwriting Classes</strong>
              <br />
              Shivaji Nagar, Sanath Nagar
              <br />
              Hyderabad, Telangana 500018
            </address>
            <a
              href="https://maps.app.goo.gl/qg7SeEBJZztCh8Vc8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-amber hover:text-amber-dark font-medium text-sm mt-4 transition-colors"
            >
              Get Directions
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>

          {/* Phone & Email */}
          <div className="bg-white rounded-2xl p-7 border border-border shadow-card">
            <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                  stroke="#5F8575"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <h3 className="font-cormorant font-600 text-navy text-xl mb-3">Phone &amp; Email</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted uppercase tracking-wide font-medium mb-1">Phone</p>
                <a
                  href="tel:+919989016831"
                  className="text-navy font-semibold text-sm hover:text-amber transition-colors"
                >
                  +91 9989016831
                </a>
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wide font-medium mb-1">Email</p>
                <a
                  href="mailto:mgoud7786@gmail.com"
                  className="text-navy font-semibold text-sm hover:text-amber transition-colors break-all"
                >
                  mgoud7786@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* CTA card */}
          <div className="bg-navy rounded-2xl p-7 text-white relative overflow-hidden sm:col-span-2 lg:col-span-1">
            <div
              className="absolute top-0 right-0 w-32 h-32 bg-amber/20 rounded-full -translate-y-1/2 translate-x-1/2"
              aria-hidden="true"
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-amber flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="font-cormorant font-600 text-white text-xl mb-3">
                Enrol Your Child Today
              </h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Contact us for class timings, batch availability, and fee details. We will be happy
                to guide you through the enrollment process.
              </p>
              <div className="flex flex-col gap-2.5">
                <a
                  href="tel:+919989016831"
                  className="flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
                  aria-label="Call for enrollment"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  Call Now · 9989016831
                </a>
                <a
                  href="https://wa.me/919989016831?text=Hello%2C%20I%20would%20like%20to%20enrol%20my%20child%20for%20handwriting%20classes."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 btn-whatsapp font-semibold px-5 py-3 rounded-xl transition-all duration-200 text-sm"
                  aria-label="WhatsApp for enrollment"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Contact for Handwriting Classes
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
