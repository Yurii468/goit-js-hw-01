let total = 0;

while (true) {
  let input = prompt('Введите число');

  if (input === null) {
    console.log('Отмена пользователем!');
    break;
  }
  input = Number(input);

  total += input;
}
alert(`Общая сумма чисел равна ${total}`);
