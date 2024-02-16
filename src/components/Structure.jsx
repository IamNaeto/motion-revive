import { Link } from "react-router-dom";

export default function Structure() {
  return (
    <section className="relative top-[120px] mx-[5%] p-10 text-[#FFFFFF]
    bg-[#F3A14C] rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-10">
      <img src="/img/structure-image.png" alt="structure-image" className="w-full"/>
      <div className="grid gap-4 text-[16px] md:text-[18px] text-[#FFFFFF] text-center md:text-left">
        <h3 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">Structure your objective.</h3>
        <p className="">With the Motion Revive App, you have the 
        convenience to establish and strategize your 
        objectives, empowering yourself to become 
        the optimal version. With the Motion Revive 
        App, you have the ability to effortlessly view 
        and control your profile through our intuitive 
        interface.</p>
        <Link to="/signup" className="font-bold text-2xl underline decoration-4
        underline-offset-[10px]">Start a free trial</Link>
      </div>
    </section>
  )
}