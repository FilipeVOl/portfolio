"use client"
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { useState } from "react";
import Dialog from "../components/Dialog";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const [openDialog, setOpenDialog] = useState(false);
  const imgFields = [

    {
      id: 3,
      href: "https://plataformajf.unievangelica.edu.br/",
      src: "/fanstone.png",
      alt: "James Fanstone",
      title: "James Fanstone",
      description: "academic research management system"
    }
  ]
  return (
    <main id="projects" className="container mx-auto px-6 py-12 min-h-auto">
      <div className="max-w-3xl space-y-8 ">
        <Typography variant="h1">Portfolio<span className="text-secondary">.</span></Typography>
        <div className="flex gap-4 md:flex-row flex-col">
        {imgFields.map((item => (
          <div
            key={item.id}
            className="w-auto max-w-[20rem] gap-4 flex flex-col  hover:cursor-pointer overflow-hidden"
          >
            <div className="w-full h-64 rounded-lg overflow-hidden ">
              <Image
                src={item.src}
                alt={item.alt}
                width={1000}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-120"
                onClick={() => setOpenDialog(true)}
                quality={100}
                priority={true}
              />
            </div>
            <div>
              <Typography variant="h3">{item.title}</Typography>
              <Typography variant="h4" className="text-[#252525]/70">{item.description}</Typography>
            </div>
          </div>
        )))}
        </div>
      </div>
      <Dialog
        open={openDialog}
        className="dialog !max-w-5xl w-full"
        onOpenChange={setOpenDialog}
        title="Institutional project for academic researches"
        subtitle="James Fanstone is a newly developed system designed to meet the institution's need for effective academic research management. Featuring over 10 interactive pages and with many more features planned, the platform offers a modern, clean interface focused on delivering an enhanced user experience."
        inline="STACK"
        inline_desc="ViteJS, TailwindCSS, MaterialUI, TypeScript, React, PHP, Laravel, MySQL"
        inline_2="DATE"
        inline_desc_2="2024"
      >
        <div className="w-full rounded-lg overflow-hidden flex items-center justify-center bg-neutral-100">
          <Image
            src="/fanstone2.png"
            alt="James Fanstone"
            width={1600}
            height={900}
            className="w-auto h-full object-fit"
          />
        </div>
        <div className="flex gap-4 mt-4">
          <Button variant="secondary" className="flex-1" onClick={() => setOpenDialog(false)}>Visit website</Button>
          <Button variant="default" className="flex-1" onClick={() => setOpenDialog(false)}>Close</Button>
        </div>
      </Dialog>
    </main>
  );
}