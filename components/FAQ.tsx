'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Who are these handwriting classes for?',
    a: 'Our classes are designed for school-going children of all ages — from early primary school to secondary school. Whether a child is just learning to write or needs to improve existing habits, our program is tailored to meet them at their level.',
  },
  {
    q: 'Do you teach cursive handwriting?',
    a: 'Yes. Cursive handwriting is a core part of our program. We teach children how to form connected, flowing letters with the correct techniques — making cursive writing both neat and natural over time.',
  },
  {
    q: 'Can this help children with poor or illegible handwriting?',
    a: 'Absolutely. Many of our students come with concerns like illegible writing, inconsistent letter formation, poor spacing, or slow writing pace. We identify the root cause — often related to grip, posture, or muscle control — and address it systematically.',
  },
  {
    q: 'Where are the classes located?',
    a: 'We are located at Sanath Nagar, Hyderabad, Telangana 500018. Families from across Hyderabad attend our classes.',
  },
  {
    q: 'How can parents contact Unique Handwriting Classes?',
    a: 'You can reach us by calling or WhatsApp at 9989016831. You can also email us at mgoud7786@gmail.com. We are happy to answer any questions about the program, scheduling, or fees.',
  },
  {
    q: 'How long does it take to see improvement?',
    a: 'Most parents notice visible improvement within 4–8 weeks of regular practice. The pace depends on the child\'s current level, consistency of practice, and individual learning style. Our structured approach ensures steady, measurable progress.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-5 mx-auto">FAQ</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4">
            Frequently Asked <span className="text-amber">Questions</span>
          </h2>
          <p className="text-muted text-lg">
            Answers to the questions parents ask most often.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl border border-border overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-cream-dark/50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-navy text-sm sm:text-base leading-snug pr-4">
                  {faq.q}
                </span>
                <div
                  className={`w-6 h-6 rounded-full bg-white border border-border flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-45 bg-amber border-amber' : ''
                  }`}
                  aria-hidden="true"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={openIndex === i ? 'text-white' : 'text-navy'}
                  >
                    <path
                      d="M6 2v8M2 6h8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>
              <div
                className={`faq-content ${openIndex === i ? 'open' : ''}`}
              >
                <p className="px-6 pb-5 text-charcoal/75 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* More questions CTA */}
        <div className="mt-10 text-center">
          <p className="text-muted text-sm mb-4">Have a question we haven&apos;t answered?</p>
          <a
            href="https://wa.me/919989016831?text=Hello%2C%20I%20have%20a%20question%20about%20the%20handwriting%20classes."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-whatsapp font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
