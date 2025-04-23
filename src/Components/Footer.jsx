import React from 'react';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
    return (
      <div className="">
        <footer className="bg-[#232425] text-white py-20">
          {/* top contact section */}
          <div className="flex flex-col lg:flex-row lg:justify-between items-start mb-8 border border-black w-11/12 mx-auto px-4 py-4 rounded-lg gap-6">
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
          <div className="">
            {/* left */}
            <div className="">
              <h3 className=" font-bold text-3xl">CARPICKUP</h3>
              <small className="text-base">
                A simple and user-friendly car rental system to book, manage,
                and track vehicles online.
              </small>
              <small>
                ©MxAziz{new Date().getFullYear()} | All Rights Reserved
              </small>
              {/* social buttons */}
              <div className="">
                <span className=' border-2 p-6 rounded-full '>
                <FaWhatsapp className=" size-6"></FaWhatsapp>
                </span>
              </div>
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