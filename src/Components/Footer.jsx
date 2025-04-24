import React from 'react';
import { FaCar, FaFacebookF, FaYoutube } from 'react-icons/fa';
import {  FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <div className="">
        <footer className="bg-[#232425] text-white py-12 md:py-16">
          {/* top contact section */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 border border-black w-[95%] mx-auto px-8 py-4 rounded-lg gap-6">
            <div className="flex gap-4 items-start">
              <div className="p-6 rounded-full bg-[#136b7a] text-white">
                <FiPhoneCall className="size-6" />
              </div>
              <div>
                <h3>Call us</h3>
                <p>+880 123456789</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-6 rounded-full bg-[#136b7a] text-white">
                <MdEmail className="size-6" />
              </div>
              <div>
                <h3>Write to us</h3>
                <p>info@carpickup.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-6 rounded-full bg-[#136b7a] text-white">
                <FaLocationDot className="size-6" />
              </div>
              <div>
                <h3>Address</h3>
                <p>Rajshahi, City Center, Office 123</p>
              </div>
            </div>
          </div>

          {/* footer main content */}

            <footer className="text-white py-4 px-4 md:px-8">
              <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center">
                  <FaCar className=' size-8 mr-2'></FaCar>
                    <span className=" text-[#3ddbf7]">CAR</span>PICKUP
                  </h2>
                  <p className="text-gray-400">
                    A simple and user-friendly car rental system to book,
                    manage, and track vehicles online.
                  </p>
                  <div className="flex gap-4">
                    <button className=" border-2 border-[#136b7a] hover:bg-[#136b7a]  transition-transform duration-300 p-4 rounded-full ">
                      <FaWhatsapp className=" size-5"></FaWhatsapp>
                    </button>

                    <button className=" border-2 border-[#136b7a] hover:bg-[#136b7a]  transition-transform duration-300 p-4 rounded-full ">
                      <FaFacebookF className=" size-5"></FaFacebookF>
                    </button>

                    <button className=" border-2 border-[#136b7a] hover:bg-[#136b7a]  transition-transform duration-300 p-4 rounded-full ">
                      <FaYoutube className=" size-5"></FaYoutube>
                    </button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Cars
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Car Types
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/#"
                        className="text-gray-400 hover:text-white transition"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Subscribe */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Subscribe</h3>
                  <p className="text-gray-400">
                    Want to be notified about our services. Just sign up and
                    we'll send you a notification by email.
                  </p>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
                    />
                    <button className="bg-[#136b7a] hover:bg-[#145460] px-4 py-2 rounded-r transition">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-black mt-8 pt-8 text-center text-gray-400">
                <p>
                  © {new Date().getFullYear()} CARPICKUP. All rights reserved.
                </p>
              </div>
            </footer>
        </footer>
      </div>
    );
};

export default Footer;