/* Перепишите if..else с использованием нескольких операторов '?'.

let message;

if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
*/

// let message = promt('Введите название должности:', '');

// let login = (message == 'Сотрудник') ? 'Привет' :
//   (message == 'Директор') ? 'Здравствуйте' :
//   (message == '') ? '' : 'Нет логина'

let login = prompt('Введите название должности:', '');

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' : '';

  alert(message);