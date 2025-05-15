import { Link } from "@/components/ui/link"
import { Typography } from "@/components/ui/typography"
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <main id="about" className="container mx-auto px-6 py-12 min-h-auto">
      <div className="max-w-3xl  space-y-8">
        <div className="space-y-4">
          <Typography variant="h1">About <span className="text-secondary">me</span></Typography>
          <Typography variant="lead">
            I am a Front-End Developer located in Anápolis, Goiás, Brazil. I currently work as a part time Junior Front-End Developer for Unievangélica, located in Anápolis. I am eager to learn and grow as a software engineer and increase my skills.
          </Typography>
        </div>

        <div className="prose prose-lg dark:prose-invert">
          <Typography variant="blockquote">
            <div className="grid grid-cols-[80px_1fr] gap-y-2">
              <Typography variant="inline" className="font-medium">PHONE</Typography>
              <Typography variant="inline" className="text-muted-foreground">+55 (62) 98259-5874</Typography>
              
              <Typography variant="inline" className="font-medium">EMAIL</Typography>
              <Typography variant="inline" className="text-muted-foreground">filipegrodriguesreal@gmail.com</Typography>
              
              <Typography variant="inline" className="font-medium">SOCIAL</Typography>
              <div className="flex gap-8">
                <Icon href="https://www.instagram.com/_feryuu/" icon={Instagram} />
                <Icon href="https://github.com/FilipeVOl" icon={Github} />
                <Icon href="https://www.linkedin.com/in/filipegideao/?locale=en_US"icon={Linkedin} />
              </div>
            </div>
          </Typography>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-14">
          <Button variant="default" size="lg">CONTACT ME</Button>
          <Button variant="secondary" size="lg">DOWNLOAD CV</Button>
        </div>
      </div>
    </main>
  )
}
