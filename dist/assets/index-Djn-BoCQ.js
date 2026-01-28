(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const c=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Experience",href:"#experience"},{name:"Education",href:"#education"},{name:"Skills",href:"#skills"},{name:"Projects",href:"#projects"},{name:"Blog",href:"#blog"},{name:"Contact",href:"#contact"}],v=[{icon:"github",href:"https://github.com",label:"GitHub",svg:'<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>'},{icon:"linkedin",href:"https://linkedin.com",label:"LinkedIn",svg:'<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'},{icon:"twitter",href:"https://twitter.com",label:"Twitter",svg:'<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>'},{icon:"mail",href:"mailto:alex@example.com",label:"Email",svg:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>'}],p=[{title:"Software Engineering Intern",company:"TechCorp",location:"San Francisco, CA",period:"Summer 2023",type:"Internship",description:["Developed scalable microservices using Node.js and Express, handling 10,000+ daily requests","Improved application performance by 40% through database query optimization and caching strategies","Collaborated with cross-functional teams to implement new features and resolve critical bugs","Participated in code reviews and contributed to technical documentation"]},{title:"Research Assistant",company:"University AI Lab",location:"University of Technology",period:"2022 - 2023",type:"Research",description:["Implemented machine learning algorithms for natural language processing tasks","Published paper on algorithmic optimization techniques in peer-reviewed journal","Assisted in designing experiments and analyzing large datasets","Mentored undergraduate students in research methodologies"]},{title:"Teaching Assistant",company:"CS Department",location:"University of Technology",period:"2021 - 2022",type:"Part-time",description:["Led weekly recitations for Data Structures and Algorithms course (200+ students)","Developed course materials and programming assignments","Held office hours to help students with concepts and debugging","Received 4.9/5.0 average rating from student evaluations"]}],f=["Data Structures & Algorithms","Software Engineering","Linear Algebra","Discrete Mathematics","Machine Learning","Database Systems","Operating Systems","Computer Networks"],b=[{name:"AWS Cloud Practitioner",issuer:"Amazon Web Services",year:"2023"},{name:"Google Data Analytics",issuer:"Google",year:"2023"}],y=[{name:"Python",level:95},{name:"Java",level:90},{name:"C++",level:85},{name:"JavaScript",level:92},{name:"React",level:88},{name:"Node.js",level:85},{name:"SQL",level:90},{name:"Git",level:88},{name:"AWS",level:75},{name:"Docker",level:70}],k=[{name:"Problem Solving",icon:"lightbulb"},{name:"Team Leadership",icon:"users"},{name:"Communication",icon:"message-square"},{name:"Time Management",icon:"clock"},{name:"Critical Thinking",icon:"brain"}],x=["TypeScript","Next.js","MongoDB","PostgreSQL","Redis","GraphQL","REST APIs","Kubernetes","CI/CD","Jest","Tailwind CSS","Figma","Linux","Bash","Python Pandas"],L=[{title:"AI Chat Assistant",description:"A modern chat application powered by OpenAI GPT-4, featuring real-time messaging, conversation history, and intelligent responses. Built with a clean, intuitive interface that makes AI accessible to everyone.",image:"/project1.jpg",tech:["React","Node.js","OpenAI","Socket.io","MongoDB"],github:"https://github.com",demo:"https://demo.com"},{title:"Data Analytics Dashboard",description:"A comprehensive business intelligence dashboard that transforms complex data into actionable insights. Features interactive visualizations, real-time metrics, and customizable reports for data-driven decision making.",image:"/project2.jpg",tech:["Python","D3.js","AWS","PostgreSQL","FastAPI"],github:"https://github.com",demo:"https://demo.com"},{title:"Fitness Tracker App",description:"A mobile-first fitness application that helps users track workouts, monitor progress, and achieve their health goals. Includes features like exercise logging, progress charts, and personalized recommendations.",image:"/project3.jpg",tech:["React Native","Firebase","Redux","HealthKit","Node.js"],github:"https://github.com",demo:"https://demo.com"}],w=[{title:"The Beauty of Algorithms",excerpt:"Exploring the elegant patterns and mathematical beauty hidden within algorithmic design. From sorting to graph traversal, algorithms are the poetry of computer science.",date:"Dec 15, 2023",readTime:"5 min read",category:"Computer Science",categoryColor:"bg-blue-100 text-blue-700"},{title:"Why Math Matters in CS",excerpt:"A deep dive into how mathematical thinking enhances problem-solving abilities in software engineering and why every developer should embrace mathematics.",date:"Nov 28, 2023",readTime:"7 min read",category:"Mathematics",categoryColor:"bg-purple-100 text-purple-700"},{title:"My Journey into Open Source",excerpt:"How contributing to open source projects transformed my coding skills and connected me with an amazing global community of developers.",date:"Oct 10, 2023",readTime:"4 min read",category:"Personal Growth",categoryColor:"bg-green-100 text-green-700"}];let l={isScrolled:!1,isMobileMenuOpen:!1,activeLink:"#home",canScrollLeft:!1,canScrollRight:!0,isSubmitting:!1,isSubmitted:!1};const e={};function E(){e.navbar=document.getElementById("navbar"),e.desktopNav=document.getElementById("desktop-nav"),e.mobileMenuBtn=document.getElementById("mobile-menu-btn"),e.mobileMenu=document.getElementById("mobile-menu"),e.mobileMenuBackdrop=document.getElementById("mobile-menu-backdrop"),e.mobileMenuContent=document.getElementById("mobile-menu-content"),e.mobileNavLinks=document.getElementById("mobile-nav-links"),e.menuIcon=document.getElementById("menu-icon"),e.closeIcon=document.getElementById("close-icon"),e.heroCard=document.getElementById("hero-card"),e.backToTop=document.getElementById("back-to-top"),e.experienceTimeline=document.getElementById("experience-timeline"),e.courseworkList=document.getElementById("coursework-list"),e.certificationsList=document.getElementById("certifications-list"),e.technicalSkillsList=document.getElementById("technical-skills-list"),e.softSkillsList=document.getElementById("soft-skills-list"),e.skillsTagsList=document.getElementById("skills-tags-list"),e.projectsContainer=document.getElementById("projects-container"),e.scrollLeftBtn=document.getElementById("scroll-left"),e.scrollRightBtn=document.getElementById("scroll-right"),e.blogGrid=document.getElementById("blog-grid"),e.contactSocialLinks=document.getElementById("contact-social-links"),e.footerSocialLinks=document.getElementById("footer-social-links"),e.footerQuickLinks=document.getElementById("footer-quick-links"),e.footerMoreLinks=document.getElementById("footer-more-links"),e.contactForm=document.getElementById("contact-form"),e.contactSuccess=document.getElementById("contact-success"),e.contactName=document.getElementById("contact-name"),e.contactEmail=document.getElementById("contact-email"),e.contactMessage=document.getElementById("contact-message"),e.contactNameLabel=document.getElementById("contact-name-label"),e.contactEmailLabel=document.getElementById("contact-email-label"),e.contactMessageLabel=document.getElementById("contact-message-label"),e.contactSubmit=document.getElementById("contact-submit")}function M(){l.isScrolled=window.scrollY>50,l.isScrolled?(e.navbar.classList.add("glass-nav","shadow-lg","py-3"),e.navbar.classList.remove("bg-transparent","py-5")):(e.navbar.classList.remove("glass-nav","shadow-lg","py-3"),e.navbar.classList.add("bg-transparent","py-5"))}function S(t){t.forEach(n=>{n.isIntersecting&&(l.activeLink=`#${n.target.id}`,B())})}function B(){const t=e.desktopNav.querySelectorAll("a"),n=e.mobileNavLinks.querySelectorAll("a");[...t,...n].forEach(i=>{i.getAttribute("href")===l.activeLink?(i.classList.add("text-linkedin-blue"),i.classList.remove("text-linkedin-text-secondary","hover:text-linkedin-text")):(i.classList.remove("text-linkedin-blue"),i.classList.add("text-linkedin-text-secondary","hover:text-linkedin-text"))})}function m(t,n){t.preventDefault();const i=document.querySelector(n);i&&i.scrollIntoView({behavior:"smooth"}),l.isMobileMenuOpen=!1,u()}function I(){l.isMobileMenuOpen=!l.isMobileMenuOpen,u()}function u(){l.isMobileMenuOpen?(e.mobileMenu.classList.remove("opacity-0","invisible"),e.mobileMenu.classList.add("opacity-100","visible"),e.mobileMenuContent.classList.remove("-translate-y-8","opacity-0"),e.mobileMenuContent.classList.add("translate-y-0","opacity-100"),e.menuIcon.classList.add("hidden"),e.closeIcon.classList.remove("hidden")):(e.mobileMenu.classList.add("opacity-0","invisible"),e.mobileMenu.classList.remove("opacity-100","visible"),e.mobileMenuContent.classList.add("-translate-y-8","opacity-0"),e.mobileMenuContent.classList.remove("translate-y-0","opacity-100"),e.menuIcon.classList.remove("hidden"),e.closeIcon.classList.add("hidden"))}function C(){e.desktopNav.innerHTML=c.map(t=>`
    <a
      href="${t.href}"
      data-link="${t.href}"
      class="relative px-4 py-2 text-sm font-medium transition-all rounded-md ${t.href===l.activeLink?"text-linkedin-blue":"text-linkedin-text-secondary hover:text-linkedin-text"}"
    >
      ${t.name}
      ${t.href===l.activeLink?'<span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-linkedin-blue rounded-full active-link-indicator"></span>':""}
    </a>
  `).join(""),e.desktopNav.querySelectorAll("a").forEach(t=>{t.addEventListener("click",n=>m(n,t.getAttribute("data-link")))}),e.mobileNavLinks.innerHTML=c.map((t,n)=>`
    <a
      href="${t.href}"
      data-link="${t.href}"
      class="px-4 py-3 text-base font-medium rounded-xl transition-all ${t.href===l.activeLink?"bg-linkedin-light text-linkedin-blue":"text-linkedin-text hover:bg-gray-50"}"
      style="animation-delay: ${n*50}ms"
    >
      ${t.name}
    </a>
  `).join(""),e.mobileNavLinks.querySelectorAll("a").forEach(t=>{t.addEventListener("click",n=>m(n,t.getAttribute("data-link")))})}function $(){setTimeout(()=>{e.heroCard.classList.remove("opacity-0","translate-y-10"),e.heroCard.classList.add("opacity-100","translate-y-0"),setTimeout(()=>{const t=document.getElementById("hero-avatar");t&&(t.classList.remove("opacity-0","scale-90"),t.classList.add("opacity-100","scale-100"))},200),setTimeout(()=>{const t=document.getElementById("hero-name");t&&(t.classList.remove("opacity-0","translate-y-5"),t.classList.add("opacity-100","translate-y-0"))},300),setTimeout(()=>{const t=document.getElementById("hero-tagline");t&&(t.classList.remove("opacity-0","translate-y-5"),t.classList.add("opacity-100","translate-y-0"))},400),setTimeout(()=>{const t=document.getElementById("hero-social");t&&(t.classList.remove("opacity-0","translate-y-5"),t.classList.add("opacity-100","translate-y-0"))},500),setTimeout(()=>{const t=document.getElementById("hero-actions");t&&(t.classList.remove("opacity-0","translate-y-5"),t.classList.add("opacity-100","translate-y-0"))},600)},100)}function j(){const t={root:null,rootMargin:"0px",threshold:.1},n=new IntersectionObserver(o=>{o.forEach(s=>{s.isIntersecting&&(s.target.classList.remove("opacity-0","translate-y-10","translate-x-10","-translate-x-10"),s.target.classList.add("opacity-100","translate-y-0","translate-x-0"))})},t);document.querySelectorAll('[id$="-header"], [id$="-content"], [id$="-main"], [id$="-gpa"], [id$="-coursework"], [id$="-certifications"], [id$="-technical"], [id$="-soft"], [id$="-cloud"]').forEach(o=>n.observe(o))}function h(t,n){t&&(t.innerHTML=n.map(i=>`
    <a
      href="${i.href}"
      target="_blank"
      rel="noopener noreferrer"
      class="w-10 h-10 rounded-lg bg-linkedin-bg flex items-center justify-center text-linkedin-text-secondary hover:bg-linkedin-blue hover:text-white transition-all hover:scale-110"
      aria-label="${i.label}"
    >
      <svg class="w-5 h-5" ${i.icon==="mail"?'fill="none" stroke="currentColor" viewBox="0 0 24 24"':'fill="currentColor" viewBox="0 0 24 24"'}>
        ${i.svg}
      </svg>
    </a>
  `).join(""))}function T(){if(!e.experienceTimeline)return;const t=p.map((i,o)=>`
    <div
      class="experience-item relative transition-all duration-700 opacity-0 translate-y-10"
      style="transition-delay: ${200+o*150}ms"
      data-index="${o}"
    >
      <!-- Timeline Dot -->
      <div class="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 bg-linkedin-blue rounded-full border-4 border-white shadow-lg z-10"></div>

      <!-- Content Card -->
      <div class="ml-12 sm:ml-0 ${o%2===0?"sm:mr-[52%]":"sm:ml-[52%]"}">
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
                  ${i.type}
                </span>
              </div>
              <h3 class="text-xl font-bold text-linkedin-text">
                ${i.title}
              </h3>
              <p class="text-lg text-linkedin-text-secondary">
                ${i.company}
              </p>
            </div>
          </div>

          <!-- Meta Info -->
          <div class="flex flex-wrap gap-4 text-sm text-linkedin-text-secondary mb-4">
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>${i.period}</span>
            </div>
            <div class="flex items-center gap-1.5">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>${i.location}</span>
            </div>
          </div>

          <!-- Description -->
          <ul class="space-y-2">
            ${i.description.map(s=>`
              <li class="flex items-start gap-2 text-linkedin-text-secondary">
                <svg class="w-4 h-4 text-linkedin-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
                <span>${s}</span>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    </div>
  `).join("");e.experienceTimeline.innerHTML=`
    <!-- Timeline Line -->
    <div class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/50 to-linkedin-light hidden sm:block"></div>
    <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-linkedin-blue via-linkedin-blue/50 to-linkedin-light sm:hidden"></div>
    ${t}
  `,document.querySelectorAll(".experience-item").forEach(i=>{i.addEventListener("mouseenter",()=>{i.querySelector(".experience-card").classList.add("shadow-card-hover","-translate-y-1")}),i.addEventListener("mouseleave",()=>{i.querySelector(".experience-card").classList.remove("shadow-card-hover","-translate-y-1")})});const n=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(o.target.classList.remove("opacity-0","translate-y-10"),o.target.classList.add("opacity-100","translate-y-0"))})},{threshold:.1});document.querySelectorAll(".experience-item").forEach(i=>{n.observe(i)})}function A(){e.courseworkList&&(e.courseworkList.innerHTML=f.map(t=>`
    <span class="px-4 py-2 bg-linkedin-bg text-linkedin-text text-sm font-medium rounded-lg hover:bg-linkedin-light hover:text-linkedin-blue transition-colors cursor-default">
      ${t}
    </span>
  `).join(""),e.certificationsList&&(e.certificationsList.innerHTML=b.map(t=>`
      <div class="p-4 bg-linkedin-bg rounded-xl hover:bg-linkedin-light transition-colors">
        <p class="font-medium text-linkedin-text">${t.name}</p>
        <p class="text-sm text-linkedin-text-secondary">
          ${t.issuer} • ${t.year}
        </p>
      </div>
    `).join("")))}function H(){if(!e.technicalSkillsList)return;if(e.technicalSkillsList.innerHTML=y.map((s,a)=>`
    <div class="skill-item group" data-skill="${s.name}">
      <div class="flex items-center justify-between mb-2">
        <span class="skill-name font-medium transition-colors text-linkedin-text">
          ${s.name}
        </span>
        <span class="text-sm text-linkedin-text-secondary">
          ${s.level}%
        </span>
      </div>
      <div class="h-2 bg-linkedin-bg rounded-full overflow-hidden">
        <div
          class="skill-bar h-full bg-gradient-to-r from-linkedin-blue to-linkedin-dark rounded-full transition-all duration-1000 ease-out opacity-0"
          data-level="${s.level}"
          style="transition-delay: ${300+a*50}ms"
        ></div>
      </div>
    </div>
  `).join(""),document.querySelectorAll(".skill-item").forEach(s=>{s.addEventListener("mouseenter",()=>{const a=s.querySelector(".skill-name");a.classList.add("text-linkedin-blue"),a.classList.remove("text-linkedin-text")}),s.addEventListener("mouseleave",()=>{const a=s.querySelector(".skill-name");a.classList.remove("text-linkedin-blue"),a.classList.add("text-linkedin-text")})}),e.softSkillsList){const s={lightbulb:'<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>',users:'<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>',"message-square":'<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>',clock:'<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',brain:'<path d="M9.5 2A2.5 2.5 0 0112 4.5v15a2.5 2.5 0 01-4.96.44 2.5 2.5 0 01-2.96-3.08 3 3 0 01-.34-5.58 2.5 2.5 0 011.32-4.24 2.5 2.5 0 014.44-4A2.5 2.5 0 019.5 2z"/><path d="M14.5 2A2.5 2.5 0 0012 4.5v15a2.5 2.5 0 004.96.44 2.5 2.5 0 002.96-3.08 3 3 0 00.34-5.58 2.5 2.5 0 01-1.32-4.24 2.5 2.5 0 00-4.44-4A2.5 2.5 0 0014.5 2z"/>'};e.softSkillsList.innerHTML=k.map((a,r)=>`
      <div class="soft-skill-item group p-5 bg-linkedin-bg rounded-xl hover:bg-linkedin-light transition-all duration-300 cursor-default opacity-0 translate-y-5" style="transition-delay: ${400+r*100}ms" data-skill="${a.name}">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
            <svg class="w-5 h-5 text-linkedin-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              ${s[a.icon]}
            </svg>
          </div>
          <span class="skill-name font-medium text-linkedin-text group-hover:text-linkedin-blue transition-colors">
            ${a.name}
          </span>
        </div>
      </div>
    `).join("")}e.skillsTagsList&&(e.skillsTagsList.innerHTML=x.map((s,a)=>`
      <span class="skill-tag px-4 py-2 bg-linkedin-bg text-linkedin-text text-sm font-medium rounded-full hover:bg-linkedin-blue hover:text-white transition-all duration-300 cursor-default opacity-0 scale-90" style="transition-delay: ${500+a*30}ms">
        ${s}
      </span>
    `).join(""));const t=new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting&&(a.target.classList.remove("opacity-0","translate-y-5","scale-90"),a.target.classList.add("opacity-100","translate-y-0","scale-100"),a.target.querySelectorAll(".skill-bar").forEach(d=>{setTimeout(()=>{d.style.width=`${d.dataset.level}%`,d.classList.remove("opacity-0"),d.classList.add("opacity-100")},100)}))})},{threshold:.1}),n=document.getElementById("skills-technical"),i=document.getElementById("skills-soft"),o=document.getElementById("skills-cloud");n&&t.observe(n),i&&t.observe(i),o&&t.observe(o)}function q(){if(!e.projectsContainer)return;e.projectsContainer.innerHTML=L.map((n,i)=>`
    <div
      class="project-item flex-shrink-0 w-[85vw] sm:w-[600px] lg:w-[700px] snap-start transition-all duration-700 opacity-0 translate-y-10"
      style="transition-delay: ${200+i*150}ms"
      data-index="${i}"
    >
      <div class="project-card bg-white rounded-2xl shadow-linkedin overflow-hidden h-full transition-all duration-300">
        <!-- Project Image -->
        <div class="relative h-64 sm:h-80 overflow-hidden">
          <img
            src="${n.image}"
            alt="${n.title}"
            class="project-image w-full h-full object-cover transition-transform duration-500"
            onerror="this.src='data:image/svg+xml,%3Csvg xmlns\\='http://www.w3.org/2000/svg' viewBox\\='0 0 24 24' fill\\='%23E2F0FE'%3E%3Crect width\\='24' height\\='24' fill\\='%23E2F0FE'/%3E%3Ctext x\\='12' y\\='12' text-anchor\\='middle' dy\\='.3em' fill\\='%230A66C2' font-size\\='14' font-family\\='sans-serif'%3E${n.title}%3C/text%3E%3C/svg%3E'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          <!-- Hover Overlay -->
          <div class="project-overlay absolute inset-0 bg-linkedin-blue/80 flex items-center justify-center gap-4 transition-opacity duration-300 opacity-0">
            ${n.github?`
              <a
                href="${n.github}"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-linkedin-blue hover:scale-110 transition-transform"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            `:""}
            ${n.demo?`
              <a
                href="${n.demo}"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 rounded-full bg-white flex items-center justify-center text-linkedin-blue hover:scale-110 transition-transform"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            `:""}
          </div>
        </div>

        <!-- Content -->
        <div class="p-6 sm:p-8">
          <h3 class="text-2xl font-bold text-linkedin-text mb-3">
            ${n.title}
          </h3>
          <p class="text-linkedin-text-secondary leading-relaxed mb-5">
            ${n.description}
          </p>

          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2">
            ${n.tech.map(o=>`
              <span class="px-3 py-1.5 bg-linkedin-light text-linkedin-blue text-sm font-medium rounded-lg">
                ${o}
              </span>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `).join(""),document.querySelectorAll(".project-item").forEach(n=>{const i=n.querySelector(".project-overlay"),o=n.querySelector(".project-image"),s=n.querySelector(".project-card");n.addEventListener("mouseenter",()=>{i.classList.remove("opacity-0"),i.classList.add("opacity-100"),o.classList.add("scale-105"),s.classList.add("shadow-card-hover")}),n.addEventListener("mouseleave",()=>{i.classList.add("opacity-0"),i.classList.remove("opacity-100"),o.classList.remove("scale-105"),s.classList.remove("shadow-card-hover")})});const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.remove("opacity-0","translate-y-10"),i.target.classList.add("opacity-100","translate-y-0"))})},{threshold:.1});document.querySelectorAll(".project-item").forEach(n=>{t.observe(n)}),N()}function N(){if(!e.projectsContainer)return;function t(){const{scrollLeft:n,scrollWidth:i,clientWidth:o}=e.projectsContainer;l.canScrollLeft=n>0,l.canScrollRight=n<i-o-10,e.scrollLeftBtn.disabled=!l.canScrollLeft,e.scrollRightBtn.disabled=!l.canScrollRight,l.canScrollLeft?(e.scrollLeftBtn.classList.remove("border-linkedin-border","text-linkedin-text-secondary","cursor-not-allowed"),e.scrollLeftBtn.classList.add("border-linkedin-blue","text-linkedin-blue")):(e.scrollLeftBtn.classList.add("border-linkedin-border","text-linkedin-text-secondary","cursor-not-allowed"),e.scrollLeftBtn.classList.remove("border-linkedin-blue","text-linkedin-blue")),l.canScrollRight?(e.scrollRightBtn.classList.remove("border-linkedin-border","text-linkedin-text-secondary","cursor-not-allowed"),e.scrollRightBtn.classList.add("border-linkedin-blue","text-linkedin-blue")):(e.scrollRightBtn.classList.add("border-linkedin-border","text-linkedin-text-secondary","cursor-not-allowed"),e.scrollRightBtn.classList.remove("border-linkedin-blue","text-linkedin-blue"))}e.scrollLeftBtn.addEventListener("click",()=>{const n=e.projectsContainer.clientWidth*.8;e.projectsContainer.scrollBy({left:-n,behavior:"smooth"})}),e.scrollRightBtn.addEventListener("click",()=>{const n=e.projectsContainer.clientWidth*.8;e.projectsContainer.scrollBy({left:n,behavior:"smooth"})}),e.projectsContainer.addEventListener("scroll",t,{passive:!0}),t()}function z(){if(!e.blogGrid)return;e.blogGrid.innerHTML=w.map((n,i)=>`
    <article class="blog-post group bg-white rounded-2xl shadow-linkedin overflow-hidden transition-all duration-700 cursor-pointer opacity-0 translate-y-10" style="transition-delay: ${200+i*100}ms" data-index="${i}">
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
          <span class="px-3 py-1 text-xs font-medium rounded-full ${n.categoryColor}">
            ${n.category}
          </span>
          <div class="flex items-center gap-3 text-sm text-linkedin-text-secondary">
            <div class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>${n.date}</span>
            </div>
          </div>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-linkedin-text mb-3 group-hover:text-linkedin-blue transition-colors">
          ${n.title}
        </h3>

        <!-- Excerpt -->
        <p class="text-linkedin-text-secondary text-sm leading-relaxed mb-4">
          ${n.excerpt}
        </p>

        <!-- Footer -->
        <div class="flex items-center justify-between pt-4 border-t border-linkedin-border">
          <div class="flex items-center gap-1 text-sm text-linkedin-text-secondary">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>${n.readTime}</span>
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
  `).join(""),document.querySelectorAll(".blog-post").forEach(n=>{n.addEventListener("mouseenter",()=>{n.classList.add("shadow-card-hover","-translate-y-2"),n.querySelector(".group-hover-bg").classList.add("scale-150"),n.querySelector(".group-hover-icon").classList.add("scale-110","rotate-3"),n.querySelector(".group-hover-arrow").classList.add("translate-x-1"),n.querySelector(".group-hover-arrow svg").classList.add("translate-x-1")}),n.addEventListener("mouseleave",()=>{n.classList.remove("shadow-card-hover","-translate-y-2"),n.querySelector(".group-hover-bg").classList.remove("scale-150"),n.querySelector(".group-hover-icon").classList.remove("scale-110","rotate-3"),n.querySelector(".group-hover-arrow").classList.remove("translate-x-1"),n.querySelector(".group-hover-arrow svg").classList.remove("translate-x-1")})});const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&(i.target.classList.remove("opacity-0","translate-y-10"),i.target.classList.add("opacity-100","translate-y-0"))})},{threshold:.1});document.querySelectorAll(".blog-post").forEach(n=>{t.observe(n)})}function O(){h(e.footerSocialLinks,v),h(e.contactSocialLinks,v),e.footerQuickLinks&&(e.footerQuickLinks.innerHTML=c.slice(0,4).map(t=>`
      <li>
        <a href="${t.href}" class="text-linkedin-text-secondary hover:text-linkedin-blue transition-colors footer-link">
          ${t.name}
        </a>
      </li>
    `).join("")),e.footerMoreLinks&&(e.footerMoreLinks.innerHTML=c.slice(4).map(t=>`
      <li>
        <a href="${t.href}" class="text-linkedin-text-secondary hover:text-linkedin-blue transition-colors footer-link">
          ${t.name}
        </a>
      </li>
    `).join("")),document.querySelectorAll(".footer-link").forEach(t=>{t.addEventListener("click",n=>m(n,t.getAttribute("href")))})}function P(){if(!e.contactForm)return;function t(n,i,o){o||n===document.activeElement?(i.classList.remove("top-3.5","text-linkedin-text-secondary"),i.classList.add("-top-2","text-xs","text-linkedin-blue","bg-white","px-1")):(i.classList.add("top-3.5","text-linkedin-text-secondary"),i.classList.remove("-top-2","text-xs","text-linkedin-blue","bg-white","px-1"))}e.contactName.addEventListener("focus",()=>t(e.contactName,e.contactNameLabel,e.contactName.value)),e.contactName.addEventListener("blur",()=>t(e.contactName,e.contactNameLabel,e.contactName.value)),e.contactName.addEventListener("input",()=>t(e.contactName,e.contactNameLabel,e.contactName.value)),e.contactEmail.addEventListener("focus",()=>t(e.contactEmail,e.contactEmailLabel,e.contactEmail.value)),e.contactEmail.addEventListener("blur",()=>t(e.contactEmail,e.contactEmailLabel,e.contactEmail.value)),e.contactEmail.addEventListener("input",()=>t(e.contactEmail,e.contactEmailLabel,e.contactEmail.value)),e.contactMessage.addEventListener("focus",()=>t(e.contactMessage,e.contactMessageLabel,e.contactMessage.value)),e.contactMessage.addEventListener("blur",()=>t(e.contactMessage,e.contactMessageLabel,e.contactMessage.value)),e.contactMessage.addEventListener("input",()=>t(e.contactMessage,e.contactMessageLabel,e.contactMessage.value)),e.contactForm.addEventListener("submit",async n=>{n.preventDefault(),!l.isSubmitting&&(l.isSubmitting=!0,e.contactSubmit.disabled=!0,e.contactSubmit.innerHTML=`
      <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      <span>Sending...</span>
    `,await new Promise(i=>setTimeout(i,1500)),l.isSubmitting=!1,l.isSubmitted=!0,e.contactForm.classList.add("hidden"),e.contactSuccess.classList.remove("hidden"),e.contactName.value="",e.contactEmail.value="",e.contactMessage.value="",e.contactSubmit.disabled=!1,e.contactSubmit.innerHTML=`
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
      </svg>
      Send Message
    `,setTimeout(()=>{l.isSubmitted=!1,e.contactForm.classList.remove("hidden"),e.contactSuccess.classList.add("hidden"),t(e.contactName,e.contactNameLabel,!1),t(e.contactEmail,e.contactEmailLabel,!1),t(e.contactMessage,e.contactMessageLabel,!1)},5e3))})}function D(){e.backToTop&&e.backToTop.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})}function g(){E(),C(),T(),A(),H(),q(),z(),O(),P(),D(),j(),$(),window.addEventListener("scroll",M,{passive:!0}),e.mobileMenuBtn.addEventListener("click",I),e.mobileMenuBackdrop.addEventListener("click",()=>{l.isMobileMenuOpen=!1,u()});const t=new IntersectionObserver(S,{rootMargin:"-50% 0px -50% 0px",threshold:0});c.forEach(n=>{const i=document.querySelector(n.href);i&&t.observe(i)})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",g):g();
