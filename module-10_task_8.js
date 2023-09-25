// Задание 8
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения 
// в виде «Ключ — Х, значение — Y». Используйте шаблонные строки.

let frends = new Map();
frends.set("Alex",   25);
frends.set("Sergey", 27);
frends.set("Anna",   32);
frends.set("Olga",   40);

console.log("Всего элементов - " + frends.size)
for (let i of frends.keys()) {
    console.log("Ключ/Имя - " + i + ", Значение/Возраст - " + frends.get(i))
}
