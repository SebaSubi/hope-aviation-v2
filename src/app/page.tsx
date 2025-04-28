import Hero from "@/components/Hero";
import SubtitleAndText from "@/components/SubtitleAndText";
import WHope from "@/components/WHope";
import React from "react";
import Title from "@/components/Title";
import Slider from "@/components/Slider";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import DonationGrid from "@/components/DonationGrid"
import ComoAyudo from "@/components/ComoAyudo";
import GeneralDonation from "@/components/GeneralDonation";
import ProjectDonation from "@/components/ProjectDonation";
const allPeople = [
  {
    id: 1,
    name: "Sebastián Pérez Lavooy",
    title: "Private pilot student",
    role: "Student",
    about: "#",
    donate: "https://donate.com/juan-perez",
    imageUrl: "/SebaDonation.png"
  },
  {
    id: 2,
    name: "Fernando Cárdenas",
    title: "Private pilot student",
    role: "Student",
    about: "#",
    donate: "https://donate.com/maria-garcia",
    imageUrl: "/FerDonation.png"
  },
  {
    id: 3,
    name: "Milagros Amorosi",
    title: "Commercial pilot student",
    role: "Pilot",
    about: "#",
    donate: "https://donate.com/carlos-rodriguez",
    imageUrl: "/MiliDonation.jpg"
  },
  {
    id: 4,
    name: "Elián Lehoux",
    title: "Commercial pilot student",
    role: "Pilot",
    about: "#",
    donate: "https://donate.com/ana-martinez",
    imageUrl: "/ElianDonation.png"
  },
  {
    id: 5,
    name: "Iván Weimer",
    title: "Flight instructor",
    role: "Assigned to Fiji",
    about: "",
    donate: "https://donate.com/luis-sanchez",
    imageUrl: "/IvanDonation.png"
  },
  {
    id: 6,
    name: "Sofía López",
    title: "Commercial pilot student",
    role: "Assigned to Zambia",
    about: "#",
    donate: "https://donate.com/sofia-lopez",
    imageUrl: "https://images.unsplash.com/photo-1522262590532-a991489a0253?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Diego Fernández",
    title: "Flight instructor",
    role: "Assigned to Indonesia",
    about: "#",
    donate: "https://donate.com/diego-fernandez",
    imageUrl: "/https://images.unsplash.com/photo-1623875208164-2126817fa692?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <WHope />
      <ComoAyudo />
      <GeneralDonation />
      <ProjectDonation />
      <DonationGrid people={allPeople} />
      
    </div>
  );
}
