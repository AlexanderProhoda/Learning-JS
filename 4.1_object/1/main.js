/* Привет, object

Напишите код, выполнив задание из каждого пункта отдельной строкой:

Создайте пустой объект user.
Добавьте свойство name со значением John.
Добавьте свойство surname со значением Smith.
Измените значение свойства name на Pete.
Удалите свойство name из объекта.
решение
*/
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user[name]; // Проверил правильность. в Квадратных скобках удобнее для ключей с набором слов
//delete user.name; // Можно было так