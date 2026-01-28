import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const FAQItem = ({ question, answer1, answer2, answer3 }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-[#F57423] rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-8 py-8 text-left 
                   bg-[#FFF1E8] transition"
      >
        <span className="font-semibold text-slate-800">{question}</span>
        <ChevronDownIcon
          className={`w-6 h-6 transition-transform duration-300 ${
            open ? "rotate-180 text-orange-500" : "text-black"
          }`}
        />
      </button>

      <div
        className={`px-8 text-gray-600 text-sm leading-relaxed transition-all duration-300 bg-[#FFF1E8] flex flex-col gap-4
        ${open ? "max-h-40 py-4 opacity-100" : "max-h-0 py-0 opacity-0 overflow-hidden"}`}
      >
        <div>
        {answer1}
        </div>
        <div>
          {answer2}
        </div>
        <div>
          {answer3}
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold text-center text-[#19467E] mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="space-y-4">
        <FAQItem
          question="Job Opportunities After Completing"
          answer1="Full Stack Developers are developers that design complete apps and websites. These developers work on all facets of development, from frontend, to backend, to database and even debugging and testing. In short,"
          answer2="The developer must understand the app through and through. Frontend developers are more sought after 
Full Stack Developers are developers."
          answer3="These developers work on all facets of development, from frontend, to backend, to database and even 
that design complete apps and websites."

        />
        <FAQItem
          question="Job Opportunities After Completing"
          answer1="Full Stack Developers are developers that design complete apps and websites. These developers work on all facets of development, from frontend, to backend, to database and even debugging and testing. In short,"
          answer2="The developer must understand the app through and through. Frontend developers are more sought after 
Full Stack Developers are developers."
          answer3="These developers work on all facets of development, from frontend, to backend, to database and even 
that design complete apps and websites."

        />
        <FAQItem
          question="Job Opportunities After Completing"
          answer1="Full Stack Developers are developers that design complete apps and websites. These developers work on all facets of development, from frontend, to backend, to database and even debugging and testing. In short,"
          answer2="The developer must understand the app through and through. Frontend developers are more sought after 
Full Stack Developers are developers."
          answer3="These developers work on all facets of development, from frontend, to backend, to database and even 
that design complete apps and websites."

        />
        <FAQItem
          question="Job Opportunities After Completing"
          answer1="Full Stack Developers are developers that design complete apps and websites. These developers work on all facets of development, from frontend, to backend, to database and even debugging and testing. In short,"
          answer2="The developer must understand the app through and through. Frontend developers are more sought after 
Full Stack Developers are developers."
          answer3="These developers work on all facets of development, from frontend, to backend, to database and even 
that design complete apps and websites."

        />
        <FAQItem
          question="Job Opportunities After Completing"
          answer1="Full Stack Developers are developers that design complete apps and websites. These developers work on all facets of development, from frontend, to backend, to database and even debugging and testing. In short,"
          answer2="The developer must understand the app through and through. Frontend developers are more sought after 
Full Stack Developers are developers."
          answer3="These developers work on all facets of development, from frontend, to backend, to database and even 
that design complete apps and websites."

        />
        
        
        
      </div>
    </section>
  );
}
