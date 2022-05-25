import React from "react";
import Service from "./Service/Service";
import service1 from "../../../assets/images/fluoride.png"
import service2 from "../../../assets/images/cavity.png"
import service3 from "../../../assets/images/whitening.png"

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: service1,
    },
    {
      id: 2,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: service2,
    },
    {
      id: 3,
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      img: service3,
    },
  ];
  return (
    <section className="container mx-auto text-center">
      <div className="md:mb-24"><h1 className="uppercase text-primary font-bold">Our Services</h1>
      <p className="text-accent text-2xl">Services We Provide</p></div>
      <div className="md:flex flex-row justify-center items-center mx-auto">
        {services.map((service) => (
          <Service key={service.id}
          service={service}></Service>
        ))}
      </div>
    </section>
  );
};
export default Services;
