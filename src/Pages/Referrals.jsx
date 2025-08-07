import React from "react";
import { assets } from "../assets/assets";
import { Title } from "../components";
import { FaRegStar } from "react-icons/fa";

function Referrals() {
  return (
    <>
      <div className="hero min-h-screen px-6 md:px-20">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            src={assets.group6}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg"
            alt="Mutual Rating"
          />
          <div>
            <Title text="Mutual Rating System" className="text-3xl font-bold" />
            <p className="py-4 text-sm md:text-base">
              Civilian users can rate the quality of food and their dining
              experience. Food trucks can rate customers too — ensuring a
              professional and pleasant dining atmosphere.
            </p>
            <div className="flex items-center">
              {[...Array(5)].map((_, idx) => (
                <FaRegStar key={idx} className="text-xl md:text-2xl mx-1" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Food trucks build a following */}
      <div className="text-center my-10 px-4 md:px-20">
        <Title
          text="Food trucks build a following"
          className="text-3xl font-bold"
        />
        <p className="mt-4 text-sm md:text-base">
          Job Site Route boosts food trucks' popularity. Trucks build a loyal
          fan base among civilians, contractors, and laborers.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          <img
            src={assets.group8}
            alt="group"
            className="w-64 md:w-80 h-auto object-contain"
          />
          <img
            src={assets.group7}
            alt="group"
            className="w-52 md:w-60 h-auto object-contain mt-4 md:mt-0"
          />
        </div>
      </div>
    </>
  );
}

export default Referrals;
