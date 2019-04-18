// 5. Даны числа a и b. Выведите строку с числами от большего числа до меньшего.
// Известно, что и a и b больше либо равно 1, но неизвестно, какое из них больше.
function min(a, b){
    if (a < b)
        return a;
    else
        return b;
}

function max(a, b){
    if (a > b)
        return a;
    else
        return b;
}

function testCycle(a, b) {
    var x = '';
    for (let i = max(a, b); i >= min(a, b); i--)
        x += i + ' ';
    return x.trim();
}

// 7. Дано целое число n, большее 1. Найти квадрат данного числа, используя формулу n^2=1+3+5+...+(2∗n−1).
// Из функции необходимо вывести строку, состоящую из чисел, получающихся на каждом шаге при добавлении каждого
// слагаемого (таким образом, получится строка из квадратов всех чисел от 1 до n)
function kv(a){
    let b = 0;
    for (let i = 1; i <= 2*a - 1; i = i + 2)
        b += i;
    return b;
}

function testCycle(n) {
    var x = '';
    for (let i = 1; i <= n; i++)
        x += kv(i) + ' ';
    return x.trim();
}


// 9. Дано число n (n > 0). Верните из функции значение двойного факториала:
// n!!=n∗(n−2)∗(n−4)∗...∗2 (или 1, в зависимости от четности n).
function testCycle(n) {
    var x = 1;
    let i = n;
    while (i > 0){
        x *= i;
        i -= 2;
    }
    return x;
}

// 10. Найдите наибольший общий делитель чисел a и b. (Подсказка: алгоритм Евклида и цикл while).
function testCycle(a, b) {
    if (b == 0)
        return a;
    else
        return testCycle(b, a % b);
}

// 11. Дано число n (n > 0). Проверьте, простое оно или составное. Если число простое - верните из функции
// строку "Простое число", если нет - "Составное число". Воспользуйтесь методом перебора делителей числа.
function testCycle(n) {
    var x = '';
    let flag = false;
    let i = 2;
    while (i < n){
        if (!(n % i))
            flag = true;
        i++;
    }
    if ((!flag) || (n == 2) || (n == 3))
        x = "Простое число";
    else if ((flag) || (n == 1))
        x = "Составное число";
    return x;
}

// 12. Дано число n (n > 1). Выведите строку, состоящую из простых чисел, меньших n.
// Воспользуйтесь решетом Эратосфена. Единицу не считаем простым числом.
function testCycle(n) {
    let str = '';
    var arr = [];
    for (let i = 2; i < n; i++)
        arr[i] = true;
    let p = 2;
    do {
        for (let i = 2*p; i < n; i += p)
            arr[i] = false;
        for (i = p+1; i < n; i++)
            if (arr[i])
                break;
        p = i;
    } while (p * p < n);
    for (let i = 0; i < arr.length; i++)
        if (arr[i])
            str += i + ' ';
    return str.trim();
}

// 13. Дано число n. Найдите сумму его цифр.
function testCycle(n) {
    var sum = 0;
    while (n > 0){
        sum += Math.trunc(n%10);
        n /= 10;
    }
    return sum;
}

// 14. Дано число n. Переведите его в двоичную систему счисления.
function testCycle(n) {
    var res = '';
    while (n > 0){
        res += n % 2;
        n = Math.floor(n / 2);
    }
    return res.split("").reverse().join("");
}

// 15. Дано число n (n > 1). Верните из функции n-ное число Фибоначчи
function fib(n) {
    let a = 1,
        b = 1;
    for (let i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return c;
}