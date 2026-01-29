import devops from "./assets/devops.png";
import linkedin from "./assets/linkedin.png";
import angular from "./assets/angular.png";
import nodejs from "./assets/nodejs.png";
import girl from "./assets/girl.png";
import Footer  from "./Footer";
import leftImg from "./assets/Mask group.png"
import rightImg from "./assets/Mask group (3).png"
export default function Blogpage() {
  const images = [
    devops,
    linkedin,
    angular,
    nodejs,
    devops,
    linkedin,
    angular,
    nodejs,
  ];
  return (
    <div className="mt-40">
        <img
          src={leftImg}
          alt="left corner"
          className="absolute top-50 left-0 w-32 sm:w-48 md:w-64 lg:w-20 pointer-events-none opacity-60"
        />
        <img
          src={rightImg}
          alt="right corner"
          className="absolute top-[90%] right-0 w-32 sm:w-10 md:w-14 lg:w-25 pointer-events-none opacity-60"
        />
      <div className="my-20 text-center max-w-6xl mx-auto flex flex-col gap-6">
        <div className="text-center text-4xl text-[#19467E] font-semibold">
          Get start your <span className="text-[#F47422]">IT career</span>{" "}
          development with
        </div>
        <div className="text-[#333333] text-[18px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words There are many variations of passages of
          Lorem Ipsum available, but the majority <br />
          have suffered alteration in some form, by injected humour,
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="flex my-6">
          <div className="p-1 border border-black rounded-full">
            <button className="px-13 py-2 bg-[#F47422] text-white font-bold rounded-full">
              Topic 1
            </button>
          </div>
        </div>
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {images.map((img, index) => (
                <div key={index} className="bg-white overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt="card"
                    className="w-full h-70 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-md leading-snug">
                      Nschool Underlines The Need For Skill-Based Hiring With
                      Its New B2B Brand Campaign
                    </h3>

                    <p className="text-xs text-gray-500 mt-2">
                      Since its pilot launch, 6000 learners from its Academy
                      program have been provided access to the AI Teaching
                      Assistant, enabling round-the-clock query resolution, and
                      the company aims to extend ~Since its pilot launch, 6000
                      learners from its Academy program have been provided
                      access to the AI Teaching Assistant, enabling
                      round-the-clock query resolution, and the company aims to
                      extend
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={girl}
                        className="w-8 h-8 rounded-full"
                        alt="author"
                      />
                      <div className="text-xs">
                        <p className="font-medium text-gray-700">
                          Simran Thakur
                        </p>
                        <p className="text-gray-400">
                          20 Jul 2023 · 3 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
        <div className="flex my-6">
          <div className="p-1 border border-black rounded-full">
            <button className="px-13 py-2 bg-[#F47422] text-white font-bold rounded-full">
              Topic 2
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {images.slice(0, 2).map((img, index) => (
                <div key={index} className="bg-white overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt="card"
                    className="w-full h-70 object-cover"
                  />

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 text-md leading-snug">
                      Nschool Underlines The Need For Skill-Based Hiring With
                      Its New B2B Brand Campaign
                    </h3>

                    <p className="text-xs text-gray-500 mt-2">
                      Since its pilot launch, 6000 learners from its Academy
                      program have been provided access to the AI Teaching
                      Assistant, enabling round-the-clock query resolution, and
                      the company aims to extend ~Since its pilot launch, 6000
                      learners from its Academy program have been provided
                      access to the AI Teaching Assistant, enabling
                      round-the-clock query resolution, and the company aims to
                      extend
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={girl}
                        className="w-8 h-8 rounded-full"
                        alt="author"
                      />
                      <div className="text-xs">
                        <p className="font-medium text-gray-700">
                          Simran Thakur
                        </p>
                        <p className="text-gray-400">
                          20 Jul 2023 · 3 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
      </div>
      <div className="mt-25">
      <Footer />
      </div>
    </div>
  );
}
