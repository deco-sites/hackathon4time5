import { Picture } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  source?: ImageWidget;
}

export default function Presentation2({ source }: Props) {
  return (
    <div className="bg-white pb-16 pt-24 sm:pb-24 sm:pt-32 xl:pb-32">
      <div className="bg-gray-900 pb-20 sm:pb-24 xl:pb-0">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
          <div className="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
            <Picture>
              <div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
                <img
                  className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                  src={source}
                  alt=""
                />
              </div>
            </Picture>
          </div>
          <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
            <figure className="relative isolate pt-6 sm:pt-12">
             
              <blockquote className="text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  As the Chief Marketing Officer of Owl, Emily brings a wealth of experience and a unique vision to our organization. Her passion for excellence and commitment to delivering exceptional results have not only led the company to remarkable growth but have also set a new standard for leadership in the industry.
                </p>
              </blockquote>
              <figcaption className="mt-8 text-base">
                <div className="font-semibold text-white">Emily Anderson </div>
                <div className="mt-1 text-gray-400">Specialist in Digital Marketing and Brand Strategy</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
