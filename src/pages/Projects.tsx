import { Socials } from "./Contact";
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
  FaDatabase,
  FaRobot,
  FaCamera,
  FaBug,
  FaSync,
  FaServer
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiCplusplus,
  SiHtml5,
  SiCss3,
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
  SiLoopback,
  SiC
} from "react-icons/si";
import { CgGitFork } from "react-icons/cg";
import { PiGear, PiGraph } from "react-icons/pi";
import { SlGraph } from "react-icons/sl";
import { IoHardwareChip } from "react-icons/io5"
import { PageTransition } from "../components/PageTransition";
import { GiElectricalSocket } from "react-icons/gi";

export const techIcons: Record<string, Element> = {
  Python: <FaPython size={14} />,
  "Node.js": <FaNodeJs size={14} />,
  React: <FaReact size={14} />,
  MongoDB: <SiMongodb size={14} />,
  "Next.js": <SiTypescript size={14} />,
  TypeScript: <SiTypescript size={14} />,
  "C++": <SiCplusplus size={14} />,
  "C++20": <SiCplusplus size={14} />,
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
  Databases: <FaDatabase size={14} />,
  "Graph Theory": <PiGraph size={14} />,
  Optimisation: <PiGear size={14} />,
  "Dynamic Programming": <SiLoopback size={14} />,
  Robotics: <FaRobot size={14} />,
  "Computer Vision": <FaCamera size={14} />,
  Debugging: <FaBug size={14} />,
  C: <SiC size={14} />,
  Firmware: <IoHardwareChip size={14} />,
  "Boost Asio": <FaSync size={14}/>,
  "Threading": <CgGitFork size={14}/>,
  "Sockets": <GiElectricalSocket size={14}/>,
  "Servers": <FaServer size={14}/>,
};

const projects = [
  {
    title: "Circuit Simulator",
    description:
      "Web-based circuit simulator with drag-and-drop components and real-time simulation. \
      Built with a vanilla JavaScript frontend and a C++ websocket Backend.",
    tech: [
      "C++",
      "JavaScript",
      "HTML/CSS",
      "Docker",
      "AWS",
      "Nginx",
      "Graph Theory",
    ],
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
      "Personal website to showcase my projects, skills and experience as a software engineer.",
    tech: ["TypeScript", "React", "TailwindCSS", "Nginx", "AWS"],
    src: "projects/developer.png",
    githubUrl: "https://github.com/lazarr1/lulazar-com",
    liveUrl: "lulazar.com",
  },
  {
    title: "Inverted-Pendulum Robot Waiter",
    description:
      "Fully autonomous simulated robot waiter that uses the A* algorithm to plan its path \
      an extended kalman filter for SLAM and a MPC controller for stabilisation.",
    tech: ["Graph Theory", "Optimisation", "Dynamic Programming", "Robotics"],
    src: "projects/kalman_filter.png",
    githubUrl: "https://github.com/lazarr1/amme5520",
  },
  {
    title: "WebSocket Server",
    description:
      "Multi-threaded C++ websocket server layer built on top of Boost Asio and Boost beast \
       built to handle multiple clients, handling all Socket I/O, allowing users to build application logic \
       rather than focusing on the server layer.",
    tech: ["C++20", "Boost Asio", "Threading", "Sockets", "Servers"],
    src: "projects/websocketServer.png",
    githubUrl: "https://github.com/lazarr1/ws-dispatcher",
  },
  {
    title: "Hearts Card Game Cheating Detection",
    description:
      'An automatic cheating detector for the card game "Hearts". Uses traditional computer \
    vision techniques to locate cards in a frame which are then classified with a CNN trained on 140000 card images \
    and a central "Game Logic" component to detect cheating.',
    tech: ["Computer Vision", "Python", "Machine Learning", "OpenCV"],
    src: "projects/cards.png",
    githubUrl: "https://github.com/lazarr1/amme4710_major",
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
