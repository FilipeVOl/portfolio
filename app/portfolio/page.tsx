"use client"
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { useState, useEffect } from "react";
import Dialog from "../components/Dialog";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";

export default function PortfolioPage() {
  const imgFields = [

    {
      id: 3,
      href: "https://plataformajf.unievangelica.edu.br/",
      category: ["frontend"],
      src: "/fanstone.png",
      alt: "James Fanstone",
      title: "James Fanstone",
      description: "academic research management system"
    },
    {
      id: 4,
      href: "https://booking-list-p3vm.vercel.app/",
      category: ["frontend", "web-sites"],
      src: "/booking.png",
      alt: "Booking List",
      title: "Booking List",
      description: "fullstack application for booking management"
    }
  ]

  const [openDialog, setOpenDialog] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [projects, setProjects] = useState<{id: number, href: string, src: string, alt: string, title: string, description: string, category: string[]}[]>(imgFields);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  

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

  console.log(selectedProject)

  // Obter o projeto selecionado
  const selected = selectedProject !== null ? imgFields.find(p => p.id === selectedProject) : null;


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
                onClick={() => {
                  setSelectedProject(item.id);
                  setOpenDialog(true);
                }}
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
        open={selectedProject !== null}
        className="dialog !max-w-2xl !max-h-[90vh] p-8! w-full sm:p-12"
        onOpenChange={(open) => setSelectedProject(open ? selectedProject : null)}
        title={selected?.title}
        subtitle={selected?.description}
        inline="STACK"
        inline_desc="ViteJS, TailwindCSS, MaterialUI, TypeScript, React, PHP, Laravel, MySQL"
        inline_2="DATE"
        inline_desc_2="2024"
      >
        <div className="w-full rounded-lg overflow-hidden flex items-center justify-center bg-neutral-100">
          {selected && (
            <Image
              src={selected.src}
              alt={selected.alt}
              width={1600}
              height={900}
              className="max-w-full h-auto object-contain"
            />
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          {selected && (
            <Button variant="secondary" className="" onClick={() => window.open(selected.href, "_blank")}>Visit website</Button>
          )}
          <DialogClose asChild>
            <Button variant="default" className="">Close</Button>
          </DialogClose>
        </div>
      </Dialog>
    </main>
  );
}