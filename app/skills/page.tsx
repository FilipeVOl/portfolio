import { Typography } from "@/components/ui/typography";
import SkillCard from "../components/SkillCard";
import CodeIcon from "../components/CodeIcon";

export default function SkillsPage() {
  return (
    <main id="skills">
      <div className="main-content main-icon">
        <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr] gap-8">
          <div className="max-w-3xl space-y-4">
            <Typography variant="h1" className="text-start">Skills<span className="text-secondary">.</span></Typography>
            <Typography variant="lead" className="text-start">I have worked with most of the technologies that are turned to user interfaces, and lately i've been working with web development and also introducing myself to artificial intelligence.</Typography>
          </div>
            <div id="skills-grid" className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] xl:grid-cols-[1fr_3fr] gap-6">
                <SkillCard id="frontend-skills" title="Frontend development" content="Typescript, React, Next.js, Tailwind CSS" />
                <SkillCard id="web-skills" title="Web development" content="Docker, Storybook, MongoDB, PostgreSQL" />
                <SkillCard id="backend-skills" title="Backend development" content="Node.js, Express, PHP, Laravel" />
            </div>
        </div>
      </div>
    </main>
  );
}
