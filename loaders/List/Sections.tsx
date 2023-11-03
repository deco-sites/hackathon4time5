import type Flex from "deco/blocks/section.ts";
import type { VNode } from "../../constants.tsx";

import ThemeAutumn from "$store/sections/Theme/ThemeAutumn.tsx";

interface Props {
  sections: Flex[] | null;
}

function Sections({ sections }: Props): VNode[] | null {
  if (sections === null) {
    return null;
  }

  return (
    <>
      <ThemeAutumn />
      {sections.map(
        (
          { Component, props }, index) => (
          <Component key={index} {...props} />
        )
      )}
    </>
  );
}

export default Sections;
