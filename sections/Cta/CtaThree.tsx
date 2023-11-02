import { Fragment, h } from "preact";
export default function CtaThree() {
  return (
    <article
      class="p-4 bg-cover bg-center"
      style={{ backgroundImage: 'url("cta-background.jpg")' }}
    >
      <div class="bg-opacity-70 text-white p-4 rounded-lg">
        <h2 class="text-2xl font-bold">Join Our Community</h2>
        <p class="text-lg">
          Connect with like-minded individuals and grow together.
        </p>
        <a
          href="#"
          class="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded-full"
        >
          Join Now
        </a>
      </div>
    </article>
  );
}
