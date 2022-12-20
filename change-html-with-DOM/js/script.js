let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName("menu-item"),
    newMenuItem = document.createElement('li'),
    title = document.getElementById('title');

menu.insertBefore(menuItem[2], menuItem[1]); //выставил правильный порядок

menu.appendChild(newMenuItem);  // добавления нового пункта
newMenuItem.classList.add('menu-item');
newMenuItem.textContent = 'Пятый пункт';

document.body.style.background = 'url(../img/apple_true.jpg)';  //поменял фон

title.innerText = 'Мы продаем только подлинную технику Apple'   // поменял текст

let column = document.querySelectorAll('.column'),  //удалили рекламу со страницы
    reklama = document.getElementsByClassName('adv');
for (let i = 0; i < column.length; i++) {
    if(i!=0){
        column[i].removeChild(reklama[0]);
    }
};

//удалить рекламу можно было легче
//let reklama = getElementByClassName('adv')[0];
//reklama.remove();

let promptforApple = document.getElementById('prompt'),   // задача вопраса, и после ответа пользователя вывсти его на нужный блок
    opinion = prompt("Какое у вас отношения к технике apple?","");
promptforApple.innerHTML = opinion;

