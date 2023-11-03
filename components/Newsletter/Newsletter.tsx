import NewsletterOne from "$store/components/Newsletter/NewsletterOne.tsx";
import NewsletterTwo from "$store/components/Newsletter/NewsletterTwo.tsx";
import NewsletterThree from "$store/components/Newsletter/NewsletterThree.tsx";

import { useState } from "preact/hooks";

function Island() {
  const [count, setCount] = useState(0);

  const change = () => setCount((count + 1) % 3);

  return (
    <>
      <div class="relative flex flex-row overflow-hidden">
        <div class = "h-[300px] duration-300 w-full">
          {count === 0 && <NewsletterOne />}
          {count === 1 && <NewsletterTwo />}
          {count === 2 && <NewsletterThree />}
        </div>
        <aside class="absolute peer right-0 h-full w-[15px] bg-none"></aside>
        <button onClick={change} 
                class="absolute right-0 h-full w-[15px] translate-x-[13px] bg-white 
                       transition-transform ease-in-out hover:-translate-x-0 duration-300
                       peer-hover:translate-x-0  shadow-[0_0_10px_black] rounded-s-lg">
        </button>
      </div>
    </>
  );
}

export default Island;
