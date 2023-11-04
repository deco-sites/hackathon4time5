import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  source?: ImageWidget;
}

export default function Fitas2({ source }: Props) {
  return (
    <div className="mx-auto mt-32 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
      <div className="relative isolate overflow-hidden bg-[#F2F2F2] px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16 group hover:scale-105 transition-transform duration-350">
        <img  class="border rounded-3xl " src={source} alt="" />

        <div
          className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
          aria-hidden="true"
        >
        </div>
      </div>
    </div>
  );
}
