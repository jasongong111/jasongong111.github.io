import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: 'AI Chat Assistant',
    description: 'A modern chat application powered by OpenAI GPT-4, featuring real-time messaging, conversation history, and intelligent responses. Built with a clean, intuitive interface that makes AI accessible to everyone.',
    image: '/project1.jpg',
    tech: ['React', 'Node.js', 'OpenAI', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'A comprehensive business intelligence dashboard that transforms complex data into actionable insights. Features interactive visualizations, real-time metrics, and customizable reports for data-driven decision making.',
    image: '/project2.jpg',
    tech: ['Python', 'D3.js', 'AWS', 'PostgreSQL', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
  {
    title: 'Fitness Tracker App',
    description: 'A mobile-first fitness application that helps users track workouts, monitor progress, and achieve their health goals. Includes features like exercise logging, progress charts, and personalized recommendations.',
    image: '/project3.jpg',
    tech: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();
      return () => scrollElement.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-linkedin-text mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-linkedin-blue rounded-full" />
            <p className="mt-4 text-linkedin-text-secondary text-lg max-w-xl">
              A selection of my recent work showcasing my skills and passion for building
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-linkedin-blue text-linkedin-blue hover:bg-linkedin-blue hover:text-white'
                  : 'border-linkedin-border text-linkedin-text-secondary cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-linkedin-blue text-linkedin-blue hover:bg-linkedin-blue hover:text-white'
                  : 'border-linkedin-border text-linkedin-text-secondary cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projects Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex-shrink-0 w-[85vw] sm:w-[600px] lg:w-[700px] snap-start transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`bg-white rounded-2xl shadow-linkedin overflow-hidden h-full transition-all duration-300 ${
                hoveredIndex === index ? 'shadow-card-hover' : ''
              }`}>
                {/* Project Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-linkedin-blue/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-linkedin-blue hover:scale-110 transition-transform"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-linkedin-blue hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-linkedin-text mb-3">
                    {project.title}
                  </h3>
                  <p className="text-linkedin-text-secondary leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-linkedin-light text-linkedin-blue text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className={`text-center mt-10 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-linkedin-blue font-medium hover:underline"
          >
            <Github className="w-5 h-5" />
            View more projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
