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

let money,
    time;

money = prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате ГГГГ-ММ-ДД");

const answer1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer2 = prompt("Во сколько обойдеться"),
    answer3 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer4 = prompt("Во сколько обойдеться");

let appData = {
    property: money,
    timeDara: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert( appData.property/30);