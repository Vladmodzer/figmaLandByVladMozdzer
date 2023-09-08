const burgerButton = document.getElementById('header_button');
const burgerMenu = document.getElementById('main_menu_ul');
let burgerOpen = false;
// вращение кнопки бургера

const menuImage = burgerButton.querySelector('img'); // Получаем изображение внутри кнопки

let rotated = false; // Флаг для отслеживания состояния изображения

burgerButton.addEventListener('click', () => {
  if (rotated) {
    // Если изображение вращено, возвращаем его в исходное состояние
    menuImage.style.transform = 'rotate(0deg)';
  } else {
    // Если изображение не вращено, вращаем его на 180 градусов
    menuImage.style.transform = 'rotate(180deg)';
  }

  // Инвертируем состояние флага
  rotated = !rotated;
});


burgerButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Предотвращаем всплытие события в поле документа

  if (!burgerOpen) {
    setTimeout(() => {
      burgerMenu.style.display = 'block';
    }, 150);
  } else {
    burgerMenu.style.display = 'none';
  }

  burgerOpen = !burgerOpen;
});

document.addEventListener('click', (e) => {
  if (burgerOpen && burgerMenu.contains(e.target)) {
    // Если клик выполнен внутри меню, не закрываем его
    return;
  }

  if (burgerOpen) {
    burgerMenu.style.display = 'none';
    burgerOpen = false;
  }
});





// **********Header Light*****************************
const header = document.getElementById('header');
const headerMenuElements = document.querySelectorAll('.header_menu_box li a');
// При наведении мыши
header.addEventListener('mouseover', () => {
    header.style.boxShadow = '0px -15px 50px var(--white-color)'
    header.style.transition = 'box-shadow 0.4s ease-in-out'
     // Цикл по элементам меню
    headerMenuElements.forEach(element => {
        // Меняем цвет текста
        element.style.transition = ' 0.3s ease-in-out'
        element.style.opacity = "1";

    });
    

  });
  
// При уводе мыши  
header.addEventListener('mouseout', () => {
// код при уводе мыши
header.style.boxShadow = 'none';

headerMenuElements.forEach(element => {
    // Меняем цвет текста
    element.style.transition = ' 0.3s ease-in-out'
    element.style.opacity = "0.4";

});
  });



