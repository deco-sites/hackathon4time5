import { Fragment, h } from "preact";
export default function CtaTwo() {
  return (
    <article class="p-4 bg-gray-200">
      <div class="flex items-center">
        <div class="mr-4 p-2 bg-blue-500 text-white rounded-full">
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 9l3 3m0 0l3-3m-3 3V5"
            />
          </svg>
        </div>
        <div>
          <h2 class="text-2xl font-bold">Ready to Take Action?</h2>
          <p class="text-lg">Discover how you can make a difference today.</p>
        </div>
      </div>
      <a
        href="#"
        class="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-full"
      >
        Take Action
      </a>
    </article>
  );
}
