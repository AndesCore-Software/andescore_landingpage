// ──────────────────────────────────────────────────────────────────────────────
// File: src/components/sections/Partners.tsx
// ──────────────────────────────────────────────────────────────────────────────

const partners = [
  {
    name: "Occult Astro 77",
    image: "/occult77.jpg",
    alt: "Occult Astro 77",
  },
  {
    name: "Digital Rad",
    image: "/digital.webp",
    alt: "Digital Rad - Tecnologia em Imagens Médicas",
  },
  {
    name: "Via Litterarum",
    image: "/viaeditora.webp",
    alt: "Via Litterarum Editora",
  },
  {
    name: "Sócio Estatística",
    image: "/socio.webp",
    alt: "Sócio Estatística",
  },
  {
    name: "Diana Global",
    image: "/diana.webp",
    alt: "Diana Global",
  },
  {
    name: "NexApp",
    image: "/nexapplogo.webp",
    alt: "NexApp",
  },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
        Partners
      </h2>

      {/* grid organizado: 1 coluna no mobile, 2 no md, 3 no lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner) => (
          <div key={partner.name} className="text-center">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {partner.name}
            </h3>
            <div className="w-full h-64 rounded-lg shadow-md overflow-hidden bg-white">
              <img
                src={partner.image}
                alt={partner.alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
