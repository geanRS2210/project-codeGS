import Link from 'next/link';
import React from 'react';
import { MenuLink } from './styled';

export type MenuLinkProps = {
  href: string;
  className: string;
  text: string;
};

export default function MenuLinkComponent({
  href,
  className,
  text,
}: MenuLinkProps): JSX.Element {
  return (
    <MenuLink>
      <Link href={href} className={className} passHref>
        {text}
      </Link>
    </MenuLink>
  );
}
