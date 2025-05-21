'use client';

import { experienceItems } from "./timeline-items";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import Divider from "../components/Divider";

export default function ExperiencePage() {

  return (
    <main className="container px-6 py-12 min-h-auto mx-auto">
      <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-8">
        <div className="max-w-md space-y-8 items-center">
          <Typography variant="h1">Experience<span className="text-secondary">.</span></Typography>
          <Typography variant="lead">I have worked as a frontend developer for Unievangélica since 2022, contributing to the development of different projects alongside the demands.</Typography>
        </div>
        <div className="max-w-full">
          {experienceItems.map((item) => (
            <div key={item.id}>
              <div className="flex mt-6 md:mt-0 gap-2 items-center">
              <Typography className="font-bold" variant="h3">{item.title}</Typography>
              <Typography className="leading-none font-medium italic" noMargin variant="lead">{item.company}</Typography>
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
