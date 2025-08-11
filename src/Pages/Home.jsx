import React from "react";
import { Hero, Title } from "../components";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import Referrals from "./Referrals";
import Services from "./Services";

function Home() {
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
    <div>
      <Hero />
      <div className="text-center my-10">
        <Title text="Login to Job site Route" className="text-3xl font-bold" />
        <p>
          Download Job site route app from Play store or App store, create an
          account, order <br /> food, invite friends and earn discounts
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full px-4 md:px-20 gap-6">
        <div className="card w-full md:w-1/3 rounded-box grid h-full grow place-items-center text-right">
          <div className="my-6 md:my-10">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2">1</b>
            <Title
              text={"Login to Job site Route"}
              className="text-xl font-bold"
            />
            <p className="text-sm md:text-base mt-2">
              Download Job Site Route app from Play Store or App Store, create
              an account, order food, invite friends and earn discounts.
            </p>
          </div>
          <div className="my-6 md:my-10">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2">3</b>
            <Title
              text={"Log in as Contractor"}
              className="text-xl font-bold"
            />
            <p className="text-sm md:text-base mt-2">
              Contractors can enter site locations to attract food trucks,
              keeping your crew well-fed.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center mx-0 md:mx-10">
          <img
            src={assets.group1}
            alt="mobile"
            className="w-52 h-64 md:w-60 md:h-80 object-contain"
          />
        </div>

        <div className="card w-full md:w-1/3 rounded-box grid h-full grow place-items-center text-left">
          <div className="my-6 md:my-10">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2">2</b>
            <Title
              text={"Log in as Truck owner"}
              className="text-xl font-bold"
            />
            <p className="text-sm md:text-base mt-2">
              Food truck owners can view real-time construction sites and serve
              workers directly.
            </p>
          </div>
          <div className="my-6 md:my-10">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2">4</b>
            <Title text={"Log in as Civilian"} className="text-xl font-bold" />
            <p className="text-sm md:text-base mt-2">
              Civilians can track food trucks, pre-order meals, and enjoy
              convenience on-site.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 px-4">
        <Title
          text={"How does the Job Site Route app work?"}
          className="text-2xl md:text-3xl font-bold"
        />
        <p className="mt-2 text-sm md:text-base">
          Download Job site route app from Play Store or App Store, create an
          account, order food, invite friends, and earn discounts!
        </p>
      </div>
      <div className="flex justify-center items-center my-10 px-4">
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 bg-[#F7F7F7] w-full max-w-xl rounded-lg py-4 px-6 shadow-sm">
          {buttonName.map((btn) => (
            <NavLink key={btn.name} to={btn.href} className="">
              {btn.name}
            </NavLink>
          ))}
        </div>
      </div>
      <Services />
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="text-center">
          <Title text={"The image is below."} className="text-3xl font-bold" />
          <p>
            Download Job site route app from playstore or appstore, create
            account order <br /> food invite friends and earn discounts
          </p>
        </div>
        <div>
          <img src={assets.logo} alt="logo" className="h-full mt-10" />
        </div>
      </div>
      <Referrals />
      <Contact />
    </div>
  );
}

export default Home;
