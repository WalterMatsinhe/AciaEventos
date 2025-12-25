import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import {
  Briefcase,
  Sparkles,
  ClipboardList,
  Utensils,
  Camera,
  Music,
} from "lucide-react";

const servicos = [
  {
    title: "Aluguer de Equipamentos",
    description: "Cadeiras, mesas, tendas, loiça, som e outros itens essenciais para eventos sociais e corporativos.",
    icon: <Briefcase className="w-10 h-10 text-red-600 mb-2" />,
    price: "Sob consulta",
    details: "Oferecemos uma vasta gama de equipamentos para alugar, incluindo cadeiras, mesas, tendas, loiça, sistemas de som e muito mais. Os preços variam conforme a quantidade e o tipo de equipamento. Solicite um orçamento personalizado.",
    itens: [
      { nome: "Cadeira", preco: "70,00 MZN / unidade" },
      { nome: "Mesa", preco: "350,00 MZN / unidade" },
      { nome: "Tenda", preco: "a partir de 5000,00 MZN" },
      { nome: "Loiça", preco: "35,00 MZN / peça" },
      { nome: "Sistema de som", preco: "a partir de 10.500,00 MZN" }
    ]
  },
  {
    title: "Decoração de Eventos",
    description: "Serviço completo de decoração para casamentos, aniversários, formaturas e eventos empresariais.",
    icon: <Sparkles className="w-10 h-10 text-red-600 mb-2" />,
    price: "A partir de 10.500,00 MZN",
    details: "Decoração personalizada para todo o tipo de eventos. Inclui flores, iluminação, painéis decorativos e muito mais. O valor depende do porte e tema do evento.",
    itens: [
      { nome: "Arranjo de flores", preco: "a partir de 2.100,00 MZN" },
      { nome: "Iluminação decorativa", preco: "a partir de 3.500,00 MZN" },
      { nome: "Painel personalizado", preco: "a partir de 4.200,00 MZN" }
    ]
  },
  {
    title: "Organização e Planeamento",
    description: "Consultoria e apoio na organização, logística e gestão do seu evento.",
    icon: <ClipboardList className="w-10 h-10 text-red-600 mb-2" />,
    price: "A partir de 7.000,00 MZN",
    details: "Acompanhamento completo desde o planeamento até à execução do evento. Inclui cronograma, fornecedores, logística e suporte no dia.",
    itens: [
      { nome: "Consultoria inicial", preco: "7.000,00 MZN" },
      { nome: "Gestão do evento", preco: "a partir de 14.000,00 MZN" }
    ]
  },
  {
    title: "Catering e Buffet",
    description: "Parcerias com fornecedores para garantir alimentação de qualidade e serviço de buffet.",
    icon: <Utensils className="w-10 h-10 text-red-600 mb-2" />,
    price: "Sob consulta",
    details: "Menus variados para todos os gostos e necessidades. Opções vegetarianas, veganas e tradicionais. Preço por pessoa mediante escolha do menu.",
    itens: [
      { nome: "Menu tradicional", preco: "a partir de 1.050,00 MZN / pessoa" },
      { nome: "Menu vegetariano", preco: "a partir de 1.190,00 MZN / pessoa" },
      { nome: "Menu vegano", preco: "a partir de 1.260,00 MZN / pessoa" }
    ]
  },
  {
    title: "Fotografia e Vídeo",
    description: "Registo profissional dos melhores momentos do seu evento.",
    icon: <Camera className="w-10 h-10 text-red-600 mb-2" />,
    price: "A partir de 14.000,00 MZN",
    details: "Cobertura fotográfica e de vídeo com profissionais experientes. Inclui edição e entrega digital dos registos.",
    itens: [
      { nome: "Cobertura fotográfica", preco: "14.000,00 MZN" },
      { nome: "Cobertura vídeo", preco: "17.500,00 MZN" },
      { nome: "Pacote foto + vídeo", preco: "28.000,00 MZN" }
    ]
  },
  {
    title: "Recreação e Animação",
    description: "Atividades, música, entretenimento e recreação para crianças e adultos.",
    icon: <Music className="w-10 h-10 text-red-600 mb-2" />,
    price: "A partir de 5.600,00 MZN",
    details: "Serviços de animação, música ao vivo, DJ, jogos e atividades para todas as idades. Personalize o seu pacote de animação.",
    itens: [
      { nome: "Animação infantil", preco: "5.600,00 MZN" },
      { nome: "DJ", preco: "a partir de 8.400,00 MZN" },
      { nome: "Música ao vivo", preco: "a partir de 14.000,00 MZN" }
    ]
  }
];

export default function Servicos() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServico, setSelectedServico] = useState(null);

  const openModal = (servico) => {
    setSelectedServico(servico);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedServico(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-6xl mx-auto px-4 py-16 ">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-primary font-lobster mt-8">Serviços</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Oferecemos soluções completas para tornar seu evento inesquecível. Veja abaixo nossos principais serviços:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, idx) => (
            <button
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:ring-2 hover:ring-red-500 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={() => openModal(servico)}
              aria-label={`Ver detalhes de ${servico.title}`}
              type="button"
            >
              <span>{servico.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-primary text-center">{servico.title}</h3>
              <p className="text-gray-600 text-center">{servico.description}</p>
            </button>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && selectedServico && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-85 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-red-600 text-2xl font-bold focus:outline-none"
                onClick={closeModal}
                aria-label="Fechar modal"
              >
                ×
              </button>
              <div className="flex flex-col items-center">
                <span>{selectedServico.icon}</span>
                <h3 className="text-2xl font-bold mb-2 text-primary text-center">{selectedServico.title}</h3>
                <p className="text-gray-700 text-center mb-4">{selectedServico.details}</p>
                <div className="text-lg font-semibold text-red-600 mb-2">Preço: {selectedServico.price}</div>
                {selectedServico.itens && selectedServico.itens.length > 0 && (
                  <div className="w-full mb-4">
                    <h4 className="text-md font-semibold text-gray-800 mb-2 text-center">Itens e Preços:</h4>
                    <ul className="divide-y divide-gray-200">
                      {selectedServico.itens.map((item, idx) => (
                        <li key={idx} className="flex justify-between py-1 px-2 text-gray-700">
                          <span>{item.nome}</span>
                          <span className="font-medium text-red-600">{item.preco}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button
                  className="mt-2 px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg shadow hover:from-red-600 hover:to-red-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                  onClick={closeModal}
                >Fechar</button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
