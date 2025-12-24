import React, { useState, useEffect } from "react";
// Imagens agora são servidas da pasta public/assets/gallery
import NavBar from "../components/NavBar";

const categories = [
  "Todas",
  "Crianças",
  "Casamento",
  "Graduação",
  "Aniversário",
  "Outros"
];

const photos = [
  { src: "/assets/gallery/evento1.png", category: "Crianças" },
  { src: "/assets/gallery/evento2.png", category: "Crianças" },
  { src: "/assets/gallery/evento3.png", category: "Crianças" },
  { src: "/assets/gallery/evento4.png", category: "Crianças" },
  { src: "/assets/gallery/evento5.png", category: "Crianças" },
  { src: "/assets/gallery/evento6.png", category: "Casamento" },
  { src: "/assets/gallery/evento8.png", category: "Graduação" },
  { src: "/assets/gallery/evento9.png", category: "Graduação" },
  { src: "/assets/gallery/evento10.png", category: "Aniversário" },
  { src: "/assets/gallery/evento12.png", category: "Aniversário" },
  { src: "/assets/gallery/evento14.png", category: "Aniversário" },
  { src: "/assets/gallery/evento15.png", category: "Aniversário" },
  { src: "/assets/gallery/evento16.png", category: "Aniversário" },
  { src: "/assets/gallery/evento18.png", category: "Aniversário" },
  { src: "/assets/gallery/evento14.png", category: "Outros" },
];

const scrollToHash = () => {
  if (window.location.hash) {
    const el = document.getElementById(window.location.hash.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export default function Gallery() {
  const [selected, setSelected] = useState("Todas");
  const [page, setPage] = useState(1);
  const imagesPerPage = 6;

  useEffect(() => {
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  const filteredPhotos =
    selected === "Todas"
      ? photos
      : photos.filter((p) => p.category === selected);

  // Pagination logic
  const totalPages = Math.ceil(filteredPhotos.length / imagesPerPage);
  const paginatedPhotos = filteredPhotos.slice(
    (page - 1) * imagesPerPage,
    page * imagesPerPage
  );



  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar />
      <main>
        <section className="py-16 px-4 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 mt-13 text-center text-primary">Galeria de Eventos</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border font-semibold transition-colors duration-200 ${selected === cat ? "bg-primary text-white" : "bg-white text-primary border-primary"}`}
                onClick={() => {
                  setSelected(cat);
                  setPage(1);
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {paginatedPhotos.map((photo, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                <img src={photo.src} alt={photo.category} className="w-full h-64 object-cover" />
                <div className="p-2 text-center text-sm text-muted-foreground">{photo.category}</div>
              </div>
            ))}
            {paginatedPhotos.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground">Nenhuma foto encontrada para esta categoria.</div>
            )}
          </div>
          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  className={`w-9 h-9 rounded-full border font-semibold transition-colors duration-200 flex items-center justify-center ${page === i + 1 ? "bg-primary text-white border-primary" : "bg-white text-primary border-primary hover:bg-primary hover:text-white"}`}
                  onClick={() => setPage(i + 1)}
                  aria-label={`Ir para página ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
