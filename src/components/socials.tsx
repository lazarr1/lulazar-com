import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedinIn } from "react-icons/fa";

export function GitHubButton() {
  return (
    <a
      href="https://github.com/lazarr1"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#88c0d0] hover:underline align-middle"
    >
      <FaGithub />
      <span className="align-middle">GitHub</span>
    </a>
  );
}

export function LinkedInButton() {
  return (
    <a
      href="https://linkedin.com/in/luke-lazar/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#88c0d0] hover:underline align-middle"
    >
      <FaLinkedinIn />
      <span className="align-middle">LinkedIn</span>
    </a>
  );
}

export function EmailButton() {
  return (
    <a
      href="mailto:lazarluke02@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#88c0d0] hover:underline align-middle"
    >
      <FaEnvelope />
      <span className="align-middle">Email</span>
    </a>
  );
}

export function ResumeButton() {
  return (
    <a
      href="/Luke_Lazar_Graduate_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-[#88c0d0] hover:underline align-middle"
    >
      <FaFilePdf />
      <span className="align-middle">Resume</span>
    </a>
  );
}
