// Задание 5
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.
// Используйте Arrow Function синтаксис.
// Протестируйте функцию на любых значениях и выведите результат в консоль.

let base = 2;
let exponent = 2;

const funcPower = (base, exponent) => {
      return base ** exponent;
//    return Math.pow(base, exponent) // второй вариант
}

console.log(funcPower(base, exponent)) // результат 4

