import Image from 'next/image'

const schools = [
  { name: 'Swaminarayan Gurukul', icon: '🏫' },
  { name: 'Sujatha School', icon: '🏫' },
  { name: 'Niraj Public School', icon: '🏫' },
  { name: 'Neelkanth Vidyapeeth International School (CBSE)', icon: '🏫' },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -inset-3 rounded-3xl border-2 border-amber/30"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-amber-light rounded-2xl -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -top-4 -left-4 w-20 h-20 bg-sage-light rounded-2xl -z-10"
                aria-hidden="true"
              />

              {/* Photo container */}
              <div className="relative w-72 sm:w-80 h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-cream-dark border border-border shadow-card">
                <Image
                  src="/images/my-photo.jpeg"
                  alt="Madhu — Founder, Unique Handwriting Classes, Hyderabad"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 288px, 320px"
                  priority
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:-right-6 bg-navy text-white rounded-2xl px-5 py-3 shadow-card text-center whitespace-nowrap">
                <div className="font-cormorant font-700 text-3xl text-amber leading-none">15+</div>
                <div className="text-xs text-white/70 mt-0.5">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="mt-8 lg:mt-0">
            <div className="section-label mb-5">About the Tutor</div>
            <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-6 text-balance">
              Dedicated to Giving Every Child a{' '}
              <span className="text-amber">Beautiful Handwriting</span>
            </h2>

            <div className="space-y-4 text-charcoal/80 leading-relaxed mb-8">
              <p>
                With over 15 years of experience in handwriting training, our tutor brings a depth
                of knowledge and a genuine passion for helping children write with precision and
                pride. Every session is built on patience, encouragement, and a sharp eye for the
                small details that make a big difference.
              </p>
              <p>
                Specialising in correcting grip technique, body posture, and book positioning, the
                classes go beyond surface-level practice. Children learn to form habits that last
                well beyond the classroom — habits that improve their schoolwork, their speed, and
                their confidence.
              </p>
              <p>
                Before founding Unique Handwriting Classes in Hyderabad, the tutor has worked
                directly with students in several well-regarded institutions:
              </p>
            </div>

            {/* School badges */}
            <div className="flex flex-col gap-2.5 mb-8">
              {schools.map((school) => (
                <div
                  key={school.name}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-border shadow-sm"
                >
                  <span className="text-lg" aria-hidden="true">
                    {school.icon}
                  </span>
                  <span className="font-medium text-navy text-sm">{school.name}</span>
                </div>
              ))}
            </div>

            {/* Key traits */}
            <div className="grid grid-cols-2 gap-3">
              {[
                'Grip Correction',
                'Posture Awareness',
                'Patient & Encouraging',
                'Personalised Approach',
              ].map((trait) => (
                <div key={trait} className="flex items-center gap-2 text-sm text-charcoal">
                  <div className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path
                        d="M2 5l2 2 4-4"
                        stroke="#5F8575"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
