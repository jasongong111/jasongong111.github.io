import { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
}

const blogPosts: BlogPost[] = [
  {
    title: 'The Beauty of Algorithms',
    excerpt: 'Exploring the elegant patterns and mathematical beauty hidden within algorithmic design. From sorting to graph traversal, algorithms are the poetry of computer science.',
    date: 'Dec 15, 2023',
    readTime: '5 min read',
    category: 'Computer Science',
    categoryColor: 'bg-blue-100 text-blue-700',
  },
  {
    title: 'Why Math Matters in CS',
    excerpt: 'A deep dive into how mathematical thinking enhances problem-solving abilities in software engineering and why every developer should embrace mathematics.',
    date: 'Nov 28, 2023',
    readTime: '7 min read',
    category: 'Mathematics',
    categoryColor: 'bg-purple-100 text-purple-700',
  },
  {
    title: 'My Journey into Open Source',
    excerpt: 'How contributing to open source projects transformed my coding skills and connected me with an amazing global community of developers.',
    date: 'Oct 10, 2023',
    readTime: '4 min read',
    category: 'Personal Growth',
    categoryColor: 'bg-green-100 text-green-700',
  },
];

export default function Blog() {
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
      id="blog"
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-linkedin-text mb-4">
            Latest Thoughts
          </h2>
          <div className="w-20 h-1 bg-linkedin-blue rounded-full mx-auto" />
          <p className="mt-4 text-linkedin-text-secondary text-lg max-w-2xl mx-auto">
            Sharing my learnings, insights, and perspectives on tech and beyond
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group bg-white rounded-2xl shadow-linkedin overflow-hidden transition-all duration-700 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${hoveredIndex === index ? 'shadow-card-hover -translate-y-2' : ''}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Header with Icon */}
              <div className="h-32 bg-gradient-to-br from-linkedin-light to-white flex items-center justify-center relative overflow-hidden">
                <div className={`absolute inset-0 bg-linkedin-blue/5 transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-150' : 'scale-100'
                }`} />
                <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center transition-transform duration-300 ${
                  hoveredIndex === index ? 'scale-110 rotate-3' : ''
                }`}>
                  <BookOpen className="w-8 h-8 text-linkedin-blue" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category & Meta */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${post.categoryColor}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-sm text-linkedin-text-secondary">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-linkedin-text mb-3 group-hover:text-linkedin-blue transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-linkedin-text-secondary text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-linkedin-border">
                  <div className="flex items-center gap-1 text-sm text-linkedin-text-secondary">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                  <span className={`inline-flex items-center gap-1 text-sm font-medium text-linkedin-blue transition-all ${
                    hoveredIndex === index ? 'translate-x-1' : ''
                  }`}>
                    Read more
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      hoveredIndex === index ? 'translate-x-1' : ''
                    }`} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-linkedin-blue text-linkedin-blue font-medium rounded-full hover:bg-linkedin-blue hover:text-white transition-all"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
