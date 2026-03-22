export default function LocalSEO() {
  return (
    <section id="location" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="section-label mb-5">Local Classes</div>
            <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
              Handwriting Classes in{' '}
              <span className="text-amber">Hyderabad</span>
            </h2>
            <div className="space-y-4 text-charcoal/80 leading-relaxed">
              <p>
                If you are a parent in or around{' '}
                <strong className="text-navy">Hyderabad</strong>,
                Unique Handwriting Classes is conveniently located and easily accessible from
                surrounding areas in Hyderabad, Telangana.
              </p>
              <p>
                Parents from across Hyderabad bring their children to us for structured,
                result-oriented handwriting improvement. Our central location in Sanath Nagar makes
                it easy for families in the surrounding neighbourhoods to attend regular classes
                without long commutes.
              </p>
              <p>
                Whether your child is struggling with illegible writing, slow writing pace, or
                has never learned cursive — we are here to help, right in your city.
              </p>
            </div>

            {/* Location card */}
            <div className="mt-8 bg-white rounded-2xl border border-border p-6 shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                      stroke="#E8963A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="12" cy="10" r="3" stroke="#E8963A" strokeWidth="2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Unique Handwriting Classes</h3>
                  <address className="not-italic text-muted text-sm leading-relaxed">
                    Shivaji Nagar, Sanath Nagar
                    <br />
                    Hyderabad, Telangana 500018
                    <br />
                    <a
                      href="tel:+919989016831"
                      className="text-amber hover:text-amber-dark font-medium transition-colors"
                    >
                      +91 9989016831
                    </a>
                  </address>
                  <a
                    href="https://maps.app.goo.gl/qg7SeEBJZztCh8Vc8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-navy hover:text-amber transition-colors mt-3"
                  >
                    View on Google Maps
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-3xl overflow-hidden border border-border shadow-card bg-cream-dark relative min-h-64 lg:min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15219.715793386498!2d78.5092874!3d17.51090485000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c5b3292f2b%3A0xcf09aa27c4acc1cb!2sUnique%20Handwriting%20classes!5e0!3m2!1sen!2sin!4v1774182133817!5m2!1sen!2sin"
              className="w-full h-full absolute inset-0"
              style={{ border: 0, minHeight: '384px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unique Handwriting Classes location — Sanath Nagar, Hyderabad"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
