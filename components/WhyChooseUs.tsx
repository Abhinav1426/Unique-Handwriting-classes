const reasons = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#E8963A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: '15+ Years of Experience',
    desc: 'Over a decade and a half of dedicated handwriting training, helping hundreds of children write with confidence and clarity.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#5F8575" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Grip, Posture & Habit Focus',
    desc: 'Correct grip technique, proper body posture, and healthy writing habits are addressed from the very first session.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="#E8963A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Structured Practice',
    desc: 'A step-by-step curriculum that builds from basics to fluent cursive writing, with daily exercises and tracked progress.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" stroke="#5F8575" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Built for School-Age Children',
    desc: 'Classes are designed specifically for children in primary and secondary school, meeting them at their level and pace.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#E8963A" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="10" r="3" stroke="#E8963A" strokeWidth="2" />
      </svg>
    ),
    title: 'Local & Trusted in Hyderabad',
    desc: 'A well-known and trusted name in Sanath Nagar, Hyderabad, with a strong local reputation built through years of consistent results.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="#5F8575" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Personalized Guidance',
    desc: 'Every child receives individual attention. The tutor identifies specific weaknesses and tailors practice accordingly.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-5 mx-auto">Why Choose Us</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            Why Parents Choose{' '}
            <span className="text-amber">Unique Handwriting Classes</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            We go beyond just practicing letters. Our focus is on building lasting skills that help
            children write neatly, confidently, and comfortably — for life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group bg-cream rounded-2xl p-6 border border-border card-hover cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="font-cormorant font-700 text-navy text-xl mb-2 leading-snug">
                {reason.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
