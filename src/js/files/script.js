// очистка полей формы
document.addEventListener('submit', (e) => { 
   // Отключаем событие по умолчанию 
       e.prevent.Default(); 
   // Очищаем поля формы 
       e.target.reset(); 
   });