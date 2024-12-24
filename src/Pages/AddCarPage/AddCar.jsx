import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCar = () => {
  const [carData, setCarData] = useState({
    model: "",
    dailyRentalPrice: "",
    availability: "",
    registrationNumber: "",
    features: "",
    description: "",
    bookingCount: 0,
    imageUrl: "",
    location: "",
    user: "",
    dateAdded: new Date().toISOString(),
    bookingStatus: "Available",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddCar = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carData),
    });

    const result = await response.json();

    if (response.ok) {
      toast.success("Car added successfully!");
      navigate("/availableCars");
    } else {
      toast.error(result.message || "Failed to add car.");
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleAddCar}
        className="p-8 bg-white shadow-lg rounded-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">Add a New Car</h2>

        {Object.keys(carData).map(
          (key) =>
            !["bookingCount", "user", "dateAdded", "bookingStatus"].includes(
              key
            ) && (
              <div className="mb-4" key={key}>
                <label htmlFor={key} className="block text-sm font-medium mb-2">
                  {key === "imageUrl"
                    ? "Image URL"
                    : key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  id={key}
                  name={key}
                  type="text"
                  value={carData[key]}
                  onChange={handleChange}
                  className="input input-bordered w-full"
                  placeholder={
                    key === "features"
                      ? "E.g., GPS, AC, Sunroof"
                      : key === "availability"
                      ? "Yes/No"
                      : ""
                  }
                  required
                />
              </div>
            )
        )}


        <button
          type="submit"
          className="btn bg-[#232425] text-white font-bold hover:bg-[#113a60] w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCar;