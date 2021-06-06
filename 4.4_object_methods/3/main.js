/* Использование "this" в литерале объекта
Здесь функция makeUser возвращает объект.

Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?
*/
function makeUser() {
    return {
      name: "Джон",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name ); 
  //Будет ошибка, потому что метод ref не ссылается ни на что 