// Выделить число
// Есть стоимость в виде строки "$120".
// То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true

/* Решение, которое предлагает учебник только для этого 
частного случая и не решает проблему 

function extractCurrencyValue(str) {
  return +str.slice(1);
}
*/

function extractCurrentValue(str) {
  let newStr = "";
  for (let char in str) {
    if (isFinite(str[char])) {
      newStr += str[char];
    }
  }

  return +newStr;
}

alert(extractCurrentValue("$1саша2пытается0изучить")); // 120
