import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import {
  GitHubButton,
  LinkedInButton,
  EmailButton,
  ResumeButton,
} from "../components/socials";

export function Hero() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 opacity-0 animate-fadeInUp">
            <div className="text-[#dfbfff] mb-4">
              <span className="text-[#808080]">lukelazar@portfolio:~</span> cat
              intro.txt
            </div>
            <p className="text-xl text-[#5e81ac] mb-4">Software Engineer</p>
            <p className="mb-6 max-w-2xl">Hi, I'm Luke 😁</p>
            <p>
              Welcome to my developer portfolio!! Try out the interactive
              terminal below!
            </p>
          </div>

          <div className="flex gap-3 flex-wrap opacity-0 animate-fadeInUp delay-200">
            <Link
              to="/projects"
              className="px-6 py-3 bg-[#a3be8c] text-[#1e1e1e] hover:bg-[#b8d8a0] transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-[#a3be8c] text-[#a3be8c] hover:bg-[#a3be8c]/10 transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="mt-12 text-[#808080] opacity-0 animate-fadeInUp delay-400">
            <div className="flex gap-2 mb-2">
              <span className="text-[#a3be8c]">$</span>
              <span className="text-[#dfbfff]">ls socials/</span>
            </div>
            <div className="pl-4 text-sm flex col gap-4 items-center">
              <GitHubButton />
              <LinkedInButton />
              <EmailButton />
              <ResumeButton />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
