// Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";
// Открыть песочницу с тестами для задачи.

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("вася")); // Вася