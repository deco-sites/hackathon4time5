import { Fragment, h } from "preact";
export default function HeaderOne() {
  return (
    <>
        <div class="flex pl-5 items-center justify-center bg-primary h-[97%] shadow-[0_0_10px_black]">
            <div class="text-primary-content text-2xl font-extrabold">
                <img src="/logo.png" alt="Logo" class="h-8 w-8 inline-block mr-2"/> MyBrand
            </div>
        </div>
    </>
  );
}
