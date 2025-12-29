import { useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type Props = {
  images: CarouselImage[];
};

const VISIBLE_COUNT = 4;

export function ImageCarousel({ images }: Props) {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(0, images.length - VISIBLE_COUNT);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));
  const goTo = (i: number) => setIndex(Math.min(Math.max(i, 0), maxIndex));

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Image carousel"
      className="w-full max-w-5xl mx-auto"
    >
      {/* VIEWPORT */}
      <div className="overflow-hidden relative group">
        <ul
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (100 / VISIBLE_COUNT) * index + 4 * index
            }%)`,
          }}
        >
          {images.map((img, i) => (
            <li
              key={i}
              className="w-1/4 flex-shrink-0 h-60"
              aria-hidden={i < index || i >= index + VISIBLE_COUNT}
            >
              <figure className="flex flex-col items-center text-center h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-48 w-full object-cover rounded-xl shadow-md ring-1 ring-black/5"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>

      {/* CONTROLS */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous images"
          className="text-9xl px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          ←
        </button>

        {/* DOTS */}
        <div className="mt-4 flex justify-center gap-3 text-9xl">
          {Array.from({ length: images.length - 3 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full text-9xl transition-colors ${
                i === index ? "text-[#808080]" : ""
              }`}
              aria-label={`Go to image ${i + 1}`}
            >
              •
            </button>
          ))}
        </div>

        <button
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next images"
          className="text-9xl px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          →
        </button>
      </div>
    </section>
  );
}
