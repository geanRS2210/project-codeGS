import React, { useRef, useState, useEffect } from 'react';
import Introducer from '../components/ContainerIntroduce';
import { Menu } from '../components/Menu';
import { ButtonInsc } from '../components/Menu/button';
import PulseNext from '../components/PulseNext';

export default function Home() {
  const [windowState, setWindowState] = useState<Window & typeof globalThis>();
  const [refTest, setRefTest] = useState(false);
  const [buttonInvisible, setButtonInvisible] = useState(true);
  // const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') setWindowState(window);
  });

  windowState?.addEventListener('scroll', () => {
    if (typeof window === 'undefined') return;
    const win: number = window.scrollY;
    if (win !== 0) setRefTest(true);
    else setRefTest(false);

    if (win >= 565) setButtonInvisible(false);
    else setButtonInvisible(true);

    console.log(win);
  });

  return (
    <>
      <Menu classTest={refTest} />
      <ButtonInsc invisible={buttonInvisible} />
      <div className="">
        <Introducer />
        <div className="bg-yellow-700 text-center h-96 relative" />
        <div className="bg-yellow-700 text-center h-96 relative" />
      </div>
    </>
  );
}
