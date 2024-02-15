const Features = () => {

    const featuresDetails = [
        {
            id: 1,
            img: "/img/organize-your-goal.svg",
            header: "Organize your goal",
            subheading: "With Motion Revive App, You can easily set and plan your goal. Build yourself to the best version."
        },
        {
            id: 2,
            img: "/img/manage-your-profile.svg",
            header: "Manage your profile",
            subheading: "With Motion Revive App, You can view and manage your profile easily with our easy - to - use interface."
        },
        {
            id: 3,
            img: "/img/track-your-progress.svg",
            header: "Track your progress ",
            subheading: "With Motion Revive App,You can Track all your work - in - progress and achievement easily."
        },
        {
            id: 4,
            img: "/img/get-prompt-reminder.svg",
            header: "Get prompt reminder",
            subheading: "With Motion Revive App, You can easily get soft reminder 45 minutes before the goal time."
        },
        {
            id: 5,
            img: "/img/arrange-your-workout-routine.svg",
            header: "Arrange your workout routine",
            subheading: "With Motion Revive App, You can arrange all your workout routines to meet your daily activities without obstruction."
        },
        {
            id: 6,
            img: "/img/share-achievement-with-friends.svg",
            header: "Share achievement with friends",
            subheading: "With Motion Revive App. You can share all achievement with your friends on all social media handles"
        }
    ]
    return (
        <main className="relative top-[120px] grid place-items-center gap-8 bg-white px-[5%] py-20">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[#EA7600] font-semibold text-center">Features</h1>
            <p className="text-[18px] md:text-[20px] text-center w-full lg:w-[60%]">Unlock personal growth with Motion Revive. Set, track, and achieve goals 
            effortlessly. Your path to an organized and fulfilling life starts here.</p>
            <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-8">
            {featuresDetails.map((details) => (    
                <div key={details.id} className="flex items-start gap-4">
                    <img src={details.img} alt="" className="w-[30px] h-[30px]"/>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-[18px] md:text-[20px] text-[#161C2D] font-semibold">{details.header}</h1>
                        <p className="text-[16px] md:text-[18px] text-[#161C2D] font-normal">{details.subheading}</p>
                    </div>

                </div>
            ))}
            </section>
        </main>
    );
}

export default Features;