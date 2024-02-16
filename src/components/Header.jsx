import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [headerStyling, setHeaderStyling] = useState('');

    const location = useLocation()
  
  
    // Update the scroll position state when the user scrolls
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      // Add a scroll event listener and cleanup on component unmount
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Determine the background color based on the scroll position
    useEffect(() => {
      if (scrollY > 0) {
        // Apply a backdrop blur background when scrolling
        setHeaderStyling('shadow shadow-[#EA7600]');
      } else {
        // Remove the background color when at the top
        setHeaderStyling('');
      }
    }, [scrollY]);


    //Control nav hide and show
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`w-full fixed top-0 z-50 px-[5%] py-4 flex flex-col md:flex-row gap-6 md:gap-0 justify-between items-center bg-white ${headerStyling}`} id="top">
            <div className="w-full md:w-auto flex items-center justify-between">
                <Link to={"/"}>
                    <img src="/img/motion-revive-logo.svg" alt="motion-revive-logo" width={150} height={150} />
                </Link>
                {isMenuOpen ?
                    <CgCloseO className="block md:hidden text-3xl text-[#EA7600] cursor-pointer" onClick={toggleMenu} />
                    :
                    <CgMenuRight className="block md:hidden text-3xl text-[#EA7600] cursor-pointer" onClick={toggleMenu} />
                }
            </div>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} w-full md:w-[75%] lg:w-[65%] md:flex flex-col md:flex-row justify-between text-[16px] md:text-[18px] font-medium gap-6 md:gap-0`}>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 xl:gap-8 text-[#5B5858]">
                    <Link to="/" className={`${location.pathname === "/" ? "text-[#EA7600]" : "text-[#5B5858]"}`}>Home</Link>
                    <Link to="/about" className={`${location.pathname === "/about" ? "text-[#EA7600]" : "text-[#5B5858]"}`}>About Us</Link>
                    <Link to="/support" className={`${location.pathname === "/support" ? "text-[#EA7600]" : "text-[#5B5858]"}`}>Support</Link>
                    <Link to="/contact" className={`${location.pathname === "/contact" ? "text-[#EA7600]" : "text-[#5B5858]"}`}>Contact</Link>
                </div>
                <div className="flex items-center justify-center md:justify-between gap-4">
                    <Link to="/signin" className="w-[100px] text-[#EA7600] text-center px-3 py-2 md:py-3 border-2 border-solid
                    border-[#EA7600] rounded-[8px]">Login</Link>
                    <Link to="/signup" className="w-[100px] text-[#FFFFFF] text-center bg-[#EA7600] px-3 py-2 md:py-3 border-2 border-solid
                    border-[#EA7600] rounded-[8px]">Sign Up</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;