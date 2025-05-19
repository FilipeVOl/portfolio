"use client"
import { Typography } from "@/components/ui/typography";
import Divider from "../components/Divider";
import Image from "next/image";

export default function PortfolioPage() {
  const imgFields = [
    {
      id: 1,
      src: "/button.png",
      alt: "Polls website logo",
      href: "https://heartfelt-tapioca-777b50.netlify.app/"
    },
    {
      id: 2,
      src: "/snake.png",
      alt: "Rise Signals logo",
      href: "https://risesignalss.netlify.app/"
    },
    {
      id: 3,
      href: "https://plataformajf.unievangelica.edu.br/",
      src: "/fanstone.png",
      alt: "James Fanstone"
    }
  ]
  return (
    <main id="projects" className="container mx-auto px-6 py-12 min-h-auto">
      <div className="max-w-3xl space-y-8 ">
        <Typography variant="h1">Portfolio<span className="text-secondary">.</span></Typography>
        <div className="flex gap-4 md:flex-row flex-col">
        {imgFields.map((item => (
          <div key={item.id} className="border-2 border-primary hover:border-secondary hover:scale-105 hover:cursor-pointer transition-all duration-300 rounded-lg overflow-hidden shadow-xl flex-1">
          <Image
            src={item.src}
            alt={item.alt}
            width={500}
            height={500}
            className="w-full h-full object-contain pr-4"
            onClick={() => window.open(item.href, '_blank')}
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