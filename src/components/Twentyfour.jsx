import { Link } from "react-router-dom";

export default function Twentyfour() {
  return (
    <section className="w-[100%] pt-[137px] pl-[112px] pr-[75px] flex justify-between">
      <div className="w-[40%]">
        <img className="mt-[108px] mb-[37px]" src="/img/24-hours-left-image.png" alt="24-hours-left-image" />
        <Link to="/signup">
          <button className="bg-[#EA7600] text-[#FFFFFF] rounded-[16px] p-[8px] font-bold">Join Motion Revive for Free</button>
        </Link>
        <div className="mt-[37px] flex justify-between">
          <img className="w-[170px] h-[30px]" src="/img/five-stars.png" alt="five-stars" />
          <p className="text-[30px] text-[#EA7600]">400+ Reviews</p>
        </div>
      </div>
      <div className="w-[56%]">
        <h3 className="text-[#EA7600] text-[48px] font-semibold mb-[18px]">24 HOURS OF ACCESS TO PERSONALIZED WELLNESS FOR FREE</h3>
        <p className="text-[20px] text-[#EA7600] mb-[48px]">Transform Your Sedentary Lifestyle with Motion Revive, Offering Personalized Solutions for a Balanced Lifestyle</p>
        <img className="w-[510px] h-[451px] block ml-auto"src="/img/24-hours-right-image.png" alt="24-hours-right-image" />
      </div>
    </section>
  )
}