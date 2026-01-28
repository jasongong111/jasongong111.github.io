// ========================================
// Data
// ========================================

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: 'github', href: 'https://github.com', label: 'GitHub', svg: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>' },
  { icon: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn', svg: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' },
  { icon: 'twitter', href: 'https://twitter.com', label: 'Twitter', svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' },
  { icon: 'mail', href: 'mailto:alex@example.com', label: 'Email', svg: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>' },
];

const experiences = [
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
  { name: 'Problem Solving', icon: 'lightbulb' },
  { name: 'Team Leadership', icon: 'users' },
  { name: 'Communication', icon: 'message-square' },
  { name: 'Time Management', icon: 'clock' },
  { name: 'Critical Thinking', icon: 'brain' },
];

const skillTags = [
  'TypeScript', 'Next.js', 'MongoDB', 'PostgreSQL', 'Redis',
  'GraphQL', 'REST APIs', 'Kubernetes', 'CI/CD', 'Jest',
  'Tailwind CSS', 'Figma', 'Linux', 'Bash', 'Python Pandas',
];

const projects = [
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

const blogPosts = [
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

// ========================================
// State
// ========================================

let state = {
  isScrolled: false,
  isMobileMenuOpen: false,
  activeLink: '#home',
  hoveredSkill: null,
  hoveredIndex: null,
  canScrollLeft: false,
  canScrollRight: true,
  isSubmitting: false,
  isSubmitted: false,
};

// ========================================
// DOM Elements
// ========================================

const elements = {};

function initElements() {
  elements.navbar = document.getElementById('navbar');
  elements.desktopNav = document.getElementById('desktop-nav');
  elements.mobileMenuBtn = document.getElementById('mobile-menu-btn');
  elements.mobileMenu = document.getElementById('mobile-menu');
  elements.mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
  elements.mobileMenuContent = document.getElementById('mobile-menu-content');
  elements.mobileNavLinks = document.getElementById('mobile-nav-links');
  elements.menuIcon = document.getElementById('menu-icon');
  elements.closeIcon = document.getElementById('close-icon');
  elements.heroCard = document.getElementById('hero-card');
  elements.backToTop = document.getElementById('back-to-top');
  elements.experienceTimeline = document.getElementById('experience-timeline');
  elements.courseworkList = document.getElementById('coursework-list');
  elements.certificationsList = document.getElementById('certifications-list');
  elements.technicalSkillsList = document.getElementById('technical-skills-list');
  elements.softSkillsList = document.getElementById('soft-skills-list');
  elements.skillsTagsList = document.getElementById('skills-tags-list');
  elements.projectsContainer = document.getElementById('projects-container');
  elements.scrollLeftBtn = document.getElementById('scroll-left');
  elements.scrollRightBtn = document.getElementById('scroll-right');
  elements.blogGrid = document.getElementById('blog-grid');
  elements.contactSocialLinks = document.getElementById('contact-social-links');
  elements.footerSocialLinks = document.getElementById('footer-social-links');
  elements.footerQuickLinks = document.getElementById('footer-quick-links');
  elements.footerMoreLinks = document.getElementById('footer-more-links');
  elements.contactForm = document.getElementById('contact-form');
  elements.contactSuccess = document.getElementById('contact-success');
  elements.contactName = document.getElementById('contact-name');
  elements.contactEmail = document.getElementById('contact-email');
  elements.contactMessage = document.getElementById('contact-message');
  elements.contactNameLabel = document.getElementById('contact-name-label');
  elements.contactEmailLabel = document.getElementById('contact-email-label');
  elements.contactMessageLabel = document.getElementById('contact-message-label');
  elements.contactSubmit = document.getElementById('contact-submit');
}

// ========================================
// Navbar Functions
// ========================================

function handleScroll() {
  state.isScrolled = window.scrollY > 50;

  if (state.isScrolled) {
    elements.navbar.classList.add('glass-nav', 'shadow-lg', 'py-3');
    elements.navbar.classList.remove('bg-transparent', 'py-5');
  } else {
    elements.navbar.classList.remove('glass-nav', 'shadow-lg', 'py-3');
    elements.navbar.classList.add('bg-transparent', 'py-5');
  }
}

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      state.activeLink = `#${entry.target.id}`;
      updateActiveLinks();
    }
  });
}

function updateActiveLinks() {
  const desktopLinks = elements.desktopNav.querySelectorAll('a');
  const mobileLinks = elements.mobileNavLinks.querySelectorAll('a');

  [...desktopLinks, ...mobileLinks].forEach((link) => {
    const isActive = link.getAttribute('href') === state.activeLink;
    if (isActive) {
      link.classList.add('text-linkedin-blue');
      link.classList.remove('text-linkedin-text-secondary', 'hover:text-linkedin-text');
    } else {
      link.classList.remove('text-linkedin-blue');
      link.classList.add('text-linkedin-text-secondary', 'hover:text-linkedin-text');
    }
  });
}

function handleLinkClick(e, href) {
  e.preventDefault();
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  state.isMobileMenuOpen = false;
  updateMobileMenu();
}

function toggleMobileMenu() {
  state.isMobileMenuOpen = !state.isMobileMenuOpen;
  updateMobileMenu();
}

function updateMobileMenu() {
  if (state.isMobileMenuOpen) {
    elements.mobileMenu.classList.remove('opacity-0', 'invisible');
    elements.mobileMenu.classList.add('opacity-100', 'visible');
    elements.mobileMenuContent.classList.remove('-translate-y-8', 'opacity-0');
    elements.mobileMenuContent.classList.add('translate-y-0', 'opacity-100');
    elements.menuIcon.classList.add('hidden');
    elements.closeIcon.classList.remove('hidden');
  } else {
    elements.mobileMenu.classList.add('opacity-0', 'invisible');
    elements.mobileMenu.classList.remove('opacity-100', 'visible');
    elements.mobileMenuContent.classList.add('-translate-y-8', 'opacity-0');
    elements.mobileMenuContent.classList.remove('translate-y-0', 'opacity-100');
    elements.menuIcon.classList.remove('hidden');
    elements.closeIcon.classList.add('hidden');
  }
}

function renderNavLinks() {
  // Desktop nav
  elements.desktopNav.innerHTML = navLinks.map((link) => `
    <a
      href="${link.href}"
      data-link="${link.href}"
      class="relative px-4 py-2 text-sm font-medium transition-all rounded-md ${link.href === state.activeLink ? 'text-linkedin-blue' : 'text-linkedin-text-secondary hover:text-linkedin-text'}"
    >
      ${link.name}
      ${link.href === state.activeLink ? '<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-linkedin-blue rounded-full active-link-indicator"></span>' : ''}
    </a>
  `).join('');

  // Add event listeners to desktop nav links
  elements.desktopNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => handleLinkClick(e, link.getAttribute('data-link')));
  });

  // Mobile nav
  elements.mobileNavLinks.innerHTML = navLinks.map((link, index) => `
    <a
      href="${link.href}"
      data-link="${link.href}"
      class="px-4 py-3 text-base font-medium rounded-xl transition-all ${link.href === state.activeLink ? 'bg-linkedin-light text-linkedin-blue' : 'text-linkedin-text hover:bg-gray-50'}"
      style="animation-delay: ${index * 50}ms"
    >
      ${link.name}
    </a>
  `).join('');

  // Add event listeners to mobile nav links
  elements.mobileNavLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => handleLinkClick(e, link.getAttribute('data-link')));
  });
}

// ========================================
// Hero Section
// ========================================

function initHeroAnimations() {
  setTimeout(() => {
    elements.heroCard.classList.remove('opacity-0', 'translate-y-10');
    elements.heroCard.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
      const avatar = document.getElementById('hero-avatar');
      if (avatar) {
        avatar.classList.remove('opacity-0', 'scale-90');
        avatar.classList.add('opacity-100', 'scale-100');
      }
    }, 200);

    setTimeout(() => {
      const name = document.getElementById('hero-name');
      if (name) {
        name.classList.remove('opacity-0', 'translate-y-5');
        name.classList.add('opacity-100', 'translate-y-0');
      }
    }, 300);

    setTimeout(() => {
      const tagline = document.getElementById('hero-tagline');
      if (tagline) {
        tagline.classList.remove('opacity-0', 'translate-y-5');
        tagline.classList.add('opacity-100', 'translate-y-0');
      }
    }, 400);

    setTimeout(() => {
      const social = document.getElementById('hero-social');
      if (social) {
        social.classList.remove('opacity-0', 'translate-y-5');
        social.classList.add('opacity-100', 'translate-y-0');
      }
    }, 500);

    setTimeout(() => {
      const actions = document.getElementById('hero-actions');
      if (actions) {
        actions.classList.remove('opacity-0', 'translate-y-5');
        actions.classList.add('opacity-100', 'translate-y-0');
      }
    }, 600);
  }, 100);
}

// ========================================
// Intersection Observer for Animations
// ========================================

function setupIntersectionObservers() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10', '-translate-x-10');
        entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animatableElements = document.querySelectorAll('[id$="-header"], [id$="-content"], [id$="-main"], [id$="-gpa"], [id$="-coursework"], [id$="-certifications"], [id$="-technical"], [id$="-soft"], [id$="-cloud"]');
  animatableElements.forEach((el) => observer.observe(el));
}

// ========================================
// Render Functions
// ========================================

function renderSocialLinks(container, links) {
  if (!container) return;

  container.innerHTML = links.map((link) => `
    <a
      href="${link.href}"
      target="_blank"
      rel="noopener noreferrer"
      class="w-10 h-10 rounded-lg bg-linkedin-bg flex items-center justify-center text-linkedin-text-secondary hover:bg-linkedin-blue hover:text-white transition-all hover:scale-110"
      aria-label="${link.label}"
    >
      <svg class="w-5 h-5" ${link.icon === 'mail' ? 'fill="none" stroke="currentColor" viewBox="0 0 24 24"' : 'fill="currentColor" viewBox="0 0 24 24"'}>
        ${link.svg}
      </svg>
    </a>
  `).join('');
}

function renderExperiences() {
  if (!elements.experienceTimeline) return;

  const experiencesHTML = experiences.map((exp, index) => `
    <div
      class="experience-item relative transition-all duration-700 opacity-0 translate-y-10"
      style="transition-delay: ${200 + index * 150}ms"
      data-index="${index}"
    >
      <!-- Timeline Dot -->
      <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-linkedin-blue rounded-full border-4 border-white shadow-lg z-10"></div>

      <!-- Content Card -->
      <div class="ml-12 sm:ml-0 ${index % 2 === 0 ? 'sm:mr-[52%]' : 'sm:ml-[52%]'}">
        <div class="experience-card bg-white rounded-2xl shadow-linkedin p-6 sm:p-8 transition-all duration-300">
          <!-- Header -->
          <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <svg class="w-5 h-5 text-linkedin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke-width="2"/>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke-width="2"/>
                </svg>
                <span class="text-sm font-medium text-linkedin-blue bg-linkedin-light px-3 py-1 rounded-full">
                  ${exp.type}
                </span>
              </div>
              <h3 class="text-xl font-bold text-linkedin-text">
                ${exp.title}
              </h3>
              <p class="text-lg text-linkedin-text-secondary">
                ${exp.company}
              </p>
            </div>
          </div>

          <!-- Meta Info -->
          <div class="flex flex-wrap gap-4 text-sm text-linkedin-text-secondary mb-4">
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>${exp.period}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>${exp.location}</span>
            </div>
          </div>

          <!-- Description -->
          <ul class="space-y-2">
            ${exp.description.map((item) => `
              <li class="flex items-start gap-2 text-linkedin-text-secondary">
                <svg class="w-4 h-4 text-linkedin-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    </div>
  `).join('');

  elements.experienceTimeline.innerHTML = `
    <!-- Timeline Line -->
    <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/50 to-linkedin-light hidden sm:block"></div>
    <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/50 to-linkedin-light sm:hidden"></div>
    ${experiencesHTML}
  `;

  // Add hover effects
  document.querySelectorAll('.experience-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const card = item.querySelector('.experience-card');
      card.classList.add('shadow-card-hover', '-translate-y-1');
    });
    item.addEventListener('mouseleave', () => {
      const card = item.querySelector('.experience-card');
      card.classList.remove('shadow-card-hover', '-translate-y-1');
    });
  });

  // Setup intersection observer for experience items
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.experience-item').forEach((item) => {
    observer.observe(item);
  });
}

function renderEducation() {
  if (!elements.courseworkList) return;

  // Coursework
  elements.courseworkList.innerHTML = coursework.map((course) => `
    <span class="px-4 py-2 bg-linkedin-bg text-linkedin-text text-sm font-medium rounded-lg hover:bg-linkedin-light hover:text-linkedin-blue transition-colors cursor-default">
      ${course}
    </span>
  `).join('');

  // Certifications
  if (elements.certificationsList) {
    elements.certificationsList.innerHTML = certifications.map((cert) => `
      <div class="p-4 bg-linkedin-bg rounded-xl hover:bg-linkedin-light transition-colors">
        <p class="font-medium text-linkedin-text">${cert.name}</p>
        <p class="text-sm text-linkedin-text-secondary">
          ${cert.issuer} • ${cert.year}
        </p>
      </div>
    `).join('');
  }
}

function renderSkills() {
  if (!elements.technicalSkillsList) return;

  // Technical skills
  elements.technicalSkillsList.innerHTML = technicalSkills.map((skill, index) => `
    <div class="skill-item group" data-skill="${skill.name}">
      <div class="flex items-center justify-between mb-2">
        <span class="skill-name font-medium transition-colors text-linkedin-text">
          ${skill.name}
        </span>
        <span class="text-sm text-linkedin-text-secondary">
          ${skill.level}%
        </span>
      </div>
      <div class="h-2 bg-linkedin-bg rounded-full overflow-hidden">
        <div
          class="skill-bar h-full bg-gradient-to-r from-linkedin-blue to-linkedin-dark rounded-full transition-all duration-1000 ease-out opacity-0"
          data-level="${skill.level}"
          style="transition-delay: ${300 + index * 50}ms"
        ></div>
      </div>
    </div>
  `).join('');

  // Add hover effects
  document.querySelectorAll('.skill-item').forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const name = item.querySelector('.skill-name');
      name.classList.add('text-linkedin-blue');
      name.classList.remove('text-linkedin-text');
    });
    item.addEventListener('mouseleave', () => {
      const name = item.querySelector('.skill-name');
      name.classList.remove('text-linkedin-blue');
      name.classList.add('text-linkedin-text');
    });
  });

  // Soft skills
  if (elements.softSkillsList) {
    const softSkillIcons = {
      lightbulb: '<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',
      users: '<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',
      'message-square': '<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',
      clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
      brain: '<path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24 2.5 2.5 0 014.44-4A2.5 2.5 0 019.5 2z"/><path d="M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 01-1.32-4.24 2.5 2.5 0 00-4.44-4A2.5 2.5 0 0014.5 2z"/>',
    };

    elements.softSkillsList.innerHTML = softSkills.map((skill, index) => `
      <div class="soft-skill-item group p-5 bg-linkedin-bg rounded-xl hover:bg-linkedin-light transition-all duration-300 cursor-default opacity-0 translate-y-5" style="transition-delay: ${400 + index * 100}ms" data-skill="${skill.name}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-linkedin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${softSkillIcons[skill.icon]}
            </svg>
          </div>
          <span class="skill-name font-medium text-linkedin-text group-hover:text-linkedin-blue transition-colors">
            ${skill.name}
          </span>
        </div>
      </div>
    `).join('');
  }

  // Skill tags
  if (elements.skillsTagsList) {
    elements.skillsTagsList.innerHTML = skillTags.map((tech, index) => `
      <span class="skill-tag px-4 py-2 bg-linkedin-bg text-linkedin-text text-sm font-medium rounded-full hover:bg-linkedin-blue hover:text-white transition-all duration-300 cursor-default opacity-0 scale-90" style="transition-delay: ${500 + index * 30}ms">
        ${tech}
      </span>
    `).join('');
  }

  // Setup intersection observer for skills
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-5', 'scale-90');
        entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');

        // Animate skill bars
        const bars = entry.target.querySelectorAll('.skill-bar');
        bars.forEach((bar) => {
          setTimeout(() => {
            bar.style.width = `${bar.dataset.level}%`;
            bar.classList.remove('opacity-0');
            bar.classList.add('opacity-100');
          }, 100);
        });
      }
    });
  }, { threshold: 0.1 });

  const skillsContainer = document.getElementById('skills-technical');
  const softSkillsContainer = document.getElementById('skills-soft');
  const skillsCloud = document.getElementById('skills-cloud');

  if (skillsContainer) observer.observe(skillsContainer);
  if (softSkillsContainer) observer.observe(softSkillsContainer);
  if (skillsCloud) observer.observe(skillsCloud);
}

function renderProjects() {
  if (!elements.projectsContainer) return;

  elements.projectsContainer.innerHTML = projects.map((project, index) => `
    <div
      class="project-item flex-shrink-0 w-[85vw] sm:w-[600px] lg:w-[700px] snap-start transition-all duration-700 opacity-0 translate-y-10"
      style="transition-delay: ${200 + index * 150}ms"
      data-index="${index}"
    >
      <div class="project-card bg-white rounded-2xl shadow-linkedin overflow-hidden h-full transition-all duration-300">
        <!-- Project Image -->
        <div class="relative h-64 sm:h-80 overflow-hidden">
          <img
            src="${project.image}"
            alt="${project.title}"
            class="project-image w-full h-full object-cover transition-transform duration-500"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns\\=\'http://www.w3.org/2000/svg\' viewBox\\=\'0 0 24 24\' fill\\=\'%23E2F0FE\'%3E%3Crect width\\=\'24\' height\\=\'24\' fill\\=\'%23E2F0FE\'/%3E%3Ctext x\\=\'12\' y\\=\'12\' text-anchor\\=\'middle\' dy\\=\'.3em\' fill\\=\'%230A66C2\' font-size\\=\'14\' font-family\\=\'sans-serif\'%3E${project.title}%3C/text%3E%3C/svg%3E'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <!-- Hover Overlay -->
          <div class="project-overlay absolute inset-0 bg-linkedin-blue/80 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0">
            ${project.github ? `
              <a
                href="${project.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-linkedin-blue hover:scale-110 transition-transform"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            ` : ''}
            ${project.demo ? `
              <a
                href="${project.demo}"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-linkedin-blue hover:scale-110 transition-transform"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 sm:p-8">
          <h3 class="text-2xl font-bold text-linkedin-text mb-3">
            ${project.title}
          </h3>
          <p class="text-linkedin-text-secondary leading-relaxed mb-5">
            ${project.description}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2">
            ${project.tech.map((tech) => `
              <span class="px-3 py-1.5 bg-linkedin-light text-linkedin-blue text-sm font-medium rounded-lg">
                ${tech}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Add hover effects
  document.querySelectorAll('.project-item').forEach((item) => {
    const overlay = item.querySelector('.project-overlay');
    const image = item.querySelector('.project-image');
    const card = item.querySelector('.project-card');

    item.addEventListener('mouseenter', () => {
      overlay.classList.remove('opacity-0');
      overlay.classList.add('opacity-100');
      image.classList.add('scale-105');
      card.classList.add('shadow-card-hover');
    });

    item.addEventListener('mouseleave', () => {
      overlay.classList.add('opacity-0');
      overlay.classList.remove('opacity-100');
      image.classList.remove('scale-105');
      card.classList.remove('shadow-card-hover');
    });
  });

  // Setup intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-item').forEach((item) => {
    observer.observe(item);
  });

  // Setup scroll buttons
  setupProjectScroll();
}

function setupProjectScroll() {
  if (!elements.projectsContainer) return;

  function checkScroll() {
    const { scrollLeft, scrollWidth, clientWidth } = elements.projectsContainer;
    state.canScrollLeft = scrollLeft > 0;
    state.canScrollRight = scrollLeft < scrollWidth - clientWidth - 10;

    elements.scrollLeftBtn.disabled = !state.canScrollLeft;
    elements.scrollRightBtn.disabled = !state.canScrollRight;

    if (state.canScrollLeft) {
      elements.scrollLeftBtn.classList.remove('border-linkedin-border', 'text-linkedin-text-secondary', 'cursor-not-allowed');
      elements.scrollLeftBtn.classList.add('border-linkedin-blue', 'text-linkedin-blue');
    } else {
      elements.scrollLeftBtn.classList.add('border-linkedin-border', 'text-linkedin-text-secondary', 'cursor-not-allowed');
      elements.scrollLeftBtn.classList.remove('border-linkedin-blue', 'text-linkedin-blue');
    }

    if (state.canScrollRight) {
      elements.scrollRightBtn.classList.remove('border-linkedin-border', 'text-linkedin-text-secondary', 'cursor-not-allowed');
      elements.scrollRightBtn.classList.add('border-linkedin-blue', 'text-linkedin-blue');
    } else {
      elements.scrollRightBtn.classList.add('border-linkedin-border', 'text-linkedin-text-secondary', 'cursor-not-allowed');
      elements.scrollRightBtn.classList.remove('border-linkedin-blue', 'text-linkedin-blue');
    }
  }

  elements.scrollLeftBtn.addEventListener('click', () => {
    const scrollAmount = elements.projectsContainer.clientWidth * 0.8;
    elements.projectsContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    });
  });

  elements.scrollRightBtn.addEventListener('click', () => {
    const scrollAmount = elements.projectsContainer.clientWidth * 0.8;
    elements.projectsContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    });
  });

  elements.projectsContainer.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}

function renderBlog() {
  if (!elements.blogGrid) return;

  elements.blogGrid.innerHTML = blogPosts.map((post, index) => `
    <article class="blog-post group bg-white rounded-2xl shadow-linkedin overflow-hidden transition-all duration-700 cursor-pointer opacity-0 translate-y-10" style="transition-delay: ${200 + index * 100}ms" data-index="${index}">
      <!-- Card Header with Icon -->
      <div class="h-32 bg-gradient-to-br from-linkedin-light to-white flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-linkedin-blue/5 transition-transform duration-500 group-hover-bg"></div>
        <div class="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center transition-transform duration-300 group-hover-icon">
          <svg class="w-8 h-8 text-linkedin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <!-- Category & Meta -->
        <div class="flex items-center justify-between mb-4">
          <span class="px-3 py-1 text-xs font-medium rounded-full ${post.categoryColor}">
            ${post.category}
          </span>
          <div class="flex items-center gap-3 text-sm text-linkedin-text-secondary">
            <div class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>${post.date}</span>
            </div>
          </div>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-linkedin-text mb-3 group-hover:text-linkedin-blue transition-colors">
          ${post.title}
        </h3>

        <!-- Excerpt -->
        <p class="text-linkedin-text-secondary text-sm leading-relaxed mb-4">
          ${post.excerpt}
        </p>

        <!-- Footer -->
        <div class="flex items-center justify-between pt-4 border-t border-linkedin-border">
          <div class="flex items-center gap-1 text-sm text-linkedin-text-secondary">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>${post.readTime}</span>
          </div>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-linkedin-blue transition-all group-hover-arrow">
            Read more
            <svg class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </span>
        </div>
      </div>
    </article>
  `).join('');

  // Add hover effects
  document.querySelectorAll('.blog-post').forEach((post) => {
    post.addEventListener('mouseenter', () => {
      post.classList.add('shadow-card-hover', '-translate-y-2');
      post.querySelector('.group-hover-bg').classList.add('scale-150');
      post.querySelector('.group-hover-icon').classList.add('scale-110', 'rotate-3');
      post.querySelector('.group-hover-arrow').classList.add('translate-x-1');
      post.querySelector('.group-hover-arrow svg').classList.add('translate-x-1');
    });

    post.addEventListener('mouseleave', () => {
      post.classList.remove('shadow-card-hover', '-translate-y-2');
      post.querySelector('.group-hover-bg').classList.remove('scale-150');
      post.querySelector('.group-hover-icon').classList.remove('scale-110', 'rotate-3');
      post.querySelector('.group-hover-arrow').classList.remove('translate-x-1');
      post.querySelector('.group-hover-arrow svg').classList.remove('translate-x-1');
    });
  });

  // Setup intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0', 'translate-y-10');
        entry.target.classList.add('opacity-100', 'translate-y-0');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.blog-post').forEach((post) => {
    observer.observe(post);
  });
}

function renderFooter() {
  // Social links
  renderSocialLinks(elements.footerSocialLinks, socialLinks);
  renderSocialLinks(elements.contactSocialLinks, socialLinks);

  // Quick links
  if (elements.footerQuickLinks) {
    elements.footerQuickLinks.innerHTML = navLinks.slice(0, 4).map((link) => `
      <li>
        <a href="${link.href}" class="text-linkedin-text-secondary hover:text-linkedin-blue transition-colors footer-link">
          ${link.name}
        </a>
      </li>
    `).join('');
  }

  // More links
  if (elements.footerMoreLinks) {
    elements.footerMoreLinks.innerHTML = navLinks.slice(4).map((link) => `
      <li>
        <a href="${link.href}" class="text-linkedin-text-secondary hover:text-linkedin-blue transition-colors footer-link">
          ${link.name}
        </a>
      </li>
    `).join('');
  }

  // Add event listeners to footer links
  document.querySelectorAll('.footer-link').forEach((link) => {
    link.addEventListener('click', (e) => handleLinkClick(e, link.getAttribute('href')));
  });
}

// ========================================
// Contact Form
// ========================================

function setupContactForm() {
  if (!elements.contactForm) return;

  // Floating label functionality
  function updateLabel(input, label, hasValue) {
    if (hasValue || input === document.activeElement) {
      label.classList.remove('top-3.5', 'text-linkedin-text-secondary');
      label.classList.add('-top-2', 'text-xs', 'text-linkedin-blue', 'bg-white', 'px-1');
    } else {
      label.classList.add('top-3.5', 'text-linkedin-text-secondary');
      label.classList.remove('-top-2', 'text-xs', 'text-linkedin-blue', 'bg-white', 'px-1');
    }
  }

  elements.contactName.addEventListener('focus', () => updateLabel(elements.contactName, elements.contactNameLabel, elements.contactName.value));
  elements.contactName.addEventListener('blur', () => updateLabel(elements.contactName, elements.contactNameLabel, elements.contactName.value));
  elements.contactName.addEventListener('input', () => updateLabel(elements.contactName, elements.contactNameLabel, elements.contactName.value));

  elements.contactEmail.addEventListener('focus', () => updateLabel(elements.contactEmail, elements.contactEmailLabel, elements.contactEmail.value));
  elements.contactEmail.addEventListener('blur', () => updateLabel(elements.contactEmail, elements.contactEmailLabel, elements.contactEmail.value));
  elements.contactEmail.addEventListener('input', () => updateLabel(elements.contactEmail, elements.contactEmailLabel, elements.contactEmail.value));

  elements.contactMessage.addEventListener('focus', () => updateLabel(elements.contactMessage, elements.contactMessageLabel, elements.contactMessage.value));
  elements.contactMessage.addEventListener('blur', () => updateLabel(elements.contactMessage, elements.contactMessageLabel, elements.contactMessage.value));
  elements.contactMessage.addEventListener('input', () => updateLabel(elements.contactMessage, elements.contactMessageLabel, elements.contactMessage.value));

  // Form submission
  elements.contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (state.isSubmitting) return;

    state.isSubmitting = true;

    // Show loading state
    elements.contactSubmit.disabled = true;
    elements.contactSubmit.innerHTML = `
      <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      <span>Sending...</span>
    `;

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    state.isSubmitting = false;
    state.isSubmitted = true;

    // Show success message
    elements.contactForm.classList.add('hidden');
    elements.contactSuccess.classList.remove('hidden');

    // Reset form
    elements.contactName.value = '';
    elements.contactEmail.value = '';
    elements.contactMessage.value = '';

    // Reset button
    elements.contactSubmit.disabled = false;
    elements.contactSubmit.innerHTML = `
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
      Send Message
    `;

    // Reset success message after 5 seconds
    setTimeout(() => {
      state.isSubmitted = false;
      elements.contactForm.classList.remove('hidden');
      elements.contactSuccess.classList.add('hidden');
      updateLabel(elements.contactName, elements.contactNameLabel, false);
      updateLabel(elements.contactEmail, elements.contactEmailLabel, false);
      updateLabel(elements.contactMessage, elements.contactMessageLabel, false);
    }, 5000);
  });
}

// ========================================
// Back to Top
// ========================================

function setupBackToTop() {
  if (!elements.backToTop) return;

  elements.backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================================
// Initialize
// ========================================

function init() {
  initElements();
  renderNavLinks();
  renderExperiences();
  renderEducation();
  renderSkills();
  renderProjects();
  renderBlog();
  renderFooter();
  setupContactForm();
  setupBackToTop();
  setupIntersectionObservers();
  initHeroAnimations();

  // Setup scroll handler
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Setup mobile menu button
  elements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);

  // Setup mobile menu backdrop
  elements.mobileMenuBackdrop.addEventListener('click', () => {
    state.isMobileMenuOpen = false;
    updateMobileMenu();
  });

  // Setup intersection observer for active link tracking
  const linkObserver = new IntersectionObserver(handleIntersection, {
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0,
  });

  navLinks.forEach((link) => {
    const section = document.querySelector(link.href);
    if (section) linkObserver.observe(section);
  });
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
