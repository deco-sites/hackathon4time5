import { Picture } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  source?: ImageWidget;
}

export default function Partnership( { source }: Props ) {
    return (
      <>
 
        <div className="grid min-h-full grid-cols-1 grid-rows-[1fr,auto,1fr] bg-white lg:grid-cols-[max(50%,36rem),1fr]">
          <header className="mx-auto w-full max-w-7xl px-6 pt-6 sm:pt-10 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:px-8">
          </header>
          <main className="mx-auto w-full max-w-7xl px-6 py-24 sm:py-32 lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:px-8">
            <div className="max-w-lg">
              <p className="text-base font-semibold leading-8 text-[#E0AC65]">Together with our partners, we work tirelessly to address challenges, drive innovation, and create opportunities for growth.</p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Our Valued Partnerships!</h1>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Exciting updates are on the horizon. Stay tuned for the latest developments!
              </p>
              <div className="mt-10">
                <a href="https://deco-sites-hackathon4time5.deno.dev/landing" className="text-sm font-semibold leading-7 text-[#E0AC65]">
                  <span aria-hidden="true">&larr;</span> Back to Owl
                </a>
              </div>
            </div>
          </main>
          <footer className="self-end lg:col-span-2 lg:col-start-1 lg:row-start-3">
            <div className="border-t border-gray-100 bg-gray-50 py-10">
              <nav className="mx-auto flex w-full max-w-7xl items-center gap-x-4 px-6 text-sm leading-7 text-gray-600 lg:px-8">
                <a href="https://deco-sites-hackathon4time5.deno.dev/contact">Contact Us</a>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <a href="#">Support</a>
                <svg viewBox="0 0 2 2" aria-hidden="true" className="h-0.5 w-0.5 fill-gray-300">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <a href="#">Twitter</a>
              </nav>
            </div>
          </footer>
          <div className="hidden lg:relative lg:col-start-2 lg:row-start-1 lg:row-end-4 lg:block">
            <Picture>
            <img
              src={source}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            </Picture>
          </div>
        </div>
      </>
    )
  }
  