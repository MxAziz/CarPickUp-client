// CarDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data))
      .catch((error) => console.error("Error fetching car details:", error));
  }, [id]);

  if (!car) return <p>Loading...</p>;

  const handleBooking = () => {
    // Navigate to booking confirmation page or handle booking logic
    setShowModal(true);
  };

  return (
    <div className="container bg-gray-100 p-6 ">
      <div className="card shadow-lg md:w-3/5 mx-auto bg-white p-6">
        <img
          src={car.imageUrl}
          alt={car.model}
          className="w-full h-64 object-cover po mb-4 rounded-xl"
        />
        <h2 className="text-3xl font-bold mb-2">{car.model}</h2>
        <p className="text-lg font-medium mb-2">
          Price per Day: ${car.dailyRentalPrice}
        </p>
        <p className="mb-2">Availability: {car.availability}</p>
        <p className="mb-2">Features: {car.features}</p>
        <p className="mb-4">Description: {car.description}</p>
        <button
          className="btn bg-[#136b7a] hover:bg-[#2a2b2d] text-white"
          onClick={handleBooking}
        >
          Book Now
        </button>
      </div>

      {showModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-content bg-white p-6 rounded shadow-lg">
            <h3 className="text-xl font-bold mb-4">Booking Confirmation</h3>
            <p className="mb-2">Car: {car.model}</p>
            <p className="mb-2">Price per Day: ${car.dailyRentalPrice}</p>
            <p className="mb-2">Location: {car.location}</p>
            <p className="mb-4">Features: {car.features}</p>
            <div className="flex justify-end">
              <button
                className="btn btn-secondary mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  // Add booking logic here
                  setShowModal(false);
                  navigate("/confirmation");
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
