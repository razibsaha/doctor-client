import { format } from "date-fns/esm";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import ChairImage from "../../assets/images/chair.png";

const AppointmentBanner = ({date, setDate}) => {
    let footer = <p>Please pick a day.</p>;
    if (date) {
      footer = <p>You picked {format(date, "PP")}.</p>;
    }
  
    return (
        <div className="hero xm:container md:min-h-[80vh] md:px-12 mb-20 md:hero-bg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={ChairImage}
          alt={ChairImage}
          className="md:w-3/5 rounded-lg shadow-2xl"
        />
        <div className="lg:pr-28 pr-18">
          <DayPicker
            mode="single"
            date={date}
            onSelect={setDate}
            footer={footer}
          />
        </div>
      </div>
    </div>
    );
};
export default AppointmentBanner;