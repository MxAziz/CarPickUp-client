// MyBookings.jsx
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoTrashBinSharp } from "react-icons/io5";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

  useEffect(() => {
      if (user?.email) {
        fetch(`http://localhost:5000/bookings/${user.email}`)
          .then((res) => res.json())
          .then((data) => setBookings(data))
          .catch((error) => console.error("Error fetching bookings:", error));
    }
  }, [user]);

    // useEffect(() => {
    //   if (user?.email) {
    //     fetch(
    //       `https://chill-gamer-server-liart.vercel.app/watchList/${user.email}`
    //     )
    //       .then((res) => res.json())
    //       .then((data) => setWatchList(data))
    //       .catch((error) => console.error("Error fetching watchList:", error));
    //   }
    // }, [user]);

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to cancel this booking!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
            .then(() => {
                setBookings((prev) => prev.filter((booking) => booking._id !== id));
                  Swal.fire(
                    "Cancelled!",
                    "Your booking has been cancelled.",
                    "success"
                  );
          })
          .catch((error) => console.error("Error cancelling booking:", error));
      }
    });
  };

    console.log(bookings);


  return (
    <div className="container p-6">
      <h2 className="text-2xl text-center font-bold mb-4">My Bookings</h2>
      <table className="table-auto w-full  border-collapse border bg-white shadow-lg">
        <thead>
          <tr>
            <th className=" border p-2 bg-cyan-500">Car Image</th>
            <th className=" border p-2 bg-cyan-500">Car Model</th>
            <th className=" border p-2 bg-cyan-500">Booking Date</th>
            <th className=" border p-2 bg-cyan-500">Total Price</th>
            <th className=" border p-2 bg-cyan-500">Status</th>
            <th className=" border p-2 bg-cyan-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={booking._id}
              className={`hover:bg-blue-100 text-center ${
                index % 2 === 0 ? "bg-white" : "bg-[#f1fff1]"
              }`}
            >
              <td className="border p-2">
                <img
                  src={booking.imageUrl}
                  alt={booking.model}
                  className="w-16 h-16"
                />
              </td>
              <td className="border p-2">{booking.model}</td>
              <td className="border p-2">
                {new Date(booking.bookingDate).toLocaleString()}
              </td>
              <td className="border p-2">${booking.dailyRentalPrice}</td>
              <td className="border p-2">{booking.status}</td>
              <td className="border p-2">
                <button
                  className="btn bg-blue-500 text-white mr-2"
                  onClick={() => console.log("Modify Booking")}
                >
                  Modify Date
                </button>
                <button
                  className="btn bg-red-500 text-white"
                  onClick={() => handleCancelBooking(booking._id)}
                >
                  <IoTrashBinSharp />
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;