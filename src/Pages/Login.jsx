import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleIcon from "../assets/Google.png";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logIn, setUser, logInWithGoogle, setEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset()
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogIn = () => {
    logInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="py-24 dark:bg-[#1D232A] px-2">
      <div className="card bg-base-100 dark:bg-gray-800 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-xl md:text-3xl text-center font-bold pt-8">
          Login Your Account
        </h1>
        <form onSubmit={handleLogIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
              <label className="label">
                <p className="label-text-alt cursor-pointer hover:underline  hover:text-red-500 ">
                  Forgot password?
                </p>
              </label>
            <label className="label">
              <p className="label-text-alt text-red-500 ">{error}</p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary/80 hover:bg-primary text-white">
              Login
            </button>
          </div>
          <p className="text-center text-sm mt-3 font-semibold">
            Don't have an account?{" "}
            <Link className="text-red-600" to="/register">
              Register
            </Link>
          </p>
        </form>
        <div className="flex justify-center mt-4 mb-8">
          <button
            onClick={handleGoogleLogIn}
            className="flex items-center justify-center gap-2 py-2 px-3 border rounded-lg shadow-xl"
          >
            <span>
              <img className="w-5" src={googleIcon} alt="google icon" />
            </span>
            Login with Google{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
