document.write('1. Вивести числа від 20 до 30 через пропуск, використовуючи крок 0, 5(20 20, 5 21 21, 5….):<br>');
let numbers = [];
for (let i = 20; i <= 30; i += 0.5) {
    numbers.push(i);
}
document.write(numbers.join(' '));

document.write('<br><br> 2. Один долар коштує 27 гривень.Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів:<br>');
const rate = 27;
for (let i = 10; i <= 100; i += 10) {
    const convertedValue = rate * i;
    document.write(convertedValue + ' грн; ');
}

document.write('<br><br> 3. Дане ціле число.Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N:<br>');
let number = prompt('3. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N. Введіть ціле число N:')
switch (number && isNaN(number)) {
    case (null):
        document.write('<br>Ви скасували');
        break;
    case (''):
        document.write('<br>Введене значення не є числом');
        break;
    case (true):
        document.write('<br>Введене значення не є числом');
        break;
    default:
        for (let i = 1; i <= 100; i++) {
            if (i ** 2 <= +number) {
                document.write(i + ' ');
                continue;
            }
            break;
        }
}

document.write('<br><br> 4. Дане ціле число. Зясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)<br>');
let number2 = prompt('4. Дане ціле число. Зясувати, чи є воно простим. Введіть ціле число:');
switch (number2 && isNaN(number2)) {
    case (null):
        document.write('<br>Ви скасували');
        break;
    case (''):
        document.write('<br>Введене значення не є числом');
        break;
    case (true):
        document.write('<br>Введене значення не є числом');
        break;
    default:
        for (let i = 2; i <= +number2; i++) {
            if (+number2 % i) {
                continue;
            }

            if (i === +number2) {
                document.write('Число ' + number2 + ' є простим.');
                break;
            }

            document.write('Число ' + number2 + ' не є простим.');
            break;
        }
}

document.write('<br><br> 5. Дане деяке число.Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).<br>');
let number3 = prompt('5. Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.')
switch (number3 && isNaN(number3)) {
    case (null):
        document.write('<br>Ви скасували');
        break;
    case (''):
        document.write('<br>Введене значення не є числом');
        break;
    case (true):
        document.write('<br>Введене значення не є числом');
        break;
    default:
        let res = 0;
        let degree = 1;
        while (true) {
            res = 3 ** degree;
            if (res === +number3) {
                document.write('Число ' + number3 + ' є 3^' + degree);
                break;
            }
            if (res > +number3) {
                document.write('Число ' + number3 + ' не можна одержати шляхом зведення числа 3 у деякий ступінь');
                break;
            }
            degree++;
        }
}