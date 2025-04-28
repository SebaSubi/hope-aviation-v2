export default function Title({ text }: { text: string }) {
  return (
    <div className="flex flex-col h-[10vh] w-[100vw] items-center justify-center">
      <h1
        className=""
        style={{
          fontSize: 50,
          lineHeight: 1.3,
          fontWeight: 300,
        }}
      >
        {text}
      </h1>
      <div className="h-[2px] bg-black w-[28vw] mt-2"></div>
    </div>
  );
}
