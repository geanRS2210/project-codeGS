import React from 'react';

import { MenuStyled } from './styles';

export function Menu(): JSX.Element {
  return (
    <MenuStyled className="bg-red-200 flex flex-col p-4 md:flex-row md:justify-between md:p-2 md:w-screen">
      <div className="flex flex-row justify-center md:justify-start md:flex-1">
        <h1>Olá mundo</h1>
      </div>
      <div className="flex flex-col justify-center p-2 md:flex-row md:flex-1 md:justify-end">
        <span className="text-center">Olá</span>
        <span className="text-center">Olá</span>
        <span className="text-center">Olá</span>
        <span className="text-center">Olá</span>
      </div>
    </MenuStyled>
  );
}
