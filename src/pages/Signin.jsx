import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, loading } = useLogin();

  const handleSubmit = async (e) => {
    // Implement your authentication logic here
    e.preventDefault();
    await login(email, password);
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
              <Link
                to="/forgot-password"
                className="font-medium text-purple-800"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="w-full py-2 px-2 text-sm font-bold rounded-sm bg-purple-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-800 text-white"
            >
              LOG IN
            </button>
          </div>
        </form>

        <div className="mt-2 flex flex-col">
          <div className="mt-5 text-xs font-bold leading-4 text-center">
            Don&apos;t have account?{" "}
            <Link to="/signup" className="text-purple-800 font-bold">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
