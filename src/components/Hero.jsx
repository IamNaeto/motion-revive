import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <main className="w-full relative top-[60px] md:top-[80px] px-[5%] py-[60px] bg-[#161C2D] grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-5 items-center justify-between justify-items-center">
            <section className="grid gap-5">
                <h1 className="text-[46px] lg:text-[50px] xl:text-[60px] text-center md:text-left text-white font-bold">Your Habit, <br /> Your Life Span...</h1>
                <p className="text-16px] md:text-[14px] lg:text-[16px] text-center md:text-left text-white font-normal w-full md:w-[80%]">Only you can build yourself with the best version and Motion Revive App is here to assist you.
                    Start now, Set your goal: Master your new Habit, Then success is secured.</p>
                <Link to="/signup" className="text-[#68D585] flex items-center justify-center md:justify-start gap-2 hover:gap-4 transition-all delay-150">Start a free trial <FaArrowRightLong /></Link>
            </section>

            <img src="/img/hero-img.png" alt="hero-img" loading="lazy" className="w-full mt-4 md:mt-0"/>
        </main>
    );
}

export default Hero;