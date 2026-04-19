// Add real testimonials here when available
const testimonials = [
  {
    name: 'Geetha Lakshmi',
    text: 'Madhu sir is a highly qualified professional with high standards in understanding and motivating students. I am personally very happy as my son got the opportunity to be his student. His technical teaching skills are excellent.',
    location: 'Hyderabad',
  },
  {
    name: 'Syeda Bilquis Bano',
    text: 'East or west, Madhu sir you are the best. Thank you for training my daughter and improving her writing so well that everyone appreciates how elegantly she writes. She was really inspired and motivated by your process of making every letter beautiful.',
    location: 'Hyderabad',
  },
  {
    name: 'Arshad Nz',
    text: 'Highly recommend. Best handwriting classes so far in Hyderabad. Madhu sir teaches top-notch handwriting skills that improve handwriting very easily and in a short period of time.',
    location: 'Hyderabad',
  },
  {
    name: 'Aruna Kumar K',
    text: 'We enrolled our son and observed good improvement. Thank you so much for your efforts in helping him improve. I strongly recommend these classes for other kids as well.',
    location: 'Hyderabad',
  },
  {
    name: 'vvnss ram',
    text: 'Madhu sir is a nice handwriting teacher and teaches with very effective and fast teaching skills.',
    location: 'Hyderabad',
  },
  {
    name: 'Akhil Mallarapu',
    text: 'The 1-month unique course improved my legibility. Thank you, sir.',
    location: 'Hyderabad',
  },
  {
    name: 'Shiva Jyothi',
    text: 'It is simple, technical correction with technique taught in a unique way.',
    location: 'Hyderabad',
  },
  {
    name: 'Rajeswari Akshinthala',
    text: 'Excellent and at the same time a unique coach.',
    location: 'Hyderabad',
  },
  {
    name: 'SUSHMA NOOKA',
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

        </div>

        {/* Testimonial cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl p-6 border border-border shadow-card card-hover cursor-default"
            >
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
