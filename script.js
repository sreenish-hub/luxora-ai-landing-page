// ========================================
// LUXORA AI - Premium Animation Script
// GSAP ScrollTrigger Animations
// ========================================

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ========================================
// CONFIGURATION
// ========================================
const config = {
    ease: {
        smooth: "power4.out",
        elastic: "elastic.out(1, 0.5)",
        expo: "expo.out"
    },
    duration: {
        fast: 0.4,
        medium: 0.8,
        slow: 1.2
    }
};

// ========================================
// INITIALIZE ON DOM LOAD
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initPhilosophyAnimations();
    initFeaturesHorizontalScroll();
    initUseCasesParallax();
    initTechnologyAnimations();
    initCTAAnimations();
    initHoverEffects();
});

// ========================================
// HERO SECTION ANIMATIONS
// ========================================
function initHeroAnimations() {
    const heroLines = document.querySelectorAll('.hero-line');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCTA = document.querySelector('.hero-cta');
    const heroBgImage = document.querySelector('.hero-bg-image');
    const heroContent = document.querySelector('.hero-content');
    
    // Guard clauses - prevent errors if elements don't exist
    if (heroLines.length === 0 || !heroSubtitle || !heroCTA) return;
    
    // Animate each line with stagger
    gsap.to(heroLines, {
        y: 0,
        opacity: 1,
        duration: config.duration.slow,
        stagger: 0.15,
        ease: config.ease.smooth,
        delay: 0.3
    });
    
    // Animate subtitle after lines
    gsap.to(heroSubtitle, {
        y: 0,
        opacity: 1,
        duration: config.duration.medium,
        ease: config.ease.smooth,
        delay: 1.2
    });
    
    // Animate CTA after subtitle
    gsap.to(heroCTA, {
        y: 0,
        opacity: 1,
        duration: config.duration.medium,
        ease: config.ease.smooth,
        delay: 1.6
    });
    
    // Very subtle parallax on background image (barely noticeable - luxury feel)
    if (heroBgImage) {
        gsap.to(heroBgImage, {
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 2  // Higher scrub value = slower, smoother movement
            },
            y: -80,  // Subtle upward movement
            scale: 1.05,  // Slight zoom for depth
            ease: 'none'
        });
    }
    
    // Content fades out as you scroll past hero
    if (heroContent) {
        gsap.to(heroContent, {
            scrollTrigger: {
                trigger: '.hero-section',
                start: 'top top',
                end: 'bottom top',
                scrub: 1
            },
            y: -100,
            opacity: 0.3,
            ease: 'none'
        });
    }
}

// ========================================
// PHILOSOPHY SECTION ANIMATIONS
// ========================================
function initPhilosophyAnimations() {
    const headline = document.querySelector('.philosophy-headline');
    const body = document.querySelector('.philosophy-body');
    
    // Guard clause
    if (!headline || !body) return;
    
    // Headline fade in
    gsap.from(headline, {
        scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: config.duration.slow,
        ease: config.ease.smooth
    });
    
    // Body text fade in (delayed)
    gsap.from(body, {
        scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: config.duration.slow,
        ease: config.ease.smooth,
        delay: 0.3
    });
    
    // Parallax on scroll past
    gsap.to('.philosophy-grid', {
        scrollTrigger: {
            trigger: '.philosophy-section',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: -50,
        ease: 'none'
    });
}

// ========================================
// FEATURES HORIZONTAL SCROLL
// ========================================
function initFeaturesHorizontalScroll() {
    const section = document.querySelector('.features-section');
    const track = document.querySelector('.features-track');
    const cards = document.querySelectorAll('.feature-card');
    
    // Only apply horizontal scroll on desktop
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
        // Guard clause
        if (!track) return;
        
        // Calculate total scroll distance (fixed: removed arbitrary 0.1)
        const scrollDistance = track.scrollWidth - window.innerWidth;
        
        // Pin section and scroll horizontally
        gsap.to(track, {
            x: -scrollDistance,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${scrollDistance * 2}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });
        
        // Animate cards sliding in from right as they come into view
        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: () => `+=${scrollDistance * 2}`,
                    scrub: 1
                },
                x: 200,
                opacity: 0.3,
                duration: 0.5,
                delay: index * 0.1
            });
        });
    });
    
    // On mobile, simple fade-in animation
    mm.add("(max-width: 767px)", () => {
        cards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    end: 'top 30%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: config.duration.medium,
                ease: config.ease.smooth,
                delay: index * 0.1
            });
        });
    });
}

// ========================================
// USE CASES PARALLAX ANIMATIONS
// ========================================
function initUseCasesParallax() {
    const cards = document.querySelectorAll('.use-case-card');
    
    cards.forEach((card, index) => {
        const bg = card.querySelector('.use-case-bg');
        const content = card.querySelector('.use-case-content');
        
        // Guard clauses
        if (!bg || !content) return;
        
        // Cache offsetHeight to prevent layout thrashing during scroll
        const cardHeight = card.offsetHeight;
        
        // Parallax background (slower scroll)
        gsap.to(bg, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -cardHeight * 0.3,  // Use cached value
            ease: 'none'
        });
        
        // Content fade in
        gsap.from(content, {
            scrollTrigger: {
                trigger: card,
                start: 'top 70%',
                end: 'top 30%',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            duration: config.duration.slow,
            ease: config.ease.smooth,
            delay: 0.2
        });
    });
}

// ========================================
// TECHNOLOGY SECTION ANIMATIONS
// ========================================
function initTechnologyAnimations() {
    const headline = document.querySelector('.technology-headline');
    const body = document.querySelector('.technology-body');
    const stats = document.querySelectorAll('.stat-item');
    const dataLine = document.getElementById('dataLine');
    const dataPoints = document.querySelectorAll('.data-point');
    
    // Text reveals
    gsap.from([headline, body], {
        scrollTrigger: {
            trigger: '.technology-section',
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: config.duration.slow,
        stagger: 0.2,
        ease: config.ease.smooth
    });
    
    // Stats stagger
    gsap.from(stats, {
        scrollTrigger: {
            trigger: '.technology-stats',
            start: 'top 80%',
            end: 'top 40%',
            toggleActions: 'play none none reverse'
        },
        y: 30,
        opacity: 0,
        duration: config.duration.medium,
        stagger: 0.15,
        ease: config.ease.smooth
    });
    
    // Animated data visualization line
    if (dataLine) {
        gsap.to(dataLine, {
            scrollTrigger: {
                trigger: '.data-viz',
                start: 'top 80%',
                end: 'top 30%',
                toggleActions: 'play none none reverse'
            },
            strokeDashoffset: 0,
            duration: 2,
            ease: config.ease.smooth
        });
    }
    
    // Animated data points
    if (dataPoints.length > 0) {
        gsap.to(dataPoints, {
            scrollTrigger: {
                trigger: '.data-viz',
                start: 'top 80%',
                end: 'top 30%',
                toggleActions: 'play none none reverse'
            },
            opacity: 1,
            scale: 1,
            duration: config.duration.fast,
            stagger: 0.2,
            ease: config.ease.elastic,
            delay: 1.5
        });
    }
    
    // Continuous subtle pulse on data points - only when visible
    if (dataPoints.length > 0) {
        gsap.timeline({
            scrollTrigger: {
                trigger: '.data-viz',
                start: 'top bottom',
                end: 'bottom top',
                onLeave: () => gsap.killTweensOf(dataPoints),
                onLeaveBack: () => gsap.killTweensOf(dataPoints)
            }
        })
        .to(dataPoints, {
            scale: 1.3,
            opacity: 0.6,
            duration: 2,
            stagger: 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        }, 3);
    }
}

// ========================================
// FINAL CTA SECTION ANIMATIONS
// ========================================
function initCTAAnimations() {
    const headline = document.querySelector('.cta-headline');
    const subtext = document.querySelector('.cta-subtext');
    const button = document.querySelector('.cta-section .cta-button');
    
    // Gentle fade in for all elements
    gsap.from([headline, subtext, button], {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%',
            end: 'top 30%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: config.duration.slow,
        stagger: 0.2,
        ease: config.ease.smooth
    });
}

// ========================================
// HOVER MICRO-INTERACTIONS
// ========================================
function initHoverEffects() {
    // Feature cards lift on hover
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -8,
                duration: config.duration.fast,
                ease: config.ease.smooth
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: config.duration.fast,
                ease: config.ease.smooth
            });
        });
    });
    
    // CTA button pulse on hover
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: config.duration.fast,
                ease: config.ease.smooth
            });
        });
        
        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: config.duration.fast,
                ease: config.ease.smooth
            });
        });
    });
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
// Smooth scroll for anchor links (native - no GSAP plugin needed)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return; // Skip if href is just '#'
        
        const target = document.querySelector(targetId);
        
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// ========================================
// PERFORMANCE MONITORING (Development)
// ========================================
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    // Log scroll performance
    let frameCount = 0;
    let lastTime = performance.now();
    
    ScrollTrigger.addEventListener('refresh', () => {
        console.log('ScrollTrigger refreshed');
    });
    
    // FPS Counter (for development)
    function checkFPS() {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime >= lastTime + 1000) {
            console.log(`FPS: ${frameCount}`);
            frameCount = 0;
            lastTime = currentTime;
        }
        
        requestAnimationFrame(checkFPS);
    }
    
    // Uncomment to monitor FPS
    // checkFPS();
}

// ========================================
// RESIZE HANDLER (Debounced)
// ========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});

// ========================================
// ACCESSIBILITY: Respect reduced motion
// ========================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable all GSAP animations
    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    
    // Show all content immediately
    gsap.set('.hero-line, .hero-subtitle, .hero-cta', { opacity: 1, y: 0 });
    console.log('Animations disabled - user prefers reduced motion');
}

// ========================================
// EXPORT FOR EXTERNAL USE (Optional)
// ========================================
window.LuxoraAnimations = {
    config,
    refresh: () => ScrollTrigger.refresh(),
    kill: () => {
        gsap.globalTimeline.clear();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
};

// Production-safe logging
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('🎬 LUXORA AI animations initialized');
}
