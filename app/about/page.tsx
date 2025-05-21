"use client"
import { Typography } from "@/components/ui/typography"
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import Dialog from "@/app/components/Dialog";
import { useState } from "react";

export default function AboutPage() {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setOpenForm(false);
      setTimeout(() => setOpenSuccess(true), 100);
      form.reset();
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

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
              <Typography variant="inline" >filipegrodriguesreal@gmail.com</Typography>
              
              <Typography variant="inline" className="font-medium">SOCIAL</Typography>
              <div className="flex gap-8">
                <Icon href="https://www.instagram.com/_feryuu/" icon={Instagram} />
                <Icon href="https://github.com/FilipeVOl" icon={Github} />
                <Icon href="https://www.linkedin.com/in/filipegideao/?locale=en_US"icon={Linkedin} />
              </div>
            </div>
          </Typography>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-14 ">
          <Dialog
            open={openForm}
            onOpenChange={setOpenForm}
            className="dialog"
            title="Let's work together"
            subtitle="Are you interested in my services? I would love to help make it happen! Send me a message and let's start your project!."
            trigger={<Button variant="default" size="lg">CONTACT ME</Button>}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
              <input type="hidden" name="access_key" value="a46a66dd-b920-47d8-9da8-1f7928f993a9" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  name="first_name"
                  placeholder="Name"
                  className="invalid:border-red-500 outline-none w-full px-4 py-4 border-2 border-primary/10 p-2 hover:border-secondary hover:brightness-125 hover:shadow-secondary/50 hover:shadow-md focus:border-secondary transition-all duration-300"
                />
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="E-mail"
                  className="invalid:border-red-500 outline-none w-full px-4 py-4 border-2 border-primary/10 p-2 hover:border-secondary hover:brightness-125 hover:shadow-secondary/50 hover:shadow-md focus:border-secondary transition-all duration-300"
                />
              </div>
              <textarea
                placeholder="Message"
                name="message"
                required
                className="invalid:border-red-500 outline-none w-full px-4 py-4 border-2 border-primary/10 p-2 hover:border-secondary hover:brightness-125 hover:shadow-secondary/50 hover:shadow-md focus:border-secondary transition-all duration-300"
              />
              <div className="flex justify-end mt-2">
                <Button type="submit" className="btn btn-primary">
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </Dialog>
          <a href="/cv.pdf" download>
            <Button variant="secondary" className="w-full" size="lg">DOWNLOAD CV</Button>
          </a>
        </div>
      </div>
      <Dialog
        open={openSuccess}
        onOpenChange={setOpenSuccess}
        title="Your message has been sent"
        subtitle="Thank you for contacting me! I will get back to you soon."
        className="dialog"
      >
        <div className="text-left">
          <Button className="px-12" onClick={() => setOpenSuccess(false)}>Close</Button>
        </div>
      </Dialog>
    </main>
  )
}
