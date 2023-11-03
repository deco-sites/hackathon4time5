import { Fragment, h } from "preact";
export default function NewsletterTwo() {
  return (
    <article class="p-4 bg-secondary h-[97%] shadow-[0_0_10px_black]">
      <h2 class="text-2xl text-secondary-content">
        Sign Up for Our Newsletter
      </h2>
      <p class="text-lg text-primary-content">
        Be the first to know about our promotions and exclusive offers.
      </p>
      <form>
        <input
          type="email"
          class="mt-4 p-2 rounded-md"
          placeholder="Your email address"
        />
        <button
          type="submit"
          class="mt-2 px-6 py-2 bg-primary text-white rounded-full hover:bg-secondary"
        >
          Sign Up
        </button>
      </form>
    </article>
  );
}
