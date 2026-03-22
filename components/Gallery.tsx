import Image from 'next/image'

// Add more images to public/images/ and list them here
const galleryImages = [
  {
    src: '/images/my-photo.jpeg',
    alt: 'Unique Handwriting Classes Sanath Nagar Hyderabad — tutor with students',
    caption: 'Handwriting classes in Hyderabad',
  },
  // Add more images below as placeholders
  // { src: '/images/class-1.jpeg', alt: 'cursive handwriting training for kids', caption: '...' },
]

const placeholders = [
  { label: 'Class in session', icon: '📸' },
  { label: 'Student work sample', icon: '📝' },
  { label: 'Cursive writing practice', icon: '✍️' },
  { label: 'Grip correction session', icon: '✋' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="section-label mb-5 mx-auto">Gallery</div>
          <h2 className="heading-display text-navy text-3xl sm:text-4xl lg:text-5xl mb-4">
            Inside <span className="text-amber">Our Classes</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            A glimpse of the warm, focused learning environment we create for every child.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Real images */}
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden border border-border shadow-card group ${
                i === 0 ? 'col-span-2 lg:col-span-2 row-span-1' : ''
              }`}
              style={{ minHeight: '240px' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.caption}
              </div>
            </div>
          ))}

          {/* Placeholder slots */}
          {placeholders.map((ph, i) => (
            <div
              key={i}
              className="relative rounded-2xl overflow-hidden border-2 border-dashed border-border bg-white flex flex-col items-center justify-center gap-3 p-6 text-center"
              style={{ minHeight: '200px' }}
            >
              <div className="text-4xl" aria-hidden="true">
                {ph.icon}
              </div>
              <p className="text-sm font-medium text-muted">{ph.label}</p>
              <p className="text-xs text-muted/60">Photo coming soon</p>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted/60 mt-6">
          More photos will be added soon. Contact us to learn more about our classes.
        </p>
      </div>
    </section>
  )
}
