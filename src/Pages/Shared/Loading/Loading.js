import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <section className="container mx-auto flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
    </section>
  );
};
export default Loading;
