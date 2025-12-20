import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";

export function About() {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-3xl mx-auto w-full">
          <div className="mb-6 opacity-0 animate-slideInLeft">
            <div className="text-[#dfbfff] mb-4">
              <span className="text-[#808080]">lukelazar@portfolio:~</span>{" "}
              whoami
            </div>
            <h2 className="text-[#5e81ac]">About Me</h2>
          </div>

          <div className="space-y-4 mb-12 text-sm">
            <p className="opacity-0 animate-fadeInUp delay-100">
              Hello, I'm Luke! 🦕
            </p>
            <p className="opacity-0 animate-fadeInUp delay-200">
              I'm a Software Engineer at Cochlear and a recent Mechatronics
              Engineer Graduate from the University of Sydney.
            </p>
            <p className="opacity-0 animate-fadeInUp delay-300">
              I really enjoy understanding how things work and breaking down
              complex systems whether it's to debug, optimise performance or
              build upon them. I also enjoy thinking deeply about challenging
              problems, planning effective solutions, and bringing them to life
              through software.
            </p>
            <p className="opacity-0 animate-fadeInUp delay-400">
              Beyond my passion for software I love the full process of working
              in a team. I really enjoy sharing ideas, learning from each
              other's perspectives, training new members, and the general banter
              shared within a good team. I enjoy working within
              multi-disciplinary teams, and learning from the perspective of
              people from different teams.
            </p>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400">
            <div className="mb-6 opacity-0 animate-slideInLeft">
              <h2 className="text-[#5e81ac]">Hobbies and Interests</h2>
            </div>
            <ul className="space-y-1 mb-12 pl-24">
              <li className="text-[#808080] flex gap-3 pl-24">
                <span className="text-[#a3be8c]">▪</span>
                <span>🚶‍♂️ Hikes</span>
              </li>
              <li className="text-[#808080] flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>❓ Trivia</span>
              </li>
              <li className="text-[#808080] flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🍳 Cooking</span>
              </li>
              <li className="text-[#808080] flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🎮 Video Games</span>
              </li>
              <li className="text-[#808080] flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🤓 Reading</span>
              </li>
              <li className="text-[#808080] flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🏋️ Gym</span>
              </li>
            </ul>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400">
            <div className="mb-6 opacity-0 animate-slideInLeft">
              <h2 className="text-[#5e81ac]">Skills</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-[#3a3a3a] p-4 hover:border-[#a3be8c] transition-colors">
                <div className="text-sm text-[#a3be8c] mb-3">Languages</div>
                <div className="text-[#808080] text-sm">
                  JavaScript, TypeScript, Python, Java, SQL
                </div>
              </div>
              <div className="border border-[#3a3a3a] p-4 hover:border-[#a3be8c] transition-colors">
                <div className="text-sm text-[#5e81ac] mb-3">Frontend</div>
                <div className="text-[#808080] text-sm">
                  React, Next.js, Tailwind CSS, HTML/CSS
                </div>
              </div>
              <div className="border border-[#3a3a3a] p-4 hover:border-[#a3be8c] transition-colors">
                <div className="text-sm text-[#88c0d0] mb-3">Backend</div>
                <div className="text-[#808080] text-sm">
                  Node.js, Express, PostgreSQL, MongoDB
                </div>
              </div>
              <div className="border border-[#3a3a3a] p-4 hover:border-[#a3be8c] transition-colors">
                <div className="text-sm text-[#a3be8c] mb-3">Tools</div>
                <div className="text-[#808080] text-sm">
                  Git, Docker, AWS, Linux, VS Code
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
