import Hero from "@/components/Hero";
import SubtitleAndText from "@/components/SubtitleAndText";
import WHope from "@/components/WHope";
import React from "react";
import Title from "@/components/Title";
import Slider from "@/components/Slider";
import Header from "@/components/Header";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Partners />
      <WHope />
      
      <Title text="¿Qué ofrecemos?" />
      <SubtitleAndText
        mainStyle="mt-12"
        title="Clases en Linea"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        src="/ClasesVirtuales.webp"
        alt="VirtualClases"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Right"
      />
      <SubtitleAndText
        title="Diversos Cursos"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        src="/diversosCursos.jpg"
        alt="DifferentCourses"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Left"
      />
      <SubtitleAndText
        title="Clases de Vuelo"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        src="/clasesVuelo.jpg"
        alt="FlightClases"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Rigth"
      />
      <Title text="¿Cómo Puedo Ayudar?" />
      <SubtitleAndText
        mainStyle="mt-12"
        title="Donaciones Generales"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        src="/generalDonations.jpg"
        alt="GeneralDonations"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Rigth"
      />
      <SubtitleAndText
        title="Donación Misión"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        src="/misionDonation.jpg"
        alt="MisionDonation"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Left"
      />
      <Slider />
    </div>
  );
}
