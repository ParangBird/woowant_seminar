import { memo, useState } from "react";

export default function Rendering() {
  return (
    <>
      <h1 className="text-3xl">Rendering</h1>
      <div className="flex border-dashed border-2 border-sky-500 p-2 m-2">
        <div className="text-sky-500">Component A</div>
        <B1 />
        <B2 />
      </div>
    </>
  );
}

function B1() {
  const [st, setSt] = useState(0);
  return (
    <div className="border-dashed border-2 border-violet-400 p-2 m-2">
      <div className="text-violet-400">Component B</div>
      <div>state: {st}</div>
      <button className="bg-indigo-500" onClick={() => setSt(st + 1)}>
        update state
      </button>
      <C />
    </div>
  );
}

function B2() {
  const [st, setSt] = useState(0);
  return (
    <div className="border-dashed border-2 border-violet-400 p-2 m-2">
      <div className="text-violet-400">Component B</div>
      <div>state: {st}</div>
      <button className="bg-indigo-500" onClick={() => setSt(st + 1)}>
        update state
      </button>
      <MemoC />
    </div>
  );
}

const MemoC = memo(() => <C />);

function C() {
  return (
    <div className="border-dashed border-2 border-yellow-400 p-2 m-2">
      <div className="text-yellow-400">Component C </div>
      <D />
    </div>
  );
}

function D() {
  return (
    <div className="border-dashed border-2 border-green-400 p-2 m-2">
      <div className="text-green-400">Component D</div>
    </div>
  );
}
