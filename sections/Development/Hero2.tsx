import { Picture } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  source?: ImageWidget;
}

export default function Hero2({ source }: Props) {
  return (
    <div class="bg-gray-900 z-20">
      <header class="absolute inset-x-0 top-0 z-50">
        <nav
          class="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div class="flex lg:flex-1"></div>
          <div class="flex lg:hidden"></div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>

      <Picture>
        <div class="relative isolate overflow-hidden pt-14">
          <img
            src={source}
            alt=""
            class="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                Unlock the Power of Speed.{" "}
                <a
                  href="https://deco-sites-hackathon4time5.deno.dev/services"
                  class="font-semibold text-white"
                >
                  <span class="absolute inset-0" aria-hidden="true"></span>{" "}
                  Start here! <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div class="text-center">
              <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Build Fast, Deliver Faster
              </h1>
              <p class="mt-6 text-lg leading-8 text-gray-300 font-semibold">
                Your Partner for High-Speed Websites.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a href="https://deco-sites-hackathon4time5.deno.dev/services">
                  <button class="flex h-[38px] w-[110px] flex-row gap-2 justify-between px-3 rounded-full border-2 border-[#E0AC65] bg-white p-1">
                    <div>
                      <p class="ml-2 font-bold">Start</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>

                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          ></div>
        </div>
      </Picture>
    </div>
  );
}
