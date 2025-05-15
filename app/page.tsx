import Image from "next/image";
import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import * as motion from "motion/react-client"
import ExperiencePage from "./experience/page";
import PortfolioPage from "./portfolio/page";
import Divider from "./components/Divider";
export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AboutPage />
      <Divider />
      <SkillsPage />
      <Divider />
      <ExperiencePage />
      <Divider />
      <PortfolioPage />
    </motion.div>
  );
}
