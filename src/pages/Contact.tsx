import { Mail, Github, Linkedin } from "lucide-react";
import { PageTransition } from '../components/PageTransition';

export function Contact() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center px-4 py-24">
        <div className="max-w-3xl mx-auto w-full">
          <div className="mb-8 opacity-0 animate-slideInLeft">
            <div className="text-[#a3be8c] mb-4">
              <span className="text-[#808080]">user@portfolio:~</span> cat contact.txt
            </div>
            <h2>Get In Touch</h2>
          </div>

          <div className="mb-8 opacity-0 animate-fadeInUp delay-100">
            <p className="text-[#808080] mb-8">
              I'm open to new opportunities and interesting projects. 
              Feel free to reach out if you want to work together or just chat.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 p-4 border border-[#3a3a3a] hover:border-[#a3be8c] transition-all bg-[#252526] group"
              >
                <Mail size={20} className="text-[#a3be8c] group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <div className="text-xs text-[#808080] mb-1">Email</div>
                  <span className="text-[#88c0d0]">your.email@example.com</span>
                </div>
              </a>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-[#3a3a3a] hover:border-[#a3be8c] transition-all bg-[#252526] group"
              >
                <Github size={20} className="text-[#a3be8c] group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <div className="text-xs text-[#808080] mb-1">GitHub</div>
                  <span className="text-[#88c0d0]">github.com/yourusername</span>
                </div>
              </a>
              <a 
                href="https://linkedin.com/in/yourname" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 border border-[#3a3a3a] hover:border-[#a3be8c] transition-all bg-[#252526] group"
              >
                <Linkedin size={20} className="text-[#a3be8c] group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <div className="text-xs text-[#808080] mb-1">LinkedIn</div>
                  <span className="text-[#88c0d0]">linkedin.com/in/yourname</span>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center text-[#808080] text-sm mt-12 opacity-0 animate-fadeIn delay-300">
            <p>Built with React and Tailwind CSS • 2024</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
