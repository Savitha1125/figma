import Footer from "./Footer";
import image from "./assets/maskgroup.png"
import image from "./assets/Mask group (3).png"

export default function Contact() {
  return (
    <>
    <div className="relative overflow-hidden max-w-6xl m-auto xl:ml-18">
      
      <section className="relative max-w-6xl mx-auto px-6 sm:px-9 py-12 overflow-visible">
              {/* Decorative Left Image */}
              <img
                src={image}
                className="absolute left-0 sm:-left-12 md:-left-24 bottom-0 xl:bottom-84 w-16 sm:w-20 md:w-[90px] -z-0"
              />
      
              {/* Decorative Right Image */}
              <img
                src={cloudright}
                className="absolute right-0 sm:-right-12 md:-right-24 bottom-0 xl:bottom-84 w-16 sm:w-20 md:w-[90px] xl:w-25 -z-0"
              />
      </section>
      {/* RIGHT CORNER SHAPE */}
      <div className="absolute right-0 top-10 w-56 h-56 -z-10 "></div>

      <div className="max-w-6xl mx-auto py-16 ">
        <div className="grid md:grid-cols-2 gap-10 p-8 rounded-lg">
          
          {/* LEFT CONTENT */}
          <div className="py-20">
           <h3 className="text-4xl font-semibold mb-4">
              Get in <span className="text-orange-500">Touch</span>
            </h3>

            <div className="space-y-6 text-[20px] text-gray-700 pt-10">
              <div>
                <h4 className="font-semibold">Coimbatore</h4>
                <p>InterviewBit Technologies Private Limited</p>
                <p>9th Floor, Sakti Statesman</p>
                <p>GreenGlen Layout, Behind Iblur Lake</p>
                <p>Bellandur, Bangalore-09</p>
              </div>

              <div className="text-[20px]">
                <h4 className="font-semibold">Phone Number</h4>
                <p>+91 99 88 77 66 55</p>
                <p>+91 11 22 33 44 55</p>
              </div>

              <div className="text-[18px]">
                <h4 className="font-semibold ">Gobichettipalayam</h4>
                <p>InterviewBit Technologies Private Limited</p>
                <p>9th Floor, Sakti Statesman</p>
                <p>GreenGlen Layout, Behind Iblur Lake</p>
                <p>Bellandur, Bangalore-09</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#f7fbfc] p-18 px-6 py-1.5 mt-20 mb-20">
            <h3 className="text-lg font-semibold mt-6">
              Get in <span className="text-orange-500">Touch</span>
            </h3>

            <form className="space-y-2 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Name*</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="text-sm">Email*</label>
                  <input
                    type="email"
                    className="w-full border rounded px-3 py-2 focus:outline-none bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <label className="text-sm">Mobile Number*</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none bg-white"
                  />
                </div>
                <div>
                  <label className="text-sm">What Course you Looking for*</label>
                  <input
                    type="text"
                    className="w-full border rounded px-3 py-2 focus:outline-none bg-white"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm ">Message</label>
                <textarea
                  rows="4"
                  className="w-full border rounded px-3 py-2 focus:outline-none bg-white"
                ></textarea>
              </div>

              <div className="flex justify-center mt-8">
                <button
                    type="submit"
                    className="bg-[#19467E] text-white px-6 py-3 rounded hover:bg-blue-800"
                >
                    Submit
                </button>
                </div>
            </form>
          </div>
        </div>

        {/* MAP */}
        <div className="mt-0 rounded overflow-hidden">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.224739428644!2d76.955832!3d11.016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8591c8b4c2a2d%3A0x4d8c6f4c5d2e7a1a!2sCoimbatore!5e0!3m2!1sen!2sin!4v1690000000000"
            className="w-full h-64 "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
        </div>
      </div>
    </div>
    <section>
        <Footer/>
    </section>
    </>
  );
}
