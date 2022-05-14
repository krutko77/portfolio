//skills transition
const skillsContent = document.querySelector('.skills__content');
skillsContent.classList.remove('square-transition');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillsContent.classList.add('_content-transition');
      return;
    }
    skillsContent.classList.remove('_content-transition');
  });
});
observer.observe(document.querySelector('.skills__content'));
