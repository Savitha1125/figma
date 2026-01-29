import React from 'react'
import image from "./assets/image1.png"
import image1 from "./assets/Mask group.png"
import image2 from "./assets/Mask group (1).png"
import image3 from "./assets/Mask group (3).png"
export default function Home () {
  return (
      <>
    {/* Padding below fixed navbar */}
      <div className="pt-[160px] sm:pt-[160px] md:pt-[160px]"></div>

      {/* HERO SECTION */}
<div className="relative">

  {/* LEFT BROWN SHAPE IMAGE */}
  <img
    src={image1}   
    alt="bg shape"
    className="
      absolute
      left-0
      top-25
      md:w-[90px]
      w-25
      -z-10
    "
  />

  <div className="container mx-auto px-6 md:px-15">

    <div className="
      flex flex-col
      md:flex-row
      items-center
      justify-between
      gap-10
    ">

      {/* LEFT TEXT */}
      <div className="md:w-[100%]">
        <h1 className="text-3xl mt-7 lg:mt-0 sm:text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-semibold text-[#1A3A6E] leading-tight">
          Get start your <span className="text-[#F17424] whitespace-nowrap">IT career</span><br />
          development with
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F17424] mt-3">
          Nschool Academy
        </h2><br/>

        <p className="text-gray-600 mt-5 max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>

        <button className="bg-[#19467E] text-white px-6 py-3 rounded-md mt-6">
          Get 100% Placement Assistance*
        </button>
      </div>

      {/* RIGHT MAIN IMAGE */}
      <div className="md:w-[80%] flex justify-end -z-10">
        <img
          src={image}
          alt="Hero Illustration"
          className="w-full ml-20"
        />
      </div>

    </div>
  </div>
</div>
<div className="max-w-6xl mx-auto px-4 py-12 font-opensans">
  {/* Heading: CENTER */}
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 text-center">
    Nschool Acadamy’s <span className="text-[#F17424]">Placement Partners</span>
  </h2>

  {/* Paragraph: LEFT under heading */}
  <div className="text-[10px] md:text-[11px] lg:text-[18px] text-gray-600 mb-8 w-full
                pl-6 pr-10
                ml-0 lg:-mr-6 xl:-translate-x-16">
  <p className="text-left lg:text-justify md:ml-5 mt-4">
    There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
    alteration in some form, by injected humour, or randomised words.
    There are many variations of passages of Lorem Ipsum available, but the majority 
  </p>
  <p className="text-center">
    Have suffered alteration in some form, by injected humour.
  </p>
</div>


  {/* Logos */}
  <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-6 sm:gap-1 md:gap-8 md:pl-14 md:pr-18 pl-5 lg:pl-10 lg:pr-30 lg:gap-8 xl:-translate-x-20 z-100">
  <img src={image2} alt="Facebook" className="h-8 md:h-10 lg:h-12" />
</div>
<img
  src={image3}
  alt="bg shape"
  className="
    absolute
    right-0
    top-220          /* mobile default: bottom corner */
    w-16              /* mobile width */
    md:w-[90px]       /* medium screens */
    lg:w-[120px]      /* large screens */
    xl:w-[120px]      /* extra large screens */
    xl:top-[56%]
    2xl:top-[10%]
    sm:mt-[10%]
    md:top-120 
    -z-0
  "
/>
</div>
</>
  )
}
