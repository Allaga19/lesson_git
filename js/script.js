'use strict';
let myVar;
// // Примитивные типы данных
myVar = 10;               // чисо
console.log(typeof myVar);
myVar = 'Hello word';    // строка
console.log(typeof myVar);
myVar = true;   // логическое булевое значение
console.log(typeof myVar);
myVar = null;
console.log(typeof myVar);

myVar = undefined;
console.log(typeof myVar);
myVar = Symbol();
console.log(typeof myVar);
myVar = {};


let mySymbol1 = Symbol();
let mySymbol2 = Symbol();
console.log(mySymbol1 == mySymbol2);

// typeof возвращает строку с определением типа данных
// console.log('myVar: ', myVar);

/*
// Логические операторы: || - или , && - и , ! не(оператор отрецания)
// Бинарные операторы
console.log(3 + 4);
console.log(4 - 3);
console.log(2 * 3);
console.log(9 / 2);
console.log(9 % 3);
// извлечение корня (sqrt)
console.log(Math.sqrt(25));
// pow - возводит в степень, 5 - число которое возводим в степень
// 3 - число в какую степень возводим
console.log(Math.pow(5, 3));
// проверка является ли чесло целое (13.36)
console.log(Number.isInteger(5.5));

//======================= Строки ============ 13:47
let myString = 'Hello world!';
// конкотинация
console.log('Hello' + 'world');
// чтобы слова несливались добавляем строку с одним пробелом
console.log('Hello' + '' + 'world');

let str = 'Hello my Friends';
//сложение строк
console.log(myString + str);

// length - возвращает длину строки. он несчитает ковычки,но считает все символы
console.log(str.length);

// toUpperCase() - возвращает к верхнему регистру (16:31)
console.log(str.toUpperCase());

// toLowerCase() - возвращает к нижнему регистр
console.log(str.toLowerCase());

// charAt() - возвращает символ с индексом который указан
console.log(str.charAt(номер символа)); //этот метод давно неиспользуют, 
// а используют квадратные скобки
console.log(str[число]);

// ================ методы которые возвращают подстроку
let str = 'Hello my Friends';
// указание подстроки

// вернём подстроку начиная с индекса, который укажем (6) и до конца - my Friends
console.log(str.substring(6));

// до какого индекса (второй параметр - 15) вернуть подстроку - Friend
console.log(str.substring(9, 15));

// метод slice работает также как и substring - my Friends
console.log(str.slice(6));

// если надо вернуть символы с конца - Friends
console.log(str.slice(-8));

// substr - указываем индекс с какого символа мы начинаем брать подстроку н/пр 6
// и вторым параметром указываем сколько символов хотим вернуть н/пр 9 - my Friend
console.log(str.substr(6, 9));
console.log(str);

// ========================== indexof ==
// Метод indexof нужен для поиска подстроки, вернёт нам индекс первого символа из 
//указанной подстроки н/пр слово - Friends
console.log(str.indexOf('Friends'));

// ===================== replace ========= 20:00
// метод replace нужен для замены подстроки,сначало пишем строку которую хотим заменить,
//затем пишем на какую строку хотим заменить
console.log(str.replace('my Friends', 'World'));

// метод split() - который разбивает строку на массив
console.log(str.split(' '));
// если идёт перечисление, то указываем разделитель
console.log(str.split(', '));


// Первое задание "Присвоение значения переменным"
let money;
let income;
let addExpenses;
let deposit;
let mission;
let period;



money = 15000;
income = 'фриланс';
addExpenses = 'Прдукты, коммуналка, интенет, семена, одежда';
deposit = true;
mission = 1000000;
period = 12;


// Второе задание

//Вывод  в консоль тип данных значений переменных money, income, deposit;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);


// Вывод в консоль длину строки addExpenses
console.log(addExpenses.length);

//Вывод в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

// Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));
*/
/*
// Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay;
budgetDay = money / 30;
// Вывести в консоль budgetDay
console.log(budgetDay + ' руб');


// Дополнительное задание
//  1) Создать переменную num со значением 266219 (тип данных число)
let num = 266219;

// calculator
// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждое цифру ( 1, 2, 3 ) и перемножить их.
// Правильно использовать цикл или методы перебора
let arrmNum = num.toString().split('');

console.log(arrmNum);

let result = (arrmNum[0] * arrmNum[1] * arrmNum[2] * arrmNum[3] * arrmNum[4] * arrmNum[5]);

console.log(result);


//3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let resultDegree = result ** 3;

console.log(resultDegree);

//4) Вывести на экран первые 2 цифры полученного числа 

console.log(String(resultDegree).slice(0, 2));
// console.log(resultDegree[1]);
//console.log(myVar[число]);
// console.log(str.indexOf('Friends'));


// money, income, deposit

// Типы данных обжект (объектные)
myVar = {};  //объект

// унарный оператор
console.log(typeof myVar);


myVar = [];   // массив

let myArr = []
let regExp = /w+/g;     //регулярные выражения
let func = function () { };   // функции
let error = Error('error message');   // ошибки
let date = new Date();   // объект дата

console.log(typeof myArr);
*/