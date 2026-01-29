import React,{ useState } from "react";
import career from "./assets/career.png";
import icon from "./assets/icon.png";
import shape from  "./assets/brown-right.png"
import cornerShape from "./assets/cloudright.png"
import user from "./assets/user.png"
import { FaPlay } from "react-icons/fa";
const sampleVideo = "https://www.w3schools.com/html/mov_bbb.mp4";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import faqIllustration from "./assets/faq-illustration.png";
import Testimonials from "./Testimonials";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "UI/UX Designer, Nschool",
    text:
      "by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available,but the majority have suffered alteration in some form, by injected humour, but the majority have suffered ",
    avatar: user,
  },
  {
    name: "Leslie Alexander",
    role: "Frontend Developer",
    text:
      " by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, but the majority have suffered ",
    avatar: user,
  },
]

const storyData = [ { id: 1, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
      { id: 2, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
      { id: 3, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
      { id: 4, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
      { id: 5, name: "Charlotte", desc: "Passages Of Lorem Ipsum" },
      { id: 6, name: "Charlotte", desc: "Passages Of Lorem Ipsum" }, ];
const faqData = [
  {
    question: "There Are Many Variations Of Passages?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  {
    question: "Lorem Ipsum Is Simply Dummy Text Of The?",
    answer: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
    question: "Of A Page When Looking At Its Layout?",
    answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
    question: "Page Editors Now Use Lorem Ipsum As Their?",
    answer: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text."
  },
  {
      question:"majority have suffered alteration in some for?",
      answer:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  },
  {
      question:"Lorem Ipsum is simply dummy text of the ?",
      answer:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  },
  {
      question:"bscure Latin words, consectetur, from a Lorem Ips?",
      answer:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make"
  }
];
export default function Careers() {
 const [index, setIndex] = useState(0);
const [storyIndex, setStoryIndex] = useState(0);

  const prev = () =>
    setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));

  const next = () =>
    setIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));

// cards per view based on screen (tailwind breakpoints match)
const [cardsPerView, setCardsPerView] = useState(3);

React.useEffect(() => {
  const update = () => {
    const w = window.innerWidth;
    if (w < 768) setCardsPerView(1);       // mobile
    else if (w < 1024) setCardsPerView(2); // md
    else setCardsPerView(3);               // lg+
  };
  update();
  window.addEventListener("resize", update);
  return () => window.removeEventListener("resize", update);
}, []);

const maxStoryIndex = Math.max(0, storyData.length - cardsPerView);

const nextStory = () =>
  setStoryIndex((p) => (p >= maxStoryIndex ? 0 : p + 1));

const prevStory = () =>
  setStoryIndex((p) => (p === 0 ? maxStoryIndex : p - 1));
const [openIndex, setOpenIndex] = useState(1);
  return (
<>
    <section
      id="careers"
      className="container mx-auto px-6 md:px-10 py-16"
    >
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* LEFT : IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={career}
            alt="Why Nschool"
            className="w-full max-w-md"
          />
        </div>

        {/* RIGHT : CONTENT */}
        <div className="md:w-1/2">

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1A3A6E] leading-tight ">
            Why <br />
            <span className="text-[#F17424] font-bold">
              Nschool Academy?
            </span>
          </h1>

          <p className="text-gray-600 mt-5 max-w-lg lg:text-[18px]">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in <br/>some form.
          </p>

          <p className="text-gray-600 mt-4 max-w-lg lg:text-[18px]">
            By injected humour, or randomised words There are <br/>many variations of passages of Lorem
            Ipsum available,But the majority have suffered alteration in some form, By injected
            humour,But the majority have suffered alteration <br/>in some form,
          </p>

        </div>
      </div>
    </section>

     <section className="relative overflow-visible py-0">

  {/* RIGHT CORNER SHAPE – TOUCHES SCREEN END */}
  <img
    src={shape}
    alt="shape"
    className="
      absolute
      right-0
      top-[85%]
      xl:mt-[-15px]
      md:mt-8
      -translate-y-1/2
      w-28
      md:w-44
      lg:w-35
      z-10
    "
  />

  {/* CONTENT CONTAINER */}
  <div className="container mx-auto md:px-10 mb-8 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-10 xl:pl-22">

      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="flex items-start gap-4 z-10">

          <img src={icon} alt="icon" className="w-10 h-10 mt-1 xl:w-15" />

          <div>
            <h3 className="text-[#F17424] font-semibold text-base">
              Expertise Of Instructors
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mt-1 max-w-sm">
              There Are Many Variations Of Passages Of Lorem Ipsum
              Available, But The Majority Have Suffered
            </p>
          </div>

        </div>
      ))}

    </div>
  </div>
</section>
<section>
  <Testimonials/>
</section>

{/* PLACEMENT STORIES */}
      <section className="bg-[#1A4B84] py-16 px-4 overflow-hidden">
        <div className="container mx-auto">
         <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-white">
          Courses Offered
        </h2>
   <div className="text-[10px] md:text-[11px] lg:text-[18px] text-white mb-8 w-full pl-6 pr-10 ml-0 lg:-mr-6 xl:-translate-x-16">
          <p className="text-left lg:text-justify md:ml-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words. There are many variations of
            passages of Lorem Ipsum available, but the majority
          </p>
      </div>
  </div>

   {/* Carousel */}
    <div className="relative max-w-5xl mx-auto flex items-center">
      {/* Left Arrow */}
      <button
        onClick={prevStory}
        className="absolute -left-3 md:-left-10 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center hover:bg-white transition-all shadow-md"
        aria-label="Previous"
      >
        <FiChevronLeft className="text-2xl text-blue-900" />
      </button>

      <div className="overflow-hidden w-full px-2 md:px-0">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${storyIndex * (100 / cardsPerView)}%)` }}
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
                    src={sampleVideo}
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
        className="absolute -right-3 md:-right-10 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-orange-100 flex items-center justify-center hover:bg-white transition-all shadow-md"
        aria-label="Next"
      >
        <FiChevronRight className="text-2xl text-blue-900" />
      </button>
    </div>
  </div>
</section>

<section className="relative py-20 overflow-hidden">

      {/* BACKGROUND DECORATIONS */}
      {/* Light gray cloud on the left */}
      <img
          src={cornerShape}
          alt="bg shape"
          className="
            absolute
            left-0
            top-25
            md:w-[90px]
            xl:w-50
            xl:left-[-50px]
            xl:pr-10
            w-25
            -z-0
          "
        />
      {/* Light orange/peach cloud on the right */}
      <img
        src={shape}
        alt=""
        className="absolute right-0
    top-220
    w-16
    md:w-[90px]
    lg:w-[120px]
    xl:w-[120px]
    xl:top-[50%]
    2xl:top-[10%]
    sm:mt-[10%]
    md:top-120
    -z-0"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE: ILLUSTRATION */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img
                src={faqIllustration}
                alt="FAQ Illustration"
                className="w-full max-w-[500px] relative z-10"
              />
              {/* Subtle orange glow behind the image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-orange-100/50 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* RIGHT SIDE: ACCORDION */}
          <div>
            <h2 className="text-[#F17424] text-5xl font-bold mb-10">FAQ</h2>

            <div className="space-y-2">
              {faqData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 max-w-[85%] mx-auto">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full py-5 flex justify-between items-center text-left hover:text-[#F17424] transition-colors xl:pr-25"
                  >
                    <span className={`font-bold text-lg ${openIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>
                      {item.question}
                    </span>
                    <span className="text-2xl font-light">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
</>
  );
}