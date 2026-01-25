import { useContext, useState } from "react";
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
          <div className="card bg-base-100 dark:bg-[#232425] dark:text-white w-full max-w-4xl shrink-0 shadow-2xl">
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

// import { useContext, useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash, FaGoogle, FaEnvelope, FaLock, FaCar } from "react-icons/fa";
// import { toast } from "react-toastify";
// import { AuthContext } from "../../Provider/AuthProvider";

// const Login = () => {
//   const { signInWithGoogle, signInUser } = useContext(AuthContext);
//   const [showPassword, setShowPassword] = useState(false);
//   const [focusedField, setFocusedField] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     signInUser(email, password)
//       .then((result) => {
//         e.target.reset();
//         navigate("/");
//         toast.success("Login is successful");
//       })
//       .catch((error) => {
//         toast.error("Invalid Email or Password");
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithGoogle()
//       .then((result) => {
//         navigate("/");
//         toast.success("Google Sign-in successful!");
//       })
//       .catch((error) => {
//         console.log('auth related error', error);
//         toast.error("Google Sign-in failed!");
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F3F4F6] to-white dark:from-[#1a1b1c] dark:to-[#232425] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       {/* Background Decorations */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-[#136b7a] opacity-10 dark:opacity-5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#136b7a] opacity-10 dark:opacity-5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-md w-full space-y-8 relative z-10">
//         {/* Header */}
//         <div className="text-center">
//           <div className="flex justify-center mb-6">
//             <div className="w-16 h-16 bg-gradient-to-br from-[#136b7a] to-[#0d4f5a] rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
//               <FaCar className="w-8 h-8 text-white" />
//             </div>
//           </div>
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
//             Welcome Back!
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 text-lg">
//             Sign in to continue your journey
//           </p>
//         </div>

//         {/* Login Form Card */}
//         <div className="bg-white dark:bg-[#2a2b2c] rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
//           <div className="space-y-6">
//             {/* Email Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Email Address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <FaEnvelope className={`w-5 h-5 transition-colors ${
//                     focusedField === 'email' ? 'text-[#136b7a]' : 'text-gray-400'
//                   }`} />
//                 </div>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   placeholder="Enter your email"
//                   onFocus={() => setFocusedField('email')}
//                   onBlur={() => setFocusedField('')}
//                   className={`w-full pl-12 pr-4 py-3 bg-[#F3F4F6] dark:bg-[#1a1b1c] border-2 ${
//                     focusedField === 'email' ? 'border-[#136b7a]' : 'border-transparent'
//                   } rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white`}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password Field */}
//             <div className="space-y-2">
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Password
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
//                   <FaLock className={`w-5 h-5 transition-colors ${
//                     focusedField === 'password' ? 'text-[#136b7a]' : 'text-gray-400'
//                   }`} />
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   id="password"
//                   placeholder="Enter your password"
//                   onFocus={() => setFocusedField('password')}
//                   onBlur={() => setFocusedField('')}
//                   className={`w-full pl-12 pr-12 py-3 bg-[#F3F4F6] dark:bg-[#1a1b1c] border-2 ${
//                     focusedField === 'password' ? 'border-[#136b7a]' : 'border-transparent'
//                   } rounded-lg focus:outline-none transition-all duration-300 text-gray-900 dark:text-white`}
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#136b7a] transition-colors"
//                 >
//                   {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
//                 </button>
//               </div>
//             </div>

//             {/* Login Button */}
//             <button
//               onClick={handleLogin}
//               className="w-full bg-gradient-to-r from-[#136b7a] to-[#0d4f5a] text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
//             >
//               Sign In
//             </button>

//             {/* Divider */}
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-4 bg-white dark:bg-[#2a2b2c] text-gray-500 dark:text-gray-400 font-medium">
//                   Or continue with
//                 </span>
//               </div>
//             </div>

//             {/* Google Sign In Button */}
//             <button
//               onClick={handleGoogleSignIn}
//               className="w-full flex items-center justify-center gap-3 bg-white dark:bg-[#1a1b1c] border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-[#232425] hover:border-[#136b7a] transition-all duration-300"
//             >
//               <FaGoogle className="w-5 h-5 text-red-500" />
//               Sign in with Google
//             </button>

//             {/* Register Link */}
//             <div className="text-center pt-4">
//               <p className="text-gray-600 dark:text-gray-400">
//                 New to CarPickUp?{" "}
//                 <NavLink
//                   to="/registration"
//                   className="text-[#136b7a] hover:text-[#0d4f5a] font-semibold hover:underline transition-colors"
//                 >
//                   Create an account
//                 </NavLink>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Additional Info */}
//         <div className="text-center">
//           <p className="text-sm text-gray-500 dark:text-gray-500">
//             By signing in, you agree to our{" "}
//             <a href="#" className="text-[#136b7a] hover:underline">Terms of Service</a>
//             {" "}and{" "}
//             <a href="#" className="text-[#136b7a] hover:underline">Privacy Policy</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;