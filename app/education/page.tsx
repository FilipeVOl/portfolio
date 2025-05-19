"use client";

import { experienceItems } from "./timeline-items";
import { Timeline } from "@/components/ui/timeline/timeline";
import { Typography } from "@/components/ui/typography";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  // Variants para animação
  const imageVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: isWide ? 10 : 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <main className="container px-6 py-12 min-h-auto mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div className="max-w-3xl space-y-8 items-center md:col-start-2 flex flex-col">
          <Typography variant="h1" className="text-right">
            Education<span className="text-secondary">.</span>
          </Typography>
          <Typography variant="p" className="text-right">
            I am always curious about learning new things, and i am always
            looking for new challenges to improve my skills.
          </Typography>
            {isWide && (
          <motion.div
            className="md:col-start-2 md:row-start-2 self-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8, once: true }}
            variants={imageVariants}
            style={{
              width: isWide ? 500 : "80vw", 
              maxWidth: 350,
              marginTop: 32,
              borderRadius: 20,
             
            }}
          >
            <Image
              src="/graduation.png"
              alt="Graduation" 
              width={500}
              height={500}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
              />
            </motion.div>
          )}
        </div>
        <div className="md:col-start-1 md:row-start-1 flex flex-col items-center">
          <Timeline items={experienceItems} />
        </div>
        
      </div>
    </main>
  );
}
