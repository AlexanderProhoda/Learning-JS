/*Случайное целое число от min до max

Напишите функцию randomInteger(min, max), 
которая генерирует случайное целое (integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.

Пример работы функции:

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
alert(randomInteger(1, 5));

// На MDN нашел 
//Примеры:
//2, 2, 3, 4, 2, 1, 4, 3, 5, 1, 1
