import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

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
        <NavLink to={"/allReviews"}>Available Cars</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/addReview"}>Add Review</NavLink>
          </li>
          <li>
            <NavLink to={"/myReviews"}>My Reviews</NavLink>
          </li>
          <li>
            <NavLink to={"/gameWatchList"}>Game WatchList</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="size-14  " src="/Car-Logo.png" alt="" />{" "}
            <span className="font-bold">CarPickUp</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* authentication condition */}
        <div className="navbar-end ">
          {user ? (
            <>
              <div className="flex justify-center items-center gap-2">
                <div className="">
                  <a onClick={handleLogOut} className="btn font-bold ">
                    Log Out
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className=" space-x-4">
                <button>
                  <NavLink to={"/login"}>Login</NavLink>
                </button>
                <NavLink to={"/registration"}>
                  <button className="btn btn-neutral font-bold">
                    Resister
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