// Задание 1
// Напишите программу, которая работала бы следующим образом: 
// в prompt вводится значение. С помощью унарного плюса (арифметический оператор) 
// необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
// Если это число, то вывести в консоль чётное оно или нечётное.
// Если передано не число, выведите: «Упс, кажется, вы ошиблись».
// *NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.

let inputValue = prompt("Введите значение");

if ((typeof(+inputValue) == "number") && (!isNaN(+inputValue))) {
    if (+inputValue % 2 == 0) {
        alert("Спасибо, вы ввели значение " + inputValue + ", оно принадлежит к множеству NUMBER и четное");
    } else {
        alert("Спасибо, вы ввели значение " + inputValue + ", оно принадлежит к множеству NUMBER и нечетное");
    }
} else {
    alert("Спасибо, вы ввели значение " + inputValue + ", оно принадлежит к множеству STRING");
}
console.log(typeof(inputValue));
console.log(inputValue);