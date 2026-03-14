import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";

export default function HelpPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Retornaremos em breve.");
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-10 py-10 mt-[60px] m-auto px-4 sm:px-8 max-w-[1000px]">
        <div className="text-center w-full mt-10 md:mt-20">
          <h1 className="text-brandPink font-chango text-3xl md:text-5xl m-0 p-0 drop-shadow-sm">
            Ajuda e Contato
          </h1>
          <p className="mt-4 text-mainText text-lg md:text-xl font-sans max-w-[800px] mx-auto leading-relaxed">
            Precisa de ajuda? Estamos aqui para você! Entre em contato
            conosco através das opções abaixo.
          </p>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-brandPink/15 text-brandPink flex items-center justify-center">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-mainText">Email</h3>
                <p className="text-sm text-[#555]">contact@colorashin.com</p>
              </div>
            </div>
            <p className="text-mainText font-sans text-sm leading-relaxed">
              Respondemos em até 24 horas úteis. Para questões técnicas,
              inclua detalhes do problema.
            </p>
          </div>


          <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-brandPink/15 text-brandPink flex items-center justify-center">
                <Send size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-mainText">Redes Sociais</h3>
                <p className="text-sm text-[#555]">@colorashin</p>
              </div>
            </div>
            <p className="text-mainText font-sans text-sm leading-relaxed">
              Siga-nos nas redes sociais para novidades e atualizações.
            </p>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10">
          <h2 className="text-brandPink font-chango text-2xl mb-6 text-center">
            Envie uma Mensagem
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-mainText">Nome</label>
                <input
                  type="text"
                  required
                  className="border border-[#ccc] rounded-lg p-3 font-sans focus:outline-none focus:border-brandPink"
                  placeholder="Seu nome"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-mainText">Email</label>
                <input
                  type="email"
                  required
                  className="border border-[#ccc] rounded-lg p-3 font-sans focus:outline-none focus:border-brandPink"
                  placeholder="seu@email.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-mainText">Assunto</label>
              <input
                type="text"
                required
                className="border border-[#ccc] rounded-lg p-3 font-sans focus:outline-none focus:border-brandPink"
                placeholder="Assunto da mensagem"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-mainText">Mensagem</label>
              <textarea
                required
                rows={5}
                className="border border-[#ccc] rounded-lg p-3 font-sans focus:outline-none focus:border-brandPink resize-none"
                placeholder="Descreva sua dúvida ou problema..."
              />
            </div>
            <button
              type="submit"
              className="bg-brandPink text-white border-none py-3 px-6 rounded-lg cursor-pointer font-sans font-bold hover:bg-brandPinkDark transition-colors mt-2"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10">
          <h2 className="text-brandPink font-chango text-2xl mb-6">
            Perguntas Frequentes
          </h2>
          <div className="flex flex-col gap-4">
            <div className="border-b border-[#eee] pb-4">
              <h3 className="font-bold text-mainText mb-2">
                Como funciona o Colorashin?
              </h3>
              <p className="text-[#555] font-sans text-sm">
                O Colorashin transforma suas imagens em páginas para colorir.
                Basta fazer upload de uma foto e nosso sistema processa para
                remover as cores, deixando apenas os contornos.
              </p>
            </div>
            <div className="border-b border-[#eee] pb-4">
              <h3 className="font-bold text-mainText mb-2">
                Quais formatos de imagem são aceitos?
              </h3>
              <p className="text-[#555] font-sans text-sm">
                Aceitamos imagens JPG, PNG e WEBP. A resolução recomendada é
                entre 800x800 e 2000x2000 pixels.
              </p>
            </div>
            <div className="border-b border-[#eee] pb-4">
              <h3 className="font-bold text-mainText mb-2">
                Quanto tempo leva o processamento?
              </h3>
              <p className="text-[#555] font-sans text-sm">
                O processamento leva em média 1-2 minutos por imagem,
                dependendo do tamanho e complexidade.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-mainText mb-2">
                Posso usar as imagens comercialmente?
              </h3>
              <p className="text-[#555] font-sans text-sm">
                Sim! As imagens processadas são suas para usar como quiser,
                inclusive para fins comerciais.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ArrowNavButton />
    </>
  );
}
