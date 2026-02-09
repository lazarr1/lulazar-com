import { useState } from "react";

type CarouselImage = {
  src: string;
  alt: string;
};

type Props = {
  images: CarouselImage[];
};

const VISIBLE_COUNT = 4;
const ITEM_WIDTH = 100 / VISIBLE_COUNT; // %
const GAP_PX = 30; // gap-4 = 1rem = 16px

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
            transform: `translateX(calc(-${ITEM_WIDTH * index}% - ${
              GAP_PX * index
              }px))`,
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
                  className="h-48 w-full object-contain rounded-xl shadow-md ring-1 ring-black/5"
                />
              </figure>
            </li>
          ))}
        </ul>
        {/* ARROWS (overlayed centered vertically over images) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 w-full pointer-events-none">
          <div className="pointer-events-auto flex items-center justify-between px-4">
            <button
              onClick={prev}
              onMouseEnter={prev}
              disabled={index === 0}
              aria-label="Previous images"
              className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white opacity-70 hover:opacity-100 disabled:opacity-30 disabled:cursor-default"
            >
              ‹
            </button>

            <button
              onClick={next}
              onMouseEnter={next}
              disabled={index === maxIndex}
              aria-label="Next images"
              className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white opacity-70 hover:opacity-100 disabled:opacity-30 disabled:cursor-default"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* DOTS (below images) */}
      <div className="mt-4 flex justify-center">
        <div className="flex items-center gap-3">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors focus:outline-none ${
                i === index ? "bg-gray-800" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
