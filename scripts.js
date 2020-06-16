// Task 1
console.log('Task 1');

for(let a = 1; a <= 50; a++) console.log(a);

console.log('');

for(let a = 35; a >= 8; a--) console.log(a);

console.log('');

// Task 2

let b = 89;

while (b >= 11) {
   document.write(b + '<br>');
    b--;
}

// Task 3

let a = 100;
    summ = 0;

for(let i = 0; i <= a ; i++) {
    summ += i;
}

console.log('Task 3');
console.log(summ);
console.log('');

//Task 4

console.log('Task 4');

let c = 5;
    sum = 0;

for(let i = 1; i <= c ; i++) {
    sum = 0;

    for(let a = 1; a <= i ; a++) {
        sum += a;
    }

    console.log(sum);
}

console.log('');

// Task 5

console.log('Task 5');

for(let i = 8; i <= 56; i++) {
    if(i % 2 != 0) continue;
    console.log(i);
}

console.log('');

let d = 7;

while (d <= 56) {
    d++;
    if(d % 2 != 0) continue;
    console.log(d);
}

console.log('');

// Task 6

console.log('Task 6');

for(let i = 2; i <= 10 ; i++) {

    for(let a = 1; a <= 10 ; a++) console.log(i + '*' + a + '=' + i * a);
}

console.log('');

// Task 7

console.log('Task 7');

let e = 0;

for(let i = 1000; i >= 50;) {
    e++;
    i = i / 2;
    console.log(i + ',' + ' число итераций = ' + e);
}

console.log('');

// Task 8

console.log('Task 8');

let f = 0;
    plus = 0;

for (i = 0;; i++) {
    let g = +prompt('Введите число');
    if(/\D/.test(g)) {
        alert('Это не число');
    }
    if(g <= 0) break;
    plus += g;
}

f = plus / i;

console.log('Общая сумма ' + plus);
console.log('Среднее арифметическое ' + f);
console.log('');

// Task 9

let nums = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    min = +nums[0],
    max = +nums[0],
    num = '';

for (let i = 0; i < 44; i++) {
    if(nums[i] != ' ') {
        num += nums[i];
    } else {
        if(num < min) min = +num;
        if(num > max) max = +num;
        num = '';
    }
}

console.log('max ' + max);
console.log('min ' + min);
console.log('');

// Task 10

console.log('Task 10');

let g = prompt('Введите произвольное целое число'),
    numb = 0,
    sumnumb = 0,
    revers = 0,
    j = 0;

console.log('Число: ' + g);

for (;; j++) {
    if(g[j] == undefined) break;
    sumnumb += Number(g[j]);
}

for (let a = g.length-1; a >= 0; a--) {
    revers += g[a];
}

console.log('Цифр в числе = ' + Number(j));
console.log('Сумма  = ' + sumnumb);
console.log(Number(revers));


