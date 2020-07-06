let credits = 23580;
let pricePerDroir = 3000;
let totalPrice;
let result;

let count = window.prompt();
if (count === null) {
  result = 'Отменено пользователем!';
} else if (isNaN(count[0]) || isNaN(count)) {
  result = 'Введите число';
} else {
  totalPrice = pricePerDroir * count;
}

if (!result) {
  if (credits - totalPrice <= 0) {
    window.console.log('Недостаточно средств на счету!.');
  } else {
    credits = credits - totalPrice;
    window.console.log(
      `Вы купили ${count} дроида(ов), на счету осталось ${credits}`,
    );
  }
} else {
  window.console.log(result);
}
