"use client";

import { experienceItems } from "./timeline-items";
import { Typography } from "@/components/ui/typography";
import { useEffect, useState } from "react";
import Divider from "../components/Divider";

export default function EducationPage() {
  // Detecta largura da tela para controlar animação
  const [isWide, setIsWide] = useState(true);
  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth >= 750);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <main className="container px-6 py-12 min-h-auto mx-auto">
      <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-8">
        <div className="max-w-md space-y-8 items-center">
          <Typography variant="h1">Education<span className="text-secondary">.</span></Typography>
          <Typography variant="lead">I am always curious about learning new things, and I am always looking for new challenges to improve my skills.</Typography>
        </div>
        <div className="max-w-full">
          {experienceItems.map((item) => (
            <div key={item.id}>
              <div className="flex mt-6 md:mt-0 gap-2 items-center">
                <div className="flex items-center gap-2">
                  <Typography className="font-bold" variant="h3">{item.title}</Typography>
                  <Typography className="leading-none font-medium italic" noMargin variant="lead">{item.company}</Typography>
                </div>
              </div>
              <Typography className="mt-0" noMargin variant="subdesc">{item.date}</Typography>
              <Typography variant="subdesc">{item.description}</Typography>
              {experienceItems.indexOf(item) !== experienceItems.length - 1 && <Divider />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
