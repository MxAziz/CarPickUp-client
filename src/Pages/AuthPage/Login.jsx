import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { signInWithGoogle, signInUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        toast.success("Login is successful");
      })
      .catch((error) => {
        toast.error("Invalid Email or Password");
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
        toast.success("Google Sign-in successful!");
      })
      .catch((error) => {
        console.log('auth related error', error);
        toast.error("Google Sign-in failed!");
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 dark:bg-[#323538] dark:text-white min-h-screen py-20">
        <div className="hero-content flex-col">
          <div className="text-4xl font-bold text-center dark:text-gray-100 mt-4">
            Login Now!
          </div>
          <div className="card bg-base-100 dark:bg-[#232425] dark:text-white w-full max-w-2xl shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-gray-100">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  // ref={emailRef}
                  placeholder="email"
                  className="input input-bordered dark:bg-[#323538]"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text dark:bg-[#232425]">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered dark:bg-[#323538]"
                  required
                />
              </div>
              <div className="form-control mt-1">
                <button className=" py-3 rounded-md btn-wide bg-[#136b7a] hover:bg-[#0e3e46] text-white">
                  Login
                </button>
              </div>
              <div className="divider">OR</div>
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className=" py-3 rounded-md btn-wide bg-[#136b7a] hover:bg-[#0e3e46] text-white"
                >
                  Login with Google
                </button>
              </div>
              <div>
                <p>
                  New to this website?{" "}
                  <NavLink
                    className="text-lg font-bold text-[#7c1a60]"
                    to={"/registration"}
                  >
                    Resister
                  </NavLink>
                </p>
              </div>
            </form>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-64 top-[175px]"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
