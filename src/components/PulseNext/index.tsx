import React, { useRef } from 'react';
import { FaAngleDoubleDown } from 'react-icons/fa';
import { Container } from './styles';

export default function PulseNext(): JSX.Element {
  return (
    <Container className="absolute bottom-2 right-2 w-10 h-10 cursor-pointer right-2/4 left-1/2">
      <FaAngleDoubleDown className="h-10 w-10" />
    </Container>
  );
}
