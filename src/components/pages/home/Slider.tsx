"use client";
import ElianDonation from "../../public/ElianDonation.jpg";
import ClasesVirtuales from "../../public/ClasesVirtuales.webp";
import clasesVuelo from "../../public/clasesVuelo.jpg";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderComponent from "./SliderComponent";

const imgs = [ElianDonation, ClasesVirtuales, clasesVuelo];

export default function Slider() {
  const [imgIndex, setImgIndex] = useState<number>(0);

  const showNextImage = () => {
    setImgIndex((index) => (index + 1) % imgs.length);
  };

  const showPrevImage = () => {
    setImgIndex((index) => (index === 0 ? imgs.length - 1 : index - 1));
  };

  return (
    <div className="w-full h-[50vh] flex items-center ">
      <div className="flex w-[50vw] justify-center items-center">
        <h2
          style={{
            fontSize: 40,
            lineHeight: 1.3,
            fontWeight: 300,
          }}
        >
          Donaciones Personales
        </h2>
      </div>
      <div className="flex flex-row items-center justify-evenly w-[50vw] h-full ">
        <button
          onClick={showPrevImage}
          className="flex items-center justify-center h-10 w-10 bg-[#f8f8f8] rounded-full cursor-pointer"
        >
          <ChevronLeft />
        </button>
        <div className="flex items-center justify-start w-[20vw] h-[32vh] overflow-hidden relative">
          {/* Wrapper div that moves all images together */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${imgs.length * 100}%`,
              transform: `translateX(-${(imgIndex * 100) / imgs.length}%)`,
            }}
          >
            {imgs.map((url, index) => (
              <div key={index} className="w-[20vw] flex-shrink-0">
                <SliderComponent imgSrc={url.src} index={index} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={showNextImage}
          className="flex items-center justify-center h-10 w-10 bg-[#f8f8f8] rounded-full cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
