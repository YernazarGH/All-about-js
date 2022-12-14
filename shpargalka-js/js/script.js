// Оператор обозначения что мы пишем наш JS в формате ES6
"use strict";
// ************* Функций в JS с модальными окнами ***********************

// //  Модальная окно с своим выбором ответа


// let answer = prompt("Есть ли вам 18 лет?");
// console.log(typeof(answer)); 


// // Модальная окно с уведомлением
// console.log(alert("Hello World!"));

// // Модальная окно с ответом ОК и ОТМЕНА
// console.log(confirm("Are you OK?"));


/*********** Тип Данных**********/

// var number = 2;
// var string = "text";
// var symbol;


// // Пример на Число
// console.log(number);

// // Пример на строку
// console.log(string);

// // Пример на Infinity
// console.log(4/0);

// // Пример на NaN
// console.log(4*string);

// // Пример на undefined
// console.log(symbol);

// // Пример на null
// console.log(something);

// // Пример на объекты

// let person = {
//     name: "John",
//     age: 18,
//     isMarried: false
// };

// console.log(person);
// console.log(person.age);
// console.log(person["isMarried"]);


// // Пример на Массивы

// let user = ['name', 'login', 'password', 'dateBirth', 'phone'];

// console.log(user[0]);
// console.log(user);
// console.log(user[3]);



//************************* Операторы **************************************************/

// //пример оператор сложения строк
//console.log('Hi'+ ' Petr');

// //пример оператора сложени чисел
//console.log(3 + 13);

// //пример оператора сложения числа с строкой
//console.log('3' + 13);

// //пример операора сложения счисла с сторокой если строку поменять на чиловую с помощью оператора '+' перед строкой

// console.log(+'3' + 13);
// console.log(+'text' + 13);
// console.log(typeof(+prompt('something', '')));


// // пример операторов инкремента и декремента

// let incr = 10,
//     decr = 10;

// // обычная форма

// incr++;
// decr--;

// console.log(incr);
// console.log(decr);


// // перфиксная форма

// console.log(++incr);
// console.log(--decr);


// // постфиксная форма

// console.log(incr++);
// console.log(decr--)


// // пример оператора возращающий значения деленых чисел '%'
// console.log(11%3);

// // Операторы равенства '=', '==', '==='

// // Пример оператора равенства (присвоение '=')

// var a = 2,
//     b;

// b = a;
// console.log(b);

// // Пример оператора равенства (сравнение по зачением '==')

// var a = '2',
//     b = 2;

// if(a==b){
//     console.log(true);
// }else{
//     console.log(false);
// };

// // Пример оператора строгого сравнения (сравнение по типом данных '===')

// var a = '2',
//     b = 2;

// if(a===b){
//     console.log('оба переменных одинаковые по типу данных и по числовому литералу');
// }else{
//     console.log('Значения переменных не являються одного типа данных, к примеру один являеться числом второй являеться строкой');
// };


// // Операторы и (&&), или (||)
// // Пример на оператора "и"

// let isChecked = false,
//     isClose = true;

// console.log(isChecked && isClose);

// //Пример на оператора "или"
//console.log(isChecked || isClose);
// //Пример на оператора отрицания (!)
//console.log(isChecked || !isClose);

/********************************* Практическое задание***************************************************************/

// let money,
//     time;

// money = +prompt("Ваш бюджет на месяц?", "");
// time = prompt("Введите дату в формате ГГГГ-ММ-ДД");

// let appData = {
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: false
// };

// // пример с циклом for

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдеться");
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     };
// };

// // пример с while

// let i = 0;
// while (i < 2 ) {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдеться");
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     };
// }


// // пример с do while

// let i = 0;
// do {
//     i++;
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдеться");
    
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         i--;
//     };
// } while (i < 2);


// appData.moneyPerDay = appData.budget / 30;

// alert('Ежедневный бюджет: ' + appData.moneyPerDay);

// if (appData.moneyPerDay < 200) {
//     console.log('Минимальный уровень достатка');
// } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 3000) {
//     console.log('Средний уровень достатка');
// } else if (appData.moneyPerDay > 3000) {
//     console.log('Высокий уровень достатка');
// } else {
//     console.log('Произошла ошибка');
// };
// console.log(appData);



/********************************************Условия*************************************************************/

// // пример обычные циклы при помощи if, else if и else
// // также можно использовать без else if или использования else if несколько раз

// let a = 4,
//     b = 8;

// if(a + b == 16) {
//     console.log('сложения двух чисел равна 16');
// } else if (a + b == 13) {
//     console.log(' сложения двух чисел равна 13');
// } else {
//     console.log(' сложения двух чисел равна 12');
// };


// // пример с тринарным оператором 
// //(a + b == 12) ? console.log(' сложения двух чисел равна 12') : console.log(' сложения двух чисел не равна 12');
// // также есть и бинарное и унарное

// // Модификация switch которая поддерживает несколько if
// // тут мы пишем по другому, мы не пишем полную проверку как в пред примере нам достаточно сперва написать на switch что мы будем проверять, в нашем случае 'a + b'

// switch (a + b) {
//     case 16:
//         console.log('сложения двух чисел равна 16');
//         break;
//     case 13:
//         console.log('сложения двух чисел равна 13');
//         break;
//     case 12:
//         console.log('сложения двух чисел равна 12');
//         break;
//     default:
//         console.log('error')

// };


/***********************************************Циклы*********************************************/
// // пример Цикл while

// let a = 5,
//     b = 10,
//     sum = a + b;

// while(sum < 20) {
//     console.log(sum);
//     sum ++;
// };

// // пример на цикл do, это идет только как действия но он сам не остановиться для этого мы после него сразу используем while 

// do {
//     console.log(sum);
//     sum ++;
// } while (sum < 20);


// // пример на цикл for

// for(let i = 15; i < 20; i ++) {
//     console.log(i);
// };

// // пример с внутренними условиями предвадительная остоновка цикла

// for(let i = 15; i < 20; i ++) {
//     if ( i == 17) {
//         break;
//     };
//     console.log(i);
// };

// // пример чтобы цикл пропустил шаг

// let i = 15;
// for(i ; i < 20; i ++) {
//     if ( i == 17) {
//         continue;
//     };
//     console.log(i);
// };


/******************************************Функций******************************/

// //Пример простой функций стандарт ES5 и ниже

// function showMessage (text) {
//     alert(text);  
// };
// showMessage('HelloWorld');

// // Пример с замыканиям функция и его обьектами
// // Пример локальной переменной и вызовам его в глобальной среде

// function zamykaniya (text) {
//     let num = 20;
// };
// zamykaniya();
// console.log(num);

// // пример если глобальная и локальная переменные равны по названию но вызовов происходящий в глобальной среде

// let num = 10;
// function zamykaniya (text) {
//     let num = 20;
// };
// zamykaniya();
// console.log(num);

// // пример если глобальная и локальная переменные равны по названию но вызовов происходящий в глобальной и локальной среде

// let num = 10;
// function zamykaniya (text) {
//     let num = 20;
//     console.log(num);
// };
// zamykaniya();
// console.log(num);


// // пример со сложением строк в функций 'return'

// function calc (a,b) {
//     return (a+b);
// };

// console.log(calc(4,9));

// function retVar() {
//     let num = 50;
//     return num;
// };
// let anotherVar = retVar();
// console.log(anotherVar);

// // пример decloration function

// console.log(calc(4,9));

// function calc (a,b) {
//     return (a+b);
// };

// console.log(calc(5,1));

// //пример function expression (анонимные функций) 

// let calc = function (a,b) {
//     return (a+b);
// };
// console.log(calc(4,9));

// // пример стрелочная фунция

// let calc = (a,b) => a+b;
// console.log(calc(4,9));


// // пример методы и свойства

// // пример свойства (length)

// let str = 'text';
// console.log(str.length);

// // пример метода (toUpperCase, toLowerCase, Math.round(свойства), parseInt, parseFloat)

// let str = 'Text';
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let twelve = "12.2";
// console.log(Math.round(twelve));

// let num = '12.2px';
// console.log(parseInt(num));
// console.log(parseFloat(num));


/****************************************************************Практическая задания с функцией*************************************************************/

// let money,
//     time;

// function start(){                           // Функция для получения данных от пользователя
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате ГГГГ-ММ-ДД");

//     while(isNaN(money) || money == '' || money == null ) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     };
    

// };
// start();

// let appData = {                     // основной обьект где храняться данные пользователя
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true
// };



// function chooseExpenses (){                                 //фукнцция расчета затрат по указанным пользователем данными
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязательную статью расходов в этом месяце"),
//             b = prompt("Во сколько обойдеться");
        
//         if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
//             appData.expenses[a] = b;
//         } else {
//             i--;
//         };
        
//     };
// };
// chooseExpenses();

// function detectDayBudget(){                 // Расчет дневного бюджета
//     appData.moneyPerDay = (appData.budget / 30).toFixed();
//     alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'тг.');
//     return +appData.moneyPerDay;
// };
// detectDayBudget();

// function detectLevel() {                    // Расчет уровня достатка
//     if (appData.moneyPerDay < 200) {
//         console.log('Минимальный уровень достатка');
//     } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 3000) {
//         console.log('Средний уровень достатка');
//     } else if (appData.moneyPerDay > 3000) {
//         console.log('Высокий уровень достатка');
//     } else {
//         console.log('Произошла ошибка');
//     };
// };
// detectLevel();

// function checkSaving(){                     // функция для определения доход в месяц с счета с депазита если значения обьекта 'savings'= true
//     if(appData.savings == true) {
//         let save = +prompt('Какова сумма накоплений?', ''),
//             percent = +prompt('Под какой процент?', '');
//         appData.mothlyIncome = (((save/100)/12)*percent);
//         alert('Доход в месяц с вашего депзита: ' + appData.mothlyIncome);
//     };
// };
// checkSaving();

// function chooseOptExpenses() {                  // Функция для определения необязательных расходов
    
//     for (let i = 1; i < 4 ; i++ ) {
//         let a = prompt('Статья необязательных расходов?', '');
//         appData.optionalExpenses[i] = a;
//     };
// };
// chooseOptExpenses();

// console.log(appData);

/*************************************************callback функций******************************/
// //пример не используя действия callback

// function first () {
//     //что то делаем (действия чтобы наш код был больше второго и весил чуть больше чем второй)
//     setTimeout(function() {
//         console.log(1);
//     },500);
// };

// function second () {
//     console.log(2);
// };

// first();
// second();

// // Пример с действием callback
// // пример с одной ф-ей

// function learLang(lang,callback) {
//     console.log('Я учу '+ lang);
//     callback();
// };
// learLang('JavaScript', function(){
//     console.log('Я прошел 3и урок');
// });

// // Пример с 2я ф-ями

// function learLang(lang,callback) {
//     console.log('Я учу '+ lang);
//     callback();
// };

// function done(){
//     console.log('Я прошел 3и урок');
// };
// learLang('JavaScript', done);


/******************обьекты подробнее****************************/
// // другой пример по созданию обьекта

// let obg = new Object();
// console.log(obg);

// //Добавление свойства обьекта

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test'
// };
// console.log(options);
// options.bool = false;
// options.colors = {
//     border: 'black',
//     bg: 'red'
// };
// console.log(options);

// // пример удаление свойства обьекта

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test',
//     bool: false,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// delete options.bool;
// console.log(options);


// // работа со свойствами больших обьектов 

// let options = {
//     width: 1024,
//     height: 1024,
//     name: 'test',
//     bool: false,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// for(let key in options) {
//     console.log('свойства ' + key + 'имеет значение ' + options[key]);

// };
// // сколько обьектов в свойстве colors
// console.log(Object.keys(options.colors).length);


/*************************************************Массивы и псевдомассивы******************************************/

// // пример по созданию массива
// //let arr = [1,2,3,4,5];
// // удаления последнего значения в массиве

// arr.pop();
// console.log(arr);

// // добавления последним значения в массив

// arr.push(6);
// console.log(arr);

// //удаления первого значения в массиве

// arr.shift();
// console.log(arr);

// //добавления первым значением в массив

// arr.unshift(0);
// console.log(arr);

// //переобразования массивов с методами for, forEach, for of(in), split, join, sort

// for(let i = 0; i < arr.length; i++) {           //переобразования с for
//     console.log(arr[i]);
// };


// arr.forEach( function(item, i, mass) {          //переобразования с forEach
//     console.log(i + ':' + item + '(массив: ' + mass + ')');
// });


// let mass = [1,3,5,7];

// for(let key of mass) {                      //переобразования с for of
//     console.log(key);
// };

// for(let key in mass) {                      //переобразования с for in
//     console.log(key);
// };


// let ans = prompt('',''),
//     arr = [];

// arr = ans.split(',');                       //переобразования с split
// console.log(arr);


// let arr = ['aa','bb','cc'],
//     i = arr.join(', ');         //переобразования с join(этот метод берет значения и использует сложения, что есть внутри join-а будет вставляться между значениями)

// console.log(i);


// let arr = [1,19,4],
//     i = arr.sort(compareNum);   // переобразования с sort, сорт делает сортировку, если запустить без обратной ф-ий нам выдаст значения исходя порядка, sort сортирует схожестью со строковым форматом и для полноценных чисел мы используем ниже преведенную обратную ф-ю

// function compareNum(a,b) {          //callback function
//     return a-b;
// };
// console.log(arr);


/*****************************************************************Обьектно ориентированое програпирования***********************/
// // Пример с __proto__

// let soldier = {
//     health: 400,
//     armor: 100
// };
// let John = {
//     health: 200
// };

// John.__proto__ = soldier;

// console.log(John);
// console.log(John.armor);

/********************************************Практическое задание 4**********************************************************/

// let money,
//     time;

// function start(){                           // Функция для получения данных от пользователя
//     money = +prompt("Ваш бюджет на месяц?", "");
//     time = prompt("Введите дату в формате ГГГГ-ММ-ДД");
//     while(isNaN(money) || money == '' || money == null ) {
//         money = +prompt("Ваш бюджет на месяц?", "");
//     };
// };
// start();

// let appData = {                     // основной обьект где храняться данные пользователя
//     budget: money,
//     timeData: time,
//     expenses: {},
//     optionalExpenses: {},
//     income: [],
//     savings: true,
//     chooseExpenses: function() {            //фукнцция расчета затрат по указанным пользователем данными
//         for (let i = 0; i < 2; i++) {
//             let a = prompt("Введите обязательную статью расходов в этом месяце"),
//                 b = prompt("Во сколько обойдеться");
            
//             if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
//                 appData.expenses[a] = b;
//             } else {
//                 i--;
//             };
            
//         };
//     },
//     detectDayBudget: function() {           // Расчет дневного бюджета
//         appData.moneyPerDay = (appData.budget / 30).toFixed();
//         alert('Ежедневный бюджет: ' + appData.moneyPerDay + 'тг.');
//         return +appData.moneyPerDay;
//     },
//     detectLevel: function() {               // Расчет уровня достатка
//         if (appData.moneyPerDay < 200) {
//             console.log('Минимальный уровень достатка');
//         } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 3000) {
//             console.log('Средний уровень достатка');
//         } else if (appData.moneyPerDay > 3000) {
//             console.log('Высокий уровень достатка');
//         } else {
//             console.log('Произошла ошибка');
//         };
//     },  
//     checkSaving: function() {               // функция для определения доход в месяц с счета с депазита если значения обьекта'savings = true
//         if(appData.savings == true) {
//             let save = +prompt('Какова сумма накоплений?', ''),
//                 percent = +prompt('Под какой процент?', '');
//             appData.mothlyIncome = (((save/100)/12)*percent);
//             alert('Доход в месяц с вашего депзита: ' + appData.mothlyIncome);
//         };
//     },
//     chooseOptExpenses: function() {         // Функция для определения необязательных расходов
//         for (let i = 1; i < 4 ; i++ ) {
//             let a = prompt('Статья необязательных расходов?', '');
//             appData.optionalExpenses[i] = a;
//         };
//     },
//     choseIncome: function() {               // Функция по определения дополнительного дохода
//         for(let i = 1; i < 2; i++) {
//             let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)' , '');
            
//             if( typeof(items) === 'string' && items != '' && typeof(items) != null) {
//                 appData.income = items.split(',');
//                 appData.income[i];
//             }else{
//                 alert('Вы ввели не корректные данные на вопросе дополнительного дохода, просьба ввести как требует инструкция');
//                 i--;
//             };
//         };
//         appData.income.push(prompt('Может что-то еще?'));
//         appData.income.sort();
//         appData.income.forEach( function(item, i) {
//             console.log('Способы доп заработка: ' + '(' + (i+1) + ') ' + item);
//         })
//     }
// };

// for(let key in appData) {
//     console.log('Наша программа включает в себя данные: ' + key)
// };

/**********************************************Переобразования типов данных*****************************/
// // to string
// //1 String()
// console.log(typeof(String(null)));
// //2 concatanation
// console.log(typeof('https://vk.com/catolog/' + 5));
// // to number
// //1 Number()
// console.log(typeof(Number('5')));
// //2 +"", +true etc.
// console.log(typeof(5 + +'5'));
// //3 parseInt
// console.log(typeof(parseInt('15px',10)));
// // to logical
// // 1 switch

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// };

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// };

// // 2 to boolen, Boolen(), !!()

// console.log(typeof(Boolean('15')));
// console.log(typeof(!!2));

/*************************************************Частые вопросы в собеседования ********************************/
// //1 profix and prefix

// let x = 5;
// alert( x++ ); //result 5 сперва он вывел 5 потом изменил инкрементом на 6 и возращает его

// // если теперь запустить алерт нам выдаст 6

// alert (x);

// //сложения примеры
// console.log([] + false - null + true);   //NaN, [] - равняеться строке 

// // string + boolen = string
// // string + null = string
// // string + number = string
// // string - null = NaN
// // NaN + boolen = NaN

// //присваение

// let y = 1;
// let x = y = 2; // справа на лево у=2, потом х=у

// alert(x);   // 2

// //ссылки в строке 

// alert('1'[0]);  // "1" потому что 1 значения в строке равен 1. ЕСЛИ МЫ ЧУТЬ ЧУТЬ ПЕРЕДЕЛАЕМ 
// alert('1'[1]);  // undefiend по скольку в строке 1 нет второга значения

// //сравнения примеры

// console.log(2 && 1 && null && 0 && undefined); //null первая false значения
// console.log(!!(a && b) == (a && b));  //  неравны первый булин второе сравнения 
// console.log( null || 2 && 3 || 4); // 3 по скольку || берет первое тру в своем сравнения
// console.log(0 || "" || 2 || undefined || true || false); // 2 первое тру во всем сравнений
// console.log('ёжик' > 'яблоко'); // в  unicode "ё" находиться после "я" true
// console.log('ежик' > 'яблоко') // false 
// console.log('Ежик' > 'яблоко') // false

// let a = [1,2,3],
//     b = [1,2,3];

// console.log(a == b); // false

// let x = [1,2,3],
//     y=x;

// console.log(x === y ) // true


/**************************************************************Обработчик собитий DOM****************************************************/

let btn = document.querySelectorAll('#js'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

// //обработчик с методом onclick 

// btn[0].onclick = function() {
//     alert('Click!');
// };

// //обработчик с методам addEventListener

// btn[0].addEventListener('click', function() {
// 	alert('Click!');
// 	alert('Click again!');
// });


// //analog
// btn[0].addEventListener('click', function() {
// 	alert('Click!');
// });
// btn[0].addEventListener('click', function() {
// 	alert('Click again!');
// });


// btn[0].addEventListener('mouseenter', function() {
// 	console.log('Вы навели на кнопку');
// });

// //addEventListener с event

// btn[0].addEventListener('click', function(event) {
// 	let target = event.target;
// 	target.style.display = 'none';
// 	alert('Click');
// });

// btn[0].addEventListener('click', function(event) {
// 	console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function(event) {
// 	console.log('Произошло событие ' + event.type + ' на элементе ' + event.target);
// });

// link.addEventListener('click', function(e) {
// 	e.preventDefault();
// 	console.log('Just click!');
// });

// btn.forEach(function(item) {
// 	item.addEventListener('mouseleave', function() {
// 		console.log('Вышли');
// 	});
// });



/*************************************** ДОМ в мобильные устройства и регулярные выражение ***********************/
// //События с touchstart

// window.addEventListener('DOMContentLoaded', function () {
//     let box = document.querySelector('.box')
//     box.addEventListener('touchstart', function(e){
//         e.preventDefault();
//         console.log('box: touchstart');
//         console.log(e.touches); // Событие для получение количеств пальц коснувшися вне зависимости эл-а (массив)
//         console.log(e.changedTouches); // идентично с пред
//         console.log(e.targetTouches);   // регистрация пальцов которые взаимодействуют с эл-ом (массив)
//         console.log(target);    //выдаст блок по которому было нажатие
//         console.log(e.touches[0].target);   //идентично с пред
//     });
// });

// // События с touchmove

// window.addEventListener('DOMContentLoaded', function () {
//     let box = document.querySelector('.box')
//     box.addEventListener('touchmove', function(e){
//         e.preventDefault();
//         console.log('box: touchmove');
//         console.log(e.touches[0].pageX); // Событие для получение количеств пальц коснувшися вне зависимости эл-а и отслеживание передвижение по Оси Х (массив)
//     });

// });

// // События с touchend

// window.addEventListener('DOMContentLoaded', function () {
//     let box = document.querySelector('.box')
//     box.addEventListener('touchend', function(e){
//         e.preventDefault();
//         console.log('box: touchend');
//     });
// });
// // touchenter, touchleave, touchcancel

// // Регулярные выражения RegExp
// //let a = new RegExp('pattern', 'flag');

// // Регулярные выражения /'pattern'/'flag'

let reg = /n/i, // i- flag который переводит на другой регистр, n - что мы будем искать заменять удалять и т.д.
    ans = 'n';

// console.log(ans.search(reg)); //искать пер рег в пер анс
// console.log(ans.match(/n/g)); // ищет все буквы n  в пер ans, g - это глобальный поиск находит все элементы. а рег сам по умолчанию ищет первый
// console.log(ans.search(/n/m)); // ищет по многострочностью
// console.log(ans.replace(reg, 't')); // в пер анс найденный регом заменяя на буквы t
// console.log(reg.test(ans)); // проверяет есть ли в пер анс значения с пер рег если есть ответ тру, если нет ответ фалс
// console.log(ans.match(/\d/g)); //найдет все цифры которые есть в пер анс
// console.log(ans.match(/\D/g)); //найдет все не цифры которые есть в пер анс   
// console.log(ans.match(/\w/g)); //найдет все буквы которые есть в пер анс
// console.log(ans.match(/\W/g)); //найдет все не буквы которые есть в пер анс
// console.log(ans.match(/\s/g)); //найдет все пробелы которые есть в пер анс
// console.log(ans.match(/\S/g)); //найдет все не пробелы которые есть в пер анс
// console.log(ans.match(/\//g)); //найдет все слэшы которые есть в пер анс
