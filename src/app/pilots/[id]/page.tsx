import PilotDisplay from "@/components/pages/pilots/PilotDisplay";
import Navbar from "@/components/layout/Navbar";

const pilots = [
  {
    id: 1,
    name: "Sebastián Pérez Lavooy",
    title: "Estudiante de piloto privado",
    role: "Estudiante",
    about: "#",
    donate: "https://donate.com/juan-perez",
    imageUrl: "/SebaDonation.png",
    description: "Apasionado por la aviación desde pequeño, Sebastián está persiguiendo su sueño de convertirse en piloto profesional.",
    videoUrl: "https://www.youtube.com/embed/ejemplo1",
    photos: ["/SebaDonation.png", "/SebaDonation.png"]
  },
  {
    id: 2,
    name: "Fernando Cárdenas",
    title: "Estudiante de piloto privado",
    role: "Estudiante",
    about: "#",
    donate: "https://donate.com/maria-garcia",
    imageUrl: "/FerDonation.png",
    description: "Fernando está comprometido con su formación como piloto y sueña con ayudar a comunidades remotas.",
    videoUrl: "https://www.youtube.com/embed/ejemplo2",
    photos: ["/FerDonation.png", "/FerDonation.png"]
  },
  {
    id: 3,
    name: "Milagros Amorosi",
    title: "Estudiante de piloto comercial",
    role: "Piloto",
    about: "#",
    donate: "https://donate.com/carlos-rodriguez",
    imageUrl: "/MiliDonation.jpg",
    description: "Milagros está avanzando en su carrera como piloto comercial con el objetivo de servir en misiones humanitarias.",
    videoUrl: "https://www.youtube.com/embed/ejemplo3",
    photos: ["/MiliDonation.jpg", "/MiliDonation.jpg"]
  },
  {
    id: 4,
    name: "Elián Lehoux",
    title: "Estudiante de piloto comercial",
    role: "Piloto",
    about: "#",
    donate: "https://donate.com/ana-martinez",
    imageUrl: "/ElianDonation.png",
    description: "Elián está enfocado en convertirse en un piloto comercial de excelencia para servir en misiones de ayuda.",
    videoUrl: "https://www.youtube.com/embed/ejemplo4",
    photos: ["/ElianDonation.png", "/ElianDonation.png"]
  },
  {
    id: 5,
    name: "Iván Weimer",
    title: "Instructor de vuelo",
    role: "Asignado a Fiji",
    about: "",
    donate: "https://donate.com/luis-sanchez",
    imageUrl: "/IvanDonation.png",
    description: "Iván es un instructor experimentado que está ayudando a formar la próxima generación de pilotos misioneros.",
    videoUrl: "https://www.youtube.com/embed/ejemplo5",
    photos: ["/IvanDonation.png", "/IvanDonation.png"]
  },
  {
    id: 6,
    name: "Sofía López",
    title: "Estudiante de piloto comercial",
    role: "Asignada a Zambia",
    about: "#",
    donate: "https://donate.com/sofia-lopez",
    imageUrl: "https://images.unsplash.com/photo-1522262590532-a991489a0253?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Sofía está preparándose para servir como piloto misionera en Zambia, donde su pasión por ayudar a los demás será su guía.",
    videoUrl: "https://www.youtube.com/embed/ejemplo6",
    photos: ["https://images.unsplash.com/photo-1522262590532-a991489a0253?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  },
  {
    id: 7,
    name: "Diego Fernández",
    title: "Instructor de vuelo",
    role: "Asignado a Indonesia",
    about: "#",
    donate: "https://donate.com/diego-fernandez",
    imageUrl: "https://images.unsplash.com/photo-1623875208164-2126817fa692?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Diego está sirviendo como instructor en Indonesia, donde está ayudando a formar pilotos locales para servir a sus comunidades.",
    videoUrl: "https://www.youtube.com/embed/ejemplo7",
    photos: ["https://images.unsplash.com/photo-1623875208164-2126817fa692?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  }
];

export default function PilotPage({ params }: { params: { id: string } }) {
  const pilot = pilots.find(p => p.id === parseInt(params.id));

  if (!pilot) {
    return (
      <div>
        <Navbar />
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Piloto no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <PilotDisplay pilot={pilot} />
    </div>
  );
} 