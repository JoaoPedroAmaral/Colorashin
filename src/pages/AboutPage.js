import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArrowNavButton from "../components/ArrowNavButton";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col justify-start items-center gap-10 py-10 mt-[60px] m-auto px-4 sm:px-8 max-w-[1000px]">
        <div className="text-center w-full mt-10 md:mt-20">
          <h1 className="text-brandPink font-chango text-3xl md:text-5xl m-0 p-0 drop-shadow-sm">
            Sobre o Colorashin
          </h1>
          <p className="mt-4 text-mainText text-lg md:text-xl font-sans max-w-[800px] mx-auto leading-relaxed">
            O Colorashin é um sistema cujo objetivo é transformar{" "}
            <span className="font-bold text-brandPink">qualquer imagem</span> em
            uma página para colorir. Nosso maior propósito é incentivar a
            liberdade criativa, permitindo que você crie de forma rápida e
            acessível seus próprios livros de colorir, quadros, pinturas e muito
            mais.
          </p>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10 text-center">
          <h2 className="text-brandPink font-chango text-2xl mb-8">
            Fluxo de Criação
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-mainText font-sans">
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-16 h-16 rounded-full bg-brandPink/15 text-brandPink flex items-center justify-center text-3xl font-chango mb-4 shadow-sm">
                1
              </div>
              <h3 className="font-bold text-lg">Faça o Upload</h3>
              <p className="text-sm mt-2 text-[#555]">
                Escolha suas fotos favoritas ou ilustrações e envie para a
                plataforma.
              </p>
            </div>
            <div className="hidden md:flex text-[#ccc]"><ArrowRight size={32} /></div>
            <div className="flex md:hidden text-[#ccc]"><ArrowDown size={32} /></div>
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-16 h-16 rounded-full bg-brandPink/15 text-brandPink flex items-center justify-center text-3xl font-chango mb-4 shadow-sm">
                2
              </div>
              <h3 className="font-bold text-lg">Mágica do sistema</h3>
              <p className="text-sm mt-2 text-[#555]">
                Processamos as imagens para remover cores e focar nos
                traços essenciais.
              </p>
            </div>
            <div className="hidden md:flex text-[#ccc]"><ArrowRight size={32} /></div>
            <div className="flex md:hidden text-[#ccc]"><ArrowDown size={32} /></div>
            <div className="flex flex-col items-center max-w-[200px]">
              <div className="w-16 h-16 rounded-full bg-brandPink/15 text-brandPink flex items-center justify-center text-3xl font-chango mb-4 shadow-sm">
                3
              </div>
              <h3 className="font-bold text-lg">Baixe o PDF</h3>
              <p className="text-sm mt-2 text-[#555]">
                Garantimos um PDF de alta qualidade, pronto para ser impresso
                e colorido.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8">
          <div className="flex-1 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10">
            <h2 className="text-brandPink font-chango text-2xl mb-6">
              Requisitos
            </h2>
            <ul className="list-disc list-inside text-mainText font-sans space-y-4">
              <li>
                <span className="font-bold">Imagens Nítidas:</span> Fotos ou
                ilustrações sem borrões.
              </li>
              <li>
                <span className="font-bold">Resolução Mínima:</span> 800px x
                800px
              </li>
              <li>
                <span className="font-bold">Resolução Máxima:</span> 2000px x
                2000px
              </li>
              <li>
                <span className="font-bold">Quantidade de imagens recomendada:</span> 5 imagens por arquivo
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10">
            <h2 className="text-brandPink font-chango text-2xl mb-6">
              Próximas Melhorias
            </h2>
            <ul className="list-disc list-inside text-mainText font-sans space-y-3">
              <li>Implementar IA para uma maior qualidade nos traços.</li>
              <li>
                Migrar para um servidor mais potente, melhorando o tempo de
                resposta.
              </li>
              <li>Implementar um nome de domínio customizado (custom domain).</li>
              <li>Capacidade de armazenamento maior via banco pago.</li>
              <li>
                Hospedagem de backend contínua e dedicada (24/7 de operação).
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 md:p-10 text-center mb-10">
          <h2 className="text-brandPink font-chango text-2xl mb-8">Exemplo</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center">
              <span className="font-sans font-bold text-lg mb-3">
                Imagem Original
              </span>
              <img
                src="/assets/image/colorImage.jpg"
                alt="Imagem original"
                className="w-full max-w-[300px] h-auto rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.2)] object-cover"
              />
            </div>
            <div className="hidden md:flex text-[#ccc]"><ArrowRight size={40} /></div>
            <div className="flex md:hidden text-[#ccc]"><ArrowDown size={40} /></div>
            <div className="flex flex-col items-center">
              <span className="font-sans font-bold text-lg mb-3">
                Pronta para Colorir
              </span>
              <img
                src="/assets/image/coloringImage.png"
                alt="Imagem processada para colorir"
                className="w-full max-w-[300px] h-auto rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.2)] object-cover border-2 border-[#eee]"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ArrowNavButton />
    </>
  );
}
