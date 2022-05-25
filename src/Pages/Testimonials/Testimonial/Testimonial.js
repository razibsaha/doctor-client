import React from "react";

const Testimonial = ({ testimonial }) => {
  const { review, name, place, img } = testimonial;
  return (
    <article>
      <div className="card w-auto bg-base-100 shadow-xl m-5">
        <div className="card-body text-left text-sm">
          <p>{review}</p>
        </div>
        
          
            <div className="mx-12 flex justify-start items-center pb-5">
              <div className="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                <img src={img} alt={name} />
              </div>
            
            <div className=" text-left">
              <h2 className="card-title">{name}</h2>
              <p className="text-sm">{place}</p>
            </div>
          
        </div>
      </div>
    </article>
  );
};
export default Testimonial;
