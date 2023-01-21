import React, { useRef } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Container } from './styles';

export default function PulseNext(): JSX.Element {
  return (
    <Container className=" flex-1 order-3 p-4 flex flex-row justify-center content-center md:w-20 md:h-20 md:absolute md:bottom-2 md:cursor-pointer md:right-2/4 md:left-1/2">
      <FaAngleDoubleDown className="h-10 w-10" data-pulse />
    </Container>
  );
}
