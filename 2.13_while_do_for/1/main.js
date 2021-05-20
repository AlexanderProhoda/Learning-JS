//Какое последнее значение выведет этот код? Почему?

let i = 3;

while (i) {
    alert( i-- ); // 3, 2 andlast number 1
  }

  /*
  let i = 3;

while (i) {
  alert( i-- );
}
Каждое выполнение цикла уменьшает i. Проверка while(i) остановит цикл при i = 0.

Соответственно, будет такая последовательность шагов цикла («развернём» цикл):

let i = 3;

alert(i--); // выведет 3, затем уменьшит i до 2

alert(i--) // выведет 2, затем уменьшит i до 1

alert(i--) // выведет 1, затем уменьшит i до 0

// все, проверка while(i) не даст выполняться циклу дальше
*/