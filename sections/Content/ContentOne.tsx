import { Fragment, h } from "preact";
export default function ContentOne() {
  return (
    <article class="p-4 bg-primary">
      <h2 class="text-2xl text-primary-content">Welcome to Our Website</h2>
      <p class="text-lg text-secondary-content">
        We are here to provide you with valuable information and services.
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
