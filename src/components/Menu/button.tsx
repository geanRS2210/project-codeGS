import React from 'react';

export function ButtonInsc(): JSX.Element {
  return (
    <div
      className="hidden md:block md:fixed md:top-10 md:left-8 md:z-10"
      data-button
    >
      <button type="button" className="btn-inscrever">
        Inscrever-se
      </button>
    </div>
  );
}
