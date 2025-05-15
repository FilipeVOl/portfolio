'use client';

import { experienceItems } from "./timeline-items";
import { Timeline } from "@/components/ui/timeline/timeline";
import { Typography } from "@/components/ui/typography";

export default function ExperiencePage() {
  return (
    <main className="container mx-auto px-6 py-12 min-h-auto border-b border-black/10">
      <div className="max-w-3xl mx-auto space-y-8">
        <Typography variant="h1">Experience</Typography>
        <Typography variant="p">I have worked as a frontend developer for Unievangélica since 2022, contributing to the development of different projects alongside the demands.</Typography>
      </div>
      <div className="mt-12">
        <Timeline 
          items={experienceItems}
        />
      </div>
    </main>
  );
}
