import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <main className="w-full fixed top-0 z-30 px-[5%] py-4 md:py-2 bg-white shadow-md">
            <nav className="w-full flex items-center justify-between gap-2 bg-white">
                <Link to="/">
                    <h1 className="text-[24px] text-[#3618EE] font-bold">Motion Revive</h1>
                </Link>

                <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-[65px] left-0 md:left-auto w-full md:w-auto md:top-auto md:relative md:flex flex-col md:flex-row items-center justify-between gap-4 bg-[#2213F8] md:bg-white p-4 md:p-auto`}>
                    <div className="flex flex-col md:flex-row items-center justify-between text-[16px] text-white md:text-[#3618EE] font-medium gap-4 lg:gap-2 lx:gap-4">
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Home</a>
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Features</a>
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Support</a>
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Contact</a>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <Link to="/signin" className="text-[#2213F8] text-[16px] font-medium bg-white px-3 lg:px-4 py-2 rounded-lg border-2 border-[#2213F8] hover:shadow-2xl transition-all delay-150">Sign in</Link>
                        <Link to="/signup" className="text-white text-[16px] font-medium bg-[#161C2D] md:bg-[#2213F8] px-3 lg:px-4 py-2 rounded-lg border-2 border-[#2213F8] hover:shadow-2xl transition-all delay-150">Sign up</Link>
                    </div>
                </div>
            {isMenuOpen ? 
                <IoClose  className="block md:hidden text-3xl text-[#2213F8] cursor-pointer" onClick={toggleMenu}/>
                :
                <IoMenu className="block md:hidden text-3xl text-[#2213F8] cursor-pointer" onClick={toggleMenu}/>
            }
            </nav>
        </main>
    );
}

export default Header;