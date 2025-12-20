import { Link } from 'react-router-dom';
import { PageTransition } from '../components/PageTransition';

export function Hero() {
  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 opacity-0 animate-fadeInUp">
            <div className="text-[#a3be8c] mb-4">
              <span className="text-[#808080]">user@portfolio:~</span> cat intro.txt
            </div>
            <h1 className="mb-6">
              Your Name
            </h1>
            <p className="text-xl text-[#5e81ac] mb-4">
              Software Engineer
            </p>
            <p className="text-[#808080] mb-6 max-w-2xl">
              Building web applications and tools. Currently working with React, TypeScript, 
              and Node.js. Interested in systems programming and making software that's 
              fast and useful.
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
              <span>ls skills/</span>
            </div>
            <div className="pl-4 text-sm">
              <span className="text-[#5e81ac]">languages/</span>{' '}
              <span className="text-[#88c0d0]">frontend/</span>{' '}
              <span className="text-[#5e81ac]">backend/</span>{' '}
              <span className="text-[#88c0d0]">tools/</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
