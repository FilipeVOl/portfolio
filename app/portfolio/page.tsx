"use client"
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { useState, useEffect } from "react";
import Dialog from "../components/Dialog";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  const imgFields = [

    {
      id: 3,
      href: "https://plataformajf.unievangelica.edu.br/",
      category: ["web-sites", "frontend"],
      src: "/fanstone.png",
      alt: "James Fanstone",
      title: "James Fanstone",
      description: "academic research management system"
    }
  ]

  const [openDialog, setOpenDialog] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [projects, setProjects] = useState<{id: number, href: string, src: string, alt: string, title: string, description: string}[]>(imgFields);
  
  

  const handleClick = (id: string) => {
   switch (id) {
    case "all-projects":
      setProjects(imgFields);
      break;
    case "web-sites":
      setProjects(imgFields.filter((project) => project.category.includes("web-sites")));
      break;
    case "frontend":
      setProjects(imgFields.filter((project) => project.category.includes("frontend")));
      break;
    default:
      setProjects(imgFields);
      break;
   }
  }

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [projects]);

  return (
    <main id="portfolio" className="container mx-auto px-6 py-12 min-h-auto">
      <div className="max-w-3xl space-y-8 ">
        <Typography variant="h2">Portfolio<span className="text-secondary">.</span></Typography>
        <div className="overflow-x-auto max-w-[250px]">
          <ul className="flex gap-4 whitespace-nowrap">
            <li id="all-projects" onClick={() => handleClick("all-projects")} className="flex-shrink-0">
              <Typography className="text-[12px] hover:text-secondary active:text-secondary hover:cursor-pointer hover:underline active:underline" variant="h3">
                ALL PROJECTS
              </Typography>
            </li>
            <li id="web-sites" onClick={() => handleClick("web-sites")} className="flex-shrink-0">
            <Typography className="text-[12px] hover:text-secondary active:text-secondary hover:cursor-pointer hover:underline active:underline" variant="h3">
            WEB SITES
              </Typography>
            </li>
            <li id="frontend" onClick={() => handleClick("frontend")} className="flex-shrink-0">
            <Typography className="text-[12px] hover:text-secondary active:text-secondary hover:cursor-pointer hover:underline active:underline" variant="h3">
            FRONTEND
              </Typography>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden">
          <div className={`flex gap-4 md:flex-row flex-col ${animate ? "animate-fade-in-up" : ""}`}>
            {projects.map((item => (
              <div
                key={item.id}
                    onClick={() => setOpenDialog(true)}
                className="w-auto max-w-[20rem] gap-4 flex flex-col  hover:cursor-pointer overflow-hidden"
              >
                <div className="w-full h-64 rounded-lg overflow-hidden ">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-120"
                    quality={100}
                    priority={true}
                  />
                </div>
                <div >
                  <Typography className="hover:text-secondary hover:underline" variant="h4">{item.title}</Typography>
                  <Typography variant="lead">{item.description}</Typography>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
      <Dialog
        open={openDialog}
        className="dialog !max-w-2xl !max-h-[90vh] p-8! w-full sm:p-12"
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
            className="max-w-full h-auto object-contain"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button variant="secondary" className="" onClick={() => window.open("https://plataformajf.unievangelica.edu.br/", "_blank")}>Visit website</Button>
          <Button variant="default" className="" onClick={() => setOpenDialog(false)}>Close</Button>
        </div>
      </Dialog>
    </main>
  );
}