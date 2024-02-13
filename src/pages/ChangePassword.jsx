import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (password == "" || confirmPassword == ""){
        toast.error("Passwords cannot be empty");
    }
    else if(password !== confirmPassword) {
        toast.error("Passwords do not match");
      } 
    else if (!/[A-Z]/.test(password)) {
        toast.error("Password must contain at least one capital letter.")
    }

    else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        toast.error("Password must contain at least one special character.")
    }

    else if (!/\d/.test(password)) {
        toast.error("Password must contain at least one number.")
    }else {
      toast.success("Password changed successfully");
      
      // Log the password to the console. Implement the change password logic here.
      console.log("New Password:", password);
      // Reset the form
      setPassword("");
      setConfirmPassword("");
    
    //navigate to sigin after 2 seconds
      setTimeout(() => {
        navigate("/signin")
      }, 2000);
    }
  };

  return (
    <main className="body px-[5%] py-20">
      <ToastContainer />
      <section className="grid gap-8 w-full sm:w-[80%] lg:w-[60%]">
        <h6 className="text-center text-[18px] md:text-[24px] font-semibold text-[#000]">New Password</h6>

        <div className="grid gap-6">
          <label htmlFor="password" className="text-[14px] md:text-[16px] font-semibold">
            Enter New Password
            <input
              className="input"
              type="password"
              id='password'
              name="password"
              placeholder="Enter new password (must be six characters long, have one capital letter, one special character, one number)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <label htmlFor="confirmPassword" className="text-[14px] md:text-[16px] font-semibold">
            Confirm Password
            <input
              className="input"
              type="password"
              id='confirmPassword'
              name="confirmPassword"
              placeholder="Confirm new password (must be six characters long, have one capital letter, one special character, one number)"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>

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

export default ChangePassword;
