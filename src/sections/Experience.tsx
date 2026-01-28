import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: string;
}

const experiences: ExperienceItem[] = [
  {
    title: 'Software Engineering Intern',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    period: 'Summer 2023',
    type: 'Internship',
    description: [
      'Developed scalable microservices using Node.js and Express, handling 10,000+ daily requests',
      'Improved application performance by 40% through database query optimization and caching strategies',
      'Collaborated with cross-functional teams to implement new features and resolve critical bugs',
      'Participated in code reviews and contributed to technical documentation',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'University AI Lab',
    location: 'University of Technology',
    period: '2022 - 2023',
    type: 'Research',
    description: [
      'Implemented machine learning algorithms for natural language processing tasks',
      'Published paper on algorithmic optimization techniques in peer-reviewed journal',
      'Assisted in designing experiments and analyzing large datasets',
      'Mentored undergraduate students in research methodologies',
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'CS Department',
    location: 'University of Technology',
    period: '2021 - 2022',
    type: 'Part-time',
    description: [
      'Led weekly recitations for Data Structures and Algorithms course (200+ students)',
      'Developed course materials and programming assignments',
      'Held office hours to help students with concepts and debugging',
      'Received 4.9/5.0 average rating from student evaluations',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-linkedin-text mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-linkedin-blue rounded-full mx-auto" />
          <p className="mt-4 text-linkedin-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped my career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/50 to-linkedin-light hidden sm:block" />
          
          {/* Mobile Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/50 to-linkedin-light sm:hidden" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-linkedin-blue rounded-full border-4 border-white shadow-lg z-10" />

                {/* Content Card */}
                <div className={`ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-[52%]' : 'sm:ml-[52%]'}`}>
                  <div 
                    className={`bg-white rounded-2xl shadow-linkedin p-6 sm:p-8 transition-all duration-300 ${
                      hoveredIndex === index ? 'shadow-card-hover -translate-y-1' : ''
                    }`}
                  >
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="w-5 h-5 text-linkedin-blue" />
                          <span className="text-sm font-medium text-linkedin-blue bg-linkedin-light px-3 py-1 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-linkedin-text">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-linkedin-text-secondary">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-linkedin-text-secondary mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-linkedin-text-secondary"
                        >
                          <ChevronRight className="w-4 h-4 text-linkedin-blue mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
