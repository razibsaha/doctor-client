import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointments = ({ date }) => {
  /* const [services, setServices] = useState([]); */
  const [treatment, setTreatment] = useState(null);
  const formattedDate = format(date, 'PP');

  const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json()))

  /* useEffect(() => {
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        .then(data => setServices(data));
}, []) */
if(isLoading){
    return <Loading></Loading>
}
  return (
    <section>
      <div className="md:flex flex-col justify-center items-center">
        <h1 className="text-primary text-center">
          {" "}
          Available Services on : {format(date, "PP")}
        </h1>
        <p className="text-slate-400 text-center">Please select a service</p>
      </div>
      <div className="container mx-auto px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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