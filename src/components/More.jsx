const More = () => {
    return ( 
        <main className="relative top-[120px] grid gap-8 bg-white px-[5%] py-20">
            <section className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <img src="/img/revive1.jpg" alt="revive-img" className="rounded-2xl" />
                    <img src="/img/revive2.jpg" alt="revive-img" className="rounded-2xl" />
                    <img src="/img/revive3.jpg" alt="revive-img" className="rounded-2xl" />
                    <img src="/img/revive4.jpg" alt="revive-img" className="rounded-2xl" />

                </div>

                <div className="grid gap-4">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl text-[#EA7600] text-center font-semibold">With Motion Revive App</h1>
                    <h3 className="text-[16px] md:text-[18px] text-[#161C2D] text-center font-medium">You can easily plan your Goal with an easy - To - Use interface.</h3>
                    <h3 className="text-[16px] md:text-[18px] text-[#161C2D] text-center font-medium">Remember those who plan and take responsible actions; never fails.</h3>
                    <h3 className="text-[16px] md:text-[18px] text-[#161C2D] text-center font-medium">Start Now with just a click.</h3>
                </div>
            </section>
        </main>
     );
}
 
export default More;