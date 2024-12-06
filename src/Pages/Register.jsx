import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import googleIcon from "../assets/Google.png";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { createNewUser, setUser, createNewUserWithGoogle, profileUpDate } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const terms = e.target.terms.checked;
    setError("");

    if (name.length < 5) {
      setError("Must have an 5 letter in the name.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Must have an Uppercase letter in the password.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Must have a Lowercase letter in the password");
      return;
    }
    if (password.length < 6) {
      setError("Length must be at least 6 character");
      return;
    }
    if (!terms) {
      setError("You must agree to the terms and conditions");
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const usr = result.user;
        profileUpDate({ displayName: name, photoURL: photo })
        .then(() => {
            setUser(usr);
            e.target.reset()
            navigate(location?.state ? location.state : '/' );
          })
          .catch((error) => setError(error.message));
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();
  const handleGoogleRegister = () => {
    createNewUserWithGoogle(googleProvider)
      .then((result) => {
        const usr = result.user;
        setUser(usr);
        navigate(location?.state ? location?.state : '/' );
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="pt-10 py-24 px-2 dark:bg-[#1D232A]">
      <div className="card bg-base-100 dark:bg-gray-800 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <h1 className="text-xl md:text-3xl text-center font-bold pt-8">
          Register Your Account
        </h1>
        <form onSubmit={handleSubmite} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo-URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter your photo-url"
              className="input input-bordered"
              name="photo"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered relative"
              required
              name="password"
            ></input>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="p-[2px]   absolute top-[60%] right-4 z-50 rounded-sm"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M17.8827 19.2968C16.1814 20.3755 14.1638 21.0002 12.0003 21.0002C6.60812 21.0002 2.12215 17.1204 1.18164 12.0002C1.61832 9.62282 2.81932 7.5129 4.52047 5.93457L1.39366 2.80777L2.80788 1.39355L22.6069 21.1925L21.1927 22.6068L17.8827 19.2968ZM5.9356 7.3497C4.60673 8.56015 3.6378 10.1672 3.22278 12.0002C4.14022 16.0521 7.7646 19.0002 12.0003 19.0002C13.5997 19.0002 15.112 18.5798 16.4243 17.8384L14.396 15.8101C13.7023 16.2472 12.8808 16.5002 12.0003 16.5002C9.51498 16.5002 7.50026 14.4854 7.50026 12.0002C7.50026 11.1196 7.75317 10.2981 8.19031 9.60442L5.9356 7.3497ZM12.9139 14.328L9.67246 11.0866C9.5613 11.3696 9.50026 11.6777 9.50026 12.0002C9.50026 13.3809 10.6196 14.5002 12.0003 14.5002C12.3227 14.5002 12.6309 14.4391 12.9139 14.328ZM20.8068 16.5925L19.376 15.1617C20.0319 14.2268 20.5154 13.1586 20.7777 12.0002C19.8603 7.94818 16.2359 5.00016 12.0003 5.00016C11.1544 5.00016 10.3329 5.11773 9.55249 5.33818L7.97446 3.76015C9.22127 3.26959 10.5793 3.00016 12.0003 3.00016C17.3924 3.00016 21.8784 6.87992 22.8189 12.0002C22.5067 13.6998 21.8038 15.2628 20.8068 16.5925ZM11.7229 7.50857C11.8146 7.50299 11.9071 7.50016 12.0003 7.50016C14.4855 7.50016 16.5003 9.51488 16.5003 12.0002C16.5003 12.0933 16.4974 12.1858 16.4919 12.2775L11.7229 7.50857Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                </svg>
              )}
            </button>
          </div>
          <label className="label">
            <p className="label-text-alt  text-red-500 ">{error}</p>
          </label>
          <label className="label flex items-center gap-1">
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              name="terms"
            />
            <p className="text-sm font-medium">Accept Our Terms & condition</p>
          </label>
          <div className="form-control mt-6">
            <button className="btn bg-primary/80 hover:bg-primary text-white">
              Register
            </button>
          </div>
          <p className="text-center text-sm mt-3 font-semibold">
            Already have an account?{" "}
            <Link className="text-red-600" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="flex justify-center mt-4 mb-8">
          <button
            onClick={handleGoogleRegister}
            className="flex items-center justify-center gap-2 py-2 px-3 border rounded-lg shadow-xl"
          >
            <span>
              <img className="w-5" src={googleIcon} alt="google icon" />
            </span>
            Register with Google{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
