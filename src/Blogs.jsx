import node from  "./assets/nodejs.png"
import sqlite from "./assets/sqlite.png"
import react from "./assets/react.png"
export default function Blog() {
  const blogs = [
    {
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      desc: "There Are Many Variations Of Passages Of Lore Ipsum Available, But The Majority",
      img: node,
    },
    {
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      desc: "There Are Many Variations Of Passages Of Lore Ipsum Available, But The Majority",
      img: sqlite,
    },
    {
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing",
      desc: "There Are Many Variations Of Passages Of Lore Ipsum Available, But The Majority",
      img: react,
    },
  ];

  return (
    <section className="bg-[#F9FCFF] py-10">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-[#F17424] mb-4">
          Blog
        </h2>

        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-14 text-sm leading-relaxed">
          There Are Many Variations Of Passages Of Lorem Ipsum Available,
          But The Majority Have Suffered Alteration In Some Form,
          By Injected Humour, Or Randomised Words There Are Many Variations Of Passages
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((item, index) => (
            <div
              key={index}
              className="border border-[#6C8EBF] rounded-sm overflow-hidden bg-white"
            >
              {/* Image */}
              <img
                src={item.img}
                alt="blog"
                className="w-full h-44 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-sm mb-3 text-gray-800 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Arrow */}
                <div className="flex justify-end">
                  <button className="w-8 h-8 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#F17424] hover:text-white transition">
                    →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
