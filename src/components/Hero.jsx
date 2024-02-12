import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <section className="mx-[112px] mt-[41px] bg-[#F3A14C] py-[44px] pl-[52px] pr-[35px] rounded-[48px]
        flex justify-between">
            <div className="w-[50%] mt-[69px] mb-[30px]">
                <h1 className="text-[#FFFFFF] font-bold text-[54px] mb-[22px]">Your Habit. Your Life Span.</h1>
                <p className="w-[90%] text-[#FFFFFF] text-[20px] mb-[33px]">Only you can build yourself with the best version and Motion Revive App is here to assist you. Start now, Set your goal: Master your new Habit, Then success is secured.</p>
                <Link to="/signup" className="text-[#FFFFFF] font-bold text-[30px] underline decoration-4
                underline-offset-[10px]">Start a free trial</Link>
            </div>
            <img className="w-[560px] h-[480px]" src="/img/hero-image.png" alt="hero-image" />
        </section>
    );
}

export default Hero;