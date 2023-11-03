import HeaderOne from "$store/components/header/Header/HeaderOne.tsx";
import HeaderTwo from "$store/components/header/Header/HeaderTwo.tsx";
import HeaderThree from "$store/components/header/Header/HeaderThree.tsx";

import { useState } from "preact/hooks";

function Island() {
  const [count, setCount] = useState(0);

  const change = () => setCount((count + 1) % 3);

  return (
    <>
      <div class="relative flex flex-row overflow-hidden">
        <div class = "duration-300 w-full h-[100px]">
          {count === 0 && <HeaderOne />}
          {count === 1 && <HeaderTwo />}
          {count === 2 && <HeaderThree />}
        </div>
        <aside class="absolute peer right-0 h-full w-[15px] bg-none"></aside>
        <button onClick={change} 
                class="absolute right-0 h-full w-[15px] translate-x-[13px] bg-white 
                       transition-transform ease-in-out hover:-translate-x-0 duration-300
                       peer-hover:translate-x-0 rounded-s-lg shadow-[0_0_10px_black]">
        </button>
      </div>
    </>
  );
}

export default Island;
