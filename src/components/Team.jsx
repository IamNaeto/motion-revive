const Team = () => {
    const designers = [
        {
            id: 1,
            name: "Adekunle Adepeko"
        },
        {
            id: 2,
            name: "Kalu Chibuzor Jonah"
        }
    ]

    const managers = [
        {
            id: 1,
            name: "Olaoluwa Hezekiah"
        },
        {
            id: 2,
            name: "Oladeinde Oyinkonsola"
        },
        {
            id: 3,
            name: "Ajagbe Sukurat"
        },
        {
            id: 4,
            name: "Ebisi Ebuka"
        },
        {
            id: 5,
            name: "Salau Aishat"
        }
    ]

    const developers = [
        {
            id: 1,
            name: "Anthony Enedah"
        },
        {
            id: 2,
            name: "Emmanuel Doji"
        },
        {
            id: 3,
            name: "Charles O. Egesionu"
        },
        {
            id: 4,
            name: "Nkeiru Lois"
        },
        {
            id: 5,
            name: "Adebayo Williams"
        },
        {
            id: 6,
            name: "Akpotobore Odjuwuederhie"
        },
        {
            id: 7,
            name: "Ndifreke Umoren"
        },
        {
            id: 8,
            name: "Abdulmalik Isah"
        }
    ]
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-5 py-10">
            <section className="flex items-center md:items-start justify-center md:justify-start order-2 md:order-1">
                <img src="/img/teams.png" alt="" className="rounded-2xl w-full sm:w-[80%]" />
            </section>

            <section className="text-[#5B5858] grid gap-4 order-1 md:order-2">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[#EA7600] text-center font-bold">Team</h1>
                <div className="flex items-start justify-between flex-wrap gap-6">
                    <div className="grid gap-4 basis-36" >
                        <h1 className="text-[18px] md:text-[20px] text-[#EA7600] font-bold">DESIGNERS</h1>
                        {designers.map((designer, id) => (
                            <p className="text-[16px] md:text-[18px]" key={id}>{designer.name}</p>
                        ))}
                    </div>

                    <div className="grid gap-4 basis-36">
                        <h1 className="text-[18px] md:text-[20px] text-[#EA7600] font-bold">DEVELOPERS</h1>
                        {developers.map((developer, id) => (
                            <p className="text-[16px] md:text-[18px]" key={id}>{developer.name}</p>
                        ))}
                    </div>

                    <div className="grid gap-4 basis-36">
                        <h1 className="text-[18px] md:text-[20px] text-[#EA7600] font-bold">MANAGERS</h1>
                        {managers.map((manager, id) => (
                            <p className="text-[16px] md:text-[18px]" key={id}>{manager.name}</p>
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}

export default Team;