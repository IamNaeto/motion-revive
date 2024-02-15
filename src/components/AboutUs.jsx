import MissionAndVision from "./MissionAndVision";
import Story from "./OurStory";
import Team from "./Team";
const AboutUs = () => {
    return ( 
        <main className="relative top-[80px] px-[5%] py-10">
                <div className="grid gap-4">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[#EA7600] text-center font-bold">About Us</h1>
                <p className="text-[16px] md:text-[18px] text-center text-[#5B5858] font-medium">Motion Revive is revolutionizing individuals’ approach to health and well-being.</p>
                </div>
                <Story />
                <MissionAndVision />
                <Team />
        </main>
     );
}
 
export default AboutUs;