import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading] = useAuthState(auth);
  const formattedDate = format(date, "PP");

  if (loading) {
    <Loading></Loading>;
  }

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch(" https://doctor-server-ffph.onrender.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          toast(`Booking is set, ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `You already have an appointment on ${data.booking.date} at ${data.booking?.slot}`
          );
        }
        setTreatment(null);
        refetch();
      });

    // to close the modal
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="mb-5 text-lg font-bold text-center text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-2 justify-items-center"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="w-full max-w-xs input input-bordered"
            />
            <select
              name="slot"
              className="w-full max-w-xs select select-bordered"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full max-w-xs input input-bordered"
            />
            <input
              type="submit"
              value="Submit"
              className="w-full max-w-xs btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
