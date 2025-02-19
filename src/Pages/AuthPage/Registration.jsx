import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Registration = () => {
  const { createUser, signInWithGoogle, signOutUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Regular expression:
  const passwordReg = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, photo, email, password);

    // password validation
    if (!passwordReg.test(password)) {
      toast.error(
        "Must have an Uppercase, a Lowercase and Length must be at least 6 character "
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        // after account created successful--> SignOutUser and redirects to the login page.
        signOutUser()
          .then(() => {
          navigate("/login");
          toast.success("Your Account created successful. Please Login Now !");
          })
          .catch((error) => {
          console.log("ERROR:", error);
        })
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  // google signIn method
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        navigate("/");
        toast.success("Sign up with Google is successful");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 dark:bg-[#323538] py-20">
        <div className="hero-content flex-col ">
          <div className="text-4xl font-bold text-center mb-2 dark:text-gray-100">
            Resister Now !
          </div>
          <div className="card bg-base-100 dark:dark:bg-[#232425] w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text dark:text-gray-100">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered dark:bg-[#323538]"
                  required
                />
                <label className="label">
                  <span className="label-text dark:text-gray-100">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo-URL"
                  className="input input-bordered dark:bg-[#323538]"
                  required
                />
                <label className="label">
                  <span className="label-text dark:text-gray-100">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered dark:bg-[#323538]"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text dark:text-gray-100">
                    Password
                  </span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="New Password"
                  className="input input-bordered dark:bg-[#323538]"
                  required
                />
              </div>
              <div className="form-control mt-2 ">
                <button className=" py-3 rounded-md btn-wide bg-[#136b7a] hover:bg-[#104751] text-white">
                  Sign Up
                </button>
              </div>
              <div className="divider dark:text-gray-100">OR</div>
              <div className="">
                <button
                  onClick={handleGoogleSignIn}
                  className="py-3 rounded-md  btn-wide bg-[#136b7a] hover:bg-[#104751] text-white"
                >
                  Sign up with Google
                </button>
              </div>
              <div className="">
                <p className="dark:text-gray-100">
                  Already have an account ?{" "}
                  <NavLink
                    className="text-lg font-bold text-[#136b7a]"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-64 top-[345px]"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
