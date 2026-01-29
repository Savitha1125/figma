import JobAccordionList from "./JobAccordionList"
import Footer from "./Footer"
import leftImg from "./assets/Mask group.png"
import rightImg from "./assets/Mask group (3).png"
export default function Careerpage() {

    return (
        <div className="mt-40 relative">
            <img
                src={leftImg}
                alt="left corner"
                className="absolute top-10 left-0 w-32 sm:w-48 md:w-64 lg:w-20 pointer-events-none opacity-60"
            />
            <img
                src={rightImg}
                alt="right corner"
                className="absolute top-80 right-0 w-32 sm:w-10 md:w-14 lg:w-25 pointer-events-none opacity-60"
            />
            
            <div className="my-20 text-center max-w-6xl mx-auto flex flex-col gap-6">
                <div className="text-center text-4xl text-[#19467E] font-semibold">
                   Get start your <span className="text-[#F47422]">IT career</span> development with 
                </div>
                <div  className="text-[#333333] text-[18px]">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority <br />have suffered alteration in some form, by injected humour, 
                </div>
            </div>
            <div>
                <JobAccordionList />
            </div>
            <div className="mt-30">
                <Footer />
            </div>
        </div>
    )
}