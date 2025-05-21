import Image from "next/image";

export default function CodeIcon() {
  return (
    <div className="w-full flex justify-center pl-72 justify-start py-12">
      <Image src="/code.svg" alt="Code illustration" width={100} height={100} className="w-32 h-32" />
    </div>
  );
}