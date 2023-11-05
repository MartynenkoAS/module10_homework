// Задание 1
// Вам дана заготовка и результат, который вы должны получить.
// Ваша задача — написать код, который будет преобразовывать 
// XML в JS-объект и выводить его в консоль.

/* Этап 1. Подготовка данных */

const parser = new DOMParser();    // Создание экземпляра класса DOMParser. Он позволит нам парсить XML
const xmlString = `<list>
    <student>
        <name lang="en">
            <first>Ivan</first>
            <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
            <first>Петр</first>
            <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
</list>`;

/* Этап 2. Получение данных */

const xmlDOM = parser.parseFromString(xmlString, "text/xml");   // Парсинг XML


const students = xmlDOM.querySelectorAll("student");            // Получение всех DOM-нод


const result = {                                    //Задаем результирующий объект
        list: []    
}

// перебираем все элементы двумерного массива
students.forEach(student => {
    const studentObj = {}
    const name     =  student.querySelector("first").textContent + " " + student.querySelector("second").textContent
    const age      = +student.querySelector("age").textContent;               // в Задаче возраст должен быть number
    const prof     =  student.querySelector("prof").textContent;
    const langAttr =  student.querySelector("name").getAttribute('lang');

    studentObj.name = name;
    studentObj.age  = age;
    studentObj.prof = prof;
    studentObj.lang = langAttr;

    result.list.push(studentObj); // пушим в результирующий объект
})

console.log(result)

// JS-объект
// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }




