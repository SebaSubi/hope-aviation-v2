import Image from "next/image";

type imgPosition = "Right" | "Left";

export default function SubtitleAndText({
  title,
  text,
  src,
  alt,
  imgHeight,
  imgWidth,
  mainStyle,
  imgPosition = "Left",
}: {
  title: string;
  text: string;
  src: string;
  alt: string;
  imgHeight: number;
  imgWidth: number;
  mainStyle?: string;
  imgPosition: string;
}) {
  return (
    <div
      className={`flex ${
        imgPosition === "Left" ? "flex-row-reverse" : "flex-row"
      } items-center justify-between h-[60vh] w-[100vw] ${mainStyle}`}
    >
      <div className="flex flex-col items-center justify-start w-[60vw] h-[50vh] ml-5  ">
        <h2
          className="mt-4"
          style={{
            fontSize: 40,
            lineHeight: 1.3,
            fontWeight: 300,
          }}
        >
          {title}
        </h2>
        <p
          className="text-center px-7 text-lg mt-8"
          style={{
            lineHeight: 2,
          }}
        >
          {text}
        </p>
      </div>
      <div className="flex h-[50vh] w-[40vw] items-center justify-center pb-6 ">
        <Image
          src={src}
          alt={alt}
          height={imgHeight}
          width={imgWidth}
          className="rounded-3xl"
        />
      </div>
    </div>
  );
}
