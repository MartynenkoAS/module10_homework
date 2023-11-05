// Задание 5
// Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.
// Заголовок первого input — «номер страницы». Заголовок второго input — «лимит». Заголовок кнопки — «запрос».

// При клике на кнопку происходит следующее:
// Если число в первом input не попадает в диапазон от 1 до 10 или не является числом —
//  выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
//  Если число во втором input не попадает в диапазон от 1 до 10 или не является числом —
//  выводить ниже текст «Лимит вне диапазона от 1 до 10»;
//  Если и первый, и второй input не в диапазонах или не являются числами —
//  выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;

// Если числа попадают в диапазон от 1 до 10 — сделать запрос по 
// URL https://jsonplaceholder.typicode.com/photos?_page=0&_limit=5, 
// где GET-параметр page — это число из первого input, 
// а GET-параметр _limit — это введённое число второго input.

// Пример. Если пользователь ввёл 5 и 7, то запрос будет вида https://jsonplaceholder.typicode.com/photos?_page=0&_limit=7.
// После получения данных вывести список картинок на экран.

// Если пользователь перезагрузил страницу, то ему должны показываться картинки из последнего
// успешно выполненного запроса (использовать localStorage).

document.addEventListener("keydown", function(event) {                // чтобы удобнее было запускать))
      if (event.code == "Enter" || event.code == "Space") {
          funcClick();
      }
})
    
const btnRequest = document.querySelector(".btn_request");        // Обрабатываем нажание кнопки
btnRequest.addEventListener('click', () => funcClick());

const btnClear = document.querySelector(".btn_clear");            // Обрабатываем нажание кнопки
btnClear.addEventListener('click', () => funcClear());

const imgBlock = document.querySelector(".img_section");          // находим div, куда будем грузить картинки
const txtBlock = document.querySelector(".alarm_section");        // находим p, в котором будем показывать ошибки

funcGetFromStorage()

function funcClick() {
      const inputValuePage  = document.querySelector(".input_page").value;   // получаем значение, введенное в inputPage
      const inputValueLimit = document.querySelector(".input_limit").value;  // получаем значение, введенное в inputLimit

      if ((inputValuePage < 1 || inputValuePage > 10) && (inputValueLimit < 1 || inputValueLimit > 10)) {
            alarmText("Номер страницы и лимит вне диапазона от 1 до 10");
            return;
      } else {
            if (inputValuePage < 1 || inputValuePage > 10) {
                  alarmText("Номер страницы вне диапазона от 1 до 10");
                  return;
            } else {
                  if (inputValueLimit < 1 || inputValueLimit > 10) {
                        alarmText("Лимит вне диапазона от 1 до 10");
                        return;
                  }
            }
      }
            funcClear();
            fetch(`https://jsonplaceholder.typicode.com/photos?_page=${inputValuePage}&_limit=${inputValueLimit}`)  // делаем fetch запрос 
            .then((response) => {
                  const result = response.json();           // преобразовываем в json. Мы не можем его сразу прочитать, надо отдать в следующий then
                  console.log(result)
                  return result;
            })
            .then((result) => {
                  funcLoadToScreen(result);
                  funcLoadToStorage();
            })
            .catch((reason) => { console.log("Ошибка:", reason) });
}
      function funcLoadToScreen(result) {            
            let imgGroup = ""
            result.forEach(item => {
                  let imgElement = `<img src="${item.url}" style="margin: 5px; width: 100px; height: 100px">`;
                  imgGroup += imgElement;
            });
            imgBlock.innerHTML = imgGroup;
      }
      function funcLoadToStorage() {
            localStorage.setItem("imgTicket", imgBlock.innerHTML);
      }

      function funcGetFromStorage() {
            imgBlock.innerHTML = localStorage.getItem("imgTicket");
      }

      function funcClear() {
            imgSet = document.querySelector(".img_section").innerHTML = "";
            txtSet = document.querySelector("p").innerHTML = "";
      }
      function alarmText(content) {
            funcClear();
            txtBlock.textContent = content;
      }

    