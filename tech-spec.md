# Technical Specification

## Component Inventory

### shadcn/ui Components (Not applicable - using vanilla HTML/CSS/JS)
Since we're using traditional HTML tech stack, we'll build custom components.

### Custom Components to Build:
1. **Navbar** - Fixed navigation with scroll effect
2. **ThemeToggle** - Dark/light mode switcher
3. **HeroSection** - Main introduction with typing effect
4. **AboutSection** - Bio and background
5. **SkillsGrid** - Technology icons grid
6. **ProjectCard** - Individual project display
7. **ProjectsSection** - Projects grid container
8. **GitHubCTA** - Call to action section
9. **Footer** - Social links and copyright
10. **NeuralNetworkCanvas** - Animated background
11. **ScrollProgress** - Progress indicator bar
12. **ScrollReveal** - Intersection observer wrapper

### Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load sequence | CSS + JS | CSS animations triggered by JS on DOMContentLoaded | Low |
| Scroll reveal | Intersection Observer | Custom observer adding 'visible' class | Medium |
| Typing effect | Custom JS | setInterval with character-by-character reveal | Medium |
| Theme toggle | CSS Variables | CSS custom properties + data-theme attribute | Low |
| Icon floating | CSS Keyframes | @keyframes float animation | Low |
| Card hover effects | CSS Transitions | transform + box-shadow transitions | Low |
| Neural network canvas | Canvas API | requestAnimationFrame loop with particles | High |
| Scroll progress | JS + CSS | scroll event updating width percentage | Low |
| Staggered reveals | CSS + JS | animation-delay based on element index | Medium |
| Button interactions | CSS Transitions | scale + shadow transitions | Low |

## Animation Library Choices

### Primary: CSS Animations + Transitions
- All hover effects
- Page load animations
- Scroll reveals
- Icon floating

### Secondary: Custom JavaScript
- Typing effect
- Intersection Observer for scroll triggers
- Theme toggle logic
- Scroll progress indicator
- Neural network canvas animation

### Rationale:
- No external animation libraries needed for this project
- CSS animations are performant and sufficient
- Custom JS gives full control over behavior
- Keeps bundle size minimal

## Project File Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── styles.css          # Main stylesheet
│   ├── animations.css      # Animation keyframes
│   └── themes.css          # Light/dark theme variables
├── js/
│   ├── main.js             # Main JavaScript
│   ├── typing.js           # Typing effect
│   ├── theme.js            # Theme toggle
│   ├── scroll-reveal.js    # Scroll animations
│   ├── canvas-bg.js        # Neural network background
│   └── scroll-progress.js  # Progress indicator
├── assets/
│   ├── images/             # Project screenshots
│   └── icons/              # Tech stack icons
└── README.md
```

## Dependencies

### External (CDN):
- **Inter Font**: Google Fonts
- **Lucide Icons**: CDN or SVG sprites

### No Build Tools:
- Pure HTML/CSS/JS
- No bundlers, no frameworks
- Direct browser execution

## Technical Notes

### Performance:
- Use `will-change` sparingly on animated elements
- Debounce scroll events if needed
- Use `transform` and `opacity` for GPU acceleration
- Lazy load images below the fold

### Accessibility:
- Respect `prefers-reduced-motion`
- Proper heading hierarchy
- Alt text on all images
- Focus states on interactive elements
- Color contrast compliance

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox required
- Intersection Observer API required
- CSS Custom Properties required
