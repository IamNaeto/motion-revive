import { Link } from "react-router-dom";

export default function Twentyfour() {
  return (
    <section className="relative top-[120px] w-full px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8">
      <div className="flex flex-col gap-8 order-2 md:order-1 items-center md:items-start">
        <img src="/img/24-hours-left-image.png" alt="24-hours-left-image" className="w-full mb-5" />
        <div>
          <Link to="/signup" className="bg-[#EA7600] text-[#FFFFFF] rounded-3xl px-5 py-3 font-bold leading-relaxed"> Join Motion Revive for Free </Link>
        </div>
        <div className="flex items-center gap-8 text-[18px] md:text-[20px]">
          <img className="h-[30px]" src="/img/five-stars.png" alt="five-stars" />
          <p className="text-[#EA7600] font-semibold">400+ Reviews</p>
        </div>
      </div>
      <div className="text-[#EA7600] grid gap-4 order-1 md:order-2 text-center md:text-left">
        <h3 className="text-3xl lg:4xl xl:text-5xl font-semibold">24 HOURS OF ACCESS TO PERSONALIZED WELLNESS FOR FREE</h3>
        <p className="text-[16px] md:text-[18px]">Transform Your Sedentary Lifestyle with Motion Revive, Offering Personalized Solutions for a Balanced Lifestyle</p>
        <div className="flex items-center justify-center">
          <img src="/img/24-hours-right-image.png" alt="24-hours-right-image" className="w-full" />
        </div>
      </div>
    </section>
  )
}