'use client';

import { useCountStore } from '@/store';

export const TestZustand = () => {
  const count = useCountStore((store) => store.count);
  const increment = useCountStore((store) => store.increment);
  const decrement = useCountStore((store) => store.decrement);

  return (
    <>
      <button
        className="text-5xl"
        onClick={increment}
      >
        +
      </button>
      <span className="text-3xl">{count}</span>
      <button
        className="text-5xl"
        onClick={decrement}
      >
        -
      </button>
    </>
  );
};
