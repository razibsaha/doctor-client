import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import Clock from "../../../assets/icons/clock.svg";
import Location from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";

const Info = () => {
  return (
    <section id="info" className="container md:flex justify-center items-center mx-auto px-5 mb-32 md:px-0 -mt-7">
      <InfoCard
        img={Clock}
        title={"Opening Hours"}
        description={"Lorem Ipsum is simply dummy text of the pri"}
        bgClass={"bg-gradient"}
      ></InfoCard>
      <InfoCard
        img={Location}
        title={"Opening Hours"}
        description={"Lorem Ipsum is simply dummy text of the pri"}
        bgClass={"bg-mslate"}
      ></InfoCard>
      <InfoCard
        img={Phone}
        title={"Opening Hours"}
        description={"Lorem Ipsum is simply dummy text of the pri"}
        bgClass={"bg-gradient"}
      ></InfoCard>
    </section>
  );
};
export default Info;
