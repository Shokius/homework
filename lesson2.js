// Task 1

let name = prompt('Ваше имя'),
    age = prompt('Возраст'),
    city = prompt('Город проживания'),
    phone = prompt('Телефон'),
    email = prompt('Ваша электронная почта'),
    company = prompt('Компания в которой вы работаете');

document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные:' + phone + ', ' + email + '.');

// Task 2

let year = 2020 - age;

document.write('<br>' + name + ' родился в ' + year + ' году.');

// Task 3

let number = '133769';

console.log('Task 3');

if (+number[0] + +number[1] + +number[2] == +number[3] + +number[4] + +number[5]) {
    console.log('Да');
} else {
    console.log('Нет');
}

console.log('');

// Task 4

let a = 1;
console.log('Task4');
(a > 0) ? console.log('Верно') : console.log('Неверно');

a = 0;
(a > 0) ? console.log('Верно') : console.log('Неверно');

a = -3;
(a > 0) ? console.log('Верно') : console.log('Неверно');
console.log('');

// Task 5

let A = 10,
    B = 2,
    summ = A + B;

console.log('Task5'); 
console.log(summ);
console.log(A - B);
console.log(A * B);
console.log(A / B);

if (A + B > 1) console.log(summ * summ);

console.log('');

// Task 6

console.log('Task 6');

if ((A > 2 && A < 11) || (B >= 6 && B < 14)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

console.log('');

// Task 7

let n = 45;

console.log('Task 7');

if (n >= 0 && n < 15) {
    console.log('Первая четверть');
} else if (n >= 15 && n < 30) {
    console.log('Вторая четверть');
} else if (n >= 30 && n < 45) {
    console.log('Третья четверть');
} else {
    console.log('Четвертая четверть');
}

console.log('');

// Task 8

let day = 15;

console.log('Task 8');

if (day > 0 && day <= 10) {
    console.log('Первая декада')     
} else if (day >= 11 && day <= 20) {
    console.log('Вторая декада');
} else {
    console.log('Третья декада');
}

console.log('');

// Task 9

let Day = prompt('Введите день'),
    Year = +Day / 365,
    Month = Day / 31,
    Week = Month * 4,
    Hour = Week * 168,
    Minutes = Hour * 60,
    Seconds = Minutes * 60;

console.log('Task 9');

if (Day < 365 && Day >= 31) {
    console.log('Меньше года')     
} else if (Day < 31 && Day >= 7) {
    console.log('Меньше месяца');
} else if (Day < 7) {
    console.log('Меньше недели');
} 
 

console.log('');

// Task 10

let Day1 = prompt('Введите день года от 1 до 365');

console.log('Task 10');

if (Day1 >= 1 && Day1 <= 31) {
    console.log('Январь');
    Month1 = 1;
} else if (Day1 > 31 && Day1 <= 60) {
    console.log('Февраль');
    Month1 = 2;
} else if (Day1 > 60 && Day1 <= 91) {
    console.log('Март');
    Month = 3;
} else if (Day1 > 91 && Day1 <= 121) {
    console.log('Апрель');
    Month1 = 4;
} else if (Day1 > 121 && Day1 <= 152) {
    console.log('Май');
    Month1 = 5;
} else if (Day1 > 152 && Day1 <= 182) {
    console.log('Июнь');
    Month1 = 6;
} else if (Day1 > 182 && Day1 <= 213) {
    console.log('Июль');
    Month1 = 7;
} else if (Day1 > 213 && Day1 <= 244) {
    console.log('Август');
    Month1 = 8;
} else if (Day1 > 244 && Day1 <= 274) {
    console.log('Сентябрь');
    Month1 = 9;
} else if (Day1 > 274 && Day1 <= 305) {
    console.log('Октябрь');
    Month1 = 10;
} else if (Day1 > 305 && Day1 <= 335) {
    console.log('Ноябрь');
    Month1 = 11;
} else if (Day1 > 335 && Day1 <= 366) {
    console.log('Декабрь');
    Month1 = 12;
}

switch (Month1) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
    break;

    case 3:
    case 4:
    case 5:
        console.log('Весна');
    break;

    case 6:
    case 7:
    case 8:
        console.log('Лето');
    break;

    case 9:
    case 10:
    case 11:
        console.log('Осень');
    break;
}