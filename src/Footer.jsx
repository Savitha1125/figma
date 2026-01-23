const Footer = () => {
  return (
    <footer className="w-full bg-[#0b3a6f] text-white relative">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Nschool Academy</h3>

          <p className="text-orange-400 font-semibold mb-1">Coimbatore</p>
          <p className="text-sm leading-relaxed mb-4">
            No - 287/3, Standard Towers, Near Fun Republic Mall,
            Avinashi Main Road, Peelamedu, Coimbatore - 641 004.
          </p>

          <p className="text-orange-400 font-semibold mb-1">Gobichettipalayam</p>
          <p className="text-sm leading-relaxed">
            No - 10/11 1st Floor, Sai Arcades, Pariyur Road,
            Near Bus Stand, Gobichettipalayam, Pincode - 638 476.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Course Offered</li>
            <li>Testimonials</li>
            <li>Gallery</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Course Offered</li>
            <li>Testimonials</li>
            <li>Gallery</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Course Offered</li>
            <li>Testimonials</li>
            <li>Gallery</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-blue-400/30"></div>

      {/* Bottom Bar */}
      <div className="bg-[#062a52] py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo + Text */}
          <div className="flex items-center gap-3">
            <div className="text-orange-400 font-bold text-lg leading-none">
              Nschool
              <div className="text-xs tracking-widest text-white">ACADEMY</div>
            </div>
            <p className="text-xs max-w-md text-gray-200">
              There Are Many Variations Of Passages Of Lorem Ipsum Available,
              But The Majority Have Suffered Alteration In Some Form.
            </p>
          </div>

          {/* Links */}
          <div className="text-xs flex gap-4 text-gray-300">
            <span>Privacy Policy</span>
            <span>Terms Of Use</span>
            <span>Cookies Policy</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-300">
            All Rights Reserved Nschool 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
