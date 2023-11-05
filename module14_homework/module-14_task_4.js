// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit.
// В input можно ввести любое число.
// При клике на кнопку происходит следующее:
// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — 
// выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;

// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL 
// https://dummyimage.com/100x300/, где первое число — ширина картинки, второе — высота.

// Пример. Если пользователь ввёл 150 и 200, то запрос будет вида https://dummyimage.com/150x200/.
// После получения данных вывести ниже картинку на экран.

// Подсказка
// Получение данных из input:
// const value = document.querySelector('input').value;

document.addEventListener("keydown", function(event) {      // чтобы удобнее было запускать))
  if (event.code == "Enter" || event.code == "Space") {
      funcClick();
  }
})

const btnRequest = document.querySelector(".btn_request");  // Обрабатываем нажание кнопки
btnRequest.addEventListener('click', () => funcClick());

function funcClick() {
  const inputValueWidth  = document.querySelector(".inputWidth").value;      // получаем значение, введенное в inputWidth
  const inputValueHeight = document.querySelector(".inputHeight").value;     // получаем значение, введенное в inputHeight
  const imgBlock = document.querySelector("h1");                             // находим h1, после которого будем показывать картинки или ошибки

  if (inputValueWidth < 100 || inputValueWidth > 300 || inputValueHeight < 100 || inputValueHeight > 300) {
    let alarmText = document.createElement('p');
        alarmText.innerText = "Ошибка! одно из чисел вне диапазона от 100 до 300"
        imgBlock.after(alarmText);
  } else {
      funcClear();
      fetch(`https://dummyimage.com/${inputValueWidth}x${inputValueHeight}/`)  // делаем fetch запрос 
        .then((response) => {
          const result = response.url;           // получаем URL из ответа. Мы не можем его сразу прочитать, надо отдать в следующий then
          return result;
        })
        .then((result) => {
          let img              = document.createElement('img');
              img.src          = result;
              img.style.margin = "5px";
              imgBlock.after(img);
        })
        .catch((reason) => { console.log("Ошибка:", reason) });
  }
}

function funcClear() {
  imgSetAll = document.querySelectorAll("img");
  txtSetAll = document.querySelectorAll("p");
  for (let imgElem of imgSetAll) {
      imgElem.remove();
  }
  for (let txtElem of txtSetAll) {
      txtElem.remove();
  }
  
}
