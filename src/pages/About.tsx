import { Link } from "react-router-dom";
import { ImageCarousel } from "../components/carousel";
import { PageTransition } from "../components/PageTransition";
import { Socials } from "./Contact";

export function About() {
  return (
    <PageTransition>
        <section className="min-h-screen px-4 py-24">
          <div className="max-w-7xl mx-auto w-full">
          <div className="mb-6 opacity-0 animate-slideInLeft">
            <div className="text-[#dfbfff] mb-4">
              <span className="text-[#808080]">lukelazar@portfolio:~</span>{" "}
              whoami
            </div>
            <h2 className="text-[#5e81ac]">About Me</h2>
          </div>

          <div className="space-y-4 mb-12 text-base">
            <p className="opacity-0 animate-fadeInUp delay-100">
              Hello, I'm Luke! 🦕
            </p>
            <p className="opacity-0 animate-fadeInUp delay-200">
              I'm a Software Engineer at Cochlear and a recent Mechatronics
              Engineer Graduate from the University of Sydney.
            </p>
            <p className="opacity-0 animate-fadeInUp delay-300">
              I really enjoy understanding how things work and breaking down
              complex systems. Whether it's to debug, optimise performance or
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
              <h2 className="text-[#5e81ac]">Hobbies & Interests</h2>
            </div>
            <ul className="space-y-1 mb-12 pl-24 text-base">
              <li className="flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🚶‍♂️ Hikes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>❓ Trivia</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🍳 Cooking</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🃏 Poker</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🎮 Video Games</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🤓 Reading</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#a3be8c]">▪</span>
                <span>🏋️ Gym</span>
              </li>
            </ul>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400">
            <div className="mb-6 opacity-0 animate-slideInLeft">
              <h2 className="text-[#5e81ac]">Day in the Life</h2>
            </div>
            <ImageCarousel
              images={[
                {
                  src: "imgs/img1.jpeg",
                  alt: "Lego Scout Trooper on 74-Z Speeder Bike",
                },
                {
                  src: "imgs/img2.jpeg",
                  alt: "Tyler the Creator Concert",
                },
                {
                  src: "imgs/img3.jpeg",
                  alt: "Salt bread tray",
                },
                {
                  src: "imgs/img4.jpeg",
                  alt: "Chill ass lizard chilling on water",
                },
                {
                  src: "imgs/img5.jpeg",
                  alt: "Cool person walking next to waterfall",
                },
                {
                  src: "imgs/img6.jpeg",
                  alt: "Sweet victory (Cake club winner award)",
                },
                {
                  src: "imgs/img7.jpeg",
                  alt: "Water cliff",
                },
                {
                  src: "imgs/img8.jpeg",
                  alt: "Tree mountain",
                },
                {
                  src: "imgs/img9.jpeg",
                  alt: "Poker winnings",
                },
              ]}
            />
          </div>
        </div>
      </section>
    <div className="hidden md:block">
      <Socials />
    </div>
    </PageTransition>
  );
}
