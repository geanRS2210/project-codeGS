import React from 'react';

import { MenuStyled } from './styles';

export function Menu(): JSX.Element {
  return (
    <MenuStyled className="bg-gradient-to-tl to-red-600 from-black bg-opacity-95 flex flex-col p-4 md:flex-row md:justify-between md:p-2 md:w-screen md:h-32">
      <div className="flex flex-row justify-center items-center order-2 md:justify-start md:flex-1 md:ml-4 md:order-1">
        <div className="flex flex-row justify-center p-2">
          <button
            type="button"
            className="transition duration-300 border-2 border-red-500 hover:bg-red-500 rounded h-12 w-36 p-2 text-white font-bold"
          >
            Inscrever-se
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center order-1 md:order-2" />
      <div className="flex flex-col justify-center p-2 order-3 md:flex-row md:flex-1 md:justify-end md:mr-4 md:order-3">
        <div className="hidden md:flex md:flex-row md:justify-end md:items-center">
          <form className=" h-10">
            <input
              type="email"
              className="border-b-2 border-red-600 rounded mx-3 h-12 w-56 p-2 outline-none bg-white bg-opacity-10 placeholder-slate-50 placeholder-opacity-50 text-white font-semibold"
              placeholder="Digite seu e-mail"
            />
            <button
              type="submit"
              className="transition duration-300 text-red-600 font-bold hover:text-red-700"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    </MenuStyled>
  );
}
