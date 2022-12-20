let box = document.getElementById('box'),   //принимает только id
    btn = document.getElementsByTagName('button'),    // принимает по названию тега
    circle = document.getElementsByClassName('circle'),     // принимает по названию класса
    heart = document.querySelectorAll('.heart'),    // принимает все селектора но перед названиям нужно ставить их значения для каласса точка для ИД решетка и т.д.
    oneHeart = document.querySelector('.heart');    // принимает один или первый селектор
    wrapper = document.querySelector('.wrapper')

box.style.backgroundColor = 'blue';   // дать новое свойства css
btn[1].style.borderRadius = '100%';

circle[0].style.borderRadius = 'red';
circle[1].style.borderRadius = 'orange';
circle[2].style.borderRadius = 'green';

// цикл для переберания массивов подмассивов
// с for
/*
for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'pink';
};
*/
// c forEach()

heart.forEach(function(item) {
    item.style.backgroundColor = 'pink';
});

let div = document.createElement('div'),    // создания нового элемента внутри документа
    text = document.createTextNode('Something');    // создания текста внутри документа

//добавления в html последним дочерним элементом
document.body.appendChild(div);
wrapper.appendChild(div);

// добавления в html первым дочерним элементом

document.body.insertBefore(div, circle[0]);

// удаления дочернего элемента
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

// замена дочерних элементов
document.body.replaceChild(btn[1], circle[1]);

div.classList.add('black');   //добавления класса в элемент
div.innerHTML = '<h1>Something</h1>';    // добавления в элемент который внутри html
div.textContent = 'Something!';    // добавления текстового контента внутри элемента
