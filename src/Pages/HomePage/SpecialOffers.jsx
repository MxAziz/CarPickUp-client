import React from "react";
import { NavLink } from "react-router-dom";

const SpecialOffers = () => {
  const offers = [
    {
      title: "Get 15% off for weekend rentals!",
      description:
        "Book your car for the weekend and enjoy a 15% discount on your rental.",
      buttonText: "Book Now",
    },
    {
      title: "Luxury cars at $99/day this holiday season!",
      description:
        "Celebrate the holidays with premium luxury cars at an unbeatable price.",
      buttonText: "Book Now",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:dark:bg-[#323538]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
          Special Offers
        </h2>
        {/* 2 offer card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-[#232425] rounded-lg shadow-lg transform   hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 dark:text-gray-100">{offer.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{offer.description}</p>
              <NavLink to={"/availableCars"}>
                <button className="px-6 py-3 bg-[#136b7a] hover:bg-[#232525] text-white text-lg font-semibold rounded-md">
                  {offer.buttonText}
                </button>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
