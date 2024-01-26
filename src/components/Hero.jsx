import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <main className="w-full relative top-[80px] px-[5%] py-[60px] bg-[#161C2D] grid grid-cols-2 gap-5 items-center justify-between justify-items-center">
            <section className="grid gap-5">
                <h1 className="text-[60px] text-white font-bold">Your Habit, <br /> Your Life Span...</h1>
                <p className="text-[16px] text-white font-normal w-[80%]">Only you can build yourself with the best version and Motion Revive App is here to assist you.
                    Start now, Set your goal: Master your new Habit, Then success is secured.</p>
                <Link to="/signup" className="text-[#68D585] flex items-center gap-2 hover:gap-4 transition-all delay-150">Start a free trial <FaArrowRightLong /></Link>
            </section>

            <img src="/img/hero-img.png" alt="hero-img" loading="lazy" className="w-full"/>
        </main>
    );
}

export default Hero;