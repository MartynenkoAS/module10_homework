// Задание 2
// Дана переменная x, которая может принимать любое значение. 
// Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».
// Опишите три случая: когда х = числу, строке или логическому типу. 
// В других случаях выводите сообщение: «Тип x не определён».
// Примечание: в этом задании использовать promt не нужно.

let x;
if ((typeof(x) == "number") && (!isNaN(x))) {
    console.log("x - число");
} else if (typeof(x) == "string") {
    console.log("x - строка");
    } else if (typeof(x) == "boolean") {
        console.log("x - boolean");
        } else {
            console.log("Тип x не определён")
}