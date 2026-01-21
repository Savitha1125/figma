import { useState } from "react";
import facebook from "./assets/Vector (2).png";
import insta from "./assets/Vector (3).png";
import linkedin from "./assets/Vector (4).png";
import ytube from "./assets/Vector (5).png";
import twitter from "./assets/Vector (1).png";
import whatsapp from "./assets/whatsapp-logo.png";
import email from "./assets/Gmail_icon.png";
import image from "./assets/image1.png"
import image1 from "./assets/Mask group.png"
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        {/* TOP BAR */}
        <div className="container mx-auto px-4 sm:px-6 md:px-6 py-2 flex flex-col sm:flex-row md:flex-row justify-between items-center">
          {/* Left: Social + Careers */}
          <div className="flex items-center gap-4 sm:pl-6 md:pl-9">
            <div className="flex items-center gap-2">
              {[facebook, insta, linkedin, ytube, twitter].map((icon, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f17424] transition-all duration-200 cursor-pointer"
                >
                  <img src={icon} alt="icon" className="w-5 h-5" />
                </div>
              ))}
            </div>
            <span className="text-gray-500">|</span>
            <span className="text-gray-500 font-normal cursor-pointer">Careers</span>
          </div>

          {/* Right: Email + WhatsApp */}
          <div className="flex flex-col sm:flex-row md:flex-row items-center gap-2 sm:gap-4 md:gap-5 mt-2 sm:mt-0 md:pl-10 md:pr-8 sm:pl-0 md:pl-0 ml-auto">
            <div className="flex items-center gap-2 justify-end">
              <img src={email} alt="Email" className="w-4 h-4" />
              <span className="text-sm sm:text-base">contact@n-school.com</span>
            </div>
            <div className="flex items-center gap-2 justify-end">
              <img src={whatsapp} alt="WhatsApp" className="w-6 h-6" />
              <span className="text-sm sm:text-base">+91 90 43 49 49 41</span>
            </div>
          </div>
        </div>

        {/* MAIN NAV + LOGO */}
        <div className="container mx-auto px-4 sm:px-6 md:px-6 py-4 flex justify-between items-center">
          {/* Logo LEFT */}
          <div className="flex flex-col items-start">
            <span className="text-xl sm:text-2xl font-bold text-[#f17424] pl-2 sm:pl-6 md:pl-10">Nschool</span>
            <span className="text-md tracking-widest text-[#19467E] pl-2 sm:pl-6 md:pl-10">Academy</span>
          </div>
          {/* Menu RIGHT */}
          <ul className="hidden md:flex gap-6 text-gray-700 text-sm sm:text-base pr-4 sm:pr-6 md:pr-10">
            {["Home", "Courses", "Careers", "Blog", "Contact"].map((item, idx) => (
              <li key={idx} className="hover:text-[#f17424] cursor-pointer">{item}</li>
            ))}
          </ul>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <ul className="md:hidden flex flex-col px-4 pb-4 space-y-2">
            {["Home", "Courses", "Careers", "Blog", "Contact"].map((item, idx) => (
              <li key={idx} className="hover:text-[#f17424] cursor-pointer w-full pl-2">{item}</li>
            ))}
          </ul>
        )}
      </div>

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
        </h2>

        <p className="text-gray-600 mt-5 max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>

        <button className="bg-[#19467E] text-white px-6 py-3 rounded-md mt-6">
          Get 100% Placement Assistance*
        </button>
      </div>

      {/* RIGHT MAIN IMAGE */}
      <div className="md:w-[80%] flex justify-end">
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
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center">
    Nschool Acadamy’s <span className="text-orange-500">Placement Partners</span>
  </h2>

  {/* Paragraph: LEFT under heading */}
  <p className="text-[10px] md:text-[11px] lg:text-[13px] text-gray-600 mb-8 text-left pr-10 -ml-4 max-w-[86%]">
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
  alteration in some form, by injected humour, or randomised words. There are many variations of 
  passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by 
  injected humour.
</p>

  {/* Logos */}
  <div className="flex flex-wrap justify-center items-center gap-6">
    <img src="/logo-facebook.png" alt="Facebook" className="h-8 md:h-10 lg:h-12" />
    <img src="/logo-google.png" alt="Google" className="h-8 md:h-10 lg:h-12" />
    <img src="/logo-directi.png" alt="Directi" className="h-8 md:h-10 lg:h-12" />
    <img src="/logo-netflix.png" alt="Netflix" className="h-8 md:h-10 lg:h-12" />
    <img src="/logo-amazon.png" alt="Amazon" className="h-8 md:h-10 lg:h-12" />
  </div>
</div>


</>
  );
}
