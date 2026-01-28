import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, Award, BookOpen, BadgeCheck } from 'lucide-react';

const coursework = [
  'Data Structures & Algorithms',
  'Software Engineering',
  'Linear Algebra',
  'Discrete Mathematics',
  'Machine Learning',
  'Database Systems',
  'Operating Systems',
  'Computer Networks',
];

const certifications = [
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023' },
  { name: 'Google Data Analytics', issuer: 'Google', year: '2023' },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="education"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-linkedin-text mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-linkedin-blue rounded-full mx-auto" />
          <p className="mt-4 text-linkedin-text-secondary text-lg max-w-2xl mx-auto">
            My academic journey and continuous learning path
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Education Card - Spans 2 columns */}
          <div 
            className={`md:col-span-2 bg-white rounded-2xl shadow-linkedin p-8 transition-all duration-700 card-hover ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-linkedin-light flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-linkedin-blue" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-linkedin-text">
                  Bachelor of Science in Computer Science
                </h3>
                <p className="text-lg text-linkedin-blue font-medium">
                  Minor in Mathematics
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-linkedin-text-secondary">
                <span className="font-medium text-linkedin-text">University of Technology</span>
                <span className="w-1 h-1 bg-linkedin-text-secondary rounded-full" />
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>2020 - 2024</span>
                </div>
              </div>

              <p className="text-linkedin-text-secondary leading-relaxed">
                Pursuing a comprehensive degree in Computer Science with a strong focus on 
                software engineering, algorithms, and data structures. My mathematics minor 
                provides a solid foundation for analytical thinking and problem-solving.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linkedin-light text-linkedin-blue text-sm font-medium rounded-full">
                  <Award className="w-4 h-4" />
                  Dean's List (All Semesters)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-linkedin-light text-linkedin-blue text-sm font-medium rounded-full">
                  <Award className="w-4 h-4" />
                  GPA: 3.8/4.0
                </span>
              </div>
            </div>
          </div>

          {/* GPA Card */}
          <div 
            className={`bg-gradient-to-br from-linkedin-blue to-linkedin-dark rounded-2xl shadow-linkedin p-8 text-white transition-all duration-700 delay-100 card-hover ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <p className="text-6xl font-bold mb-2">3.8</p>
              <p className="text-xl opacity-90 mb-1">Cumulative GPA</p>
              <p className="text-sm opacity-70">Out of 4.0</p>
              <div className="mt-4 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-white/50 rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Coursework Card */}
          <div 
            className={`md:col-span-2 bg-white rounded-2xl shadow-linkedin p-8 transition-all duration-700 delay-200 card-hover ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-linkedin-light flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-linkedin-blue" />
              </div>
              <h3 className="text-xl font-bold text-linkedin-text">
                Relevant Coursework
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-linkedin-bg text-linkedin-text text-sm font-medium rounded-lg hover:bg-linkedin-light hover:text-linkedin-blue transition-colors cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications Card */}
          <div 
            className={`bg-white rounded-2xl shadow-linkedin p-8 transition-all duration-700 delay-300 card-hover ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-linkedin-light flex items-center justify-center">
                <BadgeCheck className="w-5 h-5 text-linkedin-blue" />
              </div>
              <h3 className="text-xl font-bold text-linkedin-text">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-linkedin-bg rounded-xl hover:bg-linkedin-light transition-colors"
                >
                  <p className="font-medium text-linkedin-text">{cert.name}</p>
                  <p className="text-sm text-linkedin-text-secondary">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
