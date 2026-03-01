import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function DownloadPage() {
  return (
    <>
      <NavBar />
      <div
        className="bodyTransform"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          gap: "32px",
          padding: "40px 0",
          marginTop: "60px",
        }}
      >
        <div className="headerPerfil" style={{ marginTop: "5em" }}>
          <div>
            <h2>Pedido #ORD-001</h2>
            <p>Acesse e baixe seus desenhos em PDF</p>
          </div>
          <div>
            <Link to="/transform">
              <button
                className="SignUpButton"
                id="logoutBtn"
                style={{ padding: "8px 16px", fontSize: "16px" }}
              >
                Nova Requisição
              </button>
            </Link>
          </div>
        </div>

        <div className="stepsGrid">
          <div className="cardStepItem">
            <div style={{ margin: "12px 0", textAlign: "start" }}>
              <p style={{ margin: "10px 0" }}>Total de paginas</p>
              <h3>15</h3>
            </div>
            <div>🧾</div>
          </div>
          <div className="cardStepItem">
            <div style={{ margin: "12px 0", textAlign: "start" }}>
              <p style={{ margin: "10px 0" }}>preço do documento</p>
              <h3>R$ 9,90</h3>
            </div>
            <div>💰</div>
          </div>
          <div className="cardStepItem">
            <div style={{ margin: "12px 0", textAlign: "start" }}>
              <p style={{ margin: "10px 0" }}>status do documento</p>
              <h3>Concluído</h3>
            </div>
            <div>✅</div>
          </div>
        </div>

        <div className="stepsGrid">
          <div
            className="cardStepItem"
            style={{ alignItems: "start", width: "100%" }}
          >
            <div style={{ textAlign: "start" }}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <span
                  className="status-badge status-concluido"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: 5,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 600,
                    backgroundColor: "#fddde6",
                    color: "#f06292",
                  }}
                >
                  Book
                </span>
                <img
                  src="/assets/image/jashiHeadIcon.png"
                  alt="Sample"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
              <p style={{ fontWeight: "bold", marginTop: "12px" }}>
                Desenho para Colorir - Paisagem
              </p>
              <p style={{ color: "#666", fontSize: "14px" }}>
                2.4 MB • 03 de jan. de 2025
              </p>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <a
                  href="#download"
                  className="btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    width: "80%",
                  }}
                >
                  💹 Baixar PDF
                </a>
                <button className="btn btn-secondary" style={{ width: "10%" }}>
                  📃
                </button>
                <button className="btn btn-secondary" style={{ width: "10%" }}>
                  🔗
                </button>
              </div>
            </div>
          </div>

          <div
            className="cardStepItem"
            style={{ alignItems: "start", width: "100%" }}
          >
            <div style={{ textAlign: "start" }}>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  width: "100%",
                }}
              >
                <span
                  className="status-badge status-concluido"
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    zIndex: 5,
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 600,
                    backgroundColor: "#fddde6",
                    color: "#f06292",
                  }}
                >
                  Paginas
                </span>
                <img
                  src="/assets/image/jashiHeadIcon.png"
                  alt="Sample"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    display: "block",
                  }}
                />
              </div>
              <p style={{ fontWeight: "bold", marginTop: "12px" }}>
                Desenho para Colorir - Paisagem
              </p>
              <p style={{ color: "#666", fontSize: "14px" }}>
                2.4 MB • 03 de jan. de 2025
              </p>

              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <a
                  href="#download"
                  className="btn btn-primary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    width: "80%",
                  }}
                >
                  💹 Baixar PDF
                </a>
                <button className="btn btn-secondary" style={{ width: "10%" }}>
                  📃
                </button>
                <button className="btn btn-secondary" style={{ width: "10%" }}>
                  🔗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
