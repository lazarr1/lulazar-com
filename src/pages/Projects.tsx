import { ExternalLink } from "lucide-react";
import {
  FaGithub,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaAws,
  FaBrain,
  FaMemory,
  FaBluetooth,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiSocketdotio,
  SiOpencv,
  SiJavascript,
  SiBlender,
  SiNginx,
  SiTailwindcss,
  SiStmicroelectronics,
  SiAndroid,
  SiKotlin,
  SiTerraform,
  SiAmazoncognito,
} from "react-icons/si";
import { SlGraph } from "react-icons/sl";
import { PageTransition } from "../components/PageTransition";

export const techIcons: Record<string, Element> = {
  Python: <FaPython size={14} />,
  "Node.js": <FaNodeJs size={14} />,
  React: <FaReact size={14} />,
  MongoDB: <SiMongodb size={14} />,
  "Next.js": <SiTypescript size={14} />,
  TypeScript: <SiTypescript size={14} />,
  "C++": <SiCplusplus size={14} />,
  JavaScript: <SiJavascript size={14} />,
  "HTML/CSS": (
    <span className="flex gap-0.5 items-center">
      <SiHtml5 size={14} />
      <SiCss3 size={14} />
    </span>
  ),
  Docker: <FaDocker size={14} />,
  AWS: <FaAws size={14} />,
  "Machine Learning": <FaBrain size={14} />,
  OpenCV: <SiOpencv size={14} />,
  Blender: <SiBlender size={14} />,
  Nginx: <SiNginx size={14} />,
  TailwindCSS: <SiTailwindcss size={14} />,
  "Memory Virtualisation": <FaMemory size={14} />,
  STM32: <SiStmicroelectronics size={14} />,
  "Data Analysis": <SlGraph size={14} />,
  "Android OS": <SiAndroid size={14} />,
  Kotlin: <SiKotlin size={14} />,
  Bluetooth: <FaBluetooth size={14} />,
  Terraform: <SiTerraform size={14} />,
  SSO: <SiAmazoncognito size={14} />,
};

const projects = [
  {
    title: "Circuit Simulator",
    description:
      "Web-based circuit simulator with drag-and-drop components and real-time simulation. \
      Built with a vanilla JavaScript frontend and a C++ websocket Backend.",
    tech: ["C++", "JavaScript", "HTML/CSS", "Docker", "AWS", "Nginx"],
    src: "projects/circuit.png",
    githubUrl: "https://github.com/lazarr1/Electrical-Simulator",
    liveUrl: "https://lulazar.com/circuit",
  },
  {
    title: "Automatic Exposure Bracketing for On Orbit Satellite Servicing",
    description:
      "A machine learning–based imaging system that studies how to capture clear images in \
      space despite extreme lighting conditions: from bright sunlight to deep shadow.",
    tech: ["Machine Learning", "Python", "OpenCV", "Blender"],
    src: "projects/satellite.png",
    githubUrl: "https://github.com/lazarr1/ExposureNet",
  },
  {
    title: "Developer Porfolio",
    description:
      "Personal website to showcase my projects, skills and experience as an engineer. \
    Features an interactive terminal with a hidden easter egg.",
    tech: ["TypeScript", "React", "TailwindCSS", "Nginx", "AWS"],
    src: "projects/developer.png",
    githubUrl: "https://github.com/lazarr1/lulazar-com",
    liveUrl: "lulazar.com",
  },
  {
    title: "Performance Dashboard",
    description:
      "Analytics dashboard for tracking web application performance metrics and user behavior.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export function Projects() {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="mb-8 opacity-0 animate-slideInLeft">
            <div className="text-[#dfbfff] mb-4">
              <span className="text-[#808080]">lukelazar@portfolio:~</span> ls
              projects/
            </div>
            <h2 className="text-[#5e81ac]">Projects</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-[#3a3a3a] rounded-lg p-6 transition-all bg-[#252526] opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.src && (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-50 object-cover mb-4"
                  />
                )}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-[#d4d4d4]">{project.title}</h3>
                  <div className="flex gap-3 ml-4">
                    <a
                      href={project.githubUrl}
                      className="text-[#808080] hover:text-[#a3be8c] transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub size={20} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-[#808080] hover:text-[#88c0d0] transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[#808080] mb-3 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-3 px-3 py-1 bg-[#1e1e1e] border border-[#3a3a3a] text-[#88c0d0] text-xs rounded-full"
                    >
                      {techIcons[tech] && (
                        <span className="flex items-center">
                          {techIcons[tech]}
                        </span>
                      )}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
