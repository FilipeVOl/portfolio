import { Typography } from "@/components/ui/typography";
import SkillCard from "../components/SkillCard";
import CodeIcon from "../components/CodeIcon";
import { skillItems } from "./skill-items";
import Divider from "../components/Divider";
import React from "react";

export default function SkillsPage() {
  return (
    <main id="skills">
      <div className="">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="max-w-3xl space-y-4 w-full ">
            <Typography variant="h2" className="text-start">Skills<span className="text-secondary">.</span></Typography>
            <Typography variant="lead" className="text-start">I have worked with most of the technologies that are turned to user interfaces, and lately i've been working with web development and also introducing myself to artificial intelligence.</Typography>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
              {skillItems.map((item, idx) => (
                <div key={item.id} className="h-full">
                  <div className="advantages-box w-full flex flex-col h-full">
                    <Typography className="font-bold mb-2" variant="h4">
                      {item.title}
                    </Typography>
                    <Typography className="mb-2" noMargin variant="subdesc">  
                      {item.content}
                    </Typography>
                    <div className="flex-grow" />
                    {idx !== skillItems.length - 1 && <Divider />}
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
