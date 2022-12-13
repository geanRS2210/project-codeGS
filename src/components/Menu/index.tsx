import React, { ReactNode } from 'react';
import MenuLinkComponent from '../MenuLinks';

import { MenuStyled } from './styles';

export function Menu(): JSX.Element {
  return (
    <MenuStyled>
      <MenuLinkComponent href="/" text="Home" className="link-menu" />
    </MenuStyled>
  );
}
