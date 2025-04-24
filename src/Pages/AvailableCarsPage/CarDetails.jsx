// CarDetails.jsx
import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://car-pick-up-server.vercel.app/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setCar(data))
      .catch((error) => console.error("Error fetching car details:", error));
  }, [id]);

  if (!car) return <p>Loading...</p>;


  // const handleBooking = () => {
  //   console.log('before click:',showModal);
  //   setShowModal(true);
  //   console.log('after click:',showModal);
  // };

  const confirmBooking = () => {
    const bookingDetails = {
      carId: id,
      model: car.model,
      imageUrl: car.imageUrl,
      bookingDate: new Date().toISOString(),
      dailyRentalPrice: car.dailyRentalPrice,
      status: "confirmed",
      userEmail: user.email,
    };

    fetch("https://car-pick-up-server.vercel.app/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Booking Confirmed",
          text: "Your booking has been confirmed successfully.",
        });
        setShowModal(false);
        navigate("/myBookings");
      })
      .catch((error) => console.error("Error confirming booking:", error));
  };

  return (
    <div className="container bg-gray-100 dark:bg-[#323538] p-6 py-16 md:py-28 ">
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
          onClick={() => {
            setShowModal(true);
            console.log("after click:", showModal);
          }}
        >
          Book Now
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="modal-content bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Booking Confirmation</h3>
            <p className="mb-2">Car: {car.model}</p>
            <p className="mb-2">Price per Day: ${car.dailyRentalPrice}</p>
            <div className="flex justify-center mt-4">
              <button
                className="btn btn-secondary mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="btn bg-[#136b7a] hover:bg-[#1d8092] text-white"
                onClick={confirmBooking}
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
