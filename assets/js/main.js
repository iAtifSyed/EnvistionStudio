/**
 * Envision Studio - Premium Website Script
 * Author: Atif Syed (Developed for Envision Studio)
 * Description: High-performance Vanilla JavaScript for scroll-reveals, dark mode, counters, portfolio filters, and FAQ accordions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Page Preloader
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('fade-out');
      }, 300);
    });
  }

  // 2. Sticky Header
  const header = document.querySelector('.header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial call

  // 3. Dark Mode Toggle
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const savedTheme = localStorage.getItem('theme');
  
  // Set initial theme
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark-mode');
  } else {
    document.documentElement.classList.remove('dark-mode');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
      const isDark = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  });

  // 4. Hamburger Menu Navigation Drawer
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target) && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // 5. Scroll Reveal Animations (Intersection Observer)
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target); // Reveal only once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 6. Statistics Counter Animation
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length > 0) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const targetNum = parseInt(target.getAttribute('data-target'), 10);
          const duration = 2000; // 2 seconds
          const startTime = performance.now();
          const suffix = target.getAttribute('data-suffix') || '';

          const animateCounter = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function: easeOutQuad
            const easeProgress = progress * (2 - progress);
            const currentNum = Math.floor(easeProgress * targetNum);
            
            target.textContent = currentNum.toLocaleString() + suffix;

            if (progress < 1) {
              requestAnimationFrame(animateCounter);
            } else {
              target.textContent = targetNum.toLocaleString() + suffix;
            }
          };

          requestAnimationFrame(animateCounter);
          observer.unobserve(target); // Animate only once
        }
      });
    }, {
      threshold: 0.5
    });

    statNumbers.forEach(num => counterObserver.observe(num));
  }

  // 7. Portfolio Category Filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterBtns.length > 0 && portfolioItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active class from all buttons and add to clicked
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          const itemCategories = item.getAttribute('data-category').split(' ');
          
          if (filterValue === 'all' || itemCategories.includes(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300); // Match transition duration
          }
        });
      });
    });
  }

  // 8. FAQ Accordion Collapses
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  if (faqTriggers.length > 0) {
    faqTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.faq-item');
        const content = item.querySelector('.faq-content');
        const isActive = item.classList.contains('active');

        // Close all other accordions
        document.querySelectorAll('.faq-item').forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-content').style.maxHeight = null;
          }
        });

        // Toggle current accordion
        if (isActive) {
          item.classList.remove('active');
          content.style.maxHeight = null;
        } else {
          item.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  }

  // 9. Back To Top Button Click and Visibility
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 10. Premium Contact Form Handling (Validation & Dynamic Alerts)
  const contactForm = document.getElementById('contactForm');
  const formAlert = document.getElementById('formAlert');

  if (contactForm && formAlert) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      // Basic front-end validation
      if (!name || !email || !subject || !message) {
        showAlert('Please fill in all required fields.', 'danger');
        return;
      }

      // Email format regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        showAlert('Please enter a valid email address.', 'danger');
        return;
      }

      // Disable button & simulate premium server submission
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="spinner" viewBox="0 0 50 50" style="width: 20px; height: 20px; border: 3px solid rgba(255,255,255,0.3); border-top-color: white; border-radius: 50%; animation: spinner 0.8s linear infinite; display: inline-block;">
        </svg> Sending message...
      `;

      setTimeout(() => {
        // Success response
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        contactForm.reset();
        
        showAlert(`Thank you, ${name}! Your message has been sent successfully. We will get back to you shortly.`, 'success');
        
        window.scrollTo({
          top: formAlert.offsetTop - 120,
          behavior: 'smooth'
        });
      }, 1500);
    });

    function showAlert(text, type) {
      formAlert.textContent = text;
      formAlert.className = `alert alert-${type}`;
      formAlert.style.display = 'block';

      // If it is success, let it disappear after 7 seconds
      if (type === 'success') {
        setTimeout(() => {
          formAlert.style.opacity = '0';
          setTimeout(() => {
            formAlert.style.display = 'none';
            formAlert.style.opacity = '1';
          }, 400);
        }, 7000);
      }
    }
  }

  // 11. Dynamic active page link indicator in Navigation
  const currentPath = window.location.pathname;
  const pageName = currentPath.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === pageName || (pageName === 'index.html' && href === '/')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
