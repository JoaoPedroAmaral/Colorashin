import ArrowNavButton from "../components/ArrowNavButton";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Sparkles, FileText, Clock, Lock, Upload, Download, ArrowRight, ArrowDown } from "lucide-react";

export default function InitialPage() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex flex-col m-auto">
        <div className="w-full bg-gradient-to-b from-mainBg to-secondaryBg py-20 lg:py-32 px-6 flex justify-center items-center overflow-hidden">
          <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-[600px] z-10 w-full">
              <h1 className="text-brandPink font-chango m-0 p-0 text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] leading-tight">
                Transforme Imagens em
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 mt-2 font-chango">
                <h1 className="colorashin text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] flex gap-[2px]">
                  <span>D</span><span>E</span><span>S</span><span>E</span><span>N</span><span>H</span><span>O</span><span>S</span>
                </h1>
                <h1 className="colorashin text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] flex gap-[2px]">
                  <span>C</span><span>O</span><span>L</span><span>O</span><span>R</span><span>I</span><span>D</span><span>O</span>
                </h1>
              </div>
              <p className="text-[#333] text-sm sm:text-lg leading-relaxed mt-6 mb-10 max-w-[500px] lg:max-w-none">
                Crie desenhos únicos a partir das suas fotos. Perfeito para
                crianças, adultos e educadores. Baixe em PDF de alta qualidade e pronto para imprimir.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
                <Link
                  className="bg-brandPink text-white border-none py-3.5 px-8 rounded-full cursor-pointer text-base font-bold text-center font-sans no-underline hover:bg-brandPinkDark transition-transform duration-300 hover:-translate-y-1 shadow-[0_4px_15px_rgba(255,64,129,0.3)] w-full sm:w-auto"
                  to="/transform"
                >
                  Experimentar
                </Link>
                <a
                  className="bg-transparent text-mainText border-2 border-mainText py-3.5 px-8 rounded-full cursor-pointer text-base font-bold text-center font-sans no-underline hover:bg-mainText hover:text-mainBg transition-colors duration-300 w-full sm:w-auto"
                  href="/about"
                >
                  Ver como funciona
                </a>
              </div>
            </div>

            <div className="flex-1 w-full max-w-[500px] flex justify-center items-center relative mt-10 md:mt-16 lg:mt-0">
              <div className="relative w-full aspect-square max-h-[450px]">
                <img
                  src="/assets/image/colorImage.jpg"
                  className="absolute top-0 right-4 sm:right-12 w-[60%] sm:w-[55%] rounded-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] border-4 border-white z-10 -rotate-[6deg] transition-all duration-500 hover:rotate-0 hover:scale-105 object-cover"
                  alt="Original colorida"
                />

                <div className="absolute top-[40%] right-[35%] bg-white p-3 rounded-full shadow-lg z-[15] hidden sm:flex items-center justify-center text-brandPink transform translate-x-1/2 -translate-y-1/2 animate-bounce">
                  <Sparkles size={28} />
                </div>

                <img
                  src="/assets/image/coloringImage.png"
                  className="absolute bottom-4 left-4 sm:left-12 w-[65%] sm:w-[60%] rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 border-white z-20 rotate-[5deg] transition-all duration-500 hover:rotate-0 hover:scale-105 object-cover bg-white"
                  alt="Desenho para colorir"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-secondaryBg w-full px-4 sm:px-8 flex flex-col justify-center items-center text-center py-20 md:py-[12rem]">
          <h1 className="text-white text-[1.5rem] md:text-[2rem] font-chango drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] m-0 p-0">
            Por que escolher Colorashin?
          </h1>
          <p className="mt-2 text-mainText">
            A maneira mais facil de criar desenho para colorir
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-full min-h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] flex flex-col justify-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-brandPink shrink-0">
                <Sparkles size={24} />
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                Transformação Instantânea
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Tecnologia avançada que converte suas fotos em desenhos para
                colorir em segundos.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-full min-h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] flex flex-col justify-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-brandPink shrink-0">
                <FileText size={24} />
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                PDF de Alta Qualidade
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Baixe seus desenhos em PDF prontos para impressão com ótima
                resolução.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-full min-h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] flex flex-col justify-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-brandPink shrink-0">
                <Clock size={24} />
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                Histórico Completo
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Acesse todas as suas transformações sempre que quiser, em um só
                lugar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-300 w-full min-h-[250px] cursor-default hover:-translate-y-2 hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] flex flex-col justify-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#ff4081]/15 flex items-center justify-center text-brandPink shrink-0">
                <Lock size={24} />
              </div>
              <h3 className="text-lg mb-2 text-brandPink font-chango">
                Seguro e Privado
              </h3>
              <p className="text-sm leading-relaxed text-[#333]">
                Suas imagens são processadas com total segurança e privacidade.
              </p>
            </div>
          </div>
        </div>

        <div className="px-4 sm:px-8 text-center bg-gradient-to-b from-secondaryBg to-mainBg w-full py-20 md:py-28">
          <h1 className="text-brandPink font-chango m-0 p-0 text-[1.5rem] md:text-[2rem]">
            Como Funciona
          </h1>
          <p className="mt-3 text-mainText text-sm sm:text-base max-w-[600px] mx-auto">
            Três passos simples para criar seus desenhos personalizados
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-0 max-w-[1100px] mx-auto mt-12">
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 sm:p-8 w-full max-w-[320px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] relative">
              <div className="h-16 w-16 rounded-full bg-brandPink text-white flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(255,64,129,0.3)]">
                <Upload size={28} />
              </div>
              <h3 className="text-xl mb-2 text-brandPink font-chango">
                Envie sua Imagem
              </h3>
              <p className="text-sm leading-relaxed text-[#555] max-w-[260px]">
                Faça upload de fotos, ilustrações ou qualquer imagem que deseja transformar em um belo desenho.
              </p>
            </div>

            <div className="py-4 md:py-0 md:px-4 text-[#ccc] shrink-0">
              <ArrowRight size={28} className="hidden md:block" />
              <ArrowDown size={28} className="block md:hidden mx-auto" />
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 sm:p-8 w-full max-w-[320px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] relative">
              <div className="h-16 w-16 rounded-full bg-brandPink text-white flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(255,64,129,0.3)]">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl mb-2 text-brandPink font-chango">
                Transformação Mágica
              </h3>
              <p className="text-sm leading-relaxed text-[#555] max-w-[260px]">
                Nosso sistema processa a imagem, removendo cores e realçando os traços perfeitos para colorir.
              </p>
            </div>

            <div className="py-4 md:py-0 md:px-4 text-[#ccc] shrink-0">
              <ArrowRight size={28} className="hidden md:block" />
              <ArrowDown size={28} className="block md:hidden mx-auto" />
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-6 sm:p-8 w-full max-w-[320px] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] relative">
              <div className="h-16 w-16 rounded-full bg-brandPink text-white flex items-center justify-center mb-5 shadow-[0_4px_12px_rgba(255,64,129,0.3)]">
                <Download size={28} />
              </div>
              <h3 className="text-xl mb-2 text-brandPink font-chango">
                Baixe e Imprima
              </h3>
              <p className="text-sm leading-relaxed text-[#555] max-w-[260px]">
                Baixe o PDF em alta qualidade, pronto para impressão. É só colorir e se divertir!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-b from-mainBg to-secondaryBg py-20 md:py-28 px-4 sm:px-8">
          <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-brandPink font-chango text-[1.5rem] md:text-[2rem] m-0">
                Veja o Resultado
              </h2>
              <p className="mt-4 text-mainText text-sm sm:text-base leading-relaxed max-w-[450px] mx-auto md:mx-0">
                Transformamos fotos reais em páginas de colorir com traços nítidos e detalhados.
                O resultado é um PDF pronto para imprimir, com qualidade profissional.
              </p>
              <Link
                to="/about"
                className="inline-block mt-6 text-brandPink font-bold font-sans no-underline hover:underline text-sm sm:text-base"
              >
                Saiba mais sobre o processo →
              </Link>
            </div>
            <div className="flex-1 flex justify-center items-center gap-4 sm:gap-6">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/assets/image/colorImage.jpg"
                  alt="Foto original"
                  className="w-[130px] sm:w-[180px] h-[130px] sm:h-[180px] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] object-cover border-4 border-white"
                />
                <span className="text-xs sm:text-sm text-mainText font-sans font-semibold">Original</span>
              </div>
              <div className="text-[#ccc] shrink-0">
                <ArrowRight size={28} className="hidden sm:block" />
                <ArrowRight size={20} className="block sm:hidden" />
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/assets/image/coloringImage.png"
                  alt="Desenho para colorir"
                  className="w-[130px] sm:w-[180px] h-[130px] sm:h-[180px] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.2)] object-cover border-4 border-white bg-white"
                />
                <span className="text-xs sm:text-sm text-mainText font-sans font-semibold">Para Colorir</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-full bg-secondaryBg py-20 md:py-28 px-4 text-center"
          id="ready"
        >
          <div className="max-w-[800px] mx-auto">
            <h1 className="text-brandPink font-chango m-0 p-0 text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] break-words">
              Pronto para começar?
            </h1>
            <p className="mt-4 text-mainText text-sm sm:text-base font-sans max-w-[550px] mx-auto leading-relaxed">
              Crie seu primeiro livro de colorir em menos de 1 minuto. Sem cartão de crédito, 100% gratuito para experimentar.
            </p>
            <Link
              className="inline-block bg-brandPink text-white border-none py-4 px-10 rounded-full cursor-pointer text-lg font-bold font-sans no-underline hover:bg-brandPinkDark transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_15px_rgba(255,64,129,0.3)] mt-10"
              to="/transform"
            >
              Experimentar
            </Link>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 mt-14">
              <div className="flex flex-col items-center">
                <span className="text-brandPink font-chango text-3xl sm:text-4xl">PDF</span>
                <span className="text-mainText text-xs sm:text-sm font-sans mt-1">Alta Qualidade</span>
              </div>
              <div className="w-px h-10 bg-mainText/20 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-brandPink font-chango text-3xl sm:text-4xl">100%</span>
                <span className="text-mainText text-xs sm:text-sm font-sans mt-1">Seguro e Privado</span>
              </div>
              <div className="w-px h-10 bg-mainText/20 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-brandPink font-chango text-3xl sm:text-4xl">Fácil</span>
                <span className="text-mainText text-xs sm:text-sm font-sans mt-1">3 Passos Simples</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <ArrowNavButton />
    </>
  );
}
