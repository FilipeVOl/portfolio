"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { useState } from "react";
import Dialog from "../components/Dialog";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const invalids: string[] = [];
    if (!name || name === "") invalids.push("name");
    if (!email || email === "") invalids.push("email");
    if (!message || message === "") invalids.push("message");

    setInvalidFields(invalids);

    if (invalids.length > 0) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setOpenSuccess(true);
      form.reset();
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <main id="contact" className="container mx-auto px-6 py-12 min-h-auto main-content main-icon">
      <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-8 items-start">
        <div className="max-w-md space-y-4">
          <Typography variant="h2" className="mb-2 text-start">
            Contact<span className="text-secondary">.</span>
          </Typography>
          <Typography variant="lead" className="mb-4 max-w-sm">
            Are you interested in my services? I would love to help make it happen! Send me a message and let's start your project!.
          </Typography>
       
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
         
          <input type="hidden" name="access_key" value="a46a66dd-b920-47d8-9da8-1f7928f993a9" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`dark:border-white outline-none w-full px-4 py-4 border-2 border-primary/10 p-2 hover:border-secondary hover:brightness-125 hover:shadow-secondary/50 hover:shadow-md focus:border-secondary transition-all duration-300 ${invalidFields.includes("name") ? "border-red-500" : ""}`}
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className={`dark:border-white outline-none w-full px-4 py-4 border-2 border-primary/10 p-2 hover:border-secondary hover:brightness-125 hover:shadow-secondary/50 hover:shadow-md focus:border-secondary transition-all duration-300 ${invalidFields.includes("email") ? "border-red-500" : ""}`}
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            className={`dark:border-white outline-none w-full px-4 py-4 border-2 border-primary/10 p-2 hover:border-secondary hover:brightness-125 hover:shadow-secondary/50 hover:shadow-md focus:border-secondary transition-all duration-300 ${invalidFields.includes("message") ? "border-red-500" : ""}`}
          />
          <div className="flex justify-end mt-2">
            <Button type="submit" className="btn btn-primary">
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
      <Dialog
        open={openSuccess}
        onOpenChange={setOpenSuccess}
        title="Your message has been sent"
        subtitle="Thank you for contacting me! I will get back to you soon."
        className="bg-primary-background dark:bg-[#181818] dialog"
      >
        <div className="text-left">
          <Button className="px-12" onClick={() => setOpenSuccess(false)}>Close</Button>
        </div>
      </Dialog>
    </main>
  );
};

export default ContactPage;
