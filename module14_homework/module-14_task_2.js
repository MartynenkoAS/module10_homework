// Задание 2
// Вам дана заготовка и результат, который вы должны получить. 
// Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

/* Этап 1. Подготовка данных */

// JSON, который мы будем парсить
const jsonString = `
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`;

/* Этап 2. Получение данных */
const data = JSON.parse(jsonString);  // преобразовываем JSON в объект JS

for (var i = 0; i < data.list.length; i++) { // меняет тип значения age 
    data.list[i].age = +data.list[i].age;
}

console.log(data)



////// JS-объект //////
// {
//   list: [
//     { name: 'Petr', age: 20, prof: 'mechanic' },
//     { name: 'Vova', age: 60, prof: 'pilot' },
//   ]
// }
