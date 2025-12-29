import {
  GitHubButton,
  LinkedInButton,
  EmailButton,
  ResumeButton,
} from "../components/socials";

export function Socials() {

  return (
    <div className="fixed bottom-4 left-1 z-5 px-4 py-5 transition-colors text-sm">
        <div className="mt-12 text-[#808080] opacity-0 animate-fadeInUp delay-400">
            <div className="py-2 px-4 flex-col gap-8 items-center">
              <GitHubButton />
              <LinkedInButton />
              <EmailButton />
              <ResumeButton />
            </div>
          </div>
      </div>);
}

