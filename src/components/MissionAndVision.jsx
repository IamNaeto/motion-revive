const MissionAndVision = () => {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 py-10">
            <section className="text-[#5B5858] grid gap-4">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[#EA7600] text-center font-bold">Vision and Missiony</h1>
                <div className="grid gap-4">
                    <h1 className="text-[18px] md:text-[20px] text-[#EA7600] font-bold">VISION</h1>
                    <p className="text-[16px] md:text-[18px] text-justify">At Motion Revive, we are to empower individuals worldwide to lead healthier, more active lifestyles by providing intuitive tools and resources for managing sedentary behavior.</p>
                </div>

                <div className="grid gap-4">
                    <h1 className="text-[18px] md:text-[20px] text-[#EA7600] font-bold">MISSION</h1>
                    <p className="text-[16px] md:text-[18px] text-justify">At Motion Revive, we empower individuals leading sedentary lifestyle to embrace healthier habits by  providing personalized, accessible, and engaging solutions that seamlessly integrate physical activity, mindfulness, and nutritional awareness into their daily routine.</p>
                </div>

            </section>

            <section className="flex items-center md:items-end justify-center md:justify-end">
            <img src="/img/mission.png" alt="" className="rounded-2xl"/>
            </section>
        </main>
    );
}

export default MissionAndVision;