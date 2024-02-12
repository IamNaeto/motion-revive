import { Link } from "react-router-dom";

function Withmotion() {
  return (
    <section className="w-[100%] pt-[102px] px-[112px]">
      <div className="flex items-end">
        <img src="/img/with-motion-left-image.png" alt="with-motion-left-image" />
        <img src="/img/arrow-down.svg" alt="arrow-down" />
        <img src="/img/arrow-up.svg" alt="arrow-up" />
        <div className="w-[472px] h-[353px] bg-[#F3A14C] text-[#FFFFFF] pt-[24px] px-[37px] pb-[39px]
        rounded-[25px]">
          <h3 className="text-[48px] font-bold leading-[66px] text-right">With Motion Revive App</h3>
          <p class="text-[16px] text-right"> You can easily plan your Goal with an easy 
            to use interface.Remember those who 
            plan and take responsible actions; 
            never fails..
          </p>
          <Link to="/signup" className="block text-right text-[#FFFFFF] font-bold text-[30px] underline decoration-4
                underline-offset-[10px]">Start a free trial</Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img src="/img/with-motion-down-image.png" alt="with-motion-down-image" />
      </div>
    </section>
  )
}

export default Withmotion;