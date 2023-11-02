import { Fragment, h } from "preact";
export default function AboutUsTwo() {
  return (
    <article class="p-4 bg-secondary">
      <h2 class="text-2xl text-secondary-content">Our Story</h2>
      <p class="text-lg text-primary-content">
        Simplicity, quality, and innovation drive our mission.
      </p>
      <a
        href="#"
        class="mt-4 inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary"
      >
        Explore
      </a>
    </article>
  );
}
