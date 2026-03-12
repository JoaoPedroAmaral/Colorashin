import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#dcc8ffb3] text-mainText text-center flex flex-col items-center justify-center p-2.5">
      <div className="flex flex-col sm:flex-row justify-evenly w-full mb-2.5 gap-8 sm:gap-0">
        <div className="w-full sm:w-1/3 flex flex-col items-center justify-center text-justify">
          <img src="/assets/image/jashiHeadIcon.png" className="w-[80px] sm:w-[30%]" alt="Logo" />
        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center sm:items-start text-center sm:text-justify">
          <h4 className="font-chango text-brandPink m-0 p-0 my-2.5">
            Links Rápidos
          </h4>
          <Link
            to="/"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Sobre
          </Link>
          <Link
            to="/transform"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Transform Image
          </Link>
          <Link
            to="/account"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Historico
          </Link>

        </div>
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center sm:items-start text-center sm:text-justify mt-6 sm:mt-0">
          <h4 className="font-chango text-brandPink m-0 p-0 my-2.5">Suporte</h4>
          <Link
            to="/help"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Ajuda
          </Link>
          <Link
            to="/contact"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Contato
          </Link>
          <h4 className="font-chango text-brandPink m-0 p-0 my-2.5">Legal</h4>
          <Link
            to="/terms"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Termo de uso
          </Link>
          <Link
            to="/privacy"
            className="text-mainText no-underline my-1.5 mx-2.5 font-bold hover:text-brandPink hover:underline"
          >
            Privacidade
          </Link>
        </div>
      </div>
      <div className="border-t border-mainText flex justify-center items-center w-[90%] md:w-4/5 my-2.5"></div>
      <p className="m-0 text-sm sm:text-base px-2">
        © 2026 Colorashin. Todos os direitos reservados.
      </p>
    </footer>
  );
}
