import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AvailableCars = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewType, setViewType] = useState("grid");
  const [sortOption, setSortOption] = useState("");
  const navigate = useNavigate();

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
      } else if (sortOption === "date-newest") {
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      } else if (sortOption === "date-oldest") {
        return new Date(a.dateAdded) - new Date(b.dateAdded);
      }
      return 0;
    });

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search by model or location"
            className="input input-bordered border-cyan-600 w-full max-w-sm"
            value={searchQuery}
            onChange={handleSearch}
          />
          <button
            className="btn bg-[#136b7a] hover:bg-[#232525] text-white"
            type="submit"
          >
            Search
          </button>
        </div>

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
            <option value="date-newest">Date Added: Newest First</option>
            <option value="date-oldest">Date Added: Oldest First</option>
          </select>

          <button
            className="btn bg-[#136b7a] hover:bg-[#2a2b2d] text-white"
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
            <div className="overflow-hidden h-48 relative group rounded-t-lg rounded-br-[70px]">
              <img
                src={car.imageUrl}
                alt={car.model}
                className="w-full h-full object-cover mb-4 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-bold text-lg">{car.model}</h3>
            <p>Location: {car.location}</p>
            <p>Price: ${car.dailyRentalPrice}/day</p>
            <button
              onClick={() => navigate(`/carDetails/${car._id}`)}
              className="btn bg-[#136b7a] hover:bg-[#232425] text-white mt-4"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableCars;
