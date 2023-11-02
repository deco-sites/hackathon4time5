import NewsletterOne from "$store/components/Newsletter/NewsletterOne.tsx";
import NewsletterTwo from "$store/components/Newsletter/NewsletterTwo.tsx";
import NewsletterThree from "$store/components/Newsletter/NewsletterThree.tsx";

import { useState } from "preact/hooks";

function Island() {
  const [count, setCount] = useState(0);

  const change = () => setCount((count + 1) % 3);

  return (
    <>
      <article>
        {count === 0 && <NewsletterOne />}
        {count === 1 && <NewsletterTwo />}
        {count === 2 && <NewsletterThree />}
      </article>
      <button onClick={change}>Increment Count</button>
    </>
  );
}

export default Island;
