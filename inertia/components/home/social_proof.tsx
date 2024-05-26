import Marquee from '../ui/marquee'

const companies = [
  'logo-ausone-bazas.gif',
  'logo-cohabit-UB.svg',
  'logo-ffrob.webp',
  'logo-gustave-eiffel-bdx.png',
  'logo-iut_Bordeaux.jpg',
  'logo-kastler.png',
  'logo-namec.jpg',
  'logo-philadelphe.png',
  'logo-rhoban-black.webp',
  'logo-UB-dept-geii.webp',
  'logo-UB-dept-info.webp',
]

export function Companies() {
  return (
    <section id="companies">
      <div className="py-14">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-500">
            Partenaires et sponsors
          </h3>
          <div className="relative mt-6">
            <Marquee className="max-w-full [--duration:40s]">
              {companies.map((src, idx) => (
                <img
                  key={idx}
                  src={`/images/partenaires/${src}`}
                  className="h-14 w-34 object-cover"
                  alt={src}
                />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 bg-gradient-to-r from-white "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 h-full w-1/3 bg-gradient-to-l from-white "></div>
          </div>
        </div>
      </div>
    </section>
  )
}
