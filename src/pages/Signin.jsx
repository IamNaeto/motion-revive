import AuthSideDesign from "../components/AuthSideDesign";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isFormValid = () => {    
        if (email === "") {
            toast.error("Email cannot be empty.")
          return false;
        }

        if (password === "") {
            toast.error("Password cannot be empty.")
          return false;
        }
        return true;
      };

    const handleSubmit = async (e) => {
        // Implement your authentication logic here
        e.preventDefault();
        if (isFormValid()) {
            toast.success("Login successful!")
            setTimeout(() => {
                // Implement your authentication logic here
                console.log({email, password});

                // redirect to dashbord page or any mvp page
                navigate('/');
            }, 2000);

        setEmail("")
        setPassword("")
      }
    };

    const handleGoogleSignin = async (e) => {
        e.preventDefault();
      
        // Perform the Google sign-in logic here
      
        console.log("coming soon!");
      };

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 px-[5%] py-[8%] md:p-0">
            <AuthSideDesign />

            <Link to={"/"} className="grid place-items-center md:hidden">
            <img src="/img/motion-revive-logo.svg" alt="logo" width={300} height={300}/>
            </Link>

            <section className="p-5 md:px-[5%] md:py-[8%] rounded-2xl border border-[#F99025] md:border-none">
            <ToastContainer />
                <div className="grid items-center place-items-center">
                    <h1 className="text-[28px] md:text-[32px] text-center font-bold">Welcome back to<br /> Motion Revive</h1>
                    <p className="text-[14px] md:text-[16px] text-center font-normal w-full md:w-[80%]">Signin to continue enjoying a better and healthier lifestyle.</p>
                </div>

                <form action="" className="text-[14px] md:text-[16px] grid gap-4 mt-10">
                        <label htmlFor="email">Email
                            <input 
                            type="email" 
                            id="email" 
                            placeholder="Email Address" 
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="password">Password
                            <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter password (must be six characters long, have one capital letter, one special character, one number)" 
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        </label>

                        <Link to={"/forgot-password"} className="font-medium md:text-[14px] text-[12px] text-[#F99025]">Forgot Password?</Link>

                        <button 
                        className="bg-[#F99025] text-white font-medium py-3 px-5 text-center rounded-lg"
                        type="submit"
                        onClick={handleSubmit}
                        >Sign in</button>

                        <div className="flex items-center justify-center gap-2">
                            <hr className="border border-[#000] w-[20px]"/>
                            OR
                            <hr className="border border-[#000] w-[20px]"/>
                        </div>

                        <button
                        type="button" 
                        className="flex items-center justify-center gap-2 bg-white text-[#000] border border-[#000] font-medium py-3 px-5 text-center rounded-lg">
                        <img src="/img/Google.png" alt="google-logo" className="w-[20px] h-[20px]"
                        onClick={handleGoogleSignin}
                        /> Sign in with Google</button>

                        <p className="font-semibold text-center">Don’t have account? <Link to={"/signup"} className="text-[#F99025]">Sign up</Link></p>
                </form>
            </section>
        </main>
    );
}

export default Signin;