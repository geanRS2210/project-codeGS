import React from 'react';
import { StyledMajorAds } from './styles';

export default function MajorAds(): JSX.Element {
  return (
    <StyledMajorAds className="h-full flex-1 flex flex-row justify-center content-center md:pb-16 md:pt-10 order-2 md:order-1">
      <div className=" flex flex-col justify-center content-center border border-red-600 rounded h-full w-3/5 bg-gray-900 bg-opacity-75">
        <div className="flex-1 flex flex-col justify-center content-center text-center text-white font-semibold">
          <p>Imagen teste</p>
        </div>
        <div className="flex-1 flex flex-col justify-center content-center text-center text-white">
          <h1 className="text-2xl font-bold px-2">
            Junte-se ao programa de aprendizado focado em te tornar um
            programador completo
          </h1>

          <p>Acesso imediato as aulas</p>
        </div>
        <div className="flex-1 flex flex-col justify-end pb-6">
          <h2 className="text-center font-semibold text-white w-full mb-2 text-2xl">
            R$ <span className="text-3xl">23,99</span>/mês
          </h2>
          <h4 className="text-center font-semibold text-white w-full mb-6">
            Ou R$<span>239,99</span> à vista
          </h4>
          <button
            type="button"
            className=" bg-red-600 bg-opacity-70 mx-auto w-2/3 text-white font-semibold h-14 rounded border border-red-600 hover:bg-red-600 transition duration-300"
          >
            Comprar Agora
          </button>
        </div>
      </div>
    </StyledMajorAds>
  );
}
