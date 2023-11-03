import CtaOne from "$store/components/Cta/CtaOne.tsx";
import CtaTwo from "$store/components/Cta/CtaTwo.tsx";
import CtaThree from "$store/components/Cta/CtaThree.tsx";

import { useState } from "preact/hooks";

function Island() {
  const [count, setCount] = useState(0);

  const change = () => setCount((count + 1) % 3);

  return (
    <>
      <div class="relative flex flex-row overflow-hidden">
        <div class = "duration-300 w-full h-[500px]">
          {count === 0 && <CtaOne />}
          {count === 1 && <CtaTwo />}
          {count === 2 && <CtaThree />}
        </div>
        <aside class="absolute peer right-0 h-full w-[15px] bg-none"></aside>
        <button onClick={change} 
                class="absolute right-0 h-full w-[15px] translate-x-[13px] bg-white 
                       transition-transform ease-in-out hover:-translate-x-0 duration-300
                       peer-hover:translate-x-0 rounded-s-lg shadow-[0_0_10px_grey]">
        </button>
      </div>
    </>
  );
}

export default Island;
