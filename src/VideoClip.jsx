import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const storyData = [
  { id: 1, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
  { id: 2, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
  { id: 3, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
  { id: 4, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
  { id: 5, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
  { id: 6, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
];

export default function VideoClip() {
  const [storyIndex, setStoryIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  // Responsive cards per view
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setCardsPerView(1);       // mobile
      else if (w < 1024) setCardsPerView(2); // tablet
      else setCardsPerView(3);               // desktop
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxStoryIndex = Math.max(0, storyData.length - cardsPerView);

  const nextStory = () => setStoryIndex((p) => (p >= maxStoryIndex ? 0 : p + 1));
  const prevStory = () => setStoryIndex((p) => (p === 0 ? maxStoryIndex : p - 1));

  return (
    <section className="bg-[#F6FAFB] py-16 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-[#F57423]">
            Testimonials
          </h2>
          <div className="text-center text-gray-600 text-[18px]">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto flex items-center">
          {/* Left Arrow */}
          <button
            onClick={prevStory}
            className="absolute -left-3 md:-left-14 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#19467E] flex items-center justify-center transition-all shadow-md"
            aria-label="Previous"
          >
            <FiChevronLeft className="text-2xl text-white" />
          </button>

          <div className="overflow-hidden w-full px-2 md:px-0">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${storyIndex * (100 / cardsPerView)}%)`,
              }}
            >
              {storyData.map((item) => (
                <div
                  key={item.id}
                  className="shrink-0 px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-white shadow-lg flex flex-col h-full">
                    <div className="relative h-44 bg-black group">
                      <video
                        src="https://www.w3schools.com/html/mov_bbb.mp4"
                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                        muted
                        loop
                        onMouseOver={(e) => e.target.play()}
                        onMouseOut={(e) => e.target.pause()}
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-white bg-black/20 group-hover:bg-transparent transition-all">
                          <FaPlay className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                      <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextStory}
            className="absolute -right-3 md:-right-14 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#19467E] flex items-center justify-center transition-all shadow-md"
            aria-label="Next"
          >
            <FiChevronRight className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
