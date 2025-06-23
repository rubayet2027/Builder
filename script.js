// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Update active navigation link on scroll
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingNavLink) {
                    correspondingNavLink.classList.add('active');
                }
            }
        });
    }

    // Scroll animations
    function animateOnScroll() {
        const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
        
        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }

    // Add animation classes to elements
    function addAnimationClasses() {
        // Profile section elements
        const profileImage = document.querySelector('.profile-image');
        const profileName = document.querySelector('.profile-name');
        const profileTitle = document.querySelector('.profile-title');
        const socialLinks = document.querySelector('.social-links');

        if (profileImage) profileImage.classList.add('fade-in');
        if (profileName) profileName.classList.add('fade-in');
        if (profileTitle) profileTitle.classList.add('fade-in');
        if (socialLinks) socialLinks.classList.add('fade-in');

        // About section elements
        const aboutTexts = document.querySelectorAll('.about-text');
        aboutTexts.forEach((text, index) => {
            if (index % 2 === 0) {
                text.classList.add('slide-in-left');
            } else {
                text.classList.add('slide-in-right');
            }
        });

        // Skills section elements
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            card.classList.add('fade-in');
        });

        // Project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.classList.add('fade-in');
        });

        // Writeup cards
        const writeupCards = document.querySelectorAll('.writeup-card');
        writeupCards.forEach(card => {
            card.classList.add('fade-in');
        });
    }

    // Contact form functionality
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const firstName = this.querySelector('input[placeholder="First Name"]').value;
            const lastName = this.querySelector('input[placeholder="Last Name"]').value;
            const email = this.querySelector('input[placeholder="Email id"]').value;
            const message = this.querySelector('textarea').value;

            // Basic validation
            if (!firstName || !lastName || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Parallax effect for background elements
    function parallaxEffect() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }

    // Mobile menu toggle (if needed for smaller screens)
    function createMobileMenu() {
        const header = document.querySelector('.header');
        const nav = document.querySelector('.nav');
        
        if (window.innerWidth <= 768) {
            // Add mobile menu functionality here if needed
            // This is a placeholder for mobile menu implementation
        }
    }

    // Typing effect for profile title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Initialize typing effect
    const profileTitle = document.querySelector('.profile-title');
    if (profileTitle) {
        const originalText = profileTitle.textContent;
        // Start typing effect after a delay
        setTimeout(() => {
            typeWriter(profileTitle, originalText, 80);
        }, 1000);
    }

    // Skill card hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Project card click handlers
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectTitle = this.querySelector('.project-title').textContent;
            // You can add project details modal or navigation here
            console.log(`Clicked on project: ${projectTitle}`);
        });
    });

    // Writeup card click handlers
    const writeupCards = document.querySelectorAll('.writeup-card');
    writeupCards.forEach(card => {
        card.addEventListener('click', function() {
            const writeupTitle = this.querySelector('.writeup-title').textContent;
            // You can add writeup details modal or navigation here
            console.log(`Clicked on writeup: ${writeupTitle}`);
        });
    });

    // Social link hover effects
    const socialLinks = document.querySelectorAll('.social-link, .footer-social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Initialize everything
    addAnimationClasses();
    createMobileMenu();

    // Event listeners
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
        animateOnScroll();
        parallaxEffect();
    });

    window.addEventListener('resize', function() {
        createMobileMenu();
    });

    // Initial calls
    updateActiveNavLink();
    animateOnScroll();

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });

    // Smooth reveal animation for page load
    setTimeout(() => {
        const profileSection = document.querySelector('.profile-section');
        if (profileSection) {
            profileSection.style.opacity = '1';
            profileSection.style.transform = 'translateY(0)';
        }
    }, 100);
});

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add some interactive features
document.addEventListener('keydown', function(e) {
    // Add keyboard navigation
    if (e.key === 'Escape') {
        // Close any open modals or menus
    }
});

// Add intersection observer for better performance
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });
}