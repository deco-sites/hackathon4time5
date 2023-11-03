import FooterOne from "$store/components/footer/Footer/FooterOne.tsx";
import FooterTwo from "$store/components/footer/Footer/FooterTwo.tsx";
import FooterThree from "$store/components/footer/Footer/FooterThree.tsx";

import { useState } from "preact/hooks";

function Island() {
  const [count, setCount] = useState(0);

  const change = () => setCount((count + 1) % 3);

  return (
    <>
      <div class="relative flex flex-row">
        <div class = "duration-300 w-full">
          {count === 0 && <FooterOne />}
          {count === 1 && <FooterTwo />}
          {count === 2 && <FooterThree />}
        </div>
        <aside class="absolute peer right-0 h-full w-[15px] bg-none"></aside>
        <button onClick={change} 
                class="absolute right-0 h-full w-[15px] translate-x-[13px] bg-white 
                       transition-transform ease-in-out hover:-translate-x-0 duration-300
                       peer-hover:translate-x-0">
        </button>
      </div>
    </>
  );
}

export default Island;
