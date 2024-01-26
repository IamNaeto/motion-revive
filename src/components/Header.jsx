import { Link } from "react-router-dom";
const Header = () => {
    return (
        <main className="w-full fixed z-30 px-[5%] py-4 bg-white shadow-md">
            <nav className="w-full flex items-center justify-between gap-8 bg-white">
                <Link to="/">
                <h1 className="text-[24px] text-[#3618EE] font-bold">Motion Revive</h1>
                </Link>

                <div className="flex items-center justify-between gap-5">
                    <div className="flex items-center justify-between text-[16px] text-[#3618EE] font-medium gap-4">
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Home</a>
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Features</a>
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Support</a>
                        <a href="" className="hover:text-[#161C2D] transition-all delay-150">Contact</a>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <Link to="/signup" className="text-white text-[16px] font-medium bg-[#2213F8] px-5 py-2 rounded-lg border-2 border-[#2213F8] hover:bg-white hover:text-[#2213F8] transition-all delay-150">SIGN UP</Link>
                        <Link to="/signin" className="text-white text-[16px] font-medium bg-[#2213F8] px-5 py-2 rounded-lg border-2 border-[#2213F8] hover:bg-white hover:text-[#2213F8] transition-all delay-150">SIGN IN</Link>
                    </div>
                </div>
            </nav>
        </main>
    );
}

export default Header;