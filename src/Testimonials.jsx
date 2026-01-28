import { useState } from "react";
import user from "./assets/user.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const testimonials = [
  {
    id: 1,
    bg: "bg-orange-500",
    name: "Cameron Williamson",
    role: "UI/UX Designer, Nschool",
    text: " by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, but the majority have suffered",
    image: {user}
  },
  {
    id: 2,
    bg: "bg-blue-800",
    name: "Leslie Alexander",
    role: "Product Designer",
    text: " by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, but the majority have suffered",
    image: {user}
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="overflow-hidden w-[100%]">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${index * 40}%)`,
              }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className={`${item.bg} text-white rounded-xl p-8 flex-shrink-0`}
                  style={{ width: "60%" }}
                >
                  <div className="text-5xl mb-4">“</div>

                  <p className="text-sm leading-relaxed mb-6 text-capitalize">
                    {item.text}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={user}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-xs opacity-80">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F6FAFB]">
          <h5 className="text-blue-700 font-semibold mb-2">Testimonials</h5>

          <h2 className="text-3xl font-bold mb-4">
            <span className="text-orange-500">What Students Say</span>
            <br />
            About Us
          </h2>

          <p className="text-gray-600 max-w-md">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-4 mt-6 ml-6 w-[40%]">
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
