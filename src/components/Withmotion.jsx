import { Link } from "react-router-dom";

function WithMotion() {
  return (
    <section className="w-full relative top-[120px] py-20 px-[5%] grid gap-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-end">
        <img src="/img/with-motion-left-image.png" alt="with-motion-left-image" className="w-full" />
        <img src="/img/arrow-down.svg" alt="arrow-down" className="block lg:hidden xl:block" />
        <img src="/img/arrow-up.svg" alt="arrow-up" className="hidden lg:block" />
        <div className="min-h-[353px] grid gap-4 bg-[#F3A14C] shadow-xl text-[#FFFFFF] p-10 rounded-3xl text-[16px] md:text-[18px]">
          <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-right">With Motion <br /> Revive App</h3>
          <p className="text-right"> You can easily plan your Goal with an easy
            to use interface.Remember those who
            plan and take responsible actions;
            never fails..
          </p>
          <Link to="/signup" className="block text-right text-[#FFFFFF] font-bold text-2xl underline decoration-4
                underline-offset-[10px]">Start a free trial</Link>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
      <img src="/img/arrow-down.svg" alt="arrow-down" className="block lg:block xl:hidden" />
        <img src="/img/with-motion-down-image.png" alt="with-motion-down-image" className="w-full lg:w-auto"/>
      </div>
    </section>
  )
}

export default WithMotion;