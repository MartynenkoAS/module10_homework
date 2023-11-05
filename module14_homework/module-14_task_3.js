// Задание 3
// Напишите код приложения, интерфейс которого представляет собой input и кнопку. 
// В input можно ввести любое число. При клике на кнопку происходит следующее:

// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».

// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по 
// URL https://jsonplaceholder.typicode.com/photos?_limit=5, где get-параметр limit — это введённое число.

// Пример. Если пользователь ввёл 8, то запрос будет вида: https://jsonplaceholder.typicode.com/photos?_limit=8.
// После получения данных вывести ниже картинки на экран.

document.addEventListener("keydown", function(event) {      // чтобы удобнее было запускать))
    if (event.code == "Enter" || event.code == "Space") {
        funcClick();
    }
})

function funcClick() {
    const imgBlock = document.querySelector("h1");           // находим h1, после которого будем показывать картинки
    let inputValue = document.querySelector("input").value;  // получаем значение, введенное в input
    
    if (inputValue < 1 || inputValue > 10) {
        alert ("Ошибка! число вне диапазона от 1 до 10");
    } else {
        const xhr = new XMLHttpRequest();
        xhr.open("get", "https://jsonplaceholder.typicode.com/photos?_limit=" + inputValue, true);  //инициализация запроса
        
        // Добавляем обрабочик ответа сервера
        xhr.onload = function() {
            if (xhr.status != 200) {                            // HTTP ошибка? Если статус не 200 (указывает, что запрос выполнен успешно), то обрабатываем отдельно
                console.log('Статус ответа: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);        // Парсим ответ сервера, получаемых значений может быть до 10
                console.log(typeof(result), result)
                
                for (let i = 0; i < result.length; i++) {
                    let img = document.createElement('img');
                    img.src = result[i].url;
                    img.style.margin = "5px";
                    img.style.width = "100px";               
                    img.style.height = "100px";
                    imgBlock.after(img);
                }
            }
        }

        // Добавляем обрабочик процесса загрузки
        xhr.onprogress = function(event) {
        console.log(`Загружено ${event.loaded} из ${event.total}`) // Выведем прогресс загрузки
        }
        
        // Добавляем обрабочик ошибки
        xhr.onerror = function() {
        // обработаем ошибку, не связанную с HTTP (например, нет соединения)
        console.log('Ошибка! Статус ответа: ', xhr.status);
        }

        xhr.send();     // отправляем запрос
    }
}

function funcClear() {
    imgSetAll = document.querySelectorAll("img");
    for (let imgElem of imgSetAll) {
        imgElem.remove();
    }
    
}



