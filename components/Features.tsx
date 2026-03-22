const features = [
  {
    icon: '✋',
    title: 'Grip Correction',
    desc: 'Teaching the correct way to hold a pen or pencil to avoid strain and enable smooth, controlled writing.',
  },
  {
    icon: '🪑',
    title: 'Posture & Book Position',
    desc: 'Proper sitting posture and book angle to reduce fatigue and support neat, consistent writing over time.',
  },
  {
    icon: '🖊️',
    title: 'Right Writing Tools',
    desc: 'Guidance on selecting the best pens, pencils, and paper that suit each child\'s age and skill level.',
  },
  {
    icon: '🎯',
    title: 'Precision Before Speed',
    desc: 'Building accuracy and control first, so speed develops naturally without sacrificing neatness.',
  },
  {
    icon: '🔤',
    title: 'Letter Formation',
    desc: 'Consistent and correctly formed letters — both uppercase and lowercase — as the foundation of good handwriting.',
  },
  {
    icon: '📏',
    title: 'Spacing & Alignment',
    desc: 'Even spacing between letters and words, with proper baseline alignment, for readable and neat writing.',
  },
  {
    icon: '💪',
    title: 'Hand Muscle Strength',
    desc: 'Targeted exercises to strengthen the fine motor muscles needed for fluid, effortless writing.',
  },
  {
    icon: '📅',
    title: 'Daily Practice Habits',
    desc: 'Structured daily practice routines that build consistency and make improvement steady and measurable.',
  },
  {
    icon: '✨',
    title: 'Personal Writing Style',
    desc: 'As skills mature, children are encouraged to develop a refined personal style that is both neat and expressive.',
  },
  {
    icon: '📖',
    title: 'Cursive, Print & Italic',
    desc: 'Comprehensive training across all three major script styles, preparing children for any writing context.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-5 mx-auto">What We Teach</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            Our Handwriting Improvement <span className="text-amber">Program</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive curriculum that addresses every aspect of good handwriting — from how
            the pen is held to how each letter flows on the page.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-cream rounded-2xl p-5 border border-border card-hover cursor-default relative overflow-hidden"
            >
              {/* Hover accent */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-amber-light/0 to-amber-light/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                aria-hidden="true"
              />
              <div className="relative z-10">
                <div className="text-2xl mb-3" aria-hidden="true">
                  {feature.icon}
                </div>
                <h3 className="font-cormorant font-600 text-navy text-lg mb-1.5 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-12 text-center">
          <p className="text-muted mb-4 text-sm">
            Interested in enrolling your child? Get in touch to learn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919989016831"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              Call for Details · 9989016831
            </a>
            <a
              href="https://wa.me/919989016831?text=Hello%2C%20I%20want%20to%20know%20more%20about%20the%20handwriting%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-whatsapp font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
            >
              WhatsApp for Enquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
