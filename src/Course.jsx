import cloud from "./assets/cloudleft.png";
import cloud1 from "./assets/cloudright.png";
import fullstack from "./assets/fullstack-icon.png";
import flutter from "./assets/flutter-icon.png";
import python from "./assets/python.png";
import digital from "./assets/campaign.png";

import cornerTL from "./assets/Ellipse-topleft.png";
import cornerTR from "./assets/Ellipse-topright.png";
import cornerBL from "./assets/Ellipse-bottomleft.png";
import cornerBR from "./assets/Ellipse-bottomright.png";
import { Link } from "react-router-dom";

export default function Course() {

  const Pill = ({ children }) => (
    <span className="px-4 py-1 border border-blue-400 text-blue-500 rounded-full text-[10px] leading-none">
      {children}
    </span>
  );

  // Re-usable card
  const CourseCard = ({ icon, title, tags }) => (
    <div className="relative bg-white rounded-2xl shadow-lg p-8 min-h-[250px] md:min-h-[265px] overflow-hidden">
      {/* corner dots */}
      <img src={cornerTL} alt="" className="absolute top-0 left-0 w-8 md:w-10 opacity-80 pointer-events-none" />
      <img src={cornerTR} alt="" className="absolute top-0 right-0 w-8 md:w-10 opacity-80 pointer-events-none" />
      <img src={cornerBL} alt="" className="absolute bottom-0 left-0 w-8 md:w-10 opacity-80 pointer-events-none" />
      <img src={cornerBR} alt="" className="absolute bottom-0 right-0 w-8 md:w-10 opacity-80 pointer-events-none" />

      {/* content: LEFT icon centered + RIGHT content */}
      <div className="h-full flex items-center relative z-10">
        <div className="w-[190px] flex justify-center items-center">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
            <img src={icon} alt={title} className="w-10" />
          </div>
        </div>

        <div className="flex-1 text-left pr-2">
          <h3 className="text-[16px] md:text-[18px] font-bold text-slate-800">{title}</h3>

          <p className="text-gray-500 text-[11px] leading-4 mt-2 max-w-xs">
            There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have
          </p>

          <div className="flex flex-wrap gap-2 mt-5">
            {tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
      <>
    <div className="bg-[#F6FAFB] py-14 px-4 font-opensans">
      {/* Heading + para */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-[#1A3A6E]">
          Courses <span className="text-[#F17424]">Offered</span>
        </h2>

        <div className="text-[10px] md:text-[11px] lg:text-[18px] text-gray-600 mb-8 w-full pl-6 pr-10 ml-0 lg:-mr-6 xl:-translate-x-16">
          <p className="text-left lg:text-justify md:ml-5">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words. There are many variations of
            passages of Lorem Ipsum available, but the majority
          </p>
          <p className="text-center">Have suffered alteration in some form, by injected humour.</p>
        </div>
      </div>

      {/* Cards area */}
      <section className="relative -translate-y-[41px] overflow-hidden">
        {/* outside bg images */}
        <img
          src={cloud}
          alt=""
          className="absolute left-[45px] top-30 -translate-y-1/2 w-20 md:w-25 opacity-60 pointer-events-none z-0"
        />
        <img
          src={cloud1}
          alt=""
          className="absolute right-[-110px] bottom-6 w-28 md:w-40 opacity-70 pointer-events-none z-0"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="p-2 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Link to="/fullstack">
              <CourseCard
                icon={fullstack}
                title="Full Stack Development"
                tags={["HTML", "CSS", "Bootstrap", "Javascript", "React JS", "Express JS", "Node", "Live Projects"]}
              />
              </Link>
              <Link to="/flutter">
              <CourseCard
                icon={flutter}
                title="Flutter Development"
                tags={[
                  "Dart Language",
                  "Widgets",
                  "Fire Base",
                  "Rest API",
                  "State Management",
                  "Google Map",
                  "Third Party Integration",
                ]}
              />
              </Link>
                <Link to="/python">
              <CourseCard
                icon={python}
                title="Python Development"
                tags={["HTML", "CSS", "Javascript", "Python", "Django", "MySQL", "Live Projects"]}
              />
              </Link>
              <Link to="/digital">
              <CourseCard
                icon={digital}
                title="Digital Marketing"
                tags={[
                  "SEO",
                  "SMO",
                  "SMM",
                  "FBE Ads",
                  "Google Ads",
                  "SEO Tools",
                  "Content Marketing",
                  "Email Marketing",
                ]}
              />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <section className="bg-[#0b2e5e] py-16 px-4 text-center text-white">
  <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center text-white">
          Courses <span className="text-[#F17424]">Offered</span>
        </h2>
    <p>
      There Are Many Variations Of Passages Of Lorem Ipsum Available, But The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised Words There Are Many Variations Of Passages
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 justify-center">
    {[
      { number: "12+", label: "Years Of Experience" },
      { number: "25+", label: "Career Courses" },
      { number: "50+", label: "Valued Recruiters" },
      { number: "10+", label: "Certified Trainers" },
      { number: "1000+", label: "Students Certified" },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-lg flex flex-col items-center justify-center shadow-lg mx-auto 
                   w-[140px] sm:w-[120px] md:w-[160px] 
                   h-[180px] sm:h-[160px] md:h-[160px] 
                   p-4 transition-transform duration-300 hover:scale-105"
      >
        <span className="text-orange-500 text-3xl mt-7 sm:text-3xl md:text-4xl font-extrabold">
          {item.number}
        </span>
        <p className="text-blue-900 font-bold mt-10 text-sm leading-tight">
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>

</>
  );
}
