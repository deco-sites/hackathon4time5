import HeroOne from "$store/components/Hero/HeroOne.tsx";
import HeroTwo from "$store/components/Hero/HeroTwo.tsx";
import HeroThree from "$store/components/Hero/HeroThree.tsx";

import { useState } from "preact/hooks";

function Island() {
  const [count, setCount] = useState(0);

  const change = () => setCount((count + 1) % 3);

  return (
    <>
      <div class="relative flex flex-row overflow-hidden">
        <div class = "h-[770px] duration-300 w-full">
          {count === 0 && <HeroOne />}
          {count === 1 && <HeroTwo />}
          {count === 2 && <HeroThree />}
        </div>
        <aside class="absolute peer right-0 h-full w-[15px] bg-none"></aside>
        <button onClick={change} 
                class="absolute right-0 h-[90%] top-[5%] w-[15px] translate-x-[13px] bg-white 
                       transition-transform ease-in-out hover:-translate-x-0 duration-300
                       peer-hover:translate-x-0 rounded-s-lg shadow-[0_0_10px_grey]">
        </button>
      </div>
    </>
  );
}

export default Island;
