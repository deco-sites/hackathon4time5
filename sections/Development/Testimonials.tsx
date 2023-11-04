const testimonials = [
  {
    body:
      "Working with Owl has been a game-changer for my small business. Their team created a stunning website that not only looks fantastic but loads lightning-fast. Since the launch, I've seen a significant increase in online traffic and customer engagement. Their commitment to excellence is truly remarkable!",
    author: {
      name: "Lionel Messi",
      handle:
        "GOAT",
      imageUrl: "/image/messi.webp",
    },
  },
  {
    body:
    "I cannot recommend Owl enough. Their expertise in web development and speed optimization is unmatched. My e-commerce site used to have slow load times, but after their intervention, it's like a rocket. My sales have gone through the roof, and I couldn't be happier with the results!",
    author: {
      name: "Albert Einstein",
      handle: "Trying Physicist",
      imageUrl: "/image/einstein.webp",
    },
  },
  {
    body:
    "As a non-profit organization, we rely on a strong online presence to spread our message and drive donations. [Your Company Name] helped us achieve just that. Our website is now fast, user-friendly, and secure. Their support goes beyond development, as they genuinely care about our mission. We're grateful for their support.",
    author: {
      name: "Josehphine Baker",
      handle: "Marketing Manager",
      imageUrl: "/image/scarlett.webp",
    },
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Our partnes
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We work with amazing people
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-3 sm:text-[0] md:columns-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                  <blockquote className="text-gray-900">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt=""
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author.name}
                      </div>
                      <div className="text-gray-600 text-xs">
                        {`${testimonial.author.handle}`}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
