import React from "react";
import schedule from "../assets/scheduling.png";

const Contact = () => {
  return (
    <React.Fragment>
      <section id="contact" className="min-h-[80vh] text-primary bg-secondary">
        <header className="p-2 text-4xl text-center font-main">
          Book an appointment
        </header>
        <p className="text-center font-main">
          Leave me your details and I will get back to you to schedule your
          appointment
        </p>
        {/* contact form and details */}
        <div className="flex flex-col justify-between md:flex-row lg:flex-row">
          <img src={schedule} alt="" className="m-auto" />
          <form className="grid items-center grid-cols-2 p-2 m-auto text-lg md:w-1/2 lg:w-1/2 text-primary font-text md:h-96 lg:h-96">
            <div className="flex flex-col p-2">
              <label htmlFor="" className="">
                Name
              </label>
              <input
                type="text"
                className="h-12 p-2 font-bold rounded-md"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="">
                Email
              </label>
              <input
                type="text"
                className="h-12 p-2 font-bold rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="" className="">
                Phone number
              </label>
              <input
                type="text"
                className="h-12 p-2 font-bold rounded-md"
                placeholder="+254712345678"
              />
            </div>
            <button className="h-12 col-span-2 p-2 text-center rounded-md bg-primary text-secondary font-button hover:bg-teal-700">
              Book
            </button>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
