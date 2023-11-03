import { Fragment, h } from "preact";
export default function HeaderOne() {
  return (
    <>
        <div class="flex pl-5 items-center justify-between bg-secondary h-[97%] shadow-[0_0_10px_black]">
            <div class="text-secondary-content text-2xl font-extrabold">
                <img src="/logo-coruja.svg" alt="Logo" class="h-8 w-8 inline-block mr-2"/> MyBrand
            </div>
            <nav>
                <ul class="flex space-x-4 mr-5">
                    <li><a href="#" class="text-secondary-content text-lg font-bold hover:underline">Home</a></li>
                    <li><a href="#" class="text-secondary-content text-lg font-bold hover:underline">Search</a></li>
                    <li><a href="#" class="text-secondary-content text-lg font-bold hover:underline">Cart</a></li>
                </ul>
            </nav>
        </div>
    </>
  );
}
