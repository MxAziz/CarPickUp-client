import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoTrashBinSharp } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [chartData, setChartData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/bookings/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setBookings(data);
          // Prepare data for chart
          const groupedData = data.reduce((acc, booking) => {
            const price = booking.dailyRentalPrice;
            if (!acc[price]) {
              acc[price] = 1;
            } else {
              acc[price] += 1;
            }
            return acc;
          }, {});

          // Transform into chart-friendly format
          const chartFormat = Object.entries(groupedData).map(
            ([price, count]) => ({
              price: parseFloat(price),
              count,
            })
          );
          setChartData(chartFormat);
        })
        .catch((error) => console.error("Error fetching bookings:", error));
    }
  }, [user]);

  const handleCancelBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to cancel this booking!",
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

  return (
    <div className="container p-6">
      <h2 className="text-2xl text-center font-bold mb-4">My Bookings</h2>

      {/* Booking Table */}
      <table className="table-auto w-full border-collapse border bg-white shadow-lg">
        <thead>
          <tr>
            <th className="border p-2 bg-cyan-500">Car Image</th>
            <th className="border p-2 bg-cyan-500">Car Model</th>
            <th className="border p-2 bg-cyan-500">Booking Date</th>
            <th className="border p-2 bg-cyan-500">Total Price</th>
            <th className="border p-2 bg-cyan-500">Status</th>
            <th className="border p-2 bg-cyan-500">Actions</th>
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

      {/* Booking Statistics */}
      <div className="mt-8 my-12">
        <h3 className="text-xl font-bold mb-4 text-center">
          Booking Statistics
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="price"
              label={{
                value: "Daily Rental Price ($)",
                position: "insideBottom",
                offset: -5,
              }}
            />
            <YAxis
              label={{
                value: "Number of Bookings",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Bar dataKey="count" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyBookings;
