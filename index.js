const burgerButton = document.getElementById('header_button');
const burgerMenu = document.getElementById('main_menu')
let burgerSwither = false;
burgerButton.addEventListener('click', () => {
    if (!burgerSwither) {
        burgerMenu.style.display = 'block';
        burgerSwither = true
    }
    else {
        burgerMenu.style.display = 'none';
        burgerSwither = false
    }

})
// **********Header Light*****************************
const header = document.getElementById('header');
// Получаем элементы меню
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
    
// код при наведении

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


