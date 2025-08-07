import React from "react";
import { assets } from "../assets/assets";

function Services() {
  return (
    <div className="hero min-h-screen px-20 max-sm:px-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={assets.group5} className="max-w-md rounded-lg h-80" />
        <img src={assets.group1} className="max-w-md rounded-lg h-100" />
        <div className="flex flex-col">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex justify-start items-center">
              <b className="bg-[#007f94] text-white rounded-md px-4 py-2 mx-4">
                {step}
              </b>
              <p className="py-6">
                Download the Job Site Route app from the Play Store or App
                Store, create an account, order food, invite friends, and earn
                discounts
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
