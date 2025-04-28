import React from "react";

const pilots = [
  {
    id: 1,
    name: "Sebastián Pérez Lavooy",
    title: "Estudiante de piloto privado",
    role: "Estudiante",
    about: "#",
    donate: "https://donate.com/juan-perez",
    imageUrl: "/SebaDonation.png"
  },
  {
    id: 2,
    name: "Fernando Cárdenas",
    title: "Estudiante de piloto privado",
    role: "Estudiante",
    about: "#",
    donate: "https://donate.com/maria-garcia",
    imageUrl: "/FerDonation.png"
  },
  {
    id: 3,
    name: "Milagros Amorosi",
    title: "Estudiante de piloto comercial",
    role: "Piloto",
    about: "#",
    donate: "https://donate.com/carlos-rodriguez",
    imageUrl: "/MiliDonation.jpg"
  },
  {
    id: 4,
    name: "Elián Lehoux",
    title: "Estudiante de piloto comercial",
    role: "Piloto",
    about: "#",
    donate: "https://donate.com/ana-martinez",
    imageUrl: "/ElianDonation.png"
  },
  {
    id: 5,
    name: "Iván Weimer",
    title: "Instructor de vuelo",
    role: "Asignado a Fiji",
    about: "",
    donate: "https://donate.com/luis-sanchez",
    imageUrl: "/IvanDonation.png"
  },
  {
    id: 6,
    name: "Sofía López",
    title: "Estudiante de piloto comercial",
    role: "Asignada a Zambia",
    about: "#",
    donate: "https://donate.com/sofia-lopez",
    imageUrl: "https://images.unsplash.com/photo-1522262590532-a991489a0253?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 7,
    name: "Diego Fernández",
    title: "Instructor de vuelo",
    role: "Asignado a Indonesia",
    about: "#",
    donate: "https://donate.com/diego-fernandez",
    imageUrl: "https://images.unsplash.com/photo-1623875208164-2126817fa692?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function AllPilotsList() {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1517190525944-4edce215bc4a?q=80&w=2967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute inset-0 -z-10 size-full object-cover opacity-15"
        />
        <div
          aria-hidden="true"
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Nuestros Pilotos</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Somos un equipo de pilotos apasionados por la aviación y las personas a las que servimos.
          </p>
        </div>
      </div>

      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {pilots.map((pilot) => (
                <article key={pilot.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                  <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt={pilot.name}
                      src={pilot.imageUrl}
                      className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <a
                        href={pilot.about}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {pilot.role}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                        <a href={pilot.about}>
                          <span className="absolute inset-0" />
                          {pilot.name}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm/6 text-gray-600">{pilot.title}</p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <div className="flex gap-2">
                          <a
                            href={`/pilots/${pilot.id}`}
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            Learn More
                          </a>
                          <a
                            href={pilot.donate}
                            className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800"
                          >
                            Donate Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  