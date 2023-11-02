import { Fragment, h } from "preact";
export default function CtaOne() {
  return (
    <article class="p-4 bg-gray-200">
      <h2 class="text-2xl font-bold">Ready to Get Started?</h2>
      <p class="text-lg">Explore our services and take the first step today.</p>
      <a
        href="#"
        class="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-full"
      >
        Get Started
      </a>
    </article>
  );
}
