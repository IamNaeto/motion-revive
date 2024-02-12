import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
    //Control nav hide and show
    return (
        <header className="py-[24px] px-[112px] flex justify-between items-center h-[128px]">
            <img src="/img/motion-revive-logo.svg" alt="motion-revive-logo" />
            <nav className="w-[70%] flex justify-between">
                <div className="w-[55%] flex justify-between items-center">
                    <Link to="/" className="text-[20px] text-[#5B5858]">Home</Link>
                    <Link to="/about-us" className="text-[20px] text-[#5B5858]">About Us</Link>
                    <Link to="/support" className="text-[20px] text-[#5B5858]">Support</Link>
                    <Link to="/contact" className="text-[20px] text-[#5B5858]">Contact</Link>
                </div>
                <div className="w-[35%] flex justify-between">
                    <Link to="/login" className="text-[20px] text-[#EA7600] py-[12px] px-[26px] border-2 border-solid
                    border-[#EA7600] rounded-[8px]">Login</Link>
                    <Link to="/signup" className="text-[20px] text-[#FFFFFF] bg-[#EA7600] py-[12px] px-[15px] border-2 border-solid
                    border-[#EA7600] rounded-[8px]">Sign Up</Link>
                </div>
            </nav>
        </header>       
    );
}

export default Header;