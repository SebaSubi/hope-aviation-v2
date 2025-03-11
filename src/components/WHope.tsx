import Image from "next/image";

export default function WHope() {
  return (
    <div className="flex flex-row-reverse items-center justify-between h-[60vh] w-[100vw]">
      <div className="flex flex-col items-center justify-start w-[60vw] h-[50vh] ml-5  ">
        <h2
          className="mt-4"
          style={{
            fontSize: 40,
            lineHeight: 1.3,
            fontWeight: 300,
          }}
        >
          ¿Qué es HOPE?
        </h2>
        <p
          className="text-center px-7 text-lg mt-8"
          style={{
            lineHeight: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, vero
          necessitatibus molestias ex optio earum eum blanditiis rerum harum
          culpa sunt nihil veritatis, minus iste. Provident facilis modi qui
          autem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Tempora, vero necessitatibus molestias ex optio earum eum blanditiis
          rerum harum culpa sunt nihil veritatis, minus iste. Provident facilis
          modi qui autem!Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Tempora, vero necessitatibus molestias ex optio earum eum
          blanditiis rerum harum culpa sunt nihil veritatis, minus iste.
        </p>
      </div>
      <div className="flex h-[50vh] w-[40vw] items-center justify-center  ">
        <Image src="/Logo.png" alt="What is Hope" height={320} width={320} />
      </div>
    </div>
  );
}
