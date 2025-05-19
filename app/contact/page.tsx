"use client";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const ContactPage = () => {
  // Hook para detectar largura da tela
  const [isWide, setIsWide] = useState(true);

  useEffect(() => {
    function handleResize() {
      setIsWide(window.innerWidth >= 750);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function ScrollTriggered() {
    return (
      <div style={container}>
        <motion.div
          style={cardContainer}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
        >
          <div style={{ ...splash }} />
          <motion.div style={card} variants={cardVariants} className="card ">
            <Typography variant="p" className="mb-4">
              Are you interested in working with me? <br /> If you have any
              questions or would like to get in touch, please use the form
              below, thank you!
            </Typography>
            <form>
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  type="text"
                  placeholder="Name"
                  className="outline-none w-full rounded-md border-2 border-primary p-2 shadow-lg shadow-primary/20 focus:border-secondary focus:shadow-secondary/50 focus:brightness-110 hover:border-secondary hover:shadow-secondary/50 hover:brightness-110 transition-all duration-300"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none w-full rounded-md border-2 border-primary p-2 shadow-lg shadow-primary/20 active:border-secondary hover:border-secondary hover:shadow-secondary/50 hover:brightness-110 transition-all duration-300"
                />
              </div>
              <textarea
                placeholder="Message"
                className="outline-none w-full rounded-md border-2 border-primary p-2 shadow-lg shadow-primary/20 mt-4 active:border-secondary hover:border-secondary hover:shadow-secondary/50 hover:brightness-110 transition-all duration-300"
              />
              <Button type="submit" className="btn btn-primary mt-4">
                Send
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: isWide ? -10 : 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  /**
   * ==============   Styles   ================
   */

  const container: React.CSSProperties = {
    height: isWide ? "60vh" : "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  };

  const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "relative",
    minHeight: isWide ? "calc(75vh - 50px)" : "calc(100vh - 50px)",
    width: "100%",
    paddingTop: isWide ? 90 : 16,
  };

  const splash: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
  };

  const card: React.CSSProperties = {
    padding: 50,
    width: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
      "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
    position: "relative",
    zIndex: 1,
  };

  return (
    <main className="container mx-auto px-6" >
      <Typography variant="h1" className="mb-2 text-start">
        Contact<span className="text-secondary">.</span>
      </Typography>
      <ScrollTriggered />
    </main>
  );
};

export default ContactPage;
