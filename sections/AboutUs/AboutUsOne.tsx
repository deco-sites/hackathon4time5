import { Fragment, h } from "preact";
export default function AboutUsOne() {
  return (
    <article class="p-4 bg-primary">
      <h2 class="text-2xl text-primary-content">About Us</h2>
      <p class="text-lg text-secondary-content">
        Discover our journey and commitment to excellence.
      </p>
      <a
        href="#"
        class="mt-4 inline-block px-6 py-2 bg-secondary text-white rounded-full hover:bg-primary"
      >
        Learn More
      </a>
    </article>
  );
}
