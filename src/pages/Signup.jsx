import AuthSideDesign from "../components/AuthSideDesign";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isFormValid = () => {
        if (firstName === "") {
            toast.error("First name cannot be empty.")
          return false;
        }
    
        if (lastName === "") {
            toast.error("Last name cannot be empty.")
          return false;
        }
    
        if (email === "") {
            toast.error("Email cannot be empty.")
          return false;
        }
    
        if (number === "") {
            toast.error("Phone number cannot be empty.")
          return false;
        }
    
        const validationResult = validatePassword(password);
        if (validationResult !== true) {
          return false;
        }
    
        return true;
      };
    
      const validatePassword = (password) => {
        if (password === "") {
            toast.error("Password cannot be empty.")
            return;
        }
    
        if (password.length < 6) {
            toast.error("Password must be at least six characters long.")
            return
        }
    
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one capital letter.")
            return
        }
    
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error("Password must contain at least one special character.")
            return
        }
    
        if (!/\d/.test(password)) {
            toast.error("Password must contain at least one number.")
            return
        }
    
        return true;
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            toast.success("Account created successfully!")
            setTimeout(() => {
                // Implement your authentication logic here
                console.log({firstName, lastName, email, number, password});

                // redirect to signin page
                navigate('/signin');
            }, 2000);

            // Clear the form
            setFirstName("")
            setLastName("")
            setEmail("")
            setNumber("")
            setPassword("")
        }
      };

      const handleGoogleSubmit = async (e) => {
        e.preventDefault();
      
        // Perform the Google sign-up logic here
        
      };

    return (
        <main className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 px-[5%] py-[8%] md:p-0">
            <AuthSideDesign />

            <Link to={"/"} className="grid place-items-center md:hidden">
            <img src="/img/motion-revive-logo.svg" alt="logo" width={300} height={300}/>
            </Link>

            <section className="grid items-center p-5 md:px-[5%] md:py-[8%] rounded-2xl border border-[#F99025] md:border-none">
            <ToastContainer />
                <div className="grid items-center place-items-center">
                    <h1 className="text-[28px] md:text-[32px] text-center font-bold">Welcome! <br /> Create Your Account</h1>
                    <p className="text-[14px] md:text-[16px] text-center font-normal w-full md:w-[80%]">Create an account to avoid the side effects of Sedentary Lifestyle.
                        Start enjoying a better and healthier lifestyle.</p>
                </div>

                <form action="" className="text-[14px] md:text-[16px] grid gap-4 mt-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <label htmlFor="fname">First Name
                            <input 
                            type="text" 
                            id="fname" 
                            placeholder="First Name" 
                            className="input"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}/>
                        </label>

                        <label htmlFor="lname">Last Name
                            <input 
                            type="text" 
                            id="lname" 
                            placeholder="Last Name" 
                            className="input" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}/>
                        </label>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
                        <label htmlFor="email">Email
                            <input 
                            type="email" 
                            id="email" 
                            placeholder="Email Address" 
                            className="input" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </label>

                        <label htmlFor="phone">Phone Number
                            <div className="flex items-center justify-center gap-2">
                                <img src="/img/nigeria.png" alt="naija-flag" />
                                <input 
                                type="text" 
                                id="phone" 
                                placeholder="Phone Number" 
                                className="input" 
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}/>
                            </div>
                        </label>
                    </div>

                    <label htmlFor="password">Password
                            <input 
                            type="password" 
                            id="password" 
                            placeholder="Enter password (must be six characters long, have one capital letter, one special character, one number)" 
                            className="input" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        </label>

                        <p className="text-center text-[#7B8499]">By continuing you agree to the Motion Revive <a href="#" className="text-[#000] decoration-underline">terms of service</a> and <a href="#" className="text-[#000] decoration-underline">privacy policy.</a></p>

                        <button 
                        className="bg-[#F99025] text-white font-medium py-3 px-5 text-center rounded-lg"
                        type="submit"
                        onClick={handleSubmit}
                        >Create Account</button>

                        <div className="flex items-center justify-center gap-2">
                            <hr className="border border-[#000] w-[20px]"/>
                            OR
                            <hr className="border border-[#000] w-[20px]"/>
                        </div>

                        <button
                        type="button" 
                        className="flex items-center justify-center gap-2 bg-white text-[#000] border border-[#000] font-medium py-3 px-5 text-center rounded-lg">
                        <img src="/img/Google.png" alt="google-logo" 
                        className="w-[20px] h-[20px]"
                        onClick={handleGoogleSubmit}
                        /> Sign up with Google</button>

                        <p className="font-semibold text-center">Already have an account? <Link to={"/signin"} className="text-[#F99025]">Sign in</Link></p>
                </form>
            </section>
        </main>
    );
}

export default Signup;
