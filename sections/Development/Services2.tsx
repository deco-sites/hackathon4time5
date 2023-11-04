export default function Services2() {
  return (
    <div class="relative isolate overflow-hidden bg-gradient-to-br from-green-200 to-orange-100">
      <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We create websites that look and work perfectly on mobile, tablet, and desktop devices.
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-900">
            Our responsive designs guarantee a consistent and high-speed experience for all users.
          </p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              class="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#DB9F4E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Começar
            </a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
              Saiba mais <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fill-opacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stop-color="#7E8FF8" />
            <stop offset="1" stop-color="#2CCBEF" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
