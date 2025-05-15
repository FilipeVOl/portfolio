import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import SkillCard from "../components/SkillCard";

export default function SkillsPage() {
  return (
    <main className="container mx-auto px-6 py-12 min-h-auto border-b border-black/10">
        <div className="max-w-3xl mx-auto space-y-8">
            <Typography variant="h1">Skills</Typography>
            <div id="skills-grid" className="flex flex-col items-center gap-6 md:grid md:auto-cols-[45%] md:grid-flow-col md:items-stretch">
                <SkillCard id="frontend-skills" title="Frontend development" content="Typescript, React, Next.js, Tailwind CSS" />
                <SkillCard id="web-skills" title="Web development" content="Docker, Storybook, MongoDB, PostgreSQL" />
                <SkillCard id="backend-skills" title="Backend development" content="Node.js, Express, PHP, Laravel" />
            </div>
        </div>
    </main>
  );
}
