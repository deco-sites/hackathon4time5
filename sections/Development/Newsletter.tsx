export default function Newsletter() {
    return (
        <div class="bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
          <div class="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
            <h2 class="inline sm:block lg:inline xl:block">Stay Informed and Inspired.</h2>
            <p class="inline sm:block lg:inline xl:block">Join our newsletter community and never miss a beat!</p>
          </div>
          <form class="w-full max-w-md lg:col-span-5 lg:pt-2">
            <div class="flex gap-x-4">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#E0AC65] sm:text-sm sm:leading-6" placeholder="Your email" />
              <button type="submit" class="flex-none rounded-md bg-[#E0AC65] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E0AC65]">Subscribe</button>
            </div>
            <p class="mt-4 text-sm leading-6 text-gray-300">We care about your data. Read our <a href="#" class="font-semibold text-white">Privacy&nbsp;Policy</a>.</p>
          </form>
        </div>
      </div>
    );
}
