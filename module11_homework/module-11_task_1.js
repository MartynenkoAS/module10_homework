// В прошлом модуле в юните «Циклы» вы выполняли следующее задание
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и знаки, например null и так далее.

// На этот раз оформите решение в виде функции: постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

const arr = [0, 1, null, 3, 4, 5, true, 'a', 8, 0, 'd', ">"];
const filteredArr = arr.filter((element) => typeof element === 'number' && !isNaN(element));

console.log(arr)
console.log(filteredArr)

let countEven  = 0;
let countOdd   = 0;
let countStr   = 0;
let countZero  = 0;
let countOther = 0;

for (let i = 0; i < filteredArr.length; i++){
    arrSeparate(i)
        }

function arrSeparate(i) {
  if (typeof(filteredArr[i]) == 'number') {
        if (filteredArr[i] === 0) {
            countZero++;
         } else {
            if (filteredArr[i] % 2 === 0) {
                countEven++;
            } else {
                countOdd++;
            }
            }
  }
}

console.log("Четных........... " + countEven);
console.log("Не четных........ " + countOdd);
console.log("Нулей............ " + countZero);
console.log("Всего значений... " + filteredArr.length);

