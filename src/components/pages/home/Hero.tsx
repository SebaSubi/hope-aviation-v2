import React from "react";

export default function Hero() {
  return (
    <div className="bg-white w-full h-full object-cover relative">
      <img
        src="/HeroImage.svg"
        alt="Hero Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/3 left-[14%] ">
        <h1
          className=" text-white text-center"
          style={{
            fontSize: 80,
            lineHeight: 1.3,
            fontWeight: 300,
          }}
        >
          HOPE
          <br />
          AVIATION
        </h1>
        <p className="text-white text-xl m-[-10px]">
          Humanitarian Outreach through Pilot Education
        </p>
      </div>
      {/* <div className="absolute bottom-[3vh] right-[3vw] h-24 w-24 bg-black rounded-full"></div> */}
    </div>
  );
}
