import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import { useState, useEffect } from "react";
import ThemeToggle from './ThemeToggle';
import { SiSecurityscorecard } from 'react-icons/si';
import { FaCar } from 'react-icons/fa';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();


    useEffect(() => {
      if (location.pathname !== "/") {
        setScrolled(true);
        return;
      }

      const handleScroll = () => {
        setScrolled(window.scrollY > 50);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [location.pathname]);

    const handleLogOut = () => {
      signOutUser()
        .then(() => {
          navigate("/");
          toast.success("Sign out successful");
        })
        .catch((error) => {
          console.log("ERROR:", error);
        });
    };
  // navbar links
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/availableCars"}>Available Cars</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/addCar"}> Add Car</NavLink>
          </li>
          <li>
            <NavLink to={"/myCars"}>My Cars</NavLink>
          </li>
          <li>
            <NavLink to={"/myBookings"}> My Bookings</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div
        className={`navbar max-w-screen-2xl mx-auto w-full  fixed top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#232425] text-white" : "bg-transparent text-white"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content p-8 dark:bg-gray-900 bg-base-100 text-black dark:text-white rounded-box z-[1] mt-3 w-52 shadow"
            >
              {links}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">
            {/* <img className="size-14  " src="/Car-Logo.png" alt="" /> */}
            <FaCar className=' size-6'></FaCar>
            <p className="font-bold"><span className=' text-[#4dd2ea]'>CAR</span>PICKUP</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* authentication condition */}
        <div className="navbar-end mr-4 flex gap-4">
          <ThemeToggle></ThemeToggle>
          {user ? (
            <>
              <div className="">
                <a
                  onClick={handleLogOut}
                  className="px-4 py-2 cursor-pointer text-white bg-[#136b7a]  hover:bg-[#165560] font-bold rounded-md shadow-lg transition-all duration-300 "
                >
                  Log Out
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="">
                <NavLink to={"/login"}>
                  <button className="px-4 py-2 cursor-pointer text-white bg-[#136b7a]  hover:bg-[#165560] font-bold rounded-md shadow-lg transition-all duration-300">
                    Login
                  </button>
                </NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;