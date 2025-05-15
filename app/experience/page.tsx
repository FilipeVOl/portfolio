'use client';

import { experienceItems } from "./timeline-items";
import { Timeline } from "@/components/ui/timeline/timeline";
import { Typography } from "@/components/ui/typography";

export default function ExperiencePage() {
  return (
    <main className="container px-6 py-12 min-h-auto mx-auto">
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <div className="max-w-3xl space-y-8 items-center ">
          <Typography variant="h1">Experience<span className="text-secondary">.</span></Typography>
          <Typography variant="p">I have worked as a frontend developer for Unievangélica since 2022, contributing to the development of different projects alongside the demands.</Typography>
        </div>
        <div>
          <Timeline 
            items={experienceItems}
          />
        </div>
      </div>
    </main>
  );
}
