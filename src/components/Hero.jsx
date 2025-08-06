import React from "react";
import Title from "./Title";
import { assets } from "../assets/assets";

function Hero() {
  return (
    <div className="hero min-h-screen px-30">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={assets.group} className="max-w-md rounded-lg" />
        <div>
          <Title
            text={"Download Job Site Route, Invite friends and Earn discounts!"}
            className="text-5xl font-bold"
          />
          <p className="py-6">
            Download the Job Site Route app from the Google Play store or App
            store, create an account, order food, invite friends, and earn
            discounts
          </p>
          <img src={assets.iconFrame} alt="icons" className="w-80" />
          <div className="flex space-x-30 my-4">
            <img src={assets.QR} alt="QR" className="w-20" />
            <img src={assets.QR} alt="QR" className="w-20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
