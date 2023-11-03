import { Fragment, h } from "preact";
export default function HeaderTwo() {
  return (
    <>
      <div class="flex flex-col items-center justify-center bg-secondary h-[97%] shadow-[0_0_10px_black]">
        <div class="text-secondary-content text-2xl font-extrabold">
          <img src="/logo-coruja.svg" alt="Logo" class="h-8 w-8 inline-block mr-2"/> MyBrand
        </div>
        <nav class="w-full flex justify-center items-center">
          <ul class="flex w-[40%] justify-between mr-5">
            <li><a href="#" class="text-secondary-content text-lg font-bold hover:text-primary-content">Home</a></li>
            <li><a href="#" class="text-secondary-content text-lg font-bold hover:text-primary-content">Search</a></li>
            <li><a href="#" class="text-secondary-content text-lg font-bold hover:text-primary-content">Cart</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
