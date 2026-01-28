import { useState } from "react";
import facebook from "./assets/Vector (2).png";
import insta from "./assets/Vector (3).png";
import linkedin from "./assets/Vector (4).png";
import ytube from "./assets/Vector (5).png";
import twitter from "./assets/Vector (1).png";
import whatsapp from "./assets/whatsapp-logo.png";
import email from "./assets/Gmail_icon.png";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { name: "Home", to: "/" },
    { name: "Courses", to: "/courses" },
    { name: "Careers", to: "/careerpage" },
    { name: "Blog", to: "/blogpage" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* FIXED NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-1000 bg-white">
        {/* TOP BAR */}
        <div className="max-w-6xl mx-auto py-2 flex flex-col sm:flex-row md:flex-row justify-between border-gray-300 items-center border-b">
          {/* Left: Social + Careers */}
          <div className="flex items-center gap-4">
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
            <Link to='/careerpage' className="text-gray-500 font-normal cursor-pointer">Careers</Link>
          </div>

          {/* Right: Email + WhatsApp */}
          <div className="flex flex-col sm:flex-row md:flex-row items-center gap-2 sm:gap-4 md:gap-5 mt-2 sm:mt-0 ml-auto">
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
      {links.map((link, idx) => (
        <li key={idx}>
          <Link
            to={link.to} // Use React Router Link
            className="hover:text-[#f17424] cursor-pointer"
          >
            {link.name}
          </Link>
        </li>
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

      

</>
  );
}
