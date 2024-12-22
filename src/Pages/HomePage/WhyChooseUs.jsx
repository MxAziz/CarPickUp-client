import React from "react";
import {
  FaCar,
  FaDollarSign,
  FaCalendarCheck,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaCar className="text-4xl text-blue-500 mx-auto" />,
      title: "Wide Variety of Cars",
      color: "bg-[#E7C1D3]",
      description:
        "From budget-friendly options to luxury vehicles, we have it all.",
    },
    {
      icon: <FaDollarSign className="text-4xl text-green-500 mx-auto" />,
      title: "Affordable Prices",
      color: "bg-[#EFDA6E]",
      description: "Enjoy competitive daily rates you can count on.",
    },
    {
      icon: <FaCalendarCheck className="text-4xl text-yellow-500 mx-auto" />,
      title: "Easy Booking Process",
      color: "bg-[#A4DAC3]",
      description: "Seamlessly book your ride in just a few clicks.",
    },
    {
      icon: <FaHeadset className="text-4xl text-red-500 mx-auto" />,
      title: "Customer Support",
      color: "bg-[#77AAEA]",
      description: "24/7 assistance for all your queries.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6  ">
        <h2 className="text-3xl md:text-4xl font-bold   text-center mb-12">
          Why Choose Us?
        </h2>
        {/* 4 card  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-6 ${feature.color} rounded-lg shadow-md text-center`}
            >
              <div className="mb-4 ">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
