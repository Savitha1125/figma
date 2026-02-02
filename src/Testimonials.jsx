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
        image:  user 
  },
  {
    id: 2,
    bg: "bg-[#19467E]",
    name: "Leslie Alexander",
    role: "Product Designer",
    text: " by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, but the majority have suffered",
    image:  user 
  },
];

export default function Testimonials() {
  const [leftCard, setLeftCard] = useState(testimonials[0]); 
  const [rightCard, setRightCard] = useState(testimonials[1]); 

  const swapCards = () => {
    setLeftCard(rightCard);
    setRightCard(leftCard);
  };

  return (
    <div className="relative w-full overflow-hidden py-20">
      <img
        src={cloudTopRight}
        alt="cloud top right"
        className="absolute top-28 right-0 w-20 md:w-64 -translate-x-180 -translate-y-10 opacity-50 z-10 pointer-events-none"
      />

      <img
        src={cloudBottomRight}
        alt="cloud bottom right"
        className="absolute bottom-6 right-[-0px] w-20 md:w-40 z-10 pointer-events-none"
      />

      <div className="absolute right-0 top-0 h-full w-full lg:w-[65%] bg-[#F6FAFB] z-0"></div>

      <div className="flex relative z-10">
        <div className="overflow-hidden w-[90%] z-10 flex flex-row">
          <div
            className={`${leftCard.bg} text-white rounded-xl p-8 w-full -translate-x-[70%]`}
          >
                  <div className="text-5xl mb-2">“</div>
                <p className="text-xs leading-relaxed mb-3">{leftCard.text}</p>
                <div className="flex items-center gap-4">
                  <img src={leftCard.image} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h4 className="font-semibold">{leftCard.name}</h4>
                    <p className="text-xs opacity-80">{leftCard.role}</p>
                  </div>
                </div>
              </div>
    
          <div
            className={`${rightCard.bg} text-white rounded-xl p-8 w-full -translate-x-[40%]`}
          >
            <div className="text-5xl mb-2">“</div>
            <p className="text-xs leading-relaxed mb-3">{rightCard.text}</p>
            <div className="flex items-center gap-4">
              <img src={rightCard.image} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="font-semibold">{rightCard.name}</h4>
                <p className="text-xs opacity-80">{rightCard.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="relative z-10 gap-12 w-full">
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
          onClick={swapCards}
          className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={swapCards}
          className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center hover:bg-orange-200"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
