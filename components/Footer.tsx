const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About the Tutor', href: '#about' },
  { label: 'What We Teach', href: '#features' },
  { label: 'Practice Activities', href: '#practice' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 17L9 11L13 15L21 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="font-cormorant font-700 text-white text-lg leading-tight block">
                  Unique Handwriting Classes
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Expert cursive handwriting and handwriting improvement classes for children in
              Hyderabad, Telangana. Building neat, confident writers — one child at a time.
            </p>
            <div className="text-white/50 text-xs mb-4">
              Trusted by Hyderabad Families
            </div>
            <a
              href="https://www.youtube.com/@madhu7786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-red-400 text-sm transition-colors group"
              aria-label="Unique Handwriting Classes on YouTube"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500" aria-hidden="true">
                <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
              </svg>
              YouTube Channel
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-amber text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <div className="space-y-4">
              <address className="not-italic">
                <p className="text-white/60 text-sm leading-relaxed">
                  Shivaji Nagar, Sanath Nagar
                  <br />
                  Hyderabad, Telangana 500018
                </p>
              </address>
              <div className="space-y-2">
                <a
                  href="tel:+919989016831"
                  className="flex items-center gap-2 text-white/70 hover:text-amber text-sm transition-colors group"
                  aria-label="Call Unique Handwriting Classes"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.82 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  +91 9989016831
                </a>
                <a
                  href="mailto:mgoud7786@gmail.com"
                  className="flex items-center gap-2 text-white/70 hover:text-amber text-sm transition-colors break-all"
                  aria-label="Email Unique Handwriting Classes"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  mgoud7786@gmail.com
                </a>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919989016831"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-whatsapp text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-200"
                aria-label="WhatsApp Unique Handwriting Classes"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Unique Handwriting Classes. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Sanath Nagar, Hyderabad, Telangana · Handwriting Classes for Children
          </p>
        </div>
      </div>
    </footer>
  )
}
