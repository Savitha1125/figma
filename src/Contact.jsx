import leftImg from "./assets/Mask group.png"
import rightImg from "./assets/Mask group (3).png"
import {  useState } from "react"
import Footer from "./Footer";

export default function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    course: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);

      // Here you can send `formData` to your backend API if needed
      console.log("Form submitted successfully:", formData);

      // Reset form
      setFormData({
        name: "",
        email: "",
        mobile: "",
        course: "",
        message: "",
      });
    }
  };
  return (
    <>
    <section className="relative py-16 sm:py-20 lg:py-0 overflow-hidden">
      {/* Corner Images */}
      <img
        src={leftImg}
        alt="left corner"
        className="absolute top-50 left-0 w-32 sm:w-48 md:w-64 lg:w-20 pointer-events-none opacity-40"
      />
      <img
        src={rightImg}
        alt="right corner"
        className="absolute top-[40%] right-0 w-32 sm:w-10 md:w-14 lg:w-25 pointer-events-none opacity-40"
      />

      {/* Main Container */}
    <div className="mx-auto px-4 sm:px-6 lg:px-6 
                mt-36 lg:mt-40 
                mb-16 xl:mb-24 
                max-w-[1200px]">

        {/* Two Columns: Contact Info + Form */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left: Contact Info */}
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#F17424]">
              Get in <span className="text-[#19467E]">Touch</span>
            </h2>

            {/* Coimbatore */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Coimbatore</h3>
              <p className="text-gray-500 text-sm">
                InterviewBit Technologies Private Limited<br />
                9th Floor, Sakti Statesman<br />
                GreenGlen Layout, Behind Iblur Lake<br />
                Bellandur, Bangalore-09
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Phone Number</h3>
              <p className="text-gray-500 text-sm">
                +91 99 88 77 66 55<br />
                +91 11 22 33 44 55
              </p>
            </div>

            {/* Gobichettipalayam */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Gobichettipalayam</h3>
              <p className="text-gray-500 text-sm">
                InterviewBit Technologies Private Limited<br />
                9th Floor, Sakti Statesman<br />
                GreenGlen Layout, Behind Iblur Lake<br />
                Bellandur, Bangalore-09
              </p>
            </div>
          </div>

         {/* Right: Contact Form */}
          <div className="flex-1 bg-[#F5F9FF] p-6 sm:p-8 rounded-md shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F17424] mb-6">
              Get in <span className="text-[#19467E]">Touch</span>
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name*"
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F17424]"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="bg-white">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email*"
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F17424]"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white">
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number*"
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F17424]"
                  />
                  {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
                </div>

                <div className="bg-white">
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    placeholder="What Course you Looking for*"
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F17424]"
                  />
                  {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
                </div>
              </div>

              <div className="bg-white">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message*"
                  className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F17424] h-32 resize-none"
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="bg-[#19467E] text-white px-6 py-3 rounded mx-auto block"
              >
                Submit
              </button>

              {/* Success Message */}
              {success && (
                <p className="text-green-600 mt-2 font-semibold">
                  Form submitted successfully!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.771233446869!2d76.97534417581807!3d11.01708249201859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859b0b1440d07%3A0x6e391e171f96b2a1!2sCoimbatore!5e0!3m2!1sen!2sin!4v1698570234567!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </section>
    
    </>
  );
}