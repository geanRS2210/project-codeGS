import React, { useRef, useState, useEffect } from 'react';
import { Menu } from '../components/Menu';
import PulseNext from '../components/PulseNext';

export default function Home() {
  const [wintest, setWinTest] = useState<Window & typeof globalThis>();
  const ref = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') setWinTest(window);
  });

  wintest?.addEventListener('scroll', () => {
    let win;
    if (typeof window !== 'undefined') win = window.scrollY;
    const cur = ref.current;
    const topdiv = cur?.offsetTop.toLocaleString();
    console.log(win, topdiv);
  });

  return (
    <div className="bg-red-900">
      <Menu />
      <div className="bg-red-300 text-center h-96 relative overflow-x-scroll">
        <input type="text" ref={ref} />
        <PulseNext />
      </div>
      <div className="bg-red-300 text-center h-96 relative">
        <PulseNext />
      </div>
      <div className="text-center h-96 relative">
        <PulseNext />
      </div>
    </div>
  );
}
