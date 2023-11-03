import { Picture } from "apps/website/components/Picture.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Props {
  source?: ImageWidget;
}

export default function HeroTree({ source }: Props) {
  return (

    <Picture>
    <div class="relative flex items-center justify-center h-[770px] w-full bg-gray-900">
      <img
        class="absolute h-[770px] w-full max-w-full object-cover -z-10"
        src={source}
        alt="Escolha sua imagem"
        loading="lazy"
      />

      <div class="flex w-[340px] flex-col items-center gap-8 md:w-[900px]">
        <h2 class="text-center font-ClashGrotesk text-4xl font-bold tracking-tight text-white md:text-6xl">
          Isso aqui também é!
        </h2>
        <p class="text-lg leading-8 text-gray-300">
          Construa no seu estilo.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Comece agora
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Saiba como <span aria-hidden="true">→</span>
              </a>
            </div>
      </div>
    
    </div>
    </Picture>
  );
}
