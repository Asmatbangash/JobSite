import React from "react";
import { Hero, Title } from "../components";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

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
            <NavLink
              key={btn.name}
              to={btn.href}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 font-semibold text-center"
                  : "text-gray-700 hover:text-blue-500 text-center"
              }
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
      <div className="text-center my-10">
        <Title
          text={"Informative Video Intro"}
          className="text-3xl font-bold "
        />
        <p className="mb-10">
          Watch this video to find out more about how the Job Site Route can
          help mobile <br /> food vendors increase sales, while saving
          contractors time and money.
        </p>
        <div className="flex justify-center items-center">
          <img src={assets.Vedio} alt="" className="w-200 h-60" />
        </div>
        {/* <div className="w-200 h-50 bg-[#F7F7F7] mx-auto">
          <CiPlay1 className="text-3xl relative top-20 left-90" />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
