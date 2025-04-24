import Hero from "@/components/Hero";
import SubtitleAndText from "@/components/SubtitleAndText";
import WHope from "@/components/WHope";
import React from "react";
import Title from "@/components/Title";
import Slider from "@/components/Slider";
import Header from "@/components/Header";
import Partners from "@/components/Partners";
import DonationGrid from "@/components/DonationGrid"
import ComoAyudo from "@/components/ComoAyudo";
import GeneralDonation from "@/components/GeneralDonation";
import ProjectDonation from "@/components/ProjectDonation";
const allPeople = [
  {
    name: "Sebastián Pérez Lavooy",
    title: "Private pilot student",
    role: "Student",
    about: "#",
    donate: "https://donate.com/juan-perez",
    imageUrl: "/ElianDonation.jpg"
  },
  {
    name: "Fernando Cárdenas",
    title: "Private pilot student",
    role: "Student",
    about: "#",
    donate: "https://donate.com/maria-garcia",
    imageUrl: "/ElianDonation.jpg"
  },
  {
    name: "Milagros Amorosi",
    title: "Commercial pilot student",
    role: "Pilot",
    about: "#",
    donate: "https://donate.com/carlos-rodriguez",
    imageUrl: "/ElianDonation.jpg"
  },
  {
    name: "Elián Lehoux",
    title: "Commercial pilot student",
    role: "Pilot",
    about: "#",
    donate: "https://donate.com/ana-martinez",
    imageUrl: "/ElianDonation.jpg"
  },
  {
    name: "Iván Weimer",
    title: "Flight instructor",
    role: "Assigned to Fiji",
    about: "",
    donate: "https://donate.com/luis-sanchez",
    imageUrl: "/ElianDonation.jpg"
  },
  {
    name: "Sofía López",
    title: "Commercial pilot student",
    role: "Assigned to Zambia",
    about: "#",
    donate: "https://donate.com/sofia-lopez",
    imageUrl: "/ElianDonation.jpg"
  },
  {
    name: "Diego Fernández",
    title: "Flight instructor",
    role: "Assigned to Indonesia",
    about: "#",
    donate: "https://donate.com/diego-fernandez",
    imageUrl: "/ElianDonation.jpg"
  }
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <WHope />
      <ComoAyudo />
      <GeneralDonation />
      <ProjectDonation />
      <DonationGrid people={allPeople} />
      <SubtitleAndText
        title="Donación Misión"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        src="/misionDonation.jpg"
        alt="MisionDonation"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Left"
      />
    </div>
  );
}
