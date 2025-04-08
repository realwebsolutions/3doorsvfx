const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');
const header = document.getElementById('site-header');

// Smooth scroll on dot click
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const targetId = dot.getAttribute('data-target');
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active dot on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const sectionId = section.getAttribute('id');

    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      dots.forEach(dot => dot.classList.remove('active'));
      const activeDot = document.querySelector(`.dot[data-target="${sectionId}"]`);
      if (activeDot) activeDot.classList.add('active');
    }
  });

  // Header fade
  if (scrollY > 100) {
    header.classList.add('fade-out');
  } else {
    header.classList.remove('fade-out');
  }
});