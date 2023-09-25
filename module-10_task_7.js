// Задание 7
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа,
// но и, например, знаки, null и так далее.

let arr = [0, 1, null, 3, 4, 5, true, 'a', 8, 0, 'd', ">"];

let countEven  = 0;
let countOdd   = 0;
let countStr   = 0;
let countZero  = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++){
    if (typeof(arr[i]) == 'number') {
        if (arr[i] === 0) {
            countZero++;
         } else {
            if (arr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
            }
         } else {
            countOther++;
         }
        }
console.log("Четных........... " + countEven);
console.log("Не четных........ " + countOdd);
console.log("Нулей............ " + countZero);
console.log("Прочих типов..... " + countOther);
console.log("Всего значений... " + arr.length);