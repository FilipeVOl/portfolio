"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

const ContactPage = () => {


  return (
    <main className="container mx-auto px-6 py-12 min-h-auto" id="contact">
      <div className="md:grid md:grid-cols-[1fr_2fr] md:gap-8 items-start">
        <div className="max-w-md space-y-4">
          <Typography variant="h1" className="mb-2 text-start">
            Contact<span className="text-secondary">.</span>
          </Typography>
          <Typography variant="lead" className="mb-4 max-w-sm">
            Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.
          </Typography>
       
        </div>
        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4 w-full">
          <input type="hidden" name="access_key" value="a46a66dd-b920-47d8-9da8-1f7928f993a9" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              required
              name="first_name"
              placeholder="Name"
              className="outline-none w-full rounded-md border-2 border-primary p-2 focus:border-secondary transition-all duration-300"
            />
            <input
              type="email"
              required
              name="email"
              placeholder="E-mail"
              className="outline-none w-full rounded-md border-2 border-primary p-2 focus:border-secondary transition-all duration-300"
            />
          </div>
          <textarea
            placeholder="Message"
            name="message"
            required
            className="outline-none w-full rounded-md border-2 border-primary p-2 min-h-[120px] focus:border-secondary transition-all duration-300"
          />
          <div className="flex justify-end mt-2">
            <Button type="submit" className="btn btn-primary">
              SEND MESSAGE
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
