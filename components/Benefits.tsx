const benefits = [
  {
    icon: '📝',
    title: 'Neater Handwriting',
    desc: 'Clear, consistent letters that are easy to read and look polished on the page.',
    highlight: 'Most visible result',
  },
  {
    icon: '👁️',
    title: 'Better Readability',
    desc: 'Teachers and examiners can read their work clearly, reducing errors caused by misreading.',
    highlight: 'School impact',
  },
  {
    icon: '🌟',
    title: 'Improved Confidence',
    desc: 'When children are proud of their handwriting, they write more willingly and freely.',
    highlight: 'Attitude shift',
  },
  {
    icon: '✍️',
    title: 'Greater Writing Comfort',
    desc: 'Correct grip and posture eliminate hand fatigue, making long writing sessions comfortable.',
    highlight: 'Physical benefit',
  },
  {
    icon: '🎯',
    title: 'Stronger Hand Control',
    desc: 'Fine motor skills improve across all tasks, from art to lab work to examinations.',
    highlight: 'Motor skill growth',
  },
  {
    icon: '📚',
    title: 'Consistent Schoolwork',
    desc: 'Homework, notes, and exams all benefit from the steady improvement in writing quality.',
    highlight: 'Academic impact',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-label mb-5 mx-auto">Outcomes</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            What Your Child Will <span className="text-amber">Gain</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            The improvements go well beyond handwriting. Children leave with skills, habits, and
            confidence that serve them throughout their school life and beyond.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="group bg-cream rounded-2xl p-6 border border-border card-hover cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl" aria-hidden="true">
                  {benefit.icon}
                </div>
                <span className="text-xs font-semibold text-sage bg-sage-light px-2.5 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>
              <h3 className="font-cormorant font-600 text-navy text-xl mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 bg-navy rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-amber/10 rounded-full -translate-y-1/2 translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 bg-sage/10 rounded-full translate-y-1/2 -translate-x-1/2"
            aria-hidden="true"
          />
          <div className="relative z-10">
            <p className="font-cormorant text-white/80 text-lg mb-2">Common problems we address</p>
            <h3 className="heading-display text-white text-2xl sm:text-3xl mb-6 text-balance">
              Poor handwriting, illegible writing, slow writing, poor spacing, weak cursive — we
              help children overcome all of these.
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+919989016831"
                className="inline-flex items-center justify-center gap-2 bg-amber hover:bg-amber-dark text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm"
              >
                Call Now — 9989016831
              </a>
              <a
                href="https://wa.me/919989016831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm border border-white/20"
              >
                Enrol Your Child
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
