import { Fragment, h } from "preact";
export default function HeroOne() {
  return (
    <>
      <div class="flex flex-row bg-white p-8 h-[760px] shadow-[0_0_10px_black]">
        <div class="relative grid grid-cols-2 grid-rows-2 w-[40%] h-[80%] items-center justify-center">
          <div class = "bg-red-600 h-[90%] w-[90%] m-[10%] shadow-[0_0_10px_black]"></div>
          <div class = "border-yellow-600 border border-dotted h-[90%] w-[90%] m-[10%]"></div>
          <div class = "bg-blue-600 h-[90%] w-[90%] m-[10%] shadow-[0_0_10px_black]"></div>
          <div class = "bg-green-600 h-[90%] w-[90%] m-[10%] shadow-[0_0_10px_black]"></div>
          <div class = "absolute bg-yellow-600 h-[40%] w-[40%] m-[10%] rotate-45 top-[5%] right-[-45%] shadow-[0_0_10px_black]"></div>
        </div>
        <figure class = "pt-20 h-[80%] w-[40%]">
          <img src="/man-choice.svg" alt="Ops" class="h-[90%]"/>
          <h1 class = "pt-5 text-xl w-full text-center text-primary font-extrabold" > Build your Own Website </h1>
        </figure>
        <h1 class = "pt-[150px] text-xl text-center text-primary font-extrabold">Try Other Layouts</h1>
      </div>
    </>
  );
}
