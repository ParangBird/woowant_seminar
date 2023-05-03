// @ts-ignore

import React, { useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";

type contextType = [
  {
    count1: number;
    count2: number;
  },
  React.Dispatch<
    React.SetStateAction<{
      count1: number;
      count2: number;
    }>
  >
];

const context = createContext<contextType>([
  { count1: 0, count2: 0 },
  () => null,
]);

const Counter1 = () => {
  const count1 = useContextSelector(context, (v) => v[0].count1);
  const setState = useContextSelector(context, (v) => v[1]);

  const increment = () =>
    setState((s) => ({
      ...s,
      count1: s.count1 + 1,
    }));

  return (
    <div className="border-dashed border-2 border-blue-300 p-3 m-3">
      <span>Count1: {count1}</span>
      <button
        className="bg-blue-300 m-4 text-black"
        type="button"
        onClick={increment}
      >
        +1
      </button>
    </div>
  );
};

const Counter2 = () => {
  const count2 = useContextSelector(context, (v) => v[0].count2);
  const setState = useContextSelector(context, (v) => v[1]);

  const increment = () =>
    setState((s) => ({
      ...s,
      count2: s.count2 + 1,
    }));

  return (
    <div className="border-dashed border-2 border-green-300 p-3 m-3">
      <span>Count2: {count2}</span>
      <button
        className="bg-green-300 m-4 text-black"
        type="button"
        onClick={increment}
      >
        +1
      </button>
    </div>
  );
};

const StateProvider = ({ children }: { children: React.ReactNode }) => (
  <context.Provider value={useState({ count1: 0, count2: 0 })}>
    <div className="border-dashed border-2 border-white-500 m-2 p-3">
      <span>StateProvider</span>
      {children}
    </div>
  </context.Provider>
);

export default function ContextSelector() {
  return (
    <>
      <h1 className="text-3xl">ContextSelector</h1>
      <StateProvider>
        <Counter1 />
        <Counter2 />
      </StateProvider>
    </>
  );
}
