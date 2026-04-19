export default function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 bg-sage/10 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-amber/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section label */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/80 text-xs font-semibold uppercase tracking-widest mb-8">
          <span className="text-amber">✦</span>
          Unique Handwriting Classes · Hyderabad
        </div>

        <h2 className="heading-display text-white text-3xl sm:text-4xl lg:text-6xl mb-6 text-balance">
          Give Your Child the Gift of{' '}
          <span className="text-amber">Beautiful Handwriting</span>
        </h2>

        <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Enrol your child in Unique Handwriting Classes today and watch their confidence, neatness,
          and love for writing grow — one session at a time. Classes are available now in Sanath
          Nagar, Hyderabad.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+919989016831"
            className="flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-amber hover:-translate-y-0.5 text-base w-full sm:w-auto"
            aria-label="Call to enrol your child"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            href="https://wa.me/919989016831?text=Hello%2C%20I%20would%20like%20to%20enrol%20my%20child%20for%20handwriting%20classes%20in%20Hyderabad."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 btn-whatsapp font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base w-full sm:w-auto"
            aria-label="WhatsApp to enquire about handwriting classes"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Enrol Your Child — WhatsApp
          </a>
          <a
            href="https://maps.app.goo.gl/qg7SeEBJZztCh8Vc8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base w-full sm:w-auto"
            aria-label="Get directions to handwriting classes"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
            </svg>
            Get Directions
          </a>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 pt-12 border-t border-white/10">
          {[
            { label: '15+ Years', sub: 'Teaching Experience' },
            { label: 'Hyderabad', sub: 'Sanath Nagar · 500018' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-cormorant font-700 text-amber text-2xl leading-none">
                {item.label}
              </div>
              <div className="text-white/50 text-xs mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
