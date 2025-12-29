import { useState } from "react";
import { PageTransition } from "../components/PageTransition";
import { techIcons } from "./Projects";

interface Experience {
  id: string;
  company: string;
  type: string;
  position: string;
  period: string;
  description: string;
  rotations?: {
    title: string;
    points: string[];
    tags: string[];
  }[];
  points?: string[];
  tags?: string[];
}

const experiences: Experience[] = [
  {
    id: "cochlear-ft",
    company: "Cochlear",
    type: "Full-Time",
    position: "Graduate Engineer",
    period: "February 2025 - Present",
    description:
      "Rotating across different engineering streams at Cochlear, gaining experience in various technical domains.",
    rotations: [
      {
        title: "Rotation 4: Test Systems Egnineer",
        points: [
          "Designed a comprehensive firmware framework for STM32 microcontrollers, \
           including hardware abstraction layers and an API wrapper to utilise on-board peripherals \
           (I2C, SPI, GPIO, UART) simply via a simple internal protocol.",

          "Engineered memory virtualisation through EEPROM emulation, mapping 8-bit logical flash \
           memory requirements onto 64-bit NOR flash, ensuring seamless compatibility with team \
           specifications.",

          "Developed low-level OS code to efficiently manage MCU resources, providing robust \
          peripheral control, modularity, and scalability for future embedded applications.",
        ],
        tags: ["C++", "Memory Virtualisation", "STM32"],
      },
      {
        title: "Rotation 3: Machine Learning Engineer",
        points: [
          "Directed and delivered a comprehensive research package, including a detailed \
          technical report, a fully documented codebase, and multiple presentations \
          which successfully achieved technology-readiness level 3.",

          "Designed and implemented deep learning pipelines for speech bandwidth \
          extension for resource constrained platforms, optimizing for real-time \
          low latency processing.",

          "Developed signal processing models simulating microphone characteristics,\
          including low-pass filtering, noise modeling, and denoising to generate \
          realistic training datasets.",
        ],
        tags: ["Machine Learning", "Python", "Data Analysis"],
      },
      {
        title: "Rotation 2: Android Developer",
        points: [
          "Independently diagnosed and resolved a critical connectivity bug within \
          an internal test application, improving system reliability and reducing\
          connection failures by approximately 30%.",

          "Collaborated on the development of an internal Bluetooth test app, engaging\
          in Agile Scrum processes, resolving legacy issues, and implementing \
          incremental feature improvements to enhance usability and reliability.",
        ],
        tags: ["Kotlin", "Bluetooth", "Android OS"],
      },
      {
        title: "Rotation 1: Clinical Cloud",
        points: [
          "Integrated authentication and access control using AWS Cognito to \
          ensure secure multi-user access for an internal database tool.",

          "Improved internal service reliability by deploying and operationalising \
          an automated API testing framework for previously untested services.",
        ],
        tags: [
          "AWS",
          "SSO",
          "Terraform",
          "Node.js",
          "TypeScript",
          "Docker",
          "Databases",
        ],
      },
    ],
  },
  {
    id: "cochlear-contract",
    company: "Cochlear",
    type: "Contract",
    position: "Software Engineer",
    period: "Feb 2024 - Feb 2025",
    description:
      "Continued working on the Cochlear's Sound Processor firmware for a year following my internship, while \
      finishing off my studies.",
    points: [
      "Architected a custom debug firmware build for Cochlear Sound Processors, collaborating with multiple cross-functional \
      teams to define logging formats, priorities, and a feature set",
      "Implemented a new BLE characteristic for the C6 chip and conducted end-to-end validation using BLE sniffers.",
    ],
    tags: ["C", "Python", "Debugging", "Firmware"],
  },
  {
    id: "cochlear-intern",
    company: "Cochlear",
    type: "Internship",
    position: "Software Engineering Intern",
    period: "Nov 2023 - Feb 2024",
    description: "Summer internship working on embedded systems and firmware.",
    points: [ 
      "Implemented a classifier to detect misalignment between the external Sound Processor and Cochlear Implant, \
      automating data collection and analysis in Python, ultimately achieving a 94% detection accuracy",
      "Directed the algorithm development process and synthesized insights from over 10,000 data points into clear, \
      data-driven presentations that persuaded internal stakeholders and facilitated adoption.",
    ],
    tags: ["C", "Python", "Firmware", "Data Analysis"],
  },
];

const education = {
  school: "The University of Sydney",
  degree: "Bachelor of Engineering Honours (Mechatronics Engineering)",
  period: "Feb 2020 - Nov 2024",
  note: "Graduated with first class Honours.",
  awards: "Dean's List of Excellence in Academic Performance (2022-2024).",
};

const hackathons = [
    {
      title: "Cochlear Graduate Hackathon",
      subtitle: "First place",
      period: "December 2025",
      note: "Built a MERN stack real-time web dashboard displaying the operational status of manufacturing machines, enabling faster issue detection and \
            improving production visibility for the manufacturing team, with the aims of increasing utilisation of manufacturing machines to 80\%.",
    },
    {
      title: "Cochlear Cloud Team Hackathon",
      subtitle: "",
      period: "March 2025",
      note: "Implemented Dependabot across internal Git repositories to reduce developer maintenance overhead and improve dependency security.",
    },
];

export function Experience() {
  const [selectedId, setSelectedId] = useState(experiences[0].id);
  const selected =
    experiences.find((exp) => exp.id === selectedId) || experiences[0];

  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 opacity-0 animate-slideInLeft">
            <div className="text-[#a3be8c] mb-4">
              <span className="text-[#808080]">user@portfolio:~</span> cat
              experience.log
            </div>
            <h2 className="text-[#5e81ac]">
              Work Experience
            </h2>
          </div>

          <div className="flex gap-6 mb-16">
            {/* Left sidebar - List of experiences */}
            <div className="w-64 flex-shrink-0 opacity-0 animate-fadeInUp delay-100">
              <div className="border border-[#3a3a3a] bg-[#252526]">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setSelectedId(exp.id)}
                    className={`w-full text-left px-4 py-3 border-b border-[#3a3a3a] last:border-b-0 transition-colors ${
                      selectedId === exp.id
                        ? "bg-[#2a2a3a] border-l-4 border-l-[#a3be8c]"
                        : "hover:bg-[#2a2a3a]"
                    }`}
                  >
                    <div className="text-[#d4d4d4] text-sm mb-1">
                      {exp.company}
                    </div>
                    <div className="text-[#808080] text-xs">{exp.type}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right panel - Selected experience details */}
            <div className="flex-1 opacity-0 animate-fadeInUp delay-200">
              <div className="border border-[#3a3a3a] bg-[#252526] overflow-hidden">
                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-[#5e81ac] mb-2">
                        {selected.position}
                      </h3>
                      <div className="text-[#ddc497]">{selected.company}</div>
                    </div>
                    <div className="text-sm text-[#808080]">
                      {selected.period}
                    </div>
                  </div>

                  <p className="mb-6 text-sm">{selected.description}</p>

                  {/* Rotations if they exist */}
                  {selected.rotations &&
                    selected.rotations.map((rotation, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-[#a3be8c] mb-4 text-sm">
                          {rotation.title}
                        </h4>
                        <ul className="space-y-3 mb-4">
                          {rotation.points.map((point, i) => (
                            <li
                              key={i}
                              className="text-[#d4d4d4] text-sm flex gap-3"
                            >
                              <span className="text-[#a3be8c] my-2 ">▪</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {rotation.tags.map((tech) => (
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

                  {/* Regular points if no rotations */}
                  {selected.points && (
                    <>
                      <ul className="space-y-3 mb-4">
                        {selected.points.map((point, i) => (
                          <li
                            key={i}
                            className="text-[#d4d4d4] text-sm flex gap-3"
                          >
                            <span className="text-[#a3be8c] my-2">▪</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      {selected.tags && (
                        <div className="flex flex-wrap gap-2">
                          {selected.tags.map((tech) => (
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
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400 pb-12 text-[#5e81ac]">
            <div className="mb-6">
              <h3>Education</h3>
            </div>
            <div className="border border-[#3a3a3a] p-6 bg-[#252526]">
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-[#a3be8c] mb-1">{education.degree}</h3>
                  <div className="text-[#88c0d0]">{education.school}</div>
                </div>
                <div className="text-sm text-[#808080]">{education.period}</div>
              </div>
              <div className="text-sm text-[#808080] italic">
                {education.note}
              </div>
              <div className="text-sm text-[#808080] italic">
                {education.awards}
              </div>
            </div>
          </div>
          <div className="opacity-0 animate-fadeInUp delay-400 pb-12 text-[#5e81ac]">
            <div className="mb-6">
              <h3>Hackathons & Competitions</h3>
            </div>
            {hackathons.map((hackathon) =>
            <div className="border border-[#3a3a3a] p-6 bg-[#252526]">
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-[#a3be8c] mb-1">{hackathon.title}</h3>
                  <div className="text-[#88c0d0] text-sm">{hackathon.subtitle}</div>
                </div>
                <div className="text-sm text-[#808080]">{hackathon.period}</div>
              </div>
              <div className="text-sm text-[#808080] italic">
                {hackathon.note}
              </div>
            </div>
          )}
        </div>
        </div>
      </section>
    </PageTransition>
  );
}
