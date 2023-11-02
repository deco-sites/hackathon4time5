import { Fragment, h } from "preact";
export default function ContentThree() {
  return (
    <article class="p-4 bg-tertiary">
      <h2 class="text-2xl text-tertiary-content">Join Our Community</h2>
      <p class="text-lg text-primary-content">
        Connect with like-minded individuals and be a part of something great.
      </p>
      <a
        href="#"
        class="mt-4 inline-block px-6 py-2 bg-quaternary text-white rounded-full hover:bg-tertiary"
      >
        Join Now
      </a>
    </article>
  );
}
