import { useEffect, useRef, useState } from 'react';
import { Code2, Users, Lightbulb, MessageSquare, Clock, Brain } from 'lucide-react';

const technicalSkills = [
  { name: 'Python', level: 95 },
  { name: 'Java', level: 90 },
  { name: 'C++', level: 85 },
  { name: 'JavaScript', level: 92 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'SQL', level: 90 },
  { name: 'Git', level: 88 },
  { name: 'AWS', level: 75 },
  { name: 'Docker', level: 70 },
];

const softSkills = [
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Team Leadership', icon: Users },
  { name: 'Communication', icon: MessageSquare },
  { name: 'Time Management', icon: Clock },
  { name: 'Critical Thinking', icon: Brain },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-linkedin-light/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-linkedin-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-linkedin-text mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-linkedin-blue rounded-full mx-auto" />
          <p className="mt-4 text-linkedin-text-secondary text-lg max-w-2xl mx-auto">
            Technologies and abilities I've developed throughout my journey
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div 
            className={`bg-white rounded-2xl shadow-linkedin p-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linkedin-light flex items-center justify-center">
                <Code2 className="w-6 h-6 text-linkedin-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-linkedin-text">
                  Technical Skills
                </h3>
                <p className="text-sm text-linkedin-text-secondary">
                  Languages, frameworks & tools
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-medium transition-colors ${
                      hoveredSkill === skill.name ? 'text-linkedin-blue' : 'text-linkedin-text'
                    }`}>
                      {skill.name}
                    </span>
                    <span className="text-sm text-linkedin-text-secondary">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-linkedin-bg rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-linkedin-blue to-linkedin-dark rounded-full transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${300 + index * 50}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div 
            className={`bg-white rounded-2xl shadow-linkedin p-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-linkedin-light flex items-center justify-center">
                <Users className="w-6 h-6 text-linkedin-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-linkedin-text">
                  Soft Skills
                </h3>
                <p className="text-sm text-linkedin-text-secondary">
                  Professional & interpersonal abilities
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`group p-5 bg-linkedin-bg rounded-xl hover:bg-linkedin-light transition-all duration-300 cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <skill.icon className="w-5 h-5 text-linkedin-blue" />
                    </div>
                    <span className="font-medium text-linkedin-text group-hover:text-linkedin-blue transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-5 bg-gradient-to-r from-linkedin-light to-transparent rounded-xl">
              <p className="text-sm text-linkedin-text-secondary leading-relaxed">
                <span className="font-medium text-linkedin-text">Continuous Learner:</span>{' '}
                I'm always eager to learn new technologies and adapt to changing environments. 
                My strong analytical mindset helps me quickly grasp complex concepts.
              </p>
            </div>
          </div>
        </div>

        {/* Skill Tags Cloud */}
        <div 
          className={`mt-8 bg-white rounded-2xl shadow-linkedin p-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h4 className="text-lg font-semibold text-linkedin-text mb-4">
            Additional Technologies
          </h4>
          <div className="flex flex-wrap gap-3">
            {[
              'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'Redis',
              'GraphQL', 'REST APIs', 'Kubernetes', 'CI/CD', 'Jest',
              'Tailwind CSS', 'Figma', 'Linux', 'Bash', 'Python Pandas',
            ].map((tech, index) => (
              <span
                key={tech}
                className={`px-4 py-2 bg-linkedin-bg text-linkedin-text text-sm font-medium rounded-full hover:bg-linkedin-blue hover:text-white transition-all duration-300 cursor-default ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{ transitionDelay: `${500 + index * 30}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
