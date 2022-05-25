import React from "react";
import QuotationMark from '../../assets/icons/quote.svg'
import Testimonial from "./Testimonial/Testimonial";
import user1 from '../../assets/images/people1.png'
import user2 from '../../assets/images/people2.png'
import user3 from '../../assets/images/people3.png'

const Testimonials = () => {
  const testimonial = [
    {
      id: 1,
      name: "Winson Herry",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: user1,
      place: "Feni"
    },
    {
      id: 2,
      name: "Sharon Stone",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: user2,
      place: "California"
    },
    {
      id: 3,
      name: "Jun Ji-hyun",
      review:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: user3,
      place: "Dhaka"
    },
  ];
  return (
    <section className="container mx-auto text-center md:px-12">
      <div className="flex justify-between items-center">
      <div className="md:mb-24 text-left p-5">
        <h1 className=" text-primary font-bold text-sm">Testimonials</h1>
        <p className="text-accent text-2xl">What Our Patients Says</p>
      </div>
      <div>
          <img className="h-auto md:w-[175px] w-16 md:mr-12 mr-5" src={QuotationMark} alt="" />
      </div>
      </div>
      <div className="md:flex justify-center items-center">
        {testimonial.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
          ></Testimonial>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
