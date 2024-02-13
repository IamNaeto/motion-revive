import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate();

  const isFormValid = () => {    
    if (email === "") {
        toast.error("Email cannot be empty.")
      return false;
    }
    return true;
  }
  const handleSubmit = async (e) => {
    // Implement your authentication logic here
    e.preventDefault();
    if (isFormValid()) {
        toast.success("OTP sent, check your mail")
        setTimeout(() => {
            // Implement your authentication logic here
            console.log({email});

            // redirect to dashbord page or any mvp page
            navigate('/forgot-password-otp');
        }, 2000);

    setEmail("")
  }
};
  return (
    <main className="body px-[5%] py-20">
      <ToastContainer />
      <section className="grid gap-8 w-full sm:w-[80%] lg:w-[60%]">
        <h6 className="text-center text-[18px] md:text-[24px] font-semibold text-[#000]">Forgot Password?</h6>
        <p className="text-[14px] md:text-[16px] text-center font-medium text-[#5B5858]">Don&apos;t worry ! We can assist you. Kindly enter the email address you used while registering, we will send the OTP to the email.</p>

        <div className="grid gap-6">
          <label htmlFor="email" className="text-[14px] md:text-[16px] font-semibold">Enter Email
            <input className="input"
              type="email"
              id='email'
              name="Email"
              placeholder="Enter the Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button 
          className="bg-[#F99025] text-white font-medium py-3 px-5 text-center rounded-lg"
          onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </section>
    </main>
  )
}