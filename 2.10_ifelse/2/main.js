/*Используя конструкцию if..else, напишите код, 
который будет спрашивать: „Какое «официальное» название JavaScript?
Если пользователь вводит «ECMAScript», то показать: «Верно!», 
в противном случае – отобразить: «Не знаете? ECMAScript!» */

let company = prompt('Какое «официальное» название JavaScript?', 'ECMAScript')

  if (company == 'ECMAScript') {
   alert ('Верно!'); 
  } else {
     alert ('Не знаете? ECMAScript!');
  }