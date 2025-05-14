import { Link } from "@/components/ui/link"
import { Typography } from "@/components/ui/typography"
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Icon } from "@/components/ui/icon";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-12 min-h-screen">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <Typography variant="h1">About me</Typography>
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

        <div>
          <Typography variant="h2">Experiência</Typography>
          <Typography variant="p">
            Ao longo da minha jornada, trabalhei em diversos projetos desafiadores
            que me permitiram aprimorar minhas habilidades e aprender
            constantemente. Meu foco está sempre em escrever código limpo,
            escalável e bem documentado.
          </Typography>

          <div className="not-prose">
            <Link
              href="/projects"
              variant="default"
              className="inline-flex items-center"
            >
              Ver meus projetos
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2 h-4 w-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
