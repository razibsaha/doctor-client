import React from "react";
import HeroImage from "../../../assets/images/chair.png";

const Hero = () => {
  return (
    <div className="hero xm:container md:min-h-[80vh] md:px-12 mb-20 md:hero-bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={HeroImage}
          alt={HeroImage}
          className="md:w-3/5 rounded-lg shadow-2xl"
        />
        <div className="pr-18">
          <h1 className="text-[48px] font-bold leading-tight">Your New Smile Starts Here</h1>
          <p className="leading-normal py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <button className="btn-gradient">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
