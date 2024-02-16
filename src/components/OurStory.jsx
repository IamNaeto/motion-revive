const Story = () => {
    return ( 
        <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 py-10">
            <section className="flex items-center md:items-start justify-center md:justify-start">
            <img src="/img/story.png" alt="" className="rounded-2xl w-full sm:w-[80%]"/>
            </section>

            <section className="text-[#5B5858]">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[#EA7600] text-center font-bold">Our Story</h1>
                <div className="grid gap-4 mt-4">
                <p className="text-[16px] md:text-[18px] text-justify">The Motion Revive team is comprised of talented professionals from diverse backgrounds with a shared passion for leveraging technology to address the detrimental effects of sedentary lifestyle.</p>
                <p className="text-[16px] md:text-[18px] text-justify">Inspired by the mission to empower individuals to take control of their health, we strive to provide users with personalized tools and resources to lead healthier lives.</p>
                <p className="text-[16px] md:text-[18px] text-justify">Our innovative web application seamlessly integrates into daily routines, offering personalized solutions for real-time monitoring and management of sedentary behavior</p>
                </div>
            </section>
        </main>
     );
}
 
export default Story;