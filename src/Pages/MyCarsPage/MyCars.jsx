import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCars = () => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const fetchCars = async () => {
    try {
      const response = await axios.get(
        `https://car-pick-up-server.vercel.app/myCars/${user?.email}`
      );
      setCars(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load cars!");
    }
  };

  useEffect(() => {
    fetchCars();
  }, [user?.email]);

const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to delete this car!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await axios.delete(`https://car-pick-up-server.vercel.app/cars/${id}`);
        setCars(cars.filter((car) => car._id !== id));
        Swal.fire("Deleted!", "Your car has been deleted.", "success");
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Failed to delete the car.", "error");
      }
    }
  });
};

  const handleSort = (option) => {
    setSortOption(option);
    const sortedCars = [...cars];
    if (option === "date-newest") {
      sortedCars.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (option === "date-oldest") {
      sortedCars.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    } else if (option === "price-lowest") {
      sortedCars.sort((a, b) => a.dailyRentalPrice - b.dailyRentalPrice);
    } else if (option === "price-highest") {
      sortedCars.sort((a, b) => b.dailyRentalPrice - a.dailyRentalPrice);
    }
    setCars(sortedCars);
  };

  // -----------------------------------------------
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://car-pick-up-server.vercel.app/cars/${selectedCar._id}`,
        selectedCar
      );
      console.log(response);
      if (response.data.success === true) {
        toast.success("Car updated successfully!");
        fetchCars();
        setSelectedCar(null);
      } else {
        toast.error("No changes were made!");
      }
    } catch (error) {
      console.error(error);
      console.log(selectedCar);
      toast.error("Failed to update the car!");
    }
  };

  return (
    <div className="p-4 dark:bg-[#323538] dark:text-white py-28 lg:px-7">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-4">
        My Cars
      </h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : cars.length === 0 ? (
        <p>
          No cars added.{" "}
          <a href="/addCar" className="text-blue-500">
            Add a car
          </a>
        </p>
      ) : (
        <>
          <div className="mb-4">
            <label htmlFor="sort" className="mr-2 text-xl">
              Sort By:
            </label>
            <select
              id="sort"
              className="border border-cyan-500 rounded-xl px-2 py-3 dark:bg-[#232425] "
              onChange={(e) => handleSort(e.target.value)}
            >
              <option disabled value="">
                Select
              </option>
              <option value="date-newest">Date Added: Newest First</option>
              <option value="date-oldest">Date Added: Oldest First</option>
              <option value="price-lowest">Price: Lowest First</option>
              <option value="price-highest">Price: Highest First</option>
            </select>
          </div>

          <table className="w-full border-collapse border ">
            <thead>
              <tr>
                <th className="border p-2">Car Image</th>
                <th className="border p-2">Car Model</th>
                <th className="border p-2">Daily Rental Price</th>
                <th className="border p-2">Booking Count</th>
                <th className="border p-2">Availability</th>
                <th className="border p-2">Date Added</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id} className="text-center">
                  <td className="border p-2">
                    <img
                      src={car.imageUrl}
                      alt={car.model}
                      className="h-16 mx-auto"
                    />
                  </td>
                  <td className="border p-2">{car.model}</td>
                  <td className="border p-2">${car.dailyRentalPrice}</td>
                  <td className="border p-2">{car.bookingCount}</td>
                  <td className="border p-2">
                    {car.availability ? "Available" : "Unavailable"}
                  </td>
                  <td className="border p-2">
                    {new Date(car.dateAdded).toLocaleDateString()}
                  </td>
                  <td className="border p-2">
                    <button
                      className="bg-[#136b7a] hover:bg-[#232525] text-white rounded-md px-3 py-1 mr-2"
                      onClick={() => setSelectedCar(car)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 hover:bg-[#232525] text-white rounded-md px-3 py-1"
                      onClick={() => handleDelete(car._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {selectedCar && (
        <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white dark:bg-[#232425] dark:text-white p-6 rounded shadow-lg w-1/2 overflow-y-auto h-3/4"
          >
            <h2 className="text-xl font-bold mb-4">Update Car Details</h2>

            {/* Car Model */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Car Model
              </label>
              <input
                type="text"
                value={selectedCar.model}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, model: e.target.value })
                }
                className="border p-2 w-full dark:bg-[#323538] rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Daily Rental Price */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Daily Rental Price
              </label>
              <input
                type="number"
                value={selectedCar.dailyRentalPrice}
                onChange={(e) =>
                  setSelectedCar({
                    ...selectedCar,
                    dailyRentalPrice: e.target.value,
                  })
                }
                className="border p-2 w-full rounded dark:bg-[#323538] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Availability */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Availability
              </label>
              <select
                value={selectedCar.availability ? "Available" : "Unavailable"}
                onChange={(e) =>
                  setSelectedCar({
                    ...selectedCar,
                    availability: e.target.value === "Available",
                  })
                }
                className="border p-2 w-full dark:bg-[#323538] rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
            </div>

            {/* Vehicle Registration Number */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Vehicle Registration Number
              </label>
              <input
                type="text"
                value={selectedCar.registrationNumber || ""}
                onChange={(e) =>
                  setSelectedCar({
                    ...selectedCar,
                    registrationNumber: e.target.value,
                  })
                }
                className="border p-2 w-full rounded dark:bg-[#323538] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Features */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Features (e.g., GPS, AC)
              </label>
              <input
                type="text"
                value={selectedCar.features || ""}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, features: e.target.value })
                }
                className="border p-2 w-full rounded dark:bg-[#323538] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Description
              </label>
              <textarea
                value={selectedCar.description || ""}
                onChange={(e) =>
                  setSelectedCar({
                    ...selectedCar,
                    description: e.target.value,
                  })
                }
                className="border p-2 w-full rounded dark:bg-[#323538] focus:outline-none focus:ring-2 focus:ring-blue-300"
                rows="3"
              ></textarea>
            </div>

            {/* Image URL */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={selectedCar.imageUrl || ""}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, imageUrl: e.target.value })
                }
                className="border p-2 w-full rounded dark:bg-[#323538] focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Location */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 font-medium mb-2">
                Location
              </label>
              <input
                type="text"
                value={selectedCar.location || ""}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, location: e.target.value })
                }
                className="border p-2 w-full dark:bg-[#323538] rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setSelectedCar(null)}
                className="ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyCars;
