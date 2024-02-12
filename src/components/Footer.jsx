import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <main className="relative top-[160px] grid gap-6 bg-[#F3A14C] px-[5%] py-10">
            <section className="flex justify-between flex-wrap gap-4">
                <div className="flex flex-col gap-3 text-[16px] text-white font-normal">
                    <h1 className="text-[15px] text-[#FFFFFF] font-semibold">Company</h1>
                    <a href="">About us</a>
                    <a href="">Contact us</a>
                    <a href="">Blogs</a>
                    <a href="">Press</a>
                </div>
                <div className="flex flex-col gap-3 text-[16px] text-white font-normal">
                    <h1 className="text-[15px] text-[#FFFFFF] font-semibold">Product</h1>
                    <a href="">Features</a>
                    <a href="">Pricing</a>
                    <a href="">News</a>
                    <a href="">Help desk</a>
                    <a href="">Support</a>
                </div>
                <div className="flex flex-col gap-3 text-[16px] text-white font-normal">
                    <h1 className="text-[15px] text-[#FFFFFF] font-semibold">Services</h1>
                    <a href="">Sedentary Alert</a>
                    <a href="">Recommend Exercise</a>
                </div>
                <div className="flex flex-col gap-3 text-[16px] text-white font-normal">
                    <h1 className="text-[15px] text-[#FFFFFF] font-semibold">Legal</h1>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms & Conditions</a>
                </div>
                <div className="flex flex-col gap-3 text-[16px] text-white font-normal">
                    <h1 className="text-[15px] text-[#FFFFFF] font-semibold">Contact us</h1>
                    <p>support@capstonegroup6.devcareer.com</p>
                </div>
            </section>

            <hr className="w-full bg-[#292F41]" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[12px] sm:text-[14px] text-white font-normal text-center md:text-left">© 2024 Copyright, All Right Reserved, Made by Capstone Group 6</p>

                <div className="flex items-center justify-center gap-4 text-2xl text-white">
                    <a href=""><FaXTwitter /></a>
                    <a href=""><FaFacebook /></a>
                    <a href=""><FaInstagram /></a>
                    <a href=""><FaLinkedin /></a>
                </div>
            </div>
        </main>
    );
}

export default Footer;