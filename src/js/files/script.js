// // Подключение функционала "Чертогов Фрилансера"
// import { isMobile } from "./functions.js";
// // Подключение списка активных модулей
// import { flsModules } from "./modules.js";

//show more

const gallery = document.querySelectorAll(".portfolio__hide");
const showMore = document.querySelector(".portfolio__button-more");
const showMoreText = document.querySelector(".portfolio__button-label");
const iconMore = document.querySelector(".portfolio__button-icon");


showMore.addEventListener('click', () => {
    galleryHide()
    showMoreBtn()    
})


function galleryHide() {
    gallery.forEach((photo) => {
        photo.classList.toggle('portfolio__hide');
    })
}

function showMoreBtn() {

   showMoreText.classList.toggle('btn--show');
    if(showMoreText.classList.contains('btn--show')) {
      showMoreText.innerHTML = 'Скрыть';
      iconMore.classList.remove('fa-chevron-down');
      iconMore.classList.add('fa-chevron-up');
    } 
    else {
      showMoreText.innerHTML = 'Показать еще';
      iconMore.classList.remove('fa-chevron-up');
      iconMore.classList.add('fa-chevron-down');
    } 
    
  }


// function galleryHide() {
//    if(portfolio__hide.classList.contains('portfolio__hide')) {
//       portfolio__hide.classList.remove('portfolio__hide');
//       portfolio__button-more.classList.add('button__close');
//    }
//    else {
//       portfolio__hide.classList.add('portfolio__hide');
//       portfolio__button-more.classList.remove('button__close');
//       portfolio__button-more.classList.add('button__show');
//    }
   
// }

// galleryHide();