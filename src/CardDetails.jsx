import { useParams } from "react-router-dom";
import devops from "./assets/devops.png";
import linkedin from "./assets/linkedin.png";
import angular from "./assets/angular.png";
import nodejs from "./assets/nodejs.png";
import girl from "./assets/girl.png";
import Footer from "./Footer"
import leftImg from "./assets/Mask group.png"
import rightImg from "./assets/Mask group (3).png"
import cloudtl from "./assets/cloudtl.png";

export default function CardDetails() {
    const { index } = useParams();

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
        <>
         {/* Left corner image */}
         <div className="relative">
  <img
    src={leftImg}
    alt="left corner"
    className="
      absolute
      top-10
      left-0
      w-24
      sm:w-15
      md:w-20
      lg:w-24
      opacity-60
      pointer-events-none
      z-10
    "
  />

  {/* Right corner image */}
  <img
    src={rightImg}
    alt="right corner"
    className="
      absolute
      top-100
      right-0
      w-20
      sm:w-15
      md:w-24
      lg:w-30
      opacity-60
      pointer-events-none
      z-10
    "
  />
<img
    src={cloudtl}
    alt="left corner"
    className="
      absolute
      top-10
      left-0
      w-24
      sm:w-15
      md:w-20
      lg:w-32
      opacity-60
      pointer-events-none
      -z-10
      mt-220
    "
  />
  </div>
        <div className="max-w-6xl mx-auto mt-50 relative xl:mt-40">
           
            <div className="text-center text-4xl text-[#19467E] font-semibold my-10">
          Get start your <span className="text-[#F47422]">IT career</span>{" "}
          development with
        </div>
            <img
                src={images[index]}
                className="w-full h-90 object-fit rounded xl:px-0 px-4"
                alt="blog"
            />
            
            <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-800">
                    Scaler (by InterviewBit), one of India's fastest-growing edtech startups, today announced the introduction of its GPT-4 powered AI teaching assistant for learners
                </h4>
                <div className="flex items-center gap-3 mt-6">
                    <img src={girl} className="w-10 h-10 rounded-full" />
                    <div className="text-sm">
                        <p className="font-medium">Simran Thakur</p>
                        <p className="text-gray-400">
                            20 Jul 2023 · 3 min read
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-gray-800">
                <p className="text-gray-600 mt-4">
                    ~Since its pilot launch, 6000 learners from its Scaler Academy program have been provided access to the AI Teaching Assistant, enabling round-the-clock query resolution, and the company aims to extend this to all its learners by Q3 of 2023~
                    Scaler (by InterviewBit), one of India's fastest-growing edtech startups, today announced the introduction of its GPT-4 powered AI teaching assistant for learners. By integrating ChatGPT functionalities into the Scaler Academy program, the tech upskilling ‘soonicorn’ aims to reduce the doubt resolution turnaround time of the learners, enhancing their learning outcomes.
                    This new system will enable comprehensive support for learners round-the-clock, enabling students to learn at their own pace. With the introduction of this solution, Scaler intends to address three potential pain points, namely, understanding problems, identifying optimal problem-solving approaches, and code debugging, thereby ensuring that learners receive immediate assistance at any time of the day.
                </p>
                <p className="flex flex-col gap-4">
                    Once learners identify and input their pain points as a prompt to the teaching assistant, the GPT-powered feature presents them with a suitable response to help them with their queries. Safeguards have been implemented to ensure the teaching assistant doesn't divulge the actual solution to the learner. Instead, prompts are presented that help them understand the problem better and figure out the answer independently. This approach promotes a hands-on and self-driven learning experience, where learners can develop their problem-solving skills and gain a deeper understanding of concepts. Through the implementation of 'prompt engineering,' Scaler aims to ensure that learners receive the best responses from ChatGPT, empowering them in their journey to overcome challenges and resolve doubts effectively.
                </p>
                <p className="flex flex-col gap-4">
                    In addition to this, Scaler has also introduced a 'Text Help Request' (THR) feature that enhances the learner experience by providing immediate and high-quality doubt resolution. Leveraging advanced machine learning algorithms such as BERT and Distilled BERT, the THR feature ensures accurate and contextually relevant guidance. Scaler's system delivers the most appropriate THR recommendations based on learners' specific queries by utilising BERT for text similarity matching and for computing text embeddings. Parameters such as Help Request and Teaching Assistant ratings, recency of resolved HRs, and a weighted scoring system contribute to the accuracy and quality of the recommendations. Within a week of its implementation, Scaler is already seeing a 30% better resolution of help requests raised by learners on average, an all-time low.
                </p>
                <p className="flex flex-col gap-4">
                    Abhimanyu Saxena, Co-founder of Scaler & InterviewBit, said, "While being mindful and empathetic towards the busy schedules of working professionals who undertake tech upskilling courses, it is crucial to provide them with an outcome-driven and high-quality learning experience at every stage of their journey. Previously, our Scaler learners relied solely on teaching assistants who were available for 15 hours a day to address their doubts. However, with the launch of our GPT-4 powered AI teaching assistant and the THR feature, learners can now have their doubts and queries addressed instantly. These new features greatly boost productivity for our learners, aiding them with all the means necessary to work their way around complex concepts and problem-solving challenges. By leveraging the power of AI and ML, Scaler is reshaping the landscape of tech education, empowering learners to achieve their goals efficiently and effectively."
                </p>
                 <p className="flex flex-col gap-4">
                    Since the pilot launch a month ago, 6000 learners from its Scaler Academy program have been provided access to the AI Teaching Assistant, with the feature already significantly impacting learners' experiences. With over 33% more learners utilising the tool to solve problems independently without the intervention of a teaching assistant, Scaler has witnessed a significant uptick in learner satisfaction. The learner analytics also observed that learners who accessed the ChatGPT-powered AI teaching assistant were 10% to 20% less likely to raise help externally and could solve problems by themselves - the key idea being building a problem-solving attitude among learners towards software engineering that eventually leads to better outcomes within the program as well as on the job. The majority of exposed learners have rated the support as 5* and are glad they are able to get support from AI to code better!
                 </p>
                </div>
            </div>
        </div>
        <section>
            <Footer/>
        </section>
        </>
    );
}
