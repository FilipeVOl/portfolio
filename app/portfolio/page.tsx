import { Typography } from "@/components/ui/typography";
import Divider from "../components/Divider";
import Image from "next/image";

export default function PortfolioPage() {
  const imgFields = [
    {
      id: 1,
      src: "/button.png",
      alt: "Polls website logo"
    },
    {
      id: 2,
      src: "/snake.png",
      alt: "Rise Signals logo"
    }
  ]
  return (
    <main className="container mx-auto px-6 py-12 min-h-auto">
      <div className="max-w-3xl space-y-8 ">
        <Typography variant="h1">Portfolio<span className="text-secondary">.</span></Typography>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 ">
        {imgFields.map((item => (
          <div key={item.id} className="border-2 border-primary rounded-lg overflow-hidden shadow-xl">
          <Image
            src={item.src}
            alt={item.alt}
            width={500}
            height={500}
            className="w-full object-cover"
            quality={100}
            // priority={true} // Load image immediately instead of lazy loading
            // className="your-css-classes"
            // placeholder="blur" // Show blur placeholder while loading
            // blurDataURL="data:image/jpeg..." // Base64 blur placeholder
          />
        </div>
        )))}
        </div>
      </div>
    </main>
  );
}