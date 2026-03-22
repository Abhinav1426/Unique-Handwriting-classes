// Add real testimonials here when available
const testimonials = [
  {
    name: 'Geetha Lakshmi',
    rating: 5,
    text: 'Madhu sir is a highly qualified professional with high standards in understanding and motivating students. I am personally very happy as my son got the opportunity to be his student. His technical teaching skills are excellent.',
    location: 'Hyderabad',
  },
  {
    name: 'Syeda Bilquis Bano',
    rating: 5,
    text: 'East or west, Madhu sir you are the best. Thank you for training my daughter and improving her writing so well that everyone appreciates how elegantly she writes. She was really inspired and motivated by your process of making every letter beautiful.',
    location: 'Hyderabad',
  },
  {
    name: 'Arshad Nz',
    rating: 5,
    text: 'Highly recommend. Best handwriting classes so far in Hyderabad. Madhu sir teaches top-notch handwriting skills that improve handwriting very easily and in a short period of time.',
    location: 'Hyderabad',
  },
  {
    name: 'Aruna Kumar K',
    rating: 5,
    text: 'We enrolled our son and observed good improvement. Thank you so much for your efforts in helping him improve. I strongly recommend these classes for other kids as well.',
    location: 'Hyderabad',
  },
  {
    name: 'vvnss ram',
    rating: 5,
    text: 'Madhu sir is a nice handwriting teacher and teaches with very effective and fast teaching skills.',
    location: 'Hyderabad',
  },
  {
    name: 'Akhil Mallarapu',
    rating: 5,
    text: 'The 1-month unique course improved my legibility. Thank you, sir.',
    location: 'Hyderabad',
  },
  {
    name: 'Shiva Jyothi',
    rating: 5,
    text: 'It is simple, technical correction with technique taught in a unique way.',
    location: 'Hyderabad',
  },
  {
    name: 'Rajeswari Akshinthala',
    rating: 5,
    text: 'Excellent and at the same time a unique coach.',
    location: 'Hyderabad',
  },
  {
    name: 'SUSHMA NOOKA',
    rating: 5,
    text: 'Very nice handwriting classes. Super.',
    location: 'Hyderabad',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-5 mx-auto">Reviews</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4">
            What <span className="text-amber">Parents Say</span>
          </h2>

          {/* Google Rating Block */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-cream rounded-2xl border border-border px-8 py-5 shadow-sm mt-4 mb-4">
            <div className="flex flex-col items-center">
              <div
                className="text-5xl font-cormorant font-700 text-navy leading-none"
                aria-label="5.0 rating"
              >
                5.0
              </div>
              <div className="flex text-amber text-xl mt-1" aria-hidden="true">
                ★★★★★
              </div>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" aria-hidden="true" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-navy text-sm">Google Rating</p>
              <p className="text-muted text-sm">10 verified reviews</p>
              <div className="flex items-center gap-1.5 mt-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-xs text-muted font-medium">Verified on Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-6 border border-border shadow-card card-hover cursor-default"
            >
              <div className="flex text-amber mb-4" aria-label={`${t.rating} star rating`}>
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-charcoal/80 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-navy text-sm">{t.name}</p>
                <p className="text-muted text-xs mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Expansion note */}
        <p className="text-center text-xs text-muted/60 mt-8">
          More testimonials will be added. Reviews are from real parents of students at Unique
          Handwriting Classes.
        </p>
      </div>
    </section>
  )
}
