// Smooth scroll & active class toggle for dots
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.section');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const target = document.getElementById(dot.dataset.target);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY || window.pageYOffset;
  sections.forEach((section, index) => {
    if (scrollPos >= section.offsetTop - section.offsetHeight / 2 &&
        scrollPos < section.offsetTop + section.offsetHeight / 2) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }
  });
});
