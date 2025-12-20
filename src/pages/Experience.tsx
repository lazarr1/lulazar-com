import { PageTransition } from '../components/PageTransition';

const experiences = [
  {
    company: 'Company Name',
    position: 'Software Engineer',
    period: 'Jan 2023 - Present',
    description: 'Working on web applications and backend services.',
    points: [
      'Built features for a product used by 100k+ users',
      'Improved application performance and load times',
      'Worked with React, Node.js, and PostgreSQL'
    ]
  },
  {
    company: 'Previous Company',
    position: 'Frontend Developer',
    period: 'Jun 2022 - Dec 2022',
    description: 'Contract work on an e-commerce platform.',
    points: [
      'Developed reusable component library',
      'Integrated payment processing with Stripe',
      'Optimized checkout flow and conversion rates'
    ]
  }
];

const education = {
  school: 'University Name',
  degree: 'B.S. Computer Science',
  period: 'Mar 2020 - Nov 2023',
  note: 'Graduated with Honors'
};

export function Experience() {
  return (
    <PageTransition>
      <section className="min-h-screen px-4 py-24">
        <div className="max-w-3xl mx-auto w-full">
          <div className="mb-8 opacity-0 animate-slideInLeft">
            <div className="text-[#a3be8c] mb-4">
              <span className="text-[#808080]">lukelazar@portfolio:~</span> cat experience.log
            </div>
            <h2>Experience</h2>
          </div>

          <div className="space-y-6 mb-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="border border-[#3a3a3a] p-6 bg-[#252526] hover:border-[#a3be8c] transition-colors opacity-0 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                  <div>
                    <h3 className="text-[#d4d4d4] mb-1">{exp.position}</h3>
                    <div className="text-[#5e81ac]">{exp.company}</div>
                  </div>
                  <div className="text-sm text-[#808080]">{exp.period}</div>
                </div>
                <p className="text-[#808080] mb-4 text-sm">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-[#808080] text-sm flex gap-3">
                      <span className="text-[#a3be8c]">▪</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="opacity-0 animate-fadeInUp delay-400 pb-12">
            <div className="mb-6">
              <h3>Education</h3>
            </div>
            <div className="border border-[#3a3a3a] p-6 bg-[#252526]">
              <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-[#d4d4d4] mb-1">{education.degree}</h3>
                  <div className="text-[#88c0d0]">{education.school}</div>
                </div>
                <div className="text-sm text-[#808080]">{education.period}</div>
              </div>
              <div className="text-sm text-[#808080] italic">{education.note}</div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
