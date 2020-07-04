const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let input = prompt('Введите пароль');

if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  console.log(message);
} else if (input > ADMIN_PASSWORD) {
  message = 'Доступ запрещен, неверный пароль!';
  console.log(message);
} else {
  input != ADMIN_PASSWORD;
  message = 'Отменено пользователем!';
  console.log(message);
}
alert(message);
