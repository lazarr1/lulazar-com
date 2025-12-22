import { ExternalLink } from "lucide-react";
import {
  FaGithub,
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaAws,
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
  SiJavascript,
} from "react-icons/si";
import { PageTransition } from "../components/PageTransition";

const techIcons: Record<string, Element> = {
  Python: <FaPython size={14} />,
  "Node.js": <FaNodeJs size={14} />,
  React: <FaReact size={14} />,
  "Socket.io": <SiSocketdotio size={14} />,
  MongoDB: <SiMongodb size={14} />,
  "Next.js": <SiTypescript size={14} />,
  TypeScript: <SiTypescript size={14} />,
  PostgreSQL: <SiPostgresql size={14} />,
  Redis: <SiRedis size={14} />,
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
};

const projects = [
  {
    title: "Circuit Simulator",
    description:
      "Web-based circuit simulator with drag-and-drop components and real-time simulation. Built with vanilla JavaScript frontend and a C++ websocket Backend.",
    tech: ["C++", "JavaScript", "HTML/CSS", "Docker", "AWS"],
    src: "projects/circuit.png",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Collaborative Editor",
    description:
      "Real-time collaborative text editor with WebSocket synchronization and conflict resolution.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Task Manager CLI",
    description:
      "Command-line task management tool with project organization and time tracking.",
    tech: ["Python", "SQLite", "Rich"],
    githubUrl: "#",
    liveUrl: "#",
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
                className="border border-[#3a3a3a] rounded-lg p-6 hover:border-[#a3be8c] transition-all bg-[#252526] opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {project.src && (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
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
                    <a
                      href={project.liveUrl}
                      className="text-[#808080] hover:text-[#88c0d0] transition-colors"
                      aria-label="Live demo"
                    >
                      <ExternalLink size={20} />
                    </a>
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
