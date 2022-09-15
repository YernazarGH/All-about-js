// Оператор обозначения что мы пишем наш JS в формате ES6
//"use strict";
// ************* Функций в JS с модальными окнами ***********************

//  Модальная окно с своим выбором ответа

/*
let answer = prompt("Есть ли вам 18 лет?");
console.log(typeof(answer)); 
*/

// Модальная окно с уведомлением
// console.log(alert("Hello World!"));

// Модальная окно с ответом ОК и ОТМЕНА
// console.log(confirm("Are you OK?"));


// *********** Тип Данных**********

/*
var number = 2;
var string = "text";
var symbol;
*/

// Пример на Число
//console.log(number);

// Пример на строку
//console.log(string);

// Пример на Infinity
// console.log(4/0);

// Пример на NaN
// console.log(4*string);

// Пример на undefined
// console.log(symbol);

// Пример на null
// console.log(something);

// Пример на объекты
/*
let person = {
    name: "John",
    age: 18,
    isMarried: false
};

console.log(person);
console.log(person.age);
console.log(person["isMarried"]);
*/

// Пример на Массивы
/*
let user = ['name', 'login', 'password', 'dateBirth', 'phone'];

console.log(user[0]);
console.log(user);
console.log(user[3]);
*/


//************************* Операторы **************************************************/

// пример оператор сложения строк
//console.log('Hi'+ ' Petr');

// пример оператора сложени чисел
//console.log(3 + 13);

// пример оператора сложения числа с строкой
//console.log('3' + 13);

// пример операора сложения счисла с сторокой если строку поменять на чиловую с помощью оператора '+' перед строкой
/*
console.log(+'3' + 13);
console.log(+'text' + 13);
console.log(typeof(+prompt('something', '')));
*/

// пример операторов инкремента и декремента
/*
let incr = 10,
    decr = 10;
*/
// обычная форма
/*
incr++;
decr--;

console.log(incr);
console.log(decr);
*/

// перфиксная форма
/*
console.log(++incr);
console.log(--decr);
*/

// постфиксная форма
/*
console.log(incr++);
console.log(decr--)
*/

// пример оператора возращающий значения деленых чисел '%'
//console.log(11%3);

// Операторы равенства '=', '==', '==='

// Пример оператора равенства (присвоение '=')
/*
var a = 2,
    b;

b = a;
console.log(b);
*/
// Пример оператора равенства (сравнение по зачением '==')
/*
var a = '2',
    b = 2;

if(a==b){
    console.log(true);
}else{
    console.log(false);
};
*/
// Пример оператора строгого сравнения (сравнение по типом данных '===')
/*
var a = '2',
    b = 2;

if(a===b){
    console.log('оба переменных одинаковые по типу данных и по числовому литералу');
}else{
    console.log('Значения переменных не являються одного типа данных, к примеру один являеться числом второй являеться строкой');
};
*/

// Операторы и (&&), или (||)
// Пример на оператора "и"
/*
let isChecked = false,
    isClose = true;

console.log(isChecked && isClose);
*/
// Пример на оператора "или"
//console.log(isChecked || isClose);
// Пример на оператора отрицания (!)
//console.log(isChecked || !isClose);

/********************************* Практическое задание***************************************************************/
/*
let money,
    time;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате ГГГГ-ММ-ДД");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
*/
// пример с циклом for
/*
for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдеться");
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    };
};
*/
// пример с while
/*
let i = 0;
while (i < 2 ) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдеться");
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    };
}
*/

// пример с do while
/*
let i = 0;
do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдеться");
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    };
} while (i < 2);


appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 200) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 3000) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 3000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
};
console.log(appData);



/********************************************Условия*************************************************************/

// пример обычные циклы при помощи if, else if и else
// также можно использовать без else if или использования else if несколько раз
/*
let a = 4,
    b = 8;

if(a + b == 16) {
    console.log('сложения двух чисел равна 16');
} else if (a + b == 13) {
    console.log(' сложения двух чисел равна 13');
} else {
    console.log(' сложения двух чисел равна 12');
};
*/

// пример с тринарным оператором 
//(a + b == 12) ? console.log(' сложения двух чисел равна 12') : console.log(' сложения двух чисел не равна 12');
// также есть и бинарное и унарное

// Модификация switch которая поддерживает несколько if
// тут мы пишем по другому, мы не пишем полную проверку как в пред примере нам достаточно сперва написать на switch что мы будем проверять, в нашем случае 'a + b'
/*
switch (a + b) {
    case 16:
        console.log('сложения двух чисел равна 16');
        break;
    case 13:
        console.log('сложения двух чисел равна 13');
        break;
    case 12:
        console.log('сложения двух чисел равна 12');
        break;
    default:
        console.log('error')

};
*/

/***********************************************Циклы*********************************************/
// пример Цикл while
/*
let a = 5,
    b = 10,
    sum = a + b;

while(sum < 20) {
    console.log(sum);
    sum ++;
};
*/
// пример на цикл do, это идет только как действия но он сам не остановиться для этого мы после него сразу используем while 
/*
do {
    console.log(sum);
    sum ++;
} while (sum < 20);
*/

// пример на цикл for
/*
for(let i = 15; i < 20; i ++) {
    console.log(i);
};
*/
// пример с внутренними условиями предвадительная остоновка цикла
/*
for(let i = 15; i < 20; i ++) {
    if ( i == 17) {
        break;
    };
    console.log(i);
};
*/
// пример чтобы цикл пропустил шаг
/*
let i = 15;
for(i ; i < 20; i ++) {
    if ( i == 17) {
        continue;
    };
    console.log(i);
};
*/

/******************************************Функций******************************/

//Пример простой функций стандарт ES5 и ниже
/*
function showMessage (text) {
    alert(text);  
};
showMessage('HelloWorld');
*/
// Пример с замыканиям функция и его обьектами
// Пример локальной переменной и вызовам его в глобальной среде
/*
function zamykaniya (text) {
    let num = 20;
};
zamykaniya();
console.log(num);
*/
// пример если глобальная и локальная переменные равны по названию но вызовов происходящий в глобальной среде
/*
let num = 10;
function zamykaniya (text) {
    let num = 20;
};
zamykaniya();
console.log(num);
*/
// пример если глобальная и локальная переменные равны по названию но вызовов происходящий в глобальной и локальной среде
/*
let num = 10;
function zamykaniya (text) {
    let num = 20;
    console.log(num);
};
zamykaniya();
console.log(num);
*/

// пример со сложением строк в функций 'return'
/*
function calc (a,b) {
    return (a+b);
};

console.log(calc(4,9));

function retVar() {
    let num = 50;
    return num;
};
let anotherVar = retVar();
console.log(anotherVar);
*/
// пример decloration function
/*
console.log(calc(4,9));

function calc (a,b) {
    return (a+b);
};

console.log(calc(5,1));
*/
//пример function expression (анонимные функций) 
/*
let calc = function (a,b) {
    return (a+b);
};
console.log(calc(4,9));
*/
// пример стрелочная фунция
/*
let calc = (a,b) => a+b;
console.log(calc(4,9));
*/

// пример методы и свойства

// пример свойства (length)
/*
let str = 'text';
console.log(str.length);
*/
// пример метода (toUpperCase, toLowerCase, Math.round(свойства), parseInt, parseFloat)
/*
let str = 'Text';
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";
console.log(Math.round(twelve));

let num = '12.2px';
console.log(parseInt(num));
console.log(parseFloat(num));
*/

/****************************************************************Практическая задания с функцией*************************************************************/

let money,
    time;
/*
function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате ГГГГ-ММ-ДД");

    while(isNaN(money) || money == '' || money == null ) {
        money = +prompt("Ваш бюджет на месяц?", "");
    };
    

};
start();
*/
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// пример с циклом for
/*
function chooseExpenses (){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдеться");
        
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i--;
        };
    };
};
chooseExpenses();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    return +appData.moneyPerDay;
};
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 200) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 200 && appData.moneyPerDay < 3000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 3000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    };
};
detectLevel();

function checkSaving(){
    if(appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');
        appData.mothlyIncome = (((save/100)/12)*percent);
        alert('Доход в месяц с вашего депзита: ' + appData.mothlyIncome);
    };
};
checkSaving();
*/
function chooseOptExpenses() {
    
    for (let i = 1; i < 4 ; i++ ) {
        let a = prompt('Статья необязательных расходов?', '');
        appData.optionalExpenses[i] = a;
    };
};
chooseOptExpenses();

console.log(appData);
// пример с while
/*
let i = 0;
while (i < 2 ) {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдеться");
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    };
}
*/

// пример с do while
/*
let i = 0;
do {
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдеться");
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b  && a.length <50 ) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        i--;
    };
} while (i < 2);
*/

