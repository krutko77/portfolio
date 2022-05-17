//skills transition
const skillsContent = document.querySelector('.skills__content');
skillsContent.classList.remove('_content-transition');

const observerA = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillsContent.classList.add('_content-transition');
      return;
    }
    skillsContent.classList.remove('_content-transition');
  });
});
observerA.observe(document.querySelector('.skills__content'));

//about transition
const aboutHobby = document.querySelector('.about__hobby');
aboutHobby.classList.remove('_about-transition');

const observerB = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutHobby.classList.add('_about-transition');
      return;
    }
    aboutHobby.classList.remove('_about-transition');
  });
});
observerB.observe(document.querySelector('.about__hobby'));