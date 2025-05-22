'use client';

import { experienceItems } from "./timeline-items";
import { Typography } from "@/components/ui/typography";
import Divider from "../components/Divider";
import React from "react";

export default function ExperiencePage() {
  return (
    <main id="experience">
      <div className="main-content main-icon">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="max-w-3xl space-y-4 w-full">
            <Typography variant="h2">Experience<span className="text-secondary">.</span></Typography>
            <Typography variant="lead">I have worked as a frontend developer for Unievangélica since 2022, contributing to the development of different projects alongside the demands.</Typography>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 w-full">
              {experienceItems.map((item, idx) => (
                <div key={item.id} className="h-full">
                  <div className="w-full flex flex-col h-full">
                    <div className="flex gap-2 items-center mb-2">
                      <Typography className="font-bold" variant="h4">{item.title}</Typography>
                      {item.company && (
                        <Typography className="leading-none font-medium italic" noMargin variant="lead">{item.company}</Typography>
                      )}
                    </div>
                    <Typography className="mb-2" noMargin variant="subdesc">{item.date}</Typography>
                    <Typography className="mb-2" variant="subdesc">{item.description}</Typography>
                    <div className="flex-grow" />
                    {idx !== experienceItems.length - 1 && <Divider />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
