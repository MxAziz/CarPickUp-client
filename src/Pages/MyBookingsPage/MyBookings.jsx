import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoTrashBinSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { SlCalender } from "react-icons/sl";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
    const [chartData, setChartData] = useState([]);
     const [selectedBooking, setSelectedBooking] = useState(null);
     const [newDate, setNewDate] = useState(new Date());
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

      const handleModifyDate = (booking) => {
        setSelectedBooking(booking);
        setNewDate(new Date(booking.bookingDate));
      };

      const confirmModifyDate = () => {
        if (selectedBooking) {
          fetch(`http://localhost:5000/bookings/${selectedBooking._id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ bookingDate: newDate.toISOString() }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                Swal.fire(
                  "Updated!",
                  "Booking date has been updated successfully.",
                  "success"
                );
                setBookings((prev) =>
                  prev.map((booking) =>
                    booking._id === selectedBooking._id
                      ? { ...booking, bookingDate: newDate.toISOString() }
                      : booking
                  )
                );
                setSelectedBooking(null);
              } else {
                Swal.fire("Error!", "Failed to update booking date.", "error");
              }
            })
            .catch((error) => console.error("Error updating booking:", error));
        }
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
                  className="w-16 h-16 mx-auto"
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
                  onClick={() => handleModifyDate(booking)}
                >
                  <SlCalender />
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

      {/* Modify Date Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg w-1/3">
            <h3 className="text-lg font-bold mb-4">Modify Booking Date</h3>
            <DatePicker
              selected={newDate}
              onChange={(date) => setNewDate(date)}
              className="border p-2 w-full"
            />
            <div className="flex justify-end mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={confirmModifyDate}
              >
                Confirm
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setSelectedBooking(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Statistics */}
      <div className="my-16 ">
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

// import React, { useContext, useEffect, useState } from "react";
// import Swal from "sweetalert2";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../../Provider/AuthProvider";
// import { IoTrashBinSharp } from "react-icons/io5";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   ResponsiveContainer,
// } from "recharts";
// import { SlCalender } from "react-icons/sl";

// const MyBookings = () => {
//   const [bookings, setBookings] = useState([]);
//   const [chartData, setChartData] = useState([]);
//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [newStartDate, setNewStartDate] = useState(null);
//   const [newEndDate, setNewEndDate] = useState(null);
//   const { user } = useContext(AuthContext);

// useEffect(() => {
//   const fetchBookings = async () => {
//     try {
//       if (user?.email) {
//         const response = await fetch(
//           `http://localhost:5000/bookings/${user.email}`
//         );
//         const data = await response.json();

//         // Ensure dates are parsed properly before setting state
//         const updatedData = data.map((booking) => ({
//           ...booking,
//           startDate: booking.startDate
//             ? new Date(booking.startDate).toISOString()
//             : null,
//           endDate: booking.endDate
//             ? new Date(booking.endDate).toISOString()
//             : null,
//         }));

//         setBookings(updatedData);

//         // Prepare chart data
//         const groupedData = updatedData.reduce((acc, booking) => {
//           const price = booking.dailyRentalPrice;
//           if (!acc[price]) {
//             acc[price] = 1;
//           } else {
//             acc[price] += 1;
//           }
//           return acc;
//         }, {});

//         const chartFormat = Object.entries(groupedData).map(
//           ([price, count]) => ({
//             price: parseFloat(price),
//             count,
//           })
//         );
//         setChartData(chartFormat);
//       }
//     } catch (error) {
//       console.error("Error fetching bookings:", error);
//     }
//   };

//   fetchBookings();
// }, [user]);


//   const handleCancelBooking = async (id) => {
//     const confirmResult = await Swal.fire({
//       title: "Are you sure?",
//       text: "You want to cancel this booking!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, cancel it!",
//     });

//     if (confirmResult.isConfirmed) {
//       try {
//         await fetch(`http://localhost:5000/bookings/${id}`, {
//           method: "DELETE",
//         });
//         setBookings((prev) => prev.filter((booking) => booking._id !== id));
//         Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
//       } catch (error) {
//         console.error("Error cancelling booking:", error);
//       }
//     }
//   };

// const handleModifyDate = (booking) => {
//   setSelectedBooking(booking);

//   // Ensure valid date conversion
//   const startDate = new Date(booking.startDate); // server-side ISO format
//   const endDate = new Date(booking.endDate);

//   if (isNaN(startDate) || isNaN(endDate)) {
//     Swal.fire("Error", "Invalid date format received!", "error");
//     return;
//   }

//   setNewStartDate(startDate);
//     setNewEndDate(endDate);
//     console.log('aziz');

// };



//   const handleConfirmModify = async () => {
//     if (!newStartDate || !newEndDate) {
//       Swal.fire("Error", "Please select both start and end dates.", "error");
//       return;
//     }

//     const updatedBooking = {
//       ...selectedBooking,
//       startDate: newStartDate,
//       endDate: newEndDate,
//     };

//     try {
//       const response = await fetch(
//         `http://localhost:5000/bookings/${selectedBooking._id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(updatedBooking),
//         }
//       );
//       const result = await response.json();

//       if (result.success) {
//         setBookings((prev) =>
//           prev.map((booking) =>
//             booking._id === selectedBooking._id ? updatedBooking : booking
//           )
//         );
//         setSelectedBooking(null);
//         setNewStartDate(null);
//         setNewEndDate(null);
//         Swal.fire(
//           "Success",
//           "Booking dates have been updated successfully!",
//           "success"
//         );
//       }
//     } catch (error) {
//       console.error("Error updating booking:", error);
//     }
//   };

//   return (
//     <div className="container p-6">
//       <h2 className="text-2xl text-center font-bold mb-4">My Bookings</h2>

//       {/* Booking Table */}
//       <table className="table-auto w-full border-collapse border bg-white shadow-lg">
//         <thead>
//           <tr>
//             <th className="border p-2 bg-cyan-500">Car Image</th>
//             <th className="border p-2 bg-cyan-500">Car Model</th>
//             <th className="border p-2 bg-cyan-500">Booking Date</th>
//             <th className="border p-2 bg-cyan-500">Total Price</th>
//             <th className="border p-2 bg-cyan-500">Status</th>
//             <th className="border p-2 bg-cyan-500">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookings.map((booking, index) => (
//             <tr
//               key={booking._id}
//               className={`hover:bg-blue-100 text-center ${
//                 index % 2 === 0 ? "bg-white" : "bg-[#f1fff1]"
//               }`}
//             >
//               <td className="border p-2">
//                 <img
//                   src={booking.imageUrl}
//                   alt={booking.model}
//                   className="w-16 h-16 mx-auto"
//                 />
//               </td>
//               <td className="border p-2">{booking.model}</td>
//               <td className="border p-2">
//                 {new Date(booking.bookingDate).toLocaleString()}
//               </td>
//               <td className="border p-2">${booking.dailyRentalPrice}</td>
//               <td className="border p-2">{booking.status}</td>
//               <td className="border p-2">
//                 <button
//                   className="btn bg-blue-500 text-white mr-2"
//                   onClick={() => handleModifyDate(booking)}
//                 >
//                   <SlCalender /> Modify Date
//                 </button>
//                 <button
//                   className="btn bg-red-500 text-white"
//                   onClick={() => handleCancelBooking(booking._id)}
//                 >
//                   <IoTrashBinSharp /> Cancel
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {/* Modify Date Modal */}
//       {selectedBooking && (
//         <div className="modal active">
//           <div className="modal-box">
//             <h3 className="font-bold text-lg">Modify Booking Dates</h3>
//             <div className="mt-4">
//               <label className="block">Start Date:</label>
//               <DatePicker
//                 selected={newStartDate}
//                 onChange={(date) => setNewStartDate(date)}
//                 selectsStart
//                 startDate={newStartDate}
//                 endDate={newEndDate}
//                 className="input input-bordered"
//               />
//               <label className="block mt-2">End Date:</label>
//               <DatePicker
//                 selected={newEndDate}
//                 onChange={(date) => setNewEndDate(date)}
//                 selectsEnd
//                 startDate={newStartDate}
//                 endDate={newEndDate}
//                 minDate={newStartDate}
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="modal-action">
//               <button
//                 className="btn bg-green-500 text-white"
//                 onClick={handleConfirmModify}
//               >
//                 Confirm
//               </button>
//               <button
//                 className="btn bg-gray-500 text-white"
//                 onClick={() => setSelectedBooking(null)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Booking Statistics */}
//       <div className="my-16">
//         <h3 className="text-xl font-bold mb-4 text-center">
//           Booking Statistics
//         </h3>
//         <ResponsiveContainer width="100%" height={300}>
//           <BarChart
//             data={chartData}
//             margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis
//               dataKey="price"
//               label={{
//                 value: "Daily Rental Price ($)",
//                 position: "insideBottom",
//                 offset: -5,
//               }}
//             />
//             <YAxis
//               label={{
//                 value: "Number of Bookings",
//                 angle: -90,
//                 position: "insideLeft",
//               }}
//             />
//             <Tooltip />
//             <Bar dataKey="count" fill="#82ca9d" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default MyBookings;
