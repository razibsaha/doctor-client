import React from "react";

const InfoCard = ({img,title,description,bgClass}) => {
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl md:mx-3 my-5 text-white ${bgClass}`}>
      <figure className="p-5">
        <img
          src={img}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default InfoCard;
