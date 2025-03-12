import { motion } from "framer-motion";
import "@fontsource/jetbrains-mono";
import TypingText from "./TypingText";
import Link from "next/link";

const contentMap: Record<string, string> = {
  Home: "My name is Gautam Asopa. I'm a full-stack software engineer based in Delhi, India, specializing in high-performance, bespoke digital experiences.",
  About: "I have a degree in computer science and a treasure trove of knowledge gathered from books and an obscene number of YouTube tutorials. My strong theoretical foundation, combined with an interdisciplinary approach, makes me an exceptionally effective problem-solver.",
  Stack: "My expertise lies in building full-stack web applications with Next.js, Tailwind, and Node.js. I'm proficient in designing high-performance persistence layers with Redis and PostgreSQL and deploying scalable applications using Docker and Kubernetes.",
  Work: "I'm currently open to new opportunities in full-stack development. My portfolio includes a high-performance e-commerce platform, a cloud storage service akin to Google Drive, and a collaborative code editor powered by CRDTs.",
  Writing: "Reading and writing have been lifelong obsessions. I'm currently working on my first fantasy novel, Tales of a Banished Prince, and have recently started sharing my learnings on a blog.",
};

export default function MainContent({ section }: { section: string }) {
  return (
    <motion.div
      key={section}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-[40rem] text-lg font-[JetBrains_Mono] leading-relaxed"
    >
      <TypingText text={contentMap[section] || "Section not found."} />

      {section === "Writing" && (
        <div className="mt-4">
          <Link
            href="/writing"
            className="relative text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300
              before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-blue-400 
              before:scale-x-0 before:transition-transform before:duration-300 before:origin-left 
              hover:before:scale-x-100"
          >
            Check it out.
          </Link>
        </div>
      )}

      {section === "Work" && (
        <div className="mt-4">
          <Link
            href="https://github.com/gautamasopa"
            target="_blank"
            className="relative text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300
              before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-blue-400 
              before:scale-x-0 before:transition-transform before:duration-300 before:origin-left 
              hover:before:scale-x-100"
          >
            Check out my GitHub.
          </Link>
        </div>
      )}
    </motion.div>
  );
}
