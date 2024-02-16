import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="relative top-[120px] bg-[#F3A14C] mx-[5%] px-5 md:px-10 py-10 rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center  justify-center gap-8">
            <div className="grid gap-4 text-[#FFFFFF] text-[16px] md:text-[18px] text-center md:text-left">
                <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl leading-tight">Your Habit, <br /> Your Life Span.</h1>
                <p className="w-[90%] mb-3 md:mb-5">Only you can build yourself with the best version and Motion Revive App is here to assist you. Start now, Set your goal: Master your new Habit, Then success is secured.</p>
                <Link to="/signup" className=" font-bold text-2xl underline decoration-4
                underline-offset-[10px]">Start a free trial</Link>
            </div>
            <div>
            <img src="/img/hero-image.png" alt="hero-image" className="w-full mt-5 md:mt-0"/>
            </div>
        </section>
    );
}

export default Hero;