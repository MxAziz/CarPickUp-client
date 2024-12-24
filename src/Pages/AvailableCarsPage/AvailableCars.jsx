// AvailableCars.jsx
import React, { useEffect, useState } from "react";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("grid");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

    const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSort = (e) => {
    setSortOption(e.target.value);
  };

  const filteredCars = cars
    .filter((car) =>
      [car.model, car.brand, car.location]
        .join(" ")
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "price") {
        return a.dailyRentalPrice - b.dailyRentalPrice;
      } else if (sortOption === "name") {
        return a.model.localeCompare(b.model);
      }
      return 0;
    });

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by model or location"
          className="input input-bordered w-full max-w-sm"
          value={searchQuery}
          onChange={handleSearch}
        />

        <div>
          <select
            className="select select-bordered mr-2"
            value={sortOption}
            onChange={handleSort}
          >
            <option disabled value="">
              Sort By
            </option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>

          <button
            className="btn bg-[#1b5f9f] hover:bg-[#2a2b2d] text-white"
            onClick={() => setViewType(viewType === "grid" ? "list" : "grid")}
          >
            {viewType === "grid"
              ? "Switch to List View"
              : "Switch to Grid View"}
          </button>
        </div>
      </div>

      <div
        className={
          viewType === "grid"
            ? "grid grid-cols-1 md:grid-cols-3 gap-4"
            : "space-y-4"
        }
      >
        {filteredCars.map((car) => (
          <div key={car._id} className="card bg-gray-100 shadow-md p-4">
            <img
              src={car.imageUrl}
              alt={car.model}
              className="w-full h-32 object-cover mb-4 rounded-br-[80px] "
            />
            <h3 className="font-bold text-lg">{car.model}</h3>
            <p>Location: {car.location}</p>
            <p>Price: ${car.dailyRentalPrice}/day</p>
            <button className="btn bg-[#1b5f9f] hover:bg-[#232425] text-white mt-4">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
