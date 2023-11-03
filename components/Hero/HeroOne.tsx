import { Fragment, h } from "preact";
export default function HeroOne() {
  return (
    <>
      <div class="flex bg-white p-8 text-center h-[97%] shadow-[0_0_10px_black]">
        <div class="relative grid grid-cols-2 grid-rows-2 w-[40%] h-[85%] items-center justify-center">
          <div class = "bg-red-600 h-[90%] w-[90%] m-[10%] shadow-[0_0_10px_black]"></div>
          <div class = "border-yellow-600 border border-dotted h-[90%] w-[90%] m-[10%]"></div>
          <div class = "bg-blue-600 h-[90%] w-[90%] m-[10%] shadow-[0_0_10px_black]"></div>
          <div class = "bg-green-600 h-[90%] w-[90%] m-[10%] shadow-[0_0_10px_black]"></div>
          <div class = "absolute bg-yellow-600 h-[30%] w-[30%] m-[10%] rotate-45 top-[10%] right-[-15%] shadow-[0_0_10px_black]"></div>
        </div>
      </div>
    </>
  );
}
