import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useAuth } from "../context/AuthContext";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
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

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full flex items-center justify-between z-[1000] bg-secondaryBg transition-all duration-300 ${scrolled ? "bg-[rgba(220,200,255,0.7)] backdrop-blur-md shadow-md" : "py-0"}`}
      >
        <Link
          to="/"
          className="text-mainText no-underline mx-2.5 font-bold hover:text-brandPink hover:underline"
        >
          <div className="flex items-center">
            <img
              src="/assets/image/jashiHeadIcon.png"
              className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] iconNavBar"
              alt="Logo"
            />
            <h3 className="colorashin font-chango text-brandPink m-0 p-0 text-lg sm:text-xl md:text-2xl hidden sm:flex ml-2">
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

        <div className="flex items-center gap-1.5 sm:gap-2.5 mx-2 sm:mx-5">
          {isAuthenticated ? (
            <>
              <span className="text-xs sm:text-sm font-sans text-mainText font-semibold truncate max-w-[80px] sm:max-w-[180px] hidden md:block">
                {user?.email}
              </span>
              <Link
                to="/account"
                className="bg-transparent text-mainText border-2 border-mainText py-1 px-2 sm:py-1.5 sm:px-3.5 rounded cursor-pointer font-bold font-sans hover:bg-mainText hover:text-mainBg no-underline text-xs sm:text-sm whitespace-nowrap"
              >
                <span className="hidden sm:inline">Minha </span>Conta
              </Link>
              <button
                className="bg-brandPink text-white border-none py-1.5 px-3 sm:py-2 sm:px-4 rounded cursor-pointer font-sans font-bold hover:bg-brandPinkDark text-xs sm:text-sm"
                onClick={handleLogout}
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-brandPink text-white border-none py-1.5 px-3 sm:py-2 sm:px-4 rounded cursor-pointer font-sans font-bold hover:bg-brandPinkDark text-xs sm:text-base"
                onClick={openLogin}
              >
                Login
              </button>
              <button
                className="bg-transparent text-mainText border-2 border-mainText py-1 px-2 sm:py-1.5 sm:px-3.5 rounded cursor-pointer font-bold font-sans hover:bg-mainText hover:text-mainBg text-xs sm:text-base whitespace-nowrap"
                onClick={openSignup}
              >
                Registre-se
              </button>
            </>
          )}
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
