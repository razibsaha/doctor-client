import React from "react";
import dentistChecking from "../../../assets/images/treatment.png";

const DentalCare = () => {
  return (
    <section id="treatment" className="mt-32">
      <div className="hero md:px-12 mb-20">
        <div className="hero-content md:flex md:flex-row flex-col justify-center items-center">
        <div className="md:flex-none flex justify-center items-center">
         <img
            src={dentistChecking}
            alt={dentistChecking}
            className="md:w-5/5 w-4/5 md:m-0 m-22 md:mr-8 rounded-lg shadow-2xl"
          />
         </div>
          
          <div className="pr-18">
            <h1 className="text-[48px] font-bold leading-tight">
            Exceptional Dental Care, on Your Terms
            </h1>
            <p className="leading-normal py-6">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn-gradient">GET STARTED</button>
          </div>
         
        </div>
      </div>
    </section>
  );
};
export default DentalCare;
