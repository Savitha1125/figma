import JobAccordionList from "./JobAccordionList"
import Footer from "./Footer"
export default function Careerpage() {

    return (
        <div className="mt-40">
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