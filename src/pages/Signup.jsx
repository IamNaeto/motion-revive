import { useState } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signUp, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(email, password, name);
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-white font-rubik py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-2 border border-solid border-white">
        <div>
          <h2 className="text-2xl font-bold leading-6 text-black text-center mb-10">
            Welcome to Motion Revive
          </h2>
        </div>
        <form className="space-y-2" onSubmit={handleSubmit}>
          <div className="border border-solid border-white">
            <label className="text-sm font-bold leading-4 text-left text-black">
              Name
            </label>
            <input
              type="text"
              className="appearance-none rounded w-full px-2 py-2 border-2 border-blue-800 placeholder-black text-black focus:ring-blue-800 focus:border-blue-800 focus:z-10 text-sm font-bold leading-4 text-left"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="border border-solid border-white">
            <label className="text-sm font-bold leading-4 text-left text-black">
              Email
            </label>
            <input
              type="email"
              className="appearance-none rounded w-full px-2 py-2 border-2 border-blue-800 placeholder-black text-black focus:ring-blue-800 focus:border-blue-800 focus:z-10 text-sm font-bold leading-4 text-left"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="border border-solid border-white">
            <label className="text-sm font-bold leading-4 text-left">
              Password
            </label>
            <input
              type="password"
              className="appearance-none rounded w-full px-2 py-2 border-2 border-blue-800 placeholder-black text-black focus:ring-blue-800 focus:border-blue-800 focus:z-10 text-sm font-bold leading-4 text-left"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            {error && (
              <p className="text-sm font-bold leading-4 text-left text-red-800">
                {error}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 mt-5 px-2 text-sm font-bold rounded-sm bg-purple-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-800 text-white"
            >
              LOG IN
            </button>
          </div>
        </form>

        <div className="mt-2 flex flex-col">
          <div className="mt-5 text-xs font-bold leading-4 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-purple-800 font-bold">
              Signin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
