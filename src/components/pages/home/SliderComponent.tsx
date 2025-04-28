import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";

export default function SliderComponent({
  imgSrc,
  index,
}: {
  imgSrc: string;
  index: number;
}) {
  return (
    <div
      className="w-[20vw] h-[32vh]"
      style={{
        flexShrink: 0,
        flexGrow: 0,
      }}
    >
      <Image
        src={imgSrc}
        alt={`Image carousel item: ${index}`}
        height={300}
        width={300}
        className="rounded-3xl"
      />
      <div className="flex flex-row justify-between">
        <div>
          <h2
            className="mt-2"
            style={{ fontSize: 26, lineHeight: 1.3, fontWeight: 300 }}
          >
            Elian Lehux
          </h2>
          <h3
            className=" text-[#737373]"
            style={{ fontSize: 20, lineHeight: 1.3, fontWeight: 300 }}
          >
            23 Años
          </h3>
        </div>
        <SquareArrowOutUpRight strokeWidth={1.25} className="mt-3" />
      </div>
    </div>
  );
}
