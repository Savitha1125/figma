import { useState } from "react";

const jobs = Array(6).fill({
  posted: "Posted 2 Days Ago",
  title: "Assistant Manager :: Data Analyst",
  experience: "2 - 4 Years",
  openings: "10 Nos",
  salary: "2 LPA",
  location: "Sales - Bengaluru - Full time",
  skills: [
    "Strong proficiency in JavaScript, including DOM manipulation.",
    "Thorough understanding of React.js and its core principles.",
    "Experience with Flux or Redux workflows.",
    "Familiarity with newer ECMAScript specifications.",
    "Experience with data structure libraries (e.g., Immutable.js).",
    "Knowledge of isomorphic React is a plus.",
    "Familiarity with RESTful APIs.",
    "Knowledge of modern authorization mechanisms like JWT.",
    "Familiarity with modern front-end build tools.",
  ],
});

export default function JobAccordionList() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {jobs.map((job, index) => (
        <div
          key={index}
          className="border border-blue-400 rounded-lg bg-[#F6FAFB]"
        >
          
          <div
            className="flex justify-between items-start p-6 cursor-pointer"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div>
              <p className="text-sm text-[#F27330] font-bold mb-1">
                {job.posted}
              </p>

              <h2 className="text-xl font-semibold text-blue-900">
                {job.title}
              </h2>

              <div className="flex flex-wrap gap-3 mt-3 text-[#19467E] font-bold">
                <span className="px-4 py-1 text-sm bg-[#FFD8BF] rounded-full">
                  Experience : {job.experience}
                </span>
                <span className="px-4 py-1 text-sm bg-[#FFD8BF] rounded-full">
                  Openings : {job.openings}
                </span>
                <span className="px-4 py-1 text-sm bg-[#FFD8BF] rounded-full">
                  Salary : {job.salary}
                </span>
              </div>

              <p className="text-sm text-[#333333] font-bold mt-2">
                {job.location}
              </p>
            </div>

            <div className="text-gray-500 mt-1">
              {openIndex === index ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </div>
          </div>

          {openIndex === index && (
            <div className="px-6 pb-6">
              <h3 className="text-[#F27330] font-semibold mb-3">
                Key Skill Required
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                {job.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>

              <button className="mt-6 px-8 py-2 bg-blue-800 text-white rounded hover:bg-blue-900 transition">
                Apply
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
