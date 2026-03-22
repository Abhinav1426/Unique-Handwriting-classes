const activities = [
  {
    step: '01',
    title: 'Tracing Letters & Words',
    desc: 'Children begin by tracing carefully designed letter and word templates, building muscle memory for correct form before writing independently.',
    color: 'bg-amber-light border-amber/30',
    accent: 'text-amber',
  },
  {
    step: '02',
    title: 'Writing in Cursive',
    desc: 'Guided cursive writing practice develops the flowing, connected style that improves both speed and elegance in everyday writing.',
    color: 'bg-sage-light border-sage/30',
    accent: 'text-sage',
  },
  {
    step: '03',
    title: 'Copying Short Paragraphs',
    desc: 'Copying meaningful passages helps children apply their skills in a realistic context, reinforcing letter formation, spacing, and posture simultaneously.',
    color: 'bg-amber-light border-amber/30',
    accent: 'text-amber',
  },
  {
    step: '04',
    title: 'Dictation Practice',
    desc: 'Dictation exercises train children to write at a natural pace without looking at the text, building fluency and focus.',
    color: 'bg-sage-light border-sage/30',
    accent: 'text-sage',
  },
  {
    step: '05',
    title: 'Journaling by Hand',
    desc: 'Daily journaling encourages free writing, helping children apply everything they have learned in a personal, expressive format.',
    color: 'bg-amber-light border-amber/30',
    accent: 'text-amber',
  },
]

export default function Practice() {
  return (
    <section id="practice" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Header */}
          <div className="lg:sticky lg:top-28">
            <div className="section-label mb-5">How Children Practice</div>
            <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
              A Structured Path to{' '}
              <span className="text-amber">Confident Writing</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              Each session follows a thoughtful progression of activities designed to build skill,
              stamina, and confidence at every stage of learning.
            </p>

            {/* Decorative quote */}
            <div className="bg-white rounded-2xl p-6 border border-border shadow-card deco-border-left">
              <p className="font-cormorant text-navy text-xl leading-relaxed italic">
                &ldquo;Good handwriting is not just about neatness — it is about confidence on
                paper. Every child can write beautifully with the right guidance.&rdquo;
              </p>
              <p className="text-muted text-sm mt-3 font-medium">— Unique Handwriting Classes</p>
            </div>
          </div>

          {/* Right: Activity steps */}
          <div className="flex flex-col gap-4">
            {activities.map((activity, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 border ${activity.color} card-hover cursor-default relative`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`font-cormorant font-700 text-4xl ${activity.accent} leading-none flex-shrink-0 w-12 text-center`}
                    aria-hidden="true"
                  >
                    {activity.step}
                  </div>
                  <div>
                    <h3 className="font-cormorant font-600 text-navy text-xl mb-1.5 leading-snug">
                      {activity.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm leading-relaxed">{activity.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
