import React from 'react';
import MajorAds from '../majorAds';
import PulseNext from '../PulseNext';
import { StyledIntroduce } from './styles';

export default function Introducer(): JSX.Element {
  return (
    <StyledIntroduce className=" flex flex-col justify-center content-center md:flex md:flex-row md:justify-around md:pt-32 bg-gradient-to-b to-yellow-700 via-gray-800 from-gray-900 text-center md:text-end h-screen relative">
      <MajorAds />
      <div className="h-full flex-1 flex flex-col justify-center content-center order-1 md:order-2 md:pr-6">
        <h1 className="text-4xl m-4 font-semibold">
          Torne-se um dos melhores devs aprendendo e evoluindo!!
        </h1>
        <p className="m-4 font-semibold">
          Com a metodologia de ensino codeGS focada nas ferramentas mais usadas,
          ensinamos o básico e aprimoramos estudantes de todos os níveis de
          desenvolvimento. Aqui você encontra tudo o que precisa para se tornar
          um programador, chega de procurar cursos um a um por ai!!
        </p>
      </div>
      <PulseNext />
    </StyledIntroduce>
  );
}
