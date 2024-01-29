// const Signin = () => {
//     return (
//       <main>

//       </main>
//     );
// }

// export default Signin;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your authentication logic here
    console.log(`Login with ${email} and ${password}`);
  };

  const loginWithGoogle = () => {
    // Implement Google Sign-in logic here
    console.log("Login with Google");
  };

  const loginWithFacebook = () => {
    // Implement Facebook login logic here
    console.log("Login with Facebook");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-white font-rubik py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-2 border border-solid border-white hover:border-blue-800">
        <div>
          <h2 className="text-2xl font-bold leading-6 text-black text-center mb-10">
            Welcome to Motion Revive
          </h2>
        </div>
        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
          <div className="border border-solid border-white hover:border-blue-800">
            <label
              htmlFor="email"
              className="text-sm font-bold leading-4 text-left text-black"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded w-full px-2 py-2 border-2 border-blue-800 placeholder-black text-black focus:ring-blue-800 focus:border-blue-800 focus:z-10 text-sm font-bold leading-4 text-left"
              placeholder="capstonegroup6@devcareer.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border border-solid border-white hover:border-blue-800">
            <label
              htmlFor="password"
              className="text-sm font-bold leading-4 text-left"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded w-full px-2 py-2 border-2 border-blue-800 placeholder-black text-black focus:ring-blue-800 focus:border-blue-800 focus:z-10 text-sm font-bold leading-4 text-left"
              placeholder="...................."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="Whoops, wrong email or password  provided"
              className="text-sm font-bold leading-4 text-left text-red-600"
            >
              Whoops, wrong email or password provided
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                checked
                className="h-4 w-4 appearance-none border-2 border-purple-800 checked:bg-transparent checked:border-purple-800"
              />
              <label
                htmlFor="remember-me"
                className="text-sm font-bold leading-4 text-left text-purple-800 px-2"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm font-bold leading-4 text-left text-purple-800">
              <Link to="/forgot-password" className="font-medium text-purple-800">
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 px-2 text-sm font-bold rounded-sm bg-purple-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-800 text-white"
              onClick={handleLogin}
            >
              LOG IN
            </button>
          </div>
        </form>
        <div className="text-sm font-normal leading-4 text-center">OR</div>
        {/* Google and Facebook Sign-in Options */}
        <div className="mt-2 flex flex-col">
          <button
            onClick={loginWithGoogle}
            className="max-w-xs mx-auto w-full h-full py-1 border-2 border-blue-800 text-sm font-bold text-black bg-white focus:outline-none"
          >
            <span className="sr-only">Continue with Google</span>
            <img
              className="h-5 w-5 mr-1 inline-block align-middle"
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google Logo"
            />
            Continue with Google
          </button>
          <button
            onClick={loginWithFacebook}
            className="mt-3 max-w-xs mx-auto w-full h-full py-1 border-2 border-blue-800 text-sm font-bold text-black bg-white focus:outline-none"
          >
            <span className="sr-only">Continue with Facebook</span>
            <img
              className="h-5 w-5 mr-1 inline-block align-middle"
              src="https://img.icons8.com/color/48/000000/facebook.png"
              alt="Facebook Logo"
            />
            Continue with Facebook
          </button>
          <div className="mt-5 text-xs font-bold leading-4 text-center">
            Don't have account?{" "}
            <Link to="/signup" className="text-purple-800 font-bold">Sign up</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signin;
