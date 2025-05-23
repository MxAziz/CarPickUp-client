import React, { useEffect, useState } from "react";

const RecentListings = () => {
  const [recentCars, setRecentCars] = useState([]);

  useEffect(() => {
    const fetchRecentCars = async () => {
      try {
        const response = await fetch("https://car-pick-up-server.vercel.app/cars/recent");
        if (!response.ok) {
          throw new Error("Failed to fetch recent cars");
        }
        const data = await response.json();
        setRecentCars(data);
      } catch (error) {
        console.error("Error fetching recent cars:", error);
      }
    };

    fetchRecentCars();
  }, []);

  return (
    <div className=" dark:dark:bg-[#323538]">
      <div className=" mx-auto py-28 w-11/12 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center py-4 dark:text-gray-50 mb-12">
          Recent Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recentCars.map((car) => (
            <div
              key={car._id} // Make sure _id is passed correctly
              className="card bg-white dark:dark:bg-[#232425] shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              <img
                src={car.imageUrl}
                alt={car.model}
                className="w-full h-48 object-cover bg-cover rounded-br-[70px]"
              />
              <div className="p-4">
                <div className="flex gap-7 items-center">
                  <h3 className="text-2xl dark:text-gray-50 font-bold mb-2">
                    {car.model}
                  </h3>

                  <p className="mb-2">
                    <span
                      className={`inline-block px-2 py-1 rounded text-white text-sm font-medium ${
                        car.availability === "Yes"
                          ? "bg-[#136b7a]"
                          : "bg-red-500"
                      }`}
                    >
                      {car.availability === "Yes"
                        ? "Available"
                        : "Not Available"}
                    </span>
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-100 mb-1">
                  Price: ${car.dailyRentalPrice}/day
                </p>
                <p className="text-[#2394a8] text-sm">
                  Added {new Date(car.dateAdded).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentListings;
