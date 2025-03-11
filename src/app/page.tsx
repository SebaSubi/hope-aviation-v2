import Hero from "@/components/Hero";
import OfferTitle from "@/components/OfferTitle";
import SubtitleAndText from "@/components/SubtitleAndText";
import WHope from "@/components/WHope";
import React from "react";

export default function Home() {
  return (
    <div>
      <Hero />
      <WHope />
      <OfferTitle />
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
        alt="VirtualClases"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Left"
      />
      <SubtitleAndText
        title="Clases de Vuelo"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        src="/clasesVuelo.jpg"
        alt="VirtualClases"
        imgHeight={450}
        imgWidth={450}
        imgPosition="Rigth"
      />
    </div>
  );
}
