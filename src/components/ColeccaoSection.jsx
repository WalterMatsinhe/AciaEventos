import React from "react";
import colecao1 from '../assets/colecao/colecao1.png';
import colecao2 from '../assets/colecao/colecao2.png';
import colecao3 from '../assets/colecao/colecao3.png';
import colecao4 from '../assets/colecao/colecao4.png';
import colecao5 from '../assets/colecao/colecao5.png';
import colecao6 from '../assets/colecao/colecao6.png';

const coleccaoItems = [
  {
    name: "Cadeiras",
    href: "#chairs",
    image: colecao2,
    description: "Diversos modelos de cadeiras para eventos sociais e corporativos.",
  },
  {
    name: "Mesas",
    href: "#tables",
    image: colecao4,
    description: "Mesas de vários tamanhos e estilos para todas as ocasiões.",
  },
  {
    name: "Som",
    href: "#sound",
    image: colecao6,
    description: "Equipamentos de som de alta qualidade para seu evento.",
  },
  {
    name: "Tendas",
    href: "#tents",
    image: colecao3,
    description: "Tendas resistentes e elegantes para proteção e conforto.",
  },
  {
    name: "Loiça",
    href: "#dishes",
    image: colecao1,
    description: "Pratos, copos, talheres e utensílios de mesa para servir com elegância.",
  },
  {
    name: "Outros Itens",
    href: "#other-items",
    image: colecao5,
    description: "Acessórios e itens diversos para complementar seu evento.",
  },
];

export default function ColeccaoSection() {
  return (
    <section className="py-6 md:py-16 -mt-145 md:-mt-75 bg-gray-50" id="coleccao">
      <div className="max-w-6xl mx-auto px-2 md:px-4">
        <h2 className="text-3xl font-bold text-center mb-4 md:mb-10 text-black font-lobster">Coleções</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {coleccaoItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 block"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{item.name}</h3>
                <p className="text-gray-500 text-base">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
