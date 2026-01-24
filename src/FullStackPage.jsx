import React from 'react';

export default function FullStackPage() {
  return (
    <div className=" font-sans text-gray-800 xl:pt-20">

      {/* Hero Section */}
      <section className="relative px-8 py-16 lg:px-24 flex flex-col lg:flex-row items-start justify-between gap-12 overflow-hidden m-auto">
        {/* Background circle */}
        {/* <div className="absolute -top-20 -left-0 w-64 h-64 bg-orange-50 rounded-full -z-10"></div> */}

        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-orange-500 mb-6">
            Full Stack Developer Course <br /> In Coimbatore
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Join Nschool Academy's Full Stack Developer Course in Coimbatore to learn how to build dynamic and responsive web applications using both backend and frontend technologies. The course curriculum begins with the fundamentals of web development, covers the basics of JavaScript and jQuery, and shows you how to make custom user interfaces with Angular or React.
          </p>

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
            <div className="text-center">
              <p className="text-gray-500 text-sm font-semibold">Morning</p>
              <p className="text-blue-900 text-xl font-bold">9AM - 12PM</p>
            </div>
            <div className="h-10 w-px bg-gray-300 hidden md:block"></div>
            <div className="text-center">
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

        {/* Right Form */}
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-gray-100 lg:ml-auto">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1">Name*</label>
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-full border p-2 rounded bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Email*</label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full border p-2 rounded bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Mobile Number*</label>
              <input
                type="text"
                placeholder="Enter your Mobile Number"
                className="w-full border p-2 rounded bg-gray-50 outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">What Course you looking for</label>
              <select className="w-full border p-2 rounded bg-gray-50 text-gray-400">
                <option>Choose your course</option>
              </select>
            </div>
            <button className="w-full bg-[#1e4b8a] text-white font-bold py-3 rounded-full mt-4 hover:bg-blue-900 transition shadow-lg">
              Enroll Now
            </button>
          </form>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 lg:px-24 relative">
        <h2 className="text-4xl font-bold mb-6">
          <span className="text-blue-900">About</span> <span className="text-orange-500">Full Stack Development</span>
        </h2>
        <div className="max-w-5xl space-y-4 text-gray-600 leading-relaxed">
          <p>
            Full Stack Developers Are Developers That Design Complete Apps And Websites. These Developers Work On All Facets Of Development, From Frontend, To Backend, To Database And Even Debugging And Testing. In Short, The Developer Must Understand The App Through And Through.
          </p>
          <p>
            However, Resources To Become A Full Stack Developer Are Limited And Only Offer Sections Or Just Random Technologies That You Must Learn And Combine On Your Own. So, We Introduced This Course That Compiles All Technologies In Perfect Sync To Help Developers Transition From A Simple Developer To Become A Full Stack Developer.
          </p>
        </div>
        <button className="mt-8 bg-[#1e4b8a] text-white px-8 py-2 rounded font-semibold hover:bg-blue-900 transition">
          Show More
        </button>
      </section>
    </div>
  );
}
