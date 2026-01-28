import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-linkedin-light/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-linkedin-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-linkedin-text mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-linkedin-blue rounded-full mx-auto" />
          <p className="mt-4 text-linkedin-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            {/* Info Cards */}
            <div className="bg-white rounded-2xl shadow-linkedin p-6">
              <h3 className="text-xl font-bold text-linkedin-text mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linkedin-light flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-linkedin-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-linkedin-text-secondary">Email</p>
                    <a 
                      href="mailto:alex.chen@email.com"
                      className="font-medium text-linkedin-text hover:text-linkedin-blue transition-colors"
                    >
                      alex.chen@email.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linkedin-light flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-linkedin-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-linkedin-text-secondary">Location</p>
                    <p className="font-medium text-linkedin-text">
                      San Francisco, CA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-linkedin-light flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-linkedin-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-linkedin-text-secondary">Availability</p>
                    <p className="font-medium text-linkedin-text">
                      Open to opportunities
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-linkedin p-6">
              <h3 className="text-lg font-bold text-linkedin-text mb-4">
                Follow Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-linkedin-bg flex items-center justify-center text-linkedin-text-secondary hover:bg-linkedin-blue hover:text-white transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-linkedin p-8">
              <h3 className="text-xl font-bold text-linkedin-text mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-linkedin-text mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-linkedin-text-secondary">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="relative">
                    <label 
                      htmlFor="name"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'name' || formState.name
                          ? '-top-2 text-xs text-linkedin-blue bg-white px-1'
                          : 'top-3.5 text-linkedin-text-secondary'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 border-2 border-linkedin-border rounded-xl focus:border-linkedin-blue focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label 
                      htmlFor="email"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'email' || formState.email
                          ? '-top-2 text-xs text-linkedin-blue bg-white px-1'
                          : 'top-3.5 text-linkedin-text-secondary'
                      }`}
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 border-2 border-linkedin-border rounded-xl focus:border-linkedin-blue focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label 
                      htmlFor="message"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                        focusedField === 'message' || formState.message
                          ? '-top-2 text-xs text-linkedin-blue bg-white px-1'
                          : 'top-3.5 text-linkedin-text-secondary'
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-linkedin-border rounded-xl focus:border-linkedin-blue focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 bg-linkedin-blue text-white font-medium rounded-xl flex items-center justify-center gap-2 transition-all ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-linkedin-dark hover:shadow-lg hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
