import '../App.css';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPasswordOTP() {
  const initialTime = 90; // Initial countdown time in seconds
  const [time, setTime] = useState(initialTime);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // Using an array to store each digit of the otp
  const navigate = useNavigate();
  const inputRefs = useRef([]); // Refs for input fields

  useEffect(() => {
    // Update the timer every second
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(interval); // Stop the timer when it reaches 0
          // logic to handle what happens when the timer reaches 0 goes here

          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const handleChange = (index, value) => {
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;

      // Reset the error message on input change
      setError("");

      // Move focus to the next input if a number is entered
      if (/^\d$/.test(value) && index < 3) {
        inputRefs.current[index + 1].focus();
      }

      return newOtp;
    });
  };

  const handleSubmit = () => {
    // Validation checks
    if (otp.some((digit) => digit === "")) {
      setError("Please enter a valid 4-digit OTP.");
      return;
    }

    if (!otp.every((digit) => /^\d+$/.test(digit))) {
      setError("Please enter a valid number for OTP.");
      return;
    }

    // If validation passes, log otp, success msg, navigate to /change-password. Other OTP logic can go here too.
    console.log({ otp });
    toast.success("OTP validated successfully");

    setTimeout(() => {
      navigate("/change-password");
    }, 2000);
  };

  return (
    <main className="body px-[5%] py-20">
      <ToastContainer />
      <section className="grid gap-8 w-full  sm:w-[60%]">
        <h6 className="text-center text-[18px] md:text-[24px] font-semibold text-[#000]">Forgot Password?</h6>
        <p className="text-[14px] md:text-[16px] text-center font-medium text-[#5B5858]">
          Enter the OTP sent to - <span className="text-[#000] font-semibold">capstonegroup6@devcareer.com</span>
        </p>

        <div className="grid gap-6">
          <div className="flex items-center justify-center gap-5">
            {[0, 1, 2, 3].map((index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                className=" w-[12%] border border-[#CCCCCC] rounded-lg p-4 text-center outline-none"
                type="text"
                maxLength="1"
                placeholder="0"
                value={otp[index]}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            ))}
          </div>

          {error && (
            <p className="text-[14px] md:text-[16px] text-[#FF0505] font-medium text-center">{error}</p>
          )}

          <div className="text-[14px] md:text-[16px] text-[#464646] text-center">
            <h1 className="font-medium">{formatTime(time)} Seconds</h1>
            <p>
              Don’t receive code? <button onClick={() => console.log("Resend code functionality")}>Re-send</button>
            </p>
          </div>

          <button
            className="bg-[#F99025] text-white font-medium py-3 px-5 text-center rounded-lg"
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </section>
    </main>
  );
}
