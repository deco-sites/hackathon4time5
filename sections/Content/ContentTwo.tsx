import { Fragment, h } from "preact";
export default function ContentTwo() {
  return (
    <article class="p-4 bg-secondary">
      <h2 class="text-2xl text-secondary-content">Explore Our Offerings</h2>
      <p class="text-lg text-primary-content">
        Discover a wide range of services and products tailored for you.
      </p>
      <a
        href="#"
        class="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary"
      >
        Explore Now
      </a>
    </article>
  );
}
