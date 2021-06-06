/*Объясните значение "this"
В представленном ниже коде мы намерены 
вызвать obj.go() метод 4 раза подряд.

Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?

let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
*/
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]
//Корректный вызов метода
(obj.go)();             // (2) [object Object]
//Корректный вызов метода
(method = obj.go)();    // (3) undefined
// Выходит ошибка, т.к. переменная ссылается на метод в переменной
(obj.go || obj.stop)(); // (4) undefined
// Из-за оператора ИЛИ, т.к. просто сравнивает переменные