document.addEventListener('DOMContentLoaded', () => {
  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate sections on scroll with faster animations and earlier trigger points
  gsap.utils.toArray('section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 30,  
      duration: 0.6,  
      scrollTrigger: {
        trigger: section,
        start: 'top 90%', 
        end: 'top 40%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Faster hero section animations
  gsap.from('.hero h1', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: 0.2  
  });

  gsap.from('.hero p', {
    opacity: 0,
    y: 20,
    duration: 0.6,
    delay: 0.4  
  });

  gsap.from('.hero-visual', {
    opacity: 0,
    x: 30,
    duration: 0.6,
    delay: 0.6  
  });

  // Faster stats animations
  gsap.utils.toArray('.stat').forEach(stat => {
    gsap.from(stat, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      scrollTrigger: {
        trigger: stat,
        start: 'top 90%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Faster plan card animations
  gsap.utils.toArray('.plan-card').forEach(card => {
    gsap.from(card, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      scrollTrigger: {
        trigger: card,
        start: 'top 90%',
        end: 'top 40%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Mobile menu functionality
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  let menuOpen = false;
  menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
      menuBtn.classList.add('open');
      navLinks.style.display = 'flex';
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      navLinks.style.display = 'none';
      menuOpen = false;
    }
  });

  // Remove form handling code
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.remove();
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animate stats when in view
  const stats = document.querySelectorAll('.number');
  stats.forEach(stat => {
    const value = parseFloat(stat.textContent);
    gsap.to(stat, {
      textContent: 0,
      duration: 0,
      snap: { textContent: 1 },
      stagger: 1,
      scrollTrigger: {
        trigger: stat,
        start: 'top 80%',
        end: 'top 20%',
        onEnter: () => {
          gsap.to(stat, {
            duration: 2,
            textContent: value,
            snap: { textContent: 1 },
            ease: 'power1.out'
          });
        }
      }
    });
  });

  // Testimonials Carousel
  const track = document.querySelector('.testimonial-track');
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
  const slideCount = slides.length;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slideCount;
    updateCarousel();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateCarousel();
  }

  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      updateCarousel();
    });
  });

  // Auto advance slides every 5 seconds
  setInterval(nextSlide, 5000);
});