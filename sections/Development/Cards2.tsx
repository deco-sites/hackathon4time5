const cards = [
  {
    title: {
      name: "Ilumine o que é especial",
      color: "#0B5FCF",
      icon: "/image/icone1.svg",
    },
    body: "Reconheça talentos e valorize pontos fortes",
    svg: "/image/triilha1.svg",
    author: {
      name: "Laiane Marques",
      handle:
        "Especialista em desenvolvimento de negócios e gestão de processos.",
    },
  },
  {
    title: {
      name: "Construa uma nova rota",
      color: "#ED6094",
      icon: "/image/icone2.svg",
    },
    body: "Tire o sonho de empreender do papel",
    svg: "/image/triilha2.svg",
    author: {
      name: "Bia Souza",
      handle: "Empresária na área da beleza.",
    },
  },
  {
    title: {
      name: "Organize a bagagem",
      color: "#FFAC34",
      icon: "/image/icone3.svg",
    },
    body: "Mapeie e gerencie as competências comportamentais da sua equipe",
    svg: "/image/triilha3.svg",
    author: {
      name: "Elen Nascimento",
      handle: "Gestão de Pessoas",
    },
  },
  {
    title: {
      name: "Desenhe caminhos",
      color: "#B2F0D9",
      icon: "/image/icone4.svg",
    },
    body: "Avance com padrões, processos, metas e Programas de Excelência no seu negócio",
    svg: "/image/triilha4.svg",
    author: {
      name: "Elen Nascimento",
      handle: "Gestão de Pessoas",
    },
  },
  {
    title: {
      name: "Compartilhe o que é bom",
      color: "#FE0000",
      icon: "/image/icone5.svg",
    },
    body: "Ofereça melhores experiências aos seus clientes",
    svg: "/image/triilha5.svg",
    author: {
      name: "Elen Nascimento",
      handle: "Gestão de Pessoas",
    },
  },
  {
    title: {
      name: "Personalizar",
      color: "#0B5FCF",
      icon: "/image/icone6.svg",
    },
    body: "Conte para nós quais problemas você precisa resolver e traremos soluções personalizadas para sua necessidade.",
    svg: "/image/triilha6.svg",
    author: {
      name: "Elen Nascimento",
      handle: "Gestão de Pessoas",
    },
  },
];

export default function Cards2() {
  return (
    <div className="relative py-24 sm:py-32">
      {/* Backgroud effect */}
      <div
        class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Conheça as possibilidades:
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sua triilha. Sua jornada.
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-3 sm:text-[0] md:columns-2">
            {cards.map((card) => (
              <div
                key={card.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4 group hover:scale-105 transition-transform duration-500"
              >
                <figure className="relative flex flex-row rounded-2xl bg-gray-50 p-8 text-sm leading-6 justify-between">
                  <blockquote className="text-gray-900">
                    {/*Título*/}
                    <div
                      class={`relative w-[270px] md:w-[300px] rounded-3xl bg-white pr-2 text-center text-base md:text-lg text-[${card.title.color}]`}
                    >
                      {card.title.name}
                      <img
                        class="absolute top-[1px] md:top-[2px] w-6 h-6"
                        src={card.title.icon}
                        alt=""
                      />
                    </div>

                    <div class="w-[70%] h-[100px] md:w-[85%]">
                      <p class="mt-5 mr-5 font-semibold text-base md:text-lg">{`${card.body}`}</p>
                    </div>
                  </blockquote>
                  <figcaption className="sm:static absolute top-10 -right-5 mt-6 flex items-center gap-x-4">
                    {/* <img
                        className="h-10 w-10 rounded-full bg-gray-50"
                        src={card.author.imageUrl}
                        alt=""
                      /> */}
                    <div>
                      {/* <div className="font-semibold text-gray-900">
                          {card.author.name}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {`${card.author.handle}`}
                        </div> */}

                      <div
                        class={`relative flex h-[150px] w-[125px] items-center justify-center rounded-3xl bg-[${card.title.color}]`}
                      >
                        <div class="flex">
                          <img
                            class="w-[70px] h-[70px]"
                            src={card.svg}
                            alt=""
                          />
                        </div>

                        <svg
                          id="Layer_1"
                          data-name="Layer 1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 49.67 49.33"
                          class="absolute left-2 top-3 h-7 w-7"
                        >
                          <title>Lupa</title>
                          <path
                            d="M32.5,8.23a13.6,13.6,0,0,0-14,23.28L12.58,42.44l2.17,1.17,5.92-10.92A13.6,13.6,0,0,0,32.5,8.23ZM21.85,30.5A10.26,10.26,0,0,1,20.73,30a10.44,10.44,0,0,1-1.06-.66,11.13,11.13,0,1,1,2.18,1.18Z"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Backgroud effect */}
      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        ></div>
      </div>
    </div>
  );
}
