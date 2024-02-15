import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Yoga from "../../public/img/yoga.png";
import GoogleIcon from "../../public/img/Google.png";
import BgLogo from "../../public/img/bg-logo.png"

const Signup = () => {
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [valid, setValid] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");

  let timeout;

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (newPassword.trim() === "") {
        setPasswordMessage("");
      } else {
        validatePassword(newPassword);
      }
    }, 500);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
      setPasswordMessage("Password accepted");
    } else {
      setPasswordMessage("Password doesn't match our parameter");
    }

    // Use the callback function to log the correct passwordMessage
    setPassword((prevPassword) => {
      console.log("passwordMessage:", passwordMessage);
      return prevPassword;
    });
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,12}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  return (
    <main className="container  flex overflow-hidden">
      {/* Left side*/}
      <div className="w-1/2 bg-[#F99025] h-screen flex flex-col justify-center items-center">
  <div className="mb-4">
    <img
      src={BgLogo}
      alt="Background Logo"
      className="w-68 h-40 mb-4 "
    />
  </div>
  
  <img
    src={Yoga}
    alt="Left side content"
    className="w-80 h-80 rounded-full"
  />
</div>
      {/* Right side */}
      <div className="w-1/2 py-40 px-24">
        <div className="max-w-md mx-auto mb-8">
          <h2 className="text-center text-2xl font-bold leading-7 text-black-900">
            Welcome, let's create an account
          </h2>
          <p className="text-center text-sm text-gray-600 mt-2">
            Create an account to build yourself with the best version. Once your
            account has been created then don’t forget to verify your account
            through the email address provided.
          </p>
        </div>

        <form className="max-w-md mx-auto">
          <div className="mb-4 grid grid-cols-2 gap-4">
            <label className="block">
              First Name:
              <input
                className="mt-1 p-2 border rounded w-full text-sm"
                type="text"
                name="firstName"
                placeholder="Your first name"
              />
            </label>
            <label className="block">
              Last Name:
              <input
                className="mt-1 p-2 border rounded w-full text-sm"
                type="text"
                name="lastName"
                placeholder="Your last name"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Email:
              <input
                className="mt-1 p-2 border rounded w-full text-sm"
                type="email"
                name="email"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block">
              Phone Number:
              <PhoneInput
                country={"ng"}
                value={phoneNumber}
                onChange={handleChange}
                inputProps={{
                  required: true,
                }}
                placeholder="Enter your phone number"
                inputStyle={{ width: "100%", height: "45px", fontSize: "0.875rem" }}
                containerStyle={{ marginTop: "5px" }}
                buttonStyle={{}}
                dropdownStyle={{ height: "150px" }}
              />
            </label>
            {!valid && <p>Please enter a valid phone number.</p>}
          </div>
          <div className="mb-4">
            <label className="block">
              Password:
              <input
                className="mt-1 p-2 border rounded w-full text-sm"
                type="password"
                value={password}
                name="password"
                placeholder="Must be at least 8 characters..."
                onChange={handlePasswordChange}
              />
              {passwordMessage && (
                <div
                  className={
                    passwordMessage === "Password accepted"
                      ? "text-[#006B3C] text-sm"
                      : "text-[#E30022] text-sm"
                  }
                >
                  {passwordMessage}
                </div>
              )}
            </label>
          </div>
          <div className="mb-4 text-xs">
            By continuing you agree to the Motion Revive{" "}
            <a href="#" className="text-[#F99025] underline font-bold">
              terms of service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-[#F99025] underline font-bold">
              privacy policy
            </a>
            .
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-[#F99025] text-white p-2 px-6 rounded w-full text-sm"
            >
              Continue
            </button>
          </div>
          <div className="mb-4">
            <span className="text-black flex justify-center mb-2">-OR-</span>
            <button
              type="submit"
              className="bg-[#Fff] outline outline-1 flex justify-center items-center text-black p-2 px-6 rounded w-full text-sm"
            >
              <img src={GoogleIcon} alt="" className="w-4 h-4 mr-2" />
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
