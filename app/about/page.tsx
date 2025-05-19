"use client"
import { Typography } from "@/components/ui/typography"
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTrigger, DialogFooter } from "@/components/ui/dialog";

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
          <Dialog><DialogTrigger asChild><Button variant="default" size="lg">CONTACT ME</Button></DialogTrigger>
          
          <DialogContent className="bg-primary-background">
            <DialogDescription>
            <Typography variant="p" className="mb-4 font-bold">
              Are you interested in working with me? <br /> If you have any
              questions or would like to get in touch, please use the form
              below, thank you!
            </Typography>
            </DialogDescription>
            <form action="https://api.web3forms.com/submit" method='POST'>
            <input type='hidden' name='access_key' value="a46a66dd-b920-47d8-9da8-1f7928f993a9"/>
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Name"
                  required
                  name="first_name"
                  className="outline-none w-full rounded-md border-2 border-primary p-2 shadow-lg shadow-primary/20 focus:border-secondary focus:shadow-secondary/50 focus:brightness-110 hover:border-secondary hover:shadow-secondary/50 hover:brightness-110 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  name="email"
                  className="outline-none w-full rounded-md border-2 border-primary p-2 shadow-lg shadow-primary/20 active:border-secondary hover:border-secondary hover:shadow-secondary/50 hover:brightness-110 transition-all duration-300"
                />
              </div>
              <textarea
                placeholder="Message"
                className="outline-none w-full rounded-md border-2 border-primary p-2 shadow-lg shadow-primary/20 mt-4 active:border-secondary hover:border-secondary hover:shadow-secondary/50 hover:brightness-110 transition-all duration-300"
              />
              <DialogFooter>
              <Button type="submit" className="btn btn-primary mt-4">
                Send
              </Button>
              </DialogFooter>
            </form>
          </DialogContent>
          </Dialog>
          <a href="/cv.pdf" download>
            <Button variant="secondary" size="lg">DOWNLOAD CV</Button>
          </a>
        </div>
      </div>
    </main>
  )
}
