import { Link } from "react-router-dom";

export default function Structure() {
  return (
    <section className="w-[1216px] mx-auto mt-[180px] py-[45px] px-[49px] text-[#FFFFFF]
    bg-[#F3A14C] rounded-[48px] flex justify-between">
      <img className="w-[550px] h-[563px]" src="/img/structure-image.png" alt="structure-image" />
      <div className="w-[45%]">
        <h3 className="text-[48px] font-semibold mt-[50px] mb-[16px]">Structure your objective.</h3>
        <p className="mb-[16px]">With the Motion Revive App, you have the 
        convenience to establish and strategize your 
        objectives, empowering yourself to become 
        the optimal version. With the Motion Revive 
        App, you have the ability to effortlessly view 
        and control your profile through our intuitive 
        interface.</p>
        <Link to="/signup" className="text-[#FFFFFF] font-bold text-[30px] underline decoration-4
        underline-offset-[10px]">Start a free trial</Link>
      </div>
    </section>
  )
}