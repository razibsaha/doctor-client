import React from "react";
import Doctor from "../../../assets/images/doctor-small.png";

const AppointmentSection = () => {
  return (
    <section
      id="treatment"
      className=" mx-auto  appointment-bg px-12 mt-32 mb-20"
    >
      <div className="container mx-auto md:flex justify-center items-center">
      <div className="flex-1">
        <img
          src={Doctor}
          alt="Appointment"
          className="md:w-full  md:block hidden lg:-mt-[100px] md:mt-[200px]"
        />
      </div>

      <div className="flex-1 py-24">
        <p className="text-sm font-bold text-primary">Appointment</p>
        <h1 className="text-[36px] font-normal text-white leading-tight">
          Make an appointment Today
        </h1>
        <p className="py-6 text-white text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn-gradient">GET STARTED</button>
      </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
