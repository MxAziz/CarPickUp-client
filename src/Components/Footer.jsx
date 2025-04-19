import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
      <div className="">
        <footer className="bg-[#232425] text-white py-20">
          {/* top contact section */}
          <div className="flex  flex-col lg:flex-row justify-between items-center mb-8 border border-black w-11/12 mx-auto px-14 py-4 rounded-lg">

            <div className="flex gap-4 items-center justify-center mb-4">
              <div className="p-6 rounded-full bg-[#136b7a] text-white">
                <FiPhoneCall className=" size-6" />
              </div>
              <div className="">
                <h3>Call us</h3>
                <p>+880 123456789</p>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center mb-4">
              <div className="p-6 rounded-full bg-[#136b7a] text-white">
                <MdEmail className=" size-6" />
              </div>
              <div className="">
                <h3>Write to us</h3>
                <p>info@carpickup.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center mb-4">
              <div className="p-6 rounded-full bg-[#136b7a] text-white">
                <FaLocationDot className=" size-6" />
              </div>
              <div className="">
                <h3>Address</h3>
                <p>Rajshahi, City Center, Office 123</p>
              </div>
            </div>
          </div>

          {/* footer main content */}
          <div className="">
            {/* left */}
            <div className="">
              <h3 className=' font-bold text-3xl'>CARPICKUP</h3>
              <small className='text-base'>
               A simple and user-friendly car rental system to book, manage, and track vehicles online.
              </small>
            </div>
            {/* middle */}
            <div className=""></div>
            {/* right */}
            <div className=""></div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;


/*
<div className=" space-y-2">
              <p className="font-bold text-3xl">CARPICKUP</p>
              <p className='text-base'>
                CarPickUp aims to elevate the car rental experience by
                integrating modern technologies with innovative design, <br /> ensuring
                reliability and user satisfaction at every step.
              </p>
              <p className=''>Copyright © {new Date().getFullYear()} - All rights reserved</p>
            </div>
 */