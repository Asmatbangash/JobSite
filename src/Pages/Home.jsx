import React from "react";
import { Hero, Title } from "../components";
import { assets } from "../assets/assets";

function Home() {
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
      <div className="flex justify-center items-center w-full px-20">
        <div className="card w-[33%] rounded-box grid h-full  grow place-items-center text-right">
          <div className="my-4">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2 ">1</b>
            <Title
              text={"Login to Job site Route"}
              className="text-xl font-bold"
            />
            <p>
              Download Job site route app from Play store or App store, create
              an account, order food, invite friends and earn discounts
            </p>
          </div>
          <div className="my-4">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2 ">3</b>
            <Title
              text={"Login to Job site Route"}
              className="text-xl font-bold"
            />
            <p>
              Download Job site route app from Play store or App store, create
              an account, order food, invite friends and earn discounts
            </p>
          </div>
        </div>
        <div className=" justify-center items-center mx-10">
          <img src={assets.group1} alt="mobile" className="w-50 h-80" />
        </div>
        <div className="card w-[33%] rounded-box grid h-full grow place-items-center text-left">
          <div className="my-4">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2 ">2</b>
            <Title
              text={"Login to Job site Route"}
              className="text-xl font-bold"
            />
            <p>
              Download Job site route app from Play store or App store, create
              an account, order food, invite friends and earn discounts
            </p>
          </div>
          <div className="my-4">
            <b className="bg-[#007f94] text-white rounded-md px-4 py-2 ">4</b>
            <Title
              text={"Login to Job site Route"}
              className="text-xl font-bold"
            />
            <p>
              Download Job site route app from Play store or App store, create
              an account, order food, invite friends and earn discounts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
