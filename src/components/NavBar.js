import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openLogin = () => {
    setIsLoginMode(true);
    setModalOpen(true);
  };

  const openSignup = () => {
    setIsLoginMode(false);
    setModalOpen(true);
  };

  return (
    <>
      <header className={`NavBar ${scrolled ? "scrolled" : ""}`}>
        <Link to="/" className="NavLink">
          <div className="LogoNavbar">
            <img
              src="/assets/image/jashiHeadIcon.png"
              width="50px"
              height="50px"
              className="iconNavBar"
              alt="Logo"
            />
            <h3 className="colorashin">
              <span>C</span>
              <span>o</span>
              <span>l</span>
              <span>o</span>
              <span>r</span>
              <span>a</span>
              <span>s</span>
              <span>h</span>
              <span>i</span>
              <span>n</span>
            </h3>
          </div>
        </Link>

        <div className="NavButtons">
          <button className="LoginButton" onClick={openLogin}>
            Login
          </button>
          <button className="SignUpButton" onClick={openSignup}>
            Registre-se
          </button>
        </div>
      </header>

      {modalOpen && (
        <LoginModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          isLoginMode={isLoginMode}
          setIsLoginMode={setIsLoginMode}
        />
      )}
    </>
  );
}
