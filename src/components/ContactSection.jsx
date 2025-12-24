import React, { useState } from "react";
import { AuroraText } from "./magicui/aurora-text";
import { WordRotate } from "./magicui/word-rotate";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";
import { BorderBeam } from "./magicui/border-beam";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "3254b0de-7d62-4d0d-b1d8-7f64fa6063e4"); // 🔐 Replace with your actual Web3Forms access key

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        toast({
          title: "Message Sent!",
          description:
            "Thank you for your message. I will get back to you soon.",
        });
        e.target.reset();
      } else {
        toast({
          title: "Submission Failed",
          description: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Network error or invalid request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <h2
        className="text-space text-4xl md:text-5xl font-bold mb-6 text-center"
        style={{ fontFamily: "'Lobster', cursive", letterSpacing: "0.1em" }}
      >
        Fale 
        <AuroraText colors={["#ff0000", "#ef4444", "#ff5252"]}>
             connosco
        </AuroraText>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Tem um evento para organizar ou quer saber mais sobre nossos serviços? Entre em contato e teremos o maior prazer em ajudar a tornar seu evento inesquecível!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Informações de Contato */}
        <div className="space-y-8">
          <h3 className="text-2xl font font-semibold mb-6 text-primary">
            Informações de Contato
          </h3>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">E-mail</h4>
                <a
                  href="mailto:Walter2000matsinhe@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  aciaeventos@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Telefone</h4>
                <a
                  href="tel:0704991866"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  (+258) 843870820
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Localização</h4>
                <span className="text-muted-foreground hover:text-primary transition-colors">
                  Maputo, Moçambique
                </span>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <WordRotate words={['Conecte-se', 'Com', 'AciaEventos']} speed={1} className = 'text-3xl font-semibold text-black mb-4'/>
            <div className="flex space-x-4 justify-center">
              <a href="#" target="_blank" className="group">
                <Linkedin className="transition-colors duration-200 group-hover:text-red-600" />
              </a>
              <a href="https://www.instagram.com/w.x.l.t.x.r/" target="_blank" className="group">
                <Instagram className="transition-colors duration-200 group-hover:text-red-600" />
              </a>
              <a href="#" target="_blank" className="group">
                <Facebook className="transition-colors duration-200 group-hover:text-red-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="relative bg-card p-8 rounded-lg shadow-xs overflow-hidden">
          <h3 className="text-2xl font-semibold mb-6 text-primary">Envie uma Mensagem</h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2 text-left"
              >
                Nome:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md border border-input text-black bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Seu nome..."
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 text-left"
              >
                E-mail:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md border border-input text-black bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="seuemail@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-left"
              >
                Mensagem:
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full px-4 py-3 rounded-md border border-input text-black bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Olá, gostaria de saber mais sobre..."
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className={cn(
                  "w-full flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
                style={{ cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                <Send size={18} className={isSubmitting ? 'animate-spin' : ''} />
              </button>
            </div>
          </form>
          <BorderBeam
            duration={5}
            size={800}
            className="from-transparent via-primary to-primary"
            borderWidth={3}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
