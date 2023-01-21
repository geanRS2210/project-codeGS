import React from 'react';

type Invisible = {
  invisible: boolean;
};

export function ButtonInsc({ invisible }: Invisible): JSX.Element {
  return (
    <div
      className={`invisible-mobile transition duration-1000 ${
        invisible ? 'invisible' : 'block fixed top-10 left-8 z-10'
      } bg-red-600 bg-opacity-70 text-white font-semibold rounded border border-red-600 hover:bg-red-600 transition duration-300 `}
      data-button
    >
      <button type="button" className="btn-inscrever">
        Comprar Agora
      </button>
    </div>
  );
}
