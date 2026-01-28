import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Download, MapPin, ExternalLink } from 'lucide-react';

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 10, y: y * 10 });
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:alex@example.com', label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-linkedin-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-linkedin-light rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-linkedin-light/50 to-transparent rounded-full" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#0A66C2 1px, transparent 1px), linear-gradient(90deg, #0A66C2 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className={`bg-white rounded-3xl shadow-linkedin overflow-hidden transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transform: `perspective(1000px) rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          }}
        >
          {/* Cover Image */}
          <div className="relative h-48 sm:h-64 bg-gradient-to-r from-linkedin-blue via-linkedin-dark to-linkedin-blue overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Profile Content */}
          <div className="relative px-6 sm:px-10 pb-10">
            {/* Avatar */}
            <div className="relative -mt-20 sm:-mt-24 mb-6">
              <div 
                className={`w-36 h-36 sm:w-44 sm:h-44 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white transition-all duration-700 delay-200 ${
                  isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <img
                  src="/profile.jpg"
                  alt="Alex Chen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className={`transition-all duration-700 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <h1 className="text-3xl sm:text-4xl font-bold text-linkedin-text mb-2">
                Alex Chen
              </h1>
              <p className="text-lg sm:text-xl text-linkedin-text-secondary mb-3">
                Computer Science Student & Math Enthusiast
              </p>
              <div className="flex items-center gap-2 text-linkedin-text-secondary text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>San Francisco Bay Area</span>
                <span className="w-1 h-1 bg-linkedin-text-secondary rounded-full" />
                <span className="text-linkedin-blue">Open to opportunities</span>
              </div>
            </div>

            {/* Tagline */}
            <p className={`text-linkedin-text-secondary max-w-2xl mb-6 transition-all duration-700 delay-400 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              Building the future, one line of code at a time. Passionate about algorithms, 
              software engineering, and applying mathematical thinking to solve real-world problems.
            </p>

            {/* Social Links */}
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-linkedin-bg flex items-center justify-center text-linkedin-text-secondary hover:bg-linkedin-blue hover:text-white transition-all hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-wrap gap-3 transition-all duration-700 delay-600 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-linkedin-blue text-white font-medium rounded-full hover:bg-linkedin-dark transition-all hover:shadow-lg hover:scale-105"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-linkedin-blue text-linkedin-blue font-medium rounded-full hover:bg-linkedin-light transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
