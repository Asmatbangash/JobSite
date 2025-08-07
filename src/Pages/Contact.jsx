import React from "react";
import { Title } from "../components";
import { assets } from "../assets/assets";

function Contact() {
  return (
    <div className="min-h-screen text-center my-10">
      <Title text="Informative Video Intro" className="text-3xl font-bold" />
      <p className="mb-10">
        Watch this video to see how Job Site Route helps mobile food vendors{" "}
        <br />
        grow while saving contractors time and money.
      </p>
      <div className="flex justify-center items-center">
        <img src={assets.Vedio} alt="video" className="w-200 h-60" />
      </div>
    </div>
  );
}

export default Contact;
