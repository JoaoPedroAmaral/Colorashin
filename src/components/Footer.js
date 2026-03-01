import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="LinkFooter">
        <div>
          <img
            src="/assets/image/jashiHeadIcon.png"
            width="30%"
            className="iconFooter"
            alt="Logo"
          />
        </div>
        <div>
          <h4 className="FooterTitle">Links Rápidos</h4>
          <Link to="/" className="FooterLink">
            Home
          </Link>
          <Link to="/about" className="FooterLink">
            About
          </Link>
          <Link to="/transform" className="FooterLink">
            Transform Image
          </Link>
          <Link to="/account" className="FooterLink">
            Historico
          </Link>
          <Link to="/download" className="FooterLink">
            Download
          </Link>
        </div>
        <div>
          <h4 className="FooterTitle">Suporte</h4>
          <Link to="/help" className="FooterLink">
            Ajuda
          </Link>
          <Link to="/contact" className="FooterLink">
            Contato
          </Link>
          <h4 className="FooterTitle">Legal</h4>
          <Link to="/terms" className="FooterLink">
            Termo de uso
          </Link>
          <Link to="/privacy" className="FooterLink">
            Privacidade
          </Link>
        </div>
      </div>
      <div className="LineFooter"></div>
      <p style={{ margin: 0 }}>
        © 2026 Colorashin. Todos os direitos reservados.
      </p>
    </footer>
  );
}
