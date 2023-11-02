import { Fragment, h } from "preact";
export default function NewsletterThree() {
  return (
    <article class="p-4 bg-tertiary">
      <h2 class="text-2xl text-tertiary-content">Join Our Newsletter</h2>
      <p class="text-lg text-primary-content">
        Subscribe to our newsletter and never miss important updates.
      </p>
      <form>
        <input
          type="email"
          class="mt-4 p-2 rounded-md"
          placeholder="Your email address"
        />
        <button
          type="submit"
          class="mt-2 px-6 py-2 bg-quaternary text-white rounded-full hover:bg-tertiary"
        >
          Join Now
        </button>
      </form>
    </article>
  );
}
