'use client';

import { useEffect } from 'react';

export default function Effects() {
  useEffect(() => {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
            if (href) {
              const target = document.querySelector(href);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }
        });          
    });

    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        '.skill-item, .project-card, .about-text'
      );
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elementPosition < screenPosition) {
          (element as HTMLElement).style.opacity = '1';
          (element as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    };

    // Set initial state
    const initElements = document.querySelectorAll(
      '.skill-item, .project-card, .about-text'
    );
    initElements.forEach(element => {
      (element as HTMLElement).style.opacity = '0';
      (element as HTMLElement).style.transform = 'translateY(20px)';
      (element as HTMLElement).style.transition = 'all 0.6s ease';
    });

    setTimeout(animateOnScroll, 300);
    window.addEventListener('scroll', animateOnScroll);

    // Form submission
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        (form as HTMLFormElement).reset();
      });
    }

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return null;
}
