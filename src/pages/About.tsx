import { PageTransition } from '../components/PageTransition';

export function About() {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-3xl mx-auto w-full">
          <div className="mb-8 opacity-0 animate-slideInLeft">
            <div className="text-[#a3be8c] mb-4">
              <span className="text-[#808080]">lukelazar@portfolio:~</span> cat about.md
            </div>
            <h2>About</h2>
          </div>

          <div className="space-y-4 text-[#808080] mb-12">
            <p className="opacity-0 animate-fadeInUp delay-100">
              I'm a software engineer who graduated with a degree in Computer Science in 2023.
              I enjoy working on complex problems and building systems that are efficient and scalable.
            </p>
            <p className="opacity-0 animate-fadeInUp delay-200">
              Most of my experience is in web development, but I'm always learning new things.
              I care about writing clean code and making software that's actually useful.
            </p>
            <p className="opacity-0 animate-fadeInUp delay-300">
              When I'm not coding, I like tinkering with electronics, playing games, and listening to music.
            </p>
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400">
            <div className="mb-6">
              <h3>Skills</h3>
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
