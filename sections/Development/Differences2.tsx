export default function Differences2() {
  return (
    <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16">
      <div class="relative w-full max-w-lg">
        <div class="absolute top-0 -left-4 w-36 h-36 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-36 h-36 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-36 h-36 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="m-8 relative space-y-4">
          <div class="p-0 md:p-5 bg-white rounded-lg flex flex-col md:flex-row items-center justify-between space-x-8 group hover:scale-105 transition-transform duration-350">
            <h1 class="font-semibold">Speed Approach</h1>
            <p class="text-sm py-4 md:py-0 pr-3 md:pr-0 md:text-base">
              Our team is obsessed with speed. We follow industry best practices to ensure your website loads blazingly fast on all devices and browsers.
            </p>
          </div>
          <div class="p-0 md:p-5 bg-white rounded-lg flex flex-col md:flex-row items-center justify-between space-x-8 group hover:scale-105 transition-transform duration-350">
            <h1 class="font-semibold">Responsive Design</h1>
            <p class="text-sm py-4 md:py-0 pr-3 md:pr-0 md:text-base">
              We create websites that look and work perfectly on mobile, tablet, and desktop devices.
            </p>
          </div>
          <div class="p-0 md:p-5 bg-white rounded-lg flex flex-col md:flex-row items-center justify-between space-x-8 group hover:scale-105 transition-transform duration-350">
            <h1 class="font-semibold">SEO Friendly</h1>
            <p class="text-sm py-4 pr-3 md:pr-0 md:py-0 md:text-base">
              We know that site speed is a crucial factor for SEO. Our websites are optimized for search engines to help you rank higher and get more organic traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
