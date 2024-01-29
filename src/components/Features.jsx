const Features = () => {

    const featuresDetails = [
        {
            id: 1,
            img: "/img/organize.png",
            header: "Organize your goal",
            subheading: "With Motion Revive App, You can easily set and plan your goal. Build yourself to the best version."
        },
        {
            id: 2,
            img: "/img/sync.png",
            header: "Manage your profile",
            subheading: "With Motion Revive App, You can view and manage your profile easily with our easy - to - use interface."
        },
        {
            id: 3,
            img: "/img/track.png",
            header: "Track your progress ",
            subheading: "With Motion Revive App,You can Track all your work - in - progress and achievement easily."
        },
        {
            id: 4,
            img: "/img/path.png",
            header: "Get prompt reminder",
            subheading: "With Motion Revive App, You can easily get soft reminder 45 minutes before the goal time."
        },
        {
            id: 5,
            img: "/img/arrange.png",
            header: "Arrange your workout routine",
            subheading: "With Motion Revive App, You can arrange all your workout routines to meet your daily activities without obstruction."
        },
        {
            id: 6,
            img: "/img/share.png",
            header: "Share achievement with friends",
            subheading: "With Motion Revive App. You can share all achievement with your friends on all social media handles"
        }
    ]
    return (
        <main className="relative top-[80px] grid gap-8 bg-white px-[5%] py-10">
            <h1 className="text-[36px] text-[#161C2D] font-semibold text-center">Features</h1>

            <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-8">
            {featuresDetails.map((details) => (    
                <div key={details.id} className="flex items-start gap-4">
                    <img src={details.img} alt="" />

                    <div className="flex flex-col gap-4">
                        <h1 className="text-[20px] text-[#161C2D] font-semibold">{details.header}</h1>
                        <p className="text-[16px] text-[#161C2D] font-normal">{details.subheading}</p>
                    </div>

                </div>
            ))}
            </section>
        </main>
    );
}

export default Features;