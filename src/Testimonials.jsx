import { useState } from "react";
import user from "./assets/user.png";
import cloudTopRight from "./assets/cloudright.png";
import cloudBottomRight from "./assets/cloudleft.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const testimonials = [
  {
    id: 1,
    bg: "bg-[#F27330]",
    name: "Cameron Williamson",
    role: "UI/UX Designer, Nschool",
    text: " by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, but the majority have suffered",
    image: { user },
  },
  {
    id: 2,
    bg: "bg-[#19467E]",
    name: "Leslie Alexander",
    role: "Product Designer",
    text: " by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, but the majority have suffered",
    image: { user },
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative w-full overflow-hidden py-20">
      {/* Top-right cloud */}
      <img
        src={cloudTopRight}
        alt="cloud top right"
        className="absolute top-28 right-0 w-20 md:w-64 -translate-x-180 -translate-y-10 opacity-50 z-10 pointer-events-none"
      />

      {/* Bottom-right small cloud */}
      <img
        src={cloudBottomRight}
        alt="cloud bottom right"
        className="absolute bottom-6 right-[-0px] w-20 md:w-40 z-10 pointer-events-none"
      />

      {/* Background block */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[65%] bg-[#F6FAFB] z-0"></div>

      {/* Testimonial content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 lg:px-0 relative z-10">
        {/* Cards */}
        <div className="overflow-hidden w-full z-10">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 40}%)` }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className={`${item.bg} text-white rounded-xl p-8 flex-shrink-0 w-full sm:w-[80%] lg:w-[60%]`}
              >
                <div className="text-5xl mb-4">“</div>
                <p className="text-sm leading-relaxed mb-6">{item.text}</p>
                <div className="flex items-center gap-4">
                  <img src={user} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-xs opacity-80">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="relative z-10 max-w-7xl gap-12 items-center">
          <h5 className="text-[#19467E] font-semibold mb-2 text-[40px]">Testimonials</h5>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#F57423]">What Students Say</span>
            <br />
            <span className="text-[#F57423]">About Us</span>
          </h2>
          <p className="text-gray-600 max-w-md text-[20px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center lg:justify-end gap-4 mt-6 w-full lg:w-[40%] px-4 relative z-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
