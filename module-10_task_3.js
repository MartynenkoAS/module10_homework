// Задание 3
// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH"

let str = "Hello";
let strRezult = "";
for (let i = str.length-1; i >= 0; i--) {

    strRezult += str[i];
}
console.log(strRezult);
