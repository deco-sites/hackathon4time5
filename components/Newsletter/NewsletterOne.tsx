import { Fragment, h } from "preact";
export default function NewsletterOne() {
  return (
    <article class="w-full p-4 bg-primary flex flex-col justify-center items-center">
      <h2 class="text-2xl text-primary-content">Subscribe to Our Newsletter</h2>
      <p class="text-lg text-secondary-content">
        Stay updated with our latest news and updates by subscribing to our
        newsletter.
      </p>
      <form>
        <input
          type="email"
          class="mt-4 p-2 rounded-md"
          placeholder="Your email address"
        />
        <button
          type="submit"
          class="mt-2 px-6 py-2 bg-secondary text-white rounded-full hover:bg-primary"
        >
          Subscribe
        </button>
      </form>
    </article>
  );
}
