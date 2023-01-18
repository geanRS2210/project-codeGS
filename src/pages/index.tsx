import React, { useRef, useState, useEffect } from 'react';
import { Menu } from '../components/Menu';
import { ButtonInsc } from '../components/Menu/button';
import PulseNext from '../components/PulseNext';

export default function Home() {
  const [windowState, setWindowState] = useState<Window & typeof globalThis>();
  const [refTest, setRefTest] = useState(false);
  // const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') setWindowState(window);
  });

  windowState?.addEventListener('scroll', () => {
    if (typeof window === 'undefined') return;
    const win: number = window.scrollY;
    if (win !== 0) setRefTest(true);
    else setRefTest(false);
    console.log(win);
  });

  return (
    <>
      <Menu classTest={refTest} />
      <ButtonInsc />
      <div className="pt-32 bg-black">
        <div className="bg-gradient-to-b to-red-600 from-black text-center h-96 relative">
          <PulseNext />
        </div>
        <div className="bg-red-600 text-center h-96 relative">
          <PulseNext />
        </div>
        <div className="bg-red-600 text-center h-96 relative">
          <PulseNext />
        </div>
      </div>
    </>
  );
}
