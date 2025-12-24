import { Briefcase, Code, Download, User } from "lucide-react";
import React from "react";
import { BorderBeam } from "./magicui/border-beam";
import { AuroraText } from "./magicui/aurora-text";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {""}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-space text-4xl md:text-5xl font-bold mb-6 text-center"
        style={{ fontFamily: "'Lobster', cursive", letterSpacing: "0.1em" }}
        >
            Acia
            <AuroraText colors={["#ff0000", "#ef4444", "#ff5252"]}>
              Eventos
            </AuroraText>
        </h2>
        <div className="bg-primary/10 rounded-xl p-6 mb-10 shadow-md">
          <h3 className="text-2xl font-semibold text-primary text-center mb-2">
            Bem-vindo ao AciaEventos
          </h3>
          <p className="text-gray-700 text-lg text-center">
            Plataforma moderna para facilitar a organização e gestão de eventos
            sociais e corporativos. Explore coleções de itens essenciais e torne
            seu evento inesquecível!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Code className="h-10 w-10 text-red-600 mb-3" />
            <h4 className="font-bold text-lg mb-2 text-primary">
              Tecnologia Moderna
            </h4>
            <p className="text-gray-600 text-center">
              Desenvolvido com React, Vite e Tailwind CSS para garantir rapidez,
              responsividade e visual atraente.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <User className="h-10 w-10 text-red-600 mb-3" />
            <h4 className="font-bold text-lg mb-2 text-primary">
              Facilidade de Uso
            </h4>
            <p className="text-gray-600 text-center">
              Interface intuitiva para planejar, divulgar e administrar eventos
              de qualquer porte.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <Briefcase className="h-10 w-10 text-red-600 mb-3" />
            <h4 className="font-bold text-lg mb-2 text-primary">
              Coleções Essenciais
            </h4>
            <p className="text-gray-600 text-center">
              Itens como cadeiras, mesas, som, tendas e loiça disponíveis para
              tornar seu evento completo.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-base">
            Nosso compromisso é inovar e atender às necessidades dos nossos
            clientes, proporcionando soluções que agregam valor e facilitam o
            dia a dia de quem trabalha com eventos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
