"use client";
import { motion } from "framer-motion";

const badges = [
  // Programming
  { label: "JavaScript", color: "F7DF1E", logo: "javascript" },
  { label: "TypeScript", color: "3178C6", logo: "typescript" },
  { label: "Python", color: "3776AB", logo: "python" },
  { label: "C++", color: "00599C", logo: "cplusplus" },

  // Frameworks
  { label: "React", color: "61DAFB", logo: "react" },
  { label: "Next.js", color: "000000", logo: "next.js" },
  { label: "React Native", color: "61DAFB", logo: "react" },
  { label: "GSAP", color: "88CE02", logo: "greensock" },
  { label: "Node.js", color: "339933", logo: "nodedotjs" },
  { label: "Express.js", color: "000000", logo: "express" },
  { label: "Socket.io", color: "010101", logo: "socket.io" },
  { label: "Puppeteer", color: "40B5A4", logo: "puppeteer" },

  // Styling / Auth
  { label: "TailwindCSS", color: "0EA5E9", logo: "tailwindcss" },
  { label: "NativeWind", color: "000000", logo: "react" },
  { label: "JWT", color: "000000", logo: "jsonwebtokens" },

  // ML
  { label: "TensorFlow", color: "FF6F00", logo: "tensorflow" },
  { label: "Matplotlib", color: "11557C", logo: "matplotlib" },
  { label: "Pandas", color: "150458", logo: "pandas" },
  { label: "NumPy", color: "013243", logo: "numpy" },

  // Backend
  { label: "REST APIs", color: "4A90E2", logo: "fastapi" },
  { label: "Scalable Backend", color: "555555", logo: "serverfault" },
  { label: "Optimization", color: "FF9900", logo: "speedtest" },

  // Tools
  { label: "Git", color: "F05032", logo: "git" },
  { label: "GitHub", color: "181717", logo: "github" },
  { label: "Cursor", color: "4C2AFF", logo: "cursor" },
  { label: "Figma", color: "F24E1E", logo: "figma" },
  { label: "Agile", color: "2496ED", logo: "jira" },

  // Databases
  { label: "MongoDB", color: "47A248", logo: "mongodb" },
  { label: "MySQL", color: "4479A1", logo: "mysql" },
  { label: "PostgreSQL", color: "4169E1", logo: "postgresql" },
];

export default function SkillsMarquee() {
  return (
    <section id='skills'>
    <div className="w-full overflow-hidden py-8 select-none mb-12">
      <h1 className="heading mb-12">
        My <span className="text-purple">Skills</span>
      </h1>

      <motion.div
        className="flex space-x-6 whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
      >
        {[...badges, ...badges].map((b, i) => (
          <img
            key={i}
            alt={b.label}
            className="h-10 md:h-12"
            src={`https://img.shields.io/badge/${encodeURIComponent(
              b.label
            )}-${b.color}?style=for-the-badge&logo=${b.logo}&logoColor=white`}
          />
        ))}
      </motion.div>
    </div>
    </section>
  );
}
