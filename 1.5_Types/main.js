let name = "Yoba";
//Что выведет этот скрипт? Приведу значения
alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello Yoba

alert( `hello ${name}` ); // ошибка

/* 
Результат
hello 1 - хорошо 
hello name - не подумал что преобразует в строковый
hello Yoba - не понял что так преобразует переменную
*/