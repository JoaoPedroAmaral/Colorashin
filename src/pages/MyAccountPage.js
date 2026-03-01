import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function MyAccountPage() {
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
        <div className="headerPerfil" style={{ marginTop: "10em" }}>
          <div>
            <h2 style={{ color: "#FF4081" }}>emailTeste@dominio.com</h2>
            <p>Visualize e gerencie suas transformações</p>
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
              <p style={{ margin: "10px 0" }}>Total de pedidos</p>
              <h3>15</h3>
            </div>
            <div>🧾</div>
          </div>
          <div className="cardStepItem">
            <div style={{ margin: "12px 0", textAlign: "start" }}>
              <p style={{ margin: "10px 0" }}>Concluídos</p>
              <h3>15</h3>
            </div>
            <div>✅</div>
          </div>
          <div className="cardStepItem">
            <div style={{ margin: "12px 0", textAlign: "start" }}>
              <p style={{ margin: "10px 0" }}>Em andamento</p>
              <h3>0</h3>
            </div>
            <div>⏳</div>
          </div>
        </div>

        <div className="HitoricoArea">
          <h2>Histórico de Pedidos</h2>

          <div className="historyContainer">
            {/* Pedido 1 */}
            <div className="historyItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3210/3210134.png"
                alt="Desenho"
                className="item-image"
              />
              <div className="item-content">
                <div className="item-header">
                  <span className="item-title">Pedido #ORD-001</span>
                  <span className="status-badge status-concluido">
                    Concluído
                  </span>
                </div>
                <p className="item-subtitle">Download Único</p>
                <div className="item-meta">
                  <span>📅 03 de janeiro de 2025</span>
                  <span className="price">R$ 9,90</span>
                </div>
                <div className="item-actions">
                  <Link to="/download" className="btn btn-primary">
                    💹 Baixar PDF
                  </Link>
                  <button className="btn btn-secondary">👁 Visualizar</button>
                </div>
              </div>
            </div>

            {/* Pedido 2 */}
            <div className="historyItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3210/3210134.png"
                alt="Desenho"
                className="item-image"
              />
              <div className="item-content">
                <div className="item-header">
                  <span className="item-title">Pedido #ORD-002</span>
                  <span className="status-badge status-concluido">
                    Concluído
                  </span>
                </div>
                <p className="item-subtitle">Pacote 5 Desenhos</p>
                <div className="item-meta">
                  <span>📅 03 de janeiro de 2025</span>
                  <span className="price">R$ 29,90</span>
                </div>
                <div className="item-actions">
                  <button className="btn btn-primary">💹 Baixar PDF</button>
                  <button className="btn btn-secondary">👁 Visualizar</button>
                </div>
              </div>
            </div>

            {/* Pedido 3 */}
            <div className="historyItem">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3210/3210134.png"
                alt="Desenho"
                className="item-image"
              />
              <div className="item-content">
                <div className="item-header">
                  <span className="item-title">Pedido #ORD-003</span>
                  <span className="status-badge status-processando">
                    Processando
                  </span>
                </div>
                <p className="item-subtitle">Download Único</p>
                <div className="item-meta">
                  <span>📅 03 de janeiro de 2025</span>
                  <span className="price">R$ 9,90</span>
                </div>
                <div className="item-actions">
                  <button
                    className="btn btn-disabled"
                    style={{ cursor: "not-allowed", opacity: 0.6 }}
                  >
                    Processando...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
