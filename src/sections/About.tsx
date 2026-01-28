import { useEffect, useRef, useState } from 'react';
import { MapPin, Mail, Heart, Quote } from 'lucide-react';

export default function About() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const details = [
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
    { icon: Mail, label: 'Email', value: 'alex.chen@email.com' },
    { icon: Heart, label: 'Interests', value: 'Coding, Math, Hiking, Reading' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <Quote className="w-full h-full text-linkedin-blue" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="lg:col-span-4">
            <div className={`lg:sticky lg:top-32 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h2 className="text-4xl sm:text-5xl font-bold text-linkedin-text mb-4">
                About Me
              </h2>
              <div className="w-20 h-1 bg-linkedin-blue rounded-full" />
              <p className="mt-6 text-linkedin-text-secondary text-lg">
                Get to know me better
              </p>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-8">
            <div className={`bg-white rounded-2xl shadow-linkedin p-8 sm:p-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* Main text */}
              <div className="prose prose-lg max-w-none">
                <p className="text-linkedin-text text-lg leading-relaxed mb-6">
                  I'm a passionate <span className="font-semibold text-linkedin-blue">Computer Science student</span> with a strong foundation in algorithms, data structures, and software engineering principles. My minor in <span className="font-semibold text-linkedin-blue">Mathematics</span> has given me a unique analytical perspective that I bring to every project.
                </p>
                <p className="text-linkedin-text-secondary leading-relaxed mb-6">
                  I believe in writing clean, efficient code and creating solutions that make a real impact. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or solving complex mathematical problems.
                </p>
                <p className="text-linkedin-text-secondary leading-relaxed">
                  My journey in tech started with a curiosity about how things work, which evolved into a deep passion for building software that solves meaningful problems. I'm always eager to learn, grow, and collaborate with like-minded individuals.
                </p>
              </div>

              {/* Details Grid */}
              <div className="mt-10 pt-8 border-t border-linkedin-border">
                <div className="grid sm:grid-cols-3 gap-6">
                  {details.map((detail, index) => (
                    <div
                      key={detail.label}
                      className={`flex items-start gap-3 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                      }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-linkedin-light flex items-center justify-center flex-shrink-0">
                        <detail.icon className="w-5 h-5 text-linkedin-blue" />
                      </div>
                      <div>
                        <p className="text-sm text-linkedin-text-secondary">{detail.label}</p>
                        <p className="font-medium text-linkedin-text">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-4 mt-6 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {[
                { value: '3.8', label: 'GPA' },
                { value: '5+', label: 'Projects' },
                { value: '2', label: 'Internships' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-xl shadow-linkedin p-6 text-center card-hover"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-3xl sm:text-4xl font-bold text-linkedin-blue mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-linkedin-text-secondary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
