import React from 'react';
import MenuLinkComponent from '../MenuLinks';

import { MenuStyled } from './styles';

export function Menu(): JSX.Element {
  return (
    <MenuStyled className="bg-red-500">
      <MenuLinkComponent href="/" text="Home" className="link-menu" />
    </MenuStyled>
  );
}
