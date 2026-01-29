import React from "react";
import { useState } from "react";
import image1 from "./assets/Mask group.png"; // left shape
import image2 from "./assets/brown-right.png"; // right shape
import mern from "./assets/mern.png";
import python from "./assets/python-logo.png";
import php from "./assets/php.png";
import mean from "./assets/mean.png";
import database from "./assets/database.png";
import backend from "./assets/backend.png";
import frontend from "./assets/frontend.png";
import github from "./assets/github.png";
import cloudright from "./assets/cloudleft.png";
import icon from "./assets/lap.png";
import cloudtl from "./assets/cloudtl.png";
import bottomRight from "./assets/cloudleft.png";
import certificate from "./assets/certificate.png";
import chargebee from "./assets/chargebee.png";
import FAQSection from "./FAQSection";
import VideoClip from "./VideoClip";
import Footer from "./Footer";
export default function FullStackPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setShowPopup(true);

      // optional reset
      setFormData({
        name: "",
        email: "",
        mobile: "",
        course: "",
      });
    }
  };
  return (
    <>
      <div className="font-sans text-gray-800 xl:pt-20 w-full">
        {/* ================= HERO SECTION ================= */}
        <section className="relative px-8 py-16 lg:px-24 flex flex-col lg:flex-row items-start justify-between gap-12 overflow-hidden m-auto">
          {/* HERO LEFT CORNER */}
          <img
            src={image1}
            alt="hero left"
            className="absolute left-0 top-28 w-20 md:w-[90px] lg:w-[90px] -z-10"
          />

          {/* Hero Section */}
          <div className="max-w-2xl xl:ml-8">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-6">
              {" "}
              Full Stack Developer Course <br /> In Coimbatore{" "}
            </h1>{" "}
            <p className="text-gray-600 leading-relaxed mb-8">
              {" "}
              Join Nschool Academy's Full Stack Developer Course in Coimbatore
              to learn how to build dynamic and responsive web applications
              using both backend and frontend technologies. The course
              curriculum begins with the fundamentals of web development, covers
              the basics of JavaScript and jQuery, and shows you how to make
              custom user interfaces with Angular or React.{" "}
            </p>{" "}
            {/* Info Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div>
                <p className="text-blue-900 font-bold">Ratings</p>
                <p className="text-orange-500 font-bold">★ 4.2</p>
              </div>
              <div>
                <p className="text-blue-900 font-bold">Duration</p>
                <p className="text-orange-500 font-bold">4 Months</p>
              </div>
              <div>
                <p className="text-blue-900 font-bold">Language</p>
                <p className="text-orange-500 font-bold">தமிழ் | English</p>
              </div>
              <div>
                <p className="text-blue-900 font-bold">Learning Format</p>
                <p className="text-orange-500 font-bold">Offline</p>
              </div>
            </div>
            {/* Time Slots */}
            <div className="border border-gray-300 rounded-2xl p-6 flex flex-wrap justify-between items-center gap-4">
              {" "}
              <div className="text-center">
                {" "}
                <p className="text-gray-500 text-sm font-semibold">
                  Morning
                </p>{" "}
                <p className="text-blue-900 text-xl font-bold">
                  9AM - 12PM
                </p>{" "}
              </div>{" "}
              <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
              <div className="text-center">
                {" "}
                <p className="text-gray-500 text-sm font-semibold">Afternoon</p>
                <p className="text-blue-900 text-xl font-bold">12PM - 3PM</p>
              </div>
              <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
              <div className="text-center">
                <p className="text-gray-500 text-sm font-semibold">Evening</p>
                <p className="text-blue-900 text-xl font-bold">4PM - 7PM</p>
              </div>
            </div>
          </div>

          {/* FORM */}
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100 lg:ml-auto">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-bold mb-1">Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Full Name"
              className="w-full border p-2 rounded bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full border p-2 rounded bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">
              Mobile Number*
            </label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your Mobile Number"
              className="w-full border p-2 rounded bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm">{errors.mobile}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold mb-1">
              What Course you looking for*
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border p-2 rounded bg-gray-50"
            >
              <option value="">Choose your course</option>
              <option value="Full Stack">Full Stack Development</option>
              <option value="UI UX">UI / UX Design</option>
              <option value="Data Science">Data Science</option>
            </select>
            {errors.course && (
              <p className="text-red-500 text-sm">{errors.course}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#1e4b8a] text-white font-bold py-3 rounded-full mt-4 hover:bg-blue-900 transition shadow-lg"
          >
            Enroll Now
          </button>
        </form>
      </div>

      {/* POPUP MODAL */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center w-[90%] max-w-sm">
            <h2 className="text-xl font-bold text-green-600 mb-2">
              Enrollment Successful 
            </h2>
            <p className="text-gray-600 mb-4">
              Our team will contact you shortly.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#1e4b8a] text-white px-6 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      </section>

        {/* ================= ABOUT SECTION ================= */}
        <section className="relative px-6 py-16 lg:px-24 bg-[#F6FAFB] lg:ml-8">
          {/* ABOUT LEFT CORNER */}
          <img
            src={image2}
            alt="about right"
            className="absolute right-0 top-64 w-20 md:w-[90px] lg:w-[120px] -z-0"
          />
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-900">About</span>{" "}
            <span className="text-orange-500">Full Stack Development</span>
          </h2>

          <div className="text-gray-600 text-[20px] leading-relaxed">
            <p>
              Full Stack Developers are developers that design complete apps and
              websites. These developers work on all facets of <br />{" "}
              development, from frontend, to backend, to database and even
              debugging and testing. In short, the developer must <br />
              understand the app through and through. Frontend developers are
              more sought after because of their expertise of not in <br />
              one but multiple technologies. They can handle all aspects of
              development, and it can result in a more seamlessly created <br />{" "}
              product.
              <br />
              However,resources to become a Full Stack Developer are limited and
              only offer sections or just random technologies that <br />
              you must learn and combine on your own. So, we introduced this
              course that compiles all technologies in perfect sync To <br />{" "}
              help developers transition from a simple developer to become a
              Full Stack Developer
            </p>
          </div>

          <button className="mt-8 bg-[#1e4b8a] text-white px-8 py-2 rounded">
            Show More
          </button>
        </section>
      </div>

      <section className="relative max-w-6xl mx-auto px-6 sm:px-9 py-12 overflow-visible">
        {/* Decorative Left Image */}
        <img
          src={image1}
          className="absolute left-0 sm:-left-12 md:-left-24 bottom-0 xl:bottom-84 w-16 sm:w-20 md:w-[90px] -z-0"
        />

        {/* Decorative Right Image */}
        <img
          src={cloudright}
          className="absolute right-0 sm:-right-12 md:-right-24 bottom-0 xl:bottom-84 w-16 sm:w-20 md:w-[90px] xl:w-25 -z-0"
        />

        {/* Header Section */}
        <div className="text-center mb-12 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#19467E]">
            Technology <span className="text-[#F17424]">Stack</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-[19px] leading-relaxed">
            Full Stack Developers are developers that design complete apps and
            websites. These developers work on all facets of development, from
            frontend, to backend, to database and even debugging and testing. In
            short, the developer must understand the app through and through.
            Frontend developers are more sought after because of their
            <span className="block sm:inline">
              {" "}
              expertise in not one but multiple technologies.
            </span>
          </p>
        </div>

        {/* Timeline/Grid Section */}
        <div className="bg-white min-h-screen p-6 sm:p-12 font-sans">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {/* Repeatable Card Component */}
            {[
              { logo: mern, title: "MERN Stack" },
              { logo: python, title: "Python Stack" },
              { logo: php, title: "MEAN Stack" },
              { logo: mern, title: "MERN Stack" },
            ].map((stack, idx) => (
              <div key={idx} className="relative">
                {/* Horizontal Line */}
                <div className="absolute left-6 w-56 h-[1px] bg-gray-400"></div>

                {/* Top Logo */}
                <div className="flex justify-end mb-1 pr-18">
                  <div className="w-20 sm:w-24 h-20 sm:h-24 relative">
                    <img
                      src={stack.logo}
                      alt={stack.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Vertical Timeline Line */}
                <div className="absolute left-6 top-0 bottom-6 w-[1.5px] bg-gray-400"></div>

                {/* Timeline Items */}
                <div className="space-y-16 sm:space-y-20">
                  {["Front-End", "Back-End", "Database", "Version Control"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="relative flex items-center pl-16 sm:pl-16"
                      >
                        {/* Horizontal connector */}
                        <div className="absolute left-6 w-10 h-[1.5px] bg-gray-400"></div>
                        {/* Timeline dot */}
                        <div className="absolute left-[20px] w-2.5 h-2.5 bg-gray-400 rounded-full"></div>

                        {/* Icon + Text */}
                        <div className="flex items-center">
                          <div className="bg-white p-2 rounded-full border shadow-sm mr-4 z-10">
                            <img src={frontend} className="w-10 h-10" />
                          </div>
                          <div>
                            <h3 className="text-[#1e3a8a] font-bold text-lg sm:text-xl">
                              {item}
                            </h3>
                            <p className="text-[#f26522] text-sm font-bold">
                              {stack.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="bg-[#19467E] text-white py-16">
        <div class="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-5 text-center">
            Course <span className="text-[#F17424]">Highlights</span>
          </h2>
          {/* Paragraph: LEFT under heading */}
          <div
            className="text-[10px] md:text-[11px] lg:text-[18px] text-white mb-8 w-full
                pl-6 pr-10
                ml-0 lg:-mr-6 xl:-translate-x-16"
          >
            <p className="text-left lg:text-justify md:ml-5 mt-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words. There are many variations of
              passages of Lorem Ipsum available, but the majority
            </p>
          </div>
          {/* <!-- Features Grid --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {/* <!-- Left Column --> */}
            <div class="space-y-7 xl-translate-x-4 sm:-translate-x-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">
                  Designed for Students & Working Professionals
                </p>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">
                  Build Portfolio with 20+ Projects
                </p>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">
                  Practical Hands-on Workshops
                </p>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">
                  One-on-One with Industry Mentors
                </p>
              </div>
            </div>

            {/* <!-- Right Column --> */}
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">
                  EMI Option Available
                </p>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">3 Hackathons</p>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">
                  Ask-me-Anything Sessions
                </p>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                  <img src={icon} class="w-10 h-8" alt="icon" />
                </div>
                <p class="font-semibold text-white text-[18px]">
                  Available in English, தமிழ்
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="bg-white relative overflow-hidden">
        {/* <!-- Left Corner Image --> */}
        <img
          src={cloudtl}
          alt="Left Decoration"
          class="absolute top-10 left-0 xl:w-30 md:w-48 w-5-z-0"
        />

        {/* <!-- Right Corner Image --> */}
        <img
          src={image2}
          alt="Right Decoration"
          class="absolute top-10 right-0 xl:w-20 md:w-48 -z-0"
        />
        {/* Bottom Left Image */}
        <img
          src={image1}
          alt="Bottom Left Decoration"
          className="absolute bottom-0 left-0 xl:w-15 md:w-24 xl:w-30 -z-0"
        />

        {/* Bottom Right Image */}
        <img
          src={bottomRight}
          alt="Bottom Right Decoration"
          className="absolute bottom-0 right-0 xl:w-25 md:w-24 -z-0"
        />

        <div class="container mx-auto px-4 py-16 relative z-10">
          {/* <!-- Title --> */}
          <div className="max-w-6xl mx-auto px-4 py-2 font-opensans">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#19467E]">
              Full Stack Developer{" "}
              <span className="text-[#F17424]">Course Curriculum</span>
            </h2>
            {/* Paragraph: LEFT under heading */}
            <div
              className="text-[10px] md:text-[11px] lg:text-[18px] text-gray-600 mb-8 w-full
                pl-6 pr-10
                ml-0 lg:-mr-6 xl:-translate-x-10"
            >
              <p className="text-left lg:text-justify md:ml-5 mt-7 text-[18px]">
                Full Stack Developers are developers that design complete apps
                and websites. These developers work on all facets of <br />
                Development, from frontend, to backend, to database and even
                debugging and testing. In short, the developer must <br />
                understand the app through and through. Frontend developers are
                more sought after
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-15 mt-0 justify-items-center pr-20 ml-20">
            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 1 - 2
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray mt-2 text-[18px]">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>
            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 3 - 4
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray mt-2 text-[18px]">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>

            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 5 - 6
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray text-[18px] mt-2">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>

            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 7 - 8
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray text-[18px] mt-2">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>

            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 9 - 10
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray text-[18px] mt-2">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>

            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 11 - 12
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray text-[18px] mt-2">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>
            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 13 - 14
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray mt-2 text-[18px]">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>
            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 15 - 16
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray mt-2 text-[18px]">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>
            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 17
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray mt-2 text-[18px]">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>
            <div class="bg-[#F6FAFB] p-6 rounded-xl shadow ">
              <span class="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm font-medium">
                Week 18
              </span>
              <h2 class="text-xl font-semibold text-gray-800 mt-3">
                Web Fundamentals
              </h2>
              <p class="text-gray mt-2 text-[18px]">
                Introduction to Web, Developer Tools, Fundamentals of Web
                Development using HTML, CSS. Version Control using Git & GitHub
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0f3460] w-full flex flex-col items-center px-4 md:px-8 py-10 ">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-[#19467E]">
          Full Stack Developer{" "}
          <span className="text-[#F17424]">Course Curriculum</span>
        </h2>

        <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white mt-6 mb-10 max-w-6xl mx-auto text-center px-4">
          <p>
            Full Stack Developers are developers that design complete apps and
            websites. These developers work on all facets of <br />
            development, from frontend, to backend, to database and even
            debugging and testing.In short, the developer must
          </p>
          <p className="mt-2">
            understand the app through and through. Frontend developers are more
            sought after.
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-5xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl flex flex-col items-center pb-10 relative">
            <div className="bg-[#fde2d3] w-full pt-16 pb-12 flex flex-col items-center rounded-b-[50%] scale-x-110">
              <div className="absolute top-2 w-16 h-16 bg-white text-orange-500 font-bold rounded-full shadow-lg border-2 border-orange-100 text-xl flex items-center justify-center">
                12.5k
              </div>
              <h2 className="text-[#1e3a8a] text-2xl md:text-3xl font-black mt-4">
                Beginner
              </h2>
            </div>

            <div className="mt-8 text-center px-6">
              <p className="text-gray-500 font-bold text-lg">Duration</p>
              <p className="text-[#1e3a8a] text-3xl font-black mb-8">
                60 - 75 Hours
              </p>

              <ul className="text-left space-y-4 text-gray-600 text-sm font-medium mb-10">
                <li>✓ 1-to-1 mode class training</li>
                <li>✓ Strong understanding on basics</li>
                <li>✓ Core practical training</li>
              </ul>

              <button className="border-2 border-[#1e3a8a] text-[#1e3a8a] font-bold py-3 px-10 rounded-full hover:bg-[#1e3a8a] hover:text-white transition">
                Get a Plan
              </button>
            </div>
          </div>

          {/* Card 2 (Highlight) */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col items-center pb-10 relative border-t-8 border-orange-500 md:scale-105">
            <div className="bg-[#f26522] w-full pt-16 pb-12 flex flex-col items-center rounded-b-[50%] scale-x-110">
              <div className="absolute top-2 w-16 h-16 bg-white rounded-full shadow-lg border-2 border-orange-100 flex items-center justify-center font-bold text-[#19467E]">
                Call
              </div>
              <h2 className="text-white text-2xl md:text-3xl font-black mt-4">
                Intermediate
              </h2>
            </div>

            <div className="mt-8 text-center px-8">
              <p className="text-gray-500 font-bold text-lg">Duration</p>
              <p className="text-[#1e3a8a] text-3xl font-black mb-8">
                225 Hours
              </p>

              <div className="space-y-4 text-gray-600 text-sm mb-10">
                <p>1-to-1 mode class training</p>
                <p>Strong understanding on basics</p>
                <p>Core practical training</p>
              </div>

              <button className="bg-[#f26522] text-white font-bold py-4 px-12 rounded-full shadow-lg hover:bg-orange-600 transition">
                Get a Plan
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[40px] overflow-hidden shadow-xl flex flex-col items-center pb-10 relative">
            <div className="bg-[#fde2d3] w-full pt-16 pb-12 flex flex-col items-center rounded-b-[50%] scale-x-110">
              <div className="absolute top-2 w-16 h-16 bg-white rounded-full shadow-lg border-2 border-orange-100 flex items-center justify-center text-orange-500 font-bold">
                Call
              </div>
              <h2 className="text-[#1e3a8a] text-2xl md:text-3xl font-black mt-4">
                Expertise
              </h2>
            </div>

            <div className="mt-8 text-center px-6">
              <p className="text-gray-500 font-bold text-lg">Duration</p>
              <p className="text-[#1e3a8a] text-3xl font-black mb-8">
                300 Hours
              </p>

              <ul className="space-y-4 text-gray-600 text-sm mb-10">
                <li>1-to-1 mode class training</li>
                <li>Strong understanding on basics</li>
                <li>Core practical training</li>
              </ul>

              <button className="border-2 border-[#1e3a8a] text-[#1e3a8a] font-bold py-3 px-10 rounded-full hover:bg-[#1e3a8a] hover:text-white transition">
                Get a Plan
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-16 overflow-hidden">
        {/* <!-- Left Corner Image --> */}
        <img
          src={cloudtl}
          alt="Left Decoration"
          class="absolute top-10 left-0 xl:w-35 md:w-48 w-5-z-0"
        />

        {/* <!-- Right Corner Image --> */}
        <img
          src={image2}
          alt="Right Decoration"
          class="absolute top-10 right-0 xl:w-20 md:w-48 -z-0"
        />
        {/* Bottom Left Image */}
        <img
          src={image1}
          alt="Bottom Left Decoration"
          className="absolute bottom-0 left-0 xl:w-8 md:w-24 xl:w-30 -z-0"
        />

        {/* Bottom Right Image */}
        <img
          src={bottomRight}
          alt="Bottom Right Decoration"
          className="absolute bottom-0 right-0 xl:w-25 md:w-24 -z-0"
        />

        {/* CONTENT */}
        <div className="relative max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#19467E]">
            Course <span className="text-[#F17424]">Certificate</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base mt-4 text-center xl:text-[18px]">
            Full Stack Developers are Developers that Design Complete Apps and
            Websites. These Developers Work on All Facets Of Development, From
            Frontend, To Backend, To Database And Even Debugging And Testing.
          </p>

          {/* 3 TEXT BLOCKS */}
          <div className="mt-8 space-y-6 text-gray-600 text-sm xl:mr-5 text-left">
            <div>
              <h4 className="font-bold text-[#19467E] xl:text-[20px]">
                Earn your Full Stack Java Developer Certificate
              </h4>
              <p className="xl:text-[18px]">
                Our Full Stack Java Developer course is exhaustive and this
                certificate is proof that you have taken a big leap in mastering
                the domain.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#19467E] xl:text-[20px]">
                Differentiate Yourself with a Master’s Certificate
              </h4>
              <p className="xl:text-[18px]">
                This certificate shows your expertise and proves your skills in
                real-world development.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#19467E] xl:text-[20px]">
                Share Your Achievement
              </h4>
              <p className="xl:text-[18px]">
                Showcase your certification on LinkedIn and boost your career
                profile.
              </p>
            </div>
          </div>

          {/* CERTIFICATE IMAGE */}
          <div className="mt-12 flex justify-center">
            <img
              src={certificate}
              alt="certificate"
              className="w-full max-w-5xl shadow-2xl rounded-lg"
            />
          </div>
        </div>
      </div>

      <section className="relative px-6 py-16 lg:px-24 bg-[#F6FAFB]">
        <div className="bg-[#F6FAFB] py-14 px-4 font-opensans">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-900">
              Job Opportunities After Completing
            </span>{" "}
            <div className="text-orange-500 mt-5">
              Full Stack Developer Course in Coimbatore
            </div>
          </h2>

          <div className="text-gray-600 text-[20px] leading-relaxed">
            <p>
              Technology is constantly evolving as we move forward, and there
              will never be a stop to it. As a result of these constant digital
              advancements, businesses have had to shift their focus even more
              toward developing software solutions. This will enable them to
              keep up with the growing demands of their customers. Consequently,
              the demand for Full Stack Developers grew laterally among
              companies. In recent years, industries have embraced these
              developers. This is due to the fact that these developers occupy
              significant job posts in small and medium-sized development firms.
              To leverage their costs, most Start-up companies hire a Full Stack
              Developer to build their own applications and their clients’
              applications.Taking a closer look at the main reason why these
              developers are located mainly here, it stems from the capital
              investments they are making. The capital investments made by small
              and medium businesses are less when compared to that of
              multinational corporations.
            </p>
            <br />
            <p>
              Taking a closer look at the main reason why these developers are
              located mainly here, it stems from the capital investments they
              are making. The capital investments made by small and medium
              businesses are less when compared to that of multinational
              corporations.
            </p>
          </div>

          <button className="mt-8 bg-[#1e4b8a] text-white px-8 py-2 rounded">
            Show More
          </button>
        </div>
      </section>

      <section className="relative px-6 py-8 lg:px-24 ">
        {/* <!-- Left Corner Image --> */}
        <img
          src={cloudtl}
          alt="Left Decoration"
          class="absolute top-10 left-0 xl:w-35 md:w-48 w-5 -z-10"
        />

        {/* <!-- Right Corner Image --> */}
        <img
          src={image2}
          alt="Right Decoration"
          class="absolute top-10 right-0 xl:w-35 md:w-48 -z-10"
        />
        <div className=" py-1 px-5 font-opensans">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#19467E]">
            Course <span className="text-[#F17424]">Certificate</span>
          </h2>

          <div className="text-gray-600 text-[20px] leading-relaxed">
            <p>
              Full Stack Developers are developers that design complete apps and
              websites. These developers work on all facets of development, from
              frontend, to backend, to database and even debugging and testing.
              In short, the developer must
            </p>
            <p className="flex justify-center">
              understand the app through and through. Frontend developers are
              more sought after
            </p>
          </div>
        </div>
        {/* Company Logos */}

        <div class="bg-white font-sans">
          <div class="max-w-6xl mx-auto py-16 px-4">
            <div class="grid grid-cols-2 md:grid-cols-5 border-t border-l border-dashed border-gray-300">
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <img src={chargebee} alt="" />
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-gray-400">Clayfin</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-900">● JUSPAY</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl text-gray-400">crayon'd</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-400">emis health</span>
              </div>

              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-800">oneDPO</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-orange-500">
                  OrangeScape
                </span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-black italic">Orcaso</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-blue-600 italic">
                  Flipkart
                </span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-red-500">ZOHO</span>
              </div>

              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <img src={chargebee} alt="Chargebee" />
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-gray-400">Clayfin</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-900">● JUSPAY</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl text-gray-400">crayon'd</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-400">emis health</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <img src={chargebee} alt="" />
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-gray-400">Clayfin</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-900">● JUSPAY</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl text-gray-400">crayon'd</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-400">emis health</span>
              </div>

              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-800">oneDPO</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-orange-500">
                  OrangeScape
                </span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-black italic">Orcaso</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-blue-600 italic">
                  Flipkart
                </span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-red-500">ZOHO</span>
              </div>

              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <img src={chargebee} alt="Chargebee" />
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-2xl font-bold text-gray-400">Clayfin</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-900">● JUSPAY</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl text-gray-400">crayon'd</span>
              </div>
              <div class="flex items-center justify-center p-8 border-r border-b border-dashed border-gray-300 h-32">
                <span class="text-xl font-bold text-blue-400">emis health</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="bg-[#1e3a8a] py-6 mb-6">
        <div class="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div class="text-white max-w-2xl">
            <h2 class="text-4xl font-bold text-orange-500 mb-4">Brochure</h2>
            <p class="text-gray-200 text-sm leading-relaxed">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form, By
              Injected Humour, Or Randomised Words
            </p>
          </div>

          <div>
            <button class="bg-[#f26522] text-white font-bold text-lg py-4 px-10 rounded shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wider">
              Download Brochure
            </button>
          </div>
        </div>
      </div>

      <section className="relative px-6 py-16 bg-[#F6FAFB]">
        <FAQSection />
      </section>
      <section>
        <VideoClip />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
