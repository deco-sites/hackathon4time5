import { Fragment, h } from "preact";
export default function HeroTwo() {
  return (
    <div class="hero relative h-screen">
      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="content absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
        <h1 class="text-3xl font-bold">Welcome to Your Website</h1>
        <p class="text-lg">Your slogan or brief description goes here.</p>
      </div>
    </div>
  );
}
