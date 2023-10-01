// Задание 3
// Напишите функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.


let result = funcSum1(1)

console.log(result(1)) // результат 2
console.log(result(3)) // результат 4
console.log(result(5)) // результат 6
console.log(result(7)) // результат 8

function funcSum1(a) {
    return function funcSum2(b) {
           return a + b;
    }
}