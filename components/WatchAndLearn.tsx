const playlists = [
  {
    title: 'Handwriting Practice Sessions',
    embedSrc:
      'https://www.youtube.com/embed?listType=playlist&list=PLWpbCgLrf_p5eO9GINVVBPhxGI5Rge_LE',
    listUrl: 'https://youtube.com/playlist?list=PLWpbCgLrf_p5eO9GINVVBPhxGI5Rge_LE',
  },
  {
    title: 'Writing Techniques & Tips',
    embedSrc:
      'https://www.youtube.com/embed?listType=playlist&list=PLWpbCgLrf_p4KauaBqbYbr5PDKfou7Zp4',
    listUrl: 'https://youtube.com/playlist?list=PLWpbCgLrf_p4KauaBqbYbr5PDKfou7Zp4',
  },
]

export default function WatchAndLearn() {
  return (
    <section id="watch" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-5 mx-auto">YouTube</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4 text-balance">
            Watch &amp; Learn — Free Handwriting{' '}
            <span className="text-amber">Videos on YouTube</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our channel for free tutorials, grip demos, and practice playlists — all
            designed to help children improve from home.
          </p>
        </div>

        {/* Layout: Featured left + Playlists right */}
        <div className="grid lg:grid-cols-5 gap-6 items-start">

          {/* Featured video — 3 cols, all in one card */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-border shadow-card overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/yw46IC2-REw?si=KU_z3Wnfggw-ansF"
                title="Dynamic Tripod Grip with Unique and Simple Tools"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="px-5 py-4 border-t border-border">
              <span className="text-xs font-semibold text-amber uppercase tracking-widest">
                Try Once
              </span>
              <h3 className="font-cormorant font-600 text-navy text-xl mt-1 leading-snug">
                Dynamic Tripod Grip with Unique &amp; Simple Tools
              </h3>
              <p className="text-muted text-sm mt-1 leading-relaxed">
                A simple grip adjustment that makes a visible difference in comfort and control —
                using tools every child already has.
              </p>
            </div>
          </div>

          {/* Playlists — 2 cols, stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {playlists.map((playlist, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border shadow-card overflow-hidden"
              >
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={playlist.embedSrc}
                    title={playlist.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="px-4 py-3 border-t border-border flex items-center justify-between gap-3">
                  <h3 className="font-cormorant font-600 text-navy text-lg leading-snug">
                    {playlist.title}
                  </h3>
                  <a
                    href={playlist.listUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View full playlist: ${playlist.title}`}
                    className="flex-shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-amber hover:text-amber-dark transition-colors"
                  >
                    Full Playlist
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}

            {/* Channel link */}
            <a
              href="https://www.youtube.com/@madhu7786"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FF0000] hover:bg-[#cc0000] text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
              </svg>
              Visit Our YouTube Channel
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
