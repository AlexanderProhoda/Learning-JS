/*Создайте калькулятор

Создайте объект calculator (калькулятор) с тремя методами:

read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
let calculator = {
  // ... ваш код ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
    read() {
    a = +prompt('Введите значения А', ''),
    b = +prompt('А теперь значения B', '')
    },
    sum() {
      return (a + b) 
    },
    mul() {
      return (a * b) 
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );