// Задание 2
// Напишите функцию, которая принимает на входе любое число (но не больше 1 000), определяет,
// является ли оно простым, и выводит, простое число или нет. Если введено больше 1 000, 
// то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

let inputValue = prompt("Введите любое число не больше 1000");
let PrimeNumberResult = true;

if ((typeof(+inputValue) === "number") && (!isNaN(+inputValue)) && (inputValue != null) && (inputValue != "")) {
    switch(+inputValue){
      case 0:
        alert ("Отлично! Вы ввели " + inputValue + ". Он не относится к простым числам")
      break;
      case 1:
        alert ("Отлично! Вы ввели " + inputValue + ". Это число не относится к простым числам. Это исключение")
      break;
      default:
        if (+inputValue < 0) {
            alert ("Отлично! Вы ввели " + inputValue + ". Отрицательные числа не являются простыми")
        } else {
            if (+inputValue > 1000) {
                alert ("Ошибка! Необходимо ввести число не больше 1000")
            } else {
                FuncPrimeNumber(+inputValue);
                if (PrimeNumberResult) {
                    alert ("Отлично! Вы ввели " + inputValue + ". Это простое число")
                } else {
                    alert ("Отлично! Вы ввели " + inputValue + ". Это составное число")
                }
            }
        }
    }
 } else {
   alert ("Ошибка! Необходимо ввести число не больше 1000")
}

function FuncPrimeNumber(a) {
         for (let i = 2; i <= a; i++) {
             if ((a % i === 0) && (a != i)) {
              PrimeNumberResult = false;
              return PrimeNumberResult;
             }
         }    
}
