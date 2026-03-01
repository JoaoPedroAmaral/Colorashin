import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function InitialPage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollAction = () => {
    if (window.scrollY < 100) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const circumference = 22 * 2 * Math.PI;
  const offset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      <NavBar />

      <div
        className="bodyTransform"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {/* Hero Section */}
        <div className="homeContent" style={{ padding: "12em 0" }}>
          <h1 className="titleTransform">Transforme Imagem em</h1>
          <div style={{ display: "flex" }}>
            <h1 className="colorashin">
              <span>D</span>
              <span>E</span>
              <span>S</span>
              <span>E</span>
              <span>N</span>
              <span>H</span>
              <span>O</span>
              <span>S</span>
            </h1>
            <p>&nbsp;&nbsp;&nbsp;</p>
            <h1 className="colorashin">
              <span>C</span>
              <span>O</span>
              <span>L</span>
              <span>O</span>
              <span>R</span>
              <span>I</span>
              <span>D</span>
              <span>O</span>
            </h1>
          </div>
          <p className="legendTransform">
            Crie desenhos únicos a partir das suas fotos. Perfeito para
            crianças, adultos e educadores. Baixe em PDF de alta qualidade.
          </p>

          <div className="btn_conjunt">
            <Link
              className="transformButton"
              style={{ marginTop: "32px" }}
              to="/transform"
            >
              Experimentar Grátis
            </Link>
            <a
              className="downloadButton"
              style={{ marginTop: "32px", textDecoration: "none" }}
              href="#ready"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="WhyDiv" style={{ padding: "12em 0" }}>
          <h1
            style={{
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Por que escolher Colorashin?
          </h1>
          <p>A maneira mais facil de criar desenho para colorir</p>
          <div className="advantagesGrid">
            <div className="advantageCard">
              <div className="advantageIcon">✨</div>
              <h3>Transformação Instantânea</h3>
              <p>
                Tecnologia avançada que converte suas fotos em desenhos para
                colorir em segundos.
              </p>
            </div>
            <div className="advantageCard">
              <div className="advantageIcon">📄</div>
              <h3>PDF de Alta Qualidade</h3>
              <p>
                Baixe seus desenhos em PDF prontos para impressão com ótima
                resolução.
              </p>
            </div>
            <div className="advantageCard">
              <div className="advantageIcon">🕒</div>
              <h3>Histórico Completo</h3>
              <p>
                Acesse todas as suas transformações sempre que quiser, em um só
                lugar.
              </p>
            </div>
            <div className="advantageCard">
              <div className="advantageIcon">🔒</div>
              <h3>Seguro e Privado</h3>
              <p>
                Suas imagens são processadas com total segurança e privacidade.
              </p>
            </div>
          </div>
        </div>

        {/* How it Works Section */}
        <div className="Funcionality" style={{ padding: "12em 0" }}>
          <h1>Como Funciona</h1>
          <p>Três passos simples para criar seus desenhos personalizados</p>
          <div className="stepsGrid">
            <div className="stepItem">
              <div className="stepCircle">
                <span>1</span>
              </div>
              <h3>Envie sua Imagem</h3>
              <p>Faça upload da imagem que deseja transformar em desenho.</p>
            </div>
            <div className="stepItem">
              <div className="stepCircle">
                <span>2</span>
              </div>
              <h3>Transformação Mágica</h3>
              <p>
                Nossa IA converte sua foto em um lindo desenho para colorir.
              </p>
            </div>
            <div className="stepItem">
              <div className="stepCircle">
                <span>3</span>
              </div>
              <h3>Baixe e Imprima</h3>
              <p>Baixe o PDF em alta qualidade e comece a colorir.</p>
            </div>
          </div>
        </div>

        {/* Ready Section */}
        <div className="readySection" id="ready" style={{ padding: "12em 0" }}>
          <h1>Pronto para começar?</h1>
          <Link
            className="transformButton"
            style={{ marginTop: "32px" }}
            to="/transform"
          >
            Experimentar Grátis
          </Link>
        </div>
      </div>

      <Footer />

      {/* Floating Scroll Button */}
      <div className="scroll-btn-container" onClick={handleScrollAction}>
        <svg className="progress-ring" width="50" height="50">
          <circle
            stroke="#e6e6e6"
            strokeWidth="4"
            fill="transparent"
            r="22"
            cx="25"
            cy="25"
          />
          <circle
            className="progress-ring__circle"
            stroke="#007e7a"
            strokeWidth="4"
            fill="transparent"
            r="22"
            cx="25"
            cy="25"
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: isNaN(offset) ? circumference : offset,
            }}
          />
        </svg>
        <span
          className="arrow-icon"
          style={{
            transform:
              scrollProgress < 50 ? "translateY(0)" : "translateY(-2px)",
          }}
        >
          {scrollProgress < 50 ? "⬇" : "⬆"}
        </span>
      </div>
    </>
  );
}
