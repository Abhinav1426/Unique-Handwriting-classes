export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-hero-gradient"
      aria-label="Hero"
    >
      {/* Decorative background shapes */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full bg-amber-light/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-sage-light/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #1B3A4B 0px, transparent 1px, transparent 60px, #1B3A4B 60px), repeating-linear-gradient(90deg, #1B3A4B 0px, transparent 1px, transparent 60px, #1B3A4B 60px)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <div className="section-label mb-6 mx-auto">
          <span>✦</span>
          Trusted by Hyderabad Families
        </div>

        <h1 className="heading-display text-navy text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">
          Cursive Handwriting &amp; Handwriting Improvement Classes for Children in{' '}
          <span className="ink-underline text-amber">Hyderabad</span>
        </h1>

        <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Unique Handwriting Classes helps children improve neatness, cursive writing, spacing,
          letter formation, grip, and writing confidence through guided practice and personal
          attention.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-10">
          {[
            { value: '15+', label: 'Years Experience' },
            { value: '5', label: 'Reputed Schools' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-cormorant font-700 text-3xl text-navy leading-none">
                {stat.value}
              </div>
              <div className="text-xs text-muted font-medium mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+919989016831"
            className="flex items-center justify-center gap-2.5 bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-amber hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Call Unique Handwriting Classes"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            href="https://wa.me/919989016831?text=Hello%2C%20I%20am%20interested%20in%20handwriting%20classes%20for%20my%20child."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 btn-whatsapp font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="WhatsApp Unique Handwriting Classes"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Now
          </a>
          <a
            href="https://maps.app.goo.gl/qg7SeEBJZztCh8Vc8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-white border border-border hover:border-navy text-navy font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-card hover:-translate-y-0.5 text-sm sm:text-base"
            aria-label="Get directions to Unique Handwriting Classes"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
      </div>

    </section>
  )
}
