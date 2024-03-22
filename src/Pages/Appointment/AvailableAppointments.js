import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');

  const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => 
  fetch(` https://doctor-server-ffph.onrender.com/available?date=${formattedDate}`)
        .then(res => res.json()))

  /* useEffect(() => {
    fetch(`https://doctor-server-ffph.onrender.com//available?date=${formattedDate}`)
        .then(res => res.json())
        .then(data => setServices(data));
}, []) */
if(isLoading){
    return <Loading></Loading>
}
  return (
    <section>
      <div className="flex-col items-center justify-center md:flex">
        <h1 className="text-center text-primary">
          {" "}
          Available Services on : {format(date, "PP")}
        </h1>
        <p className="text-center text-slate-400">Please select a service</p>
      </div>
      <div className="container grid grid-cols-1 gap-5 px-12 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreatment={setTreatment}
          refetch = {refetch}
        ></BookingModal>
      )}
    </section>
  );
};

export default AvailableAppointments;
