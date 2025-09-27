import { NavLink } from "react-router-dom";
import { FaCarSide } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";

const SpecialOffers = () => {
  const offers = [
    {
      title: "Get 15% off for weekend rentals!",
      description:
        "Book your car for the weekend and enjoy a 15% discount on your rental.",
      buttonText: "Book Now",
      icon: <FaCarSide className="text-3xl text-[#00c9a7]" />,
    },
    {
      title: "Luxury cars at $99/day this holiday season!",
      description:
        "Celebrate the holidays with premium luxury cars at an unbeatable price.",
      buttonText: "Book Now",
      icon: <GiDiamondTrophy className="text-3xl text-[#facc15]" />,
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#1f2022] dark:via-[#222426] dark:to-[#1c1c1c]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 dark:text-white tracking-tight">
          🚗 Special <span className="text-[#136b7a]">Offers</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="relative overflow-hidden group p-8 rounded-2xl shadow-2xl
              backdrop-blur-lg bg-white/80 dark:bg-[#232425]/80
              border border-gray-200/40 dark:border-gray-700/30
              transition-transform duration-500 hover:scale-[1.03] hover:shadow-xl"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-gray-100 dark:bg-[#2a2b2d] shadow-md group-hover:rotate-6 transition-transform duration-500">
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-bold dark:text-gray-100 group-hover:text-[#136b7a] transition-colors">
                  {offer.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {offer.description}
              </p>

              {/* Button */}
              <NavLink to={"/availableCars"}>
                <button className="px-6 py-3 bg-[#136b7a] hover:bg-[#0f4f59] text-white
                text-lg font-semibold rounded-lg shadow-lg transition-all duration-300">
                  {offer.buttonText}
                </button>
              </NavLink>

              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#136b7a] rounded-full opacity-20 blur-3xl group-hover:opacity-30 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
