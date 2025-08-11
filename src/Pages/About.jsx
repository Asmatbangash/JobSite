import React from "react";
import { Title } from "../components";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
function About() {
  const buttonName = [
    {
      name: "Truck owner",
      href: "",
    },
    {
      name: "Constructer",
      href: "",
    },
    {
      name: "Civilian",
      href: "",
    },
  ];
  return (
    <>
      <div className="text-center mt-8 px-4">
        <Title
          text={"How does the Job Site Route app work?"}
          className="text-2xl md:text-3xl font-bold"
        />
        <p className="mt-2 text-sm md:text-base">
          Download Job site route app from Play Store or App Store, create an
          account, <br /> order food, invite friends, and earn discounts!
        </p>
      </div>
      <div className="flex justify-center items-center my-10 px-4">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 bg-[#F7F7F7] w-full max-w-xl rounded-lg py-4 px-6 shadow-sm">
          {buttonName.map((btn) => (
            <NavLink
              key={btn.name}
              to={btn.href}
              className={(e) => {
                return e.isActive ? "bgOnClick" : "";
              }}
            >
              {btn.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="hero min-h-screen px-4 md:px-20">
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <img
              src={assets.group5}
              alt="group5"
              className="w-full md:w-60 h-64 md:h-80 rounded-lg object-contain"
            />
            <img
              src={assets.group1}
              alt="group1"
              className="w-full md:w-60 h-64 md:h-80 rounded-lg object-contain"
            />
          </div>

          <div className="flex flex-col w-full max-w-xl">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="flex items-start sm:items-center gap-4 mb-6"
              >
                <b className="bg-[#007f94] text-white rounded-md px-4 py-2">
                  {num}
                </b>
                <p className="text-sm md:text-base">
                  Download the Job Site Route app from the Google Play Store or
                  App Store, create an account, order food, invite friends, and
                  earn discounts.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
