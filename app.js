// 1. Скрипт запрашивает ввести букву русского алфавита. Скрипт должен вывести сообщение какая эта буква - гласная или согласная

let letter = prompt('Введите букву:', '');

const vowels = ["а", "у", "о", "ы", "и", "э", "я", "ю", "ё", "е"];
const consonants = [
  "б",
  "в",
  "г",
  "д",
  "ж",
  "з",
  "й",
  "к",
  "л",
  "м",
  "н",
  "п",
  "р",
  "с",
  "т",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
];

for (let i = 0; i < vowels.length; i++) {
  if (vowels[i] == letter.toLowerCase()) {
    alert("Это гласная буква");
  }
}
for (let i = 0; i < consonants.length; i++) {
  if (consonants[i] == letter.toLowerCase()) {
    alert("А это согласная буква");
  }
}

// 2.	 “Калькулятор” - пользователь вводит с клавиатуры число, символ арифметического действия (+, -, *, /) и еще одно число, Скрипт должен вывести результат

let nummer = +prompt("введите первое число");
let symbol = prompt("введите операцию", "+");
let nummerTwo = +prompt("введите второе число");

if (symbol === "+"){
    alert(nummer + nummerTwo);
}
else if (symbol === "-"){
  alert(nummer - nummerTwo);
}
else if (symbol === "*"){
  alert(nummer * nummerTwo);
}
else if (symbol === "/"){
  alert(nummer / nummerTwo);
}
else {
  alert("Вы ввели не правильно. Попробуйте ещё раз");
}

// 3.	Вывести в консоль все возможные сочетания из двух цифр - первая цифра может быть любой от 3 до 8, вторая любой от 0 до 7. Пример: 36, 44, 80 и т.д

let firstNum = [3, 4, 5, 6, 7, 8];
let secondNum = [0, 1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < firstNum.length; i++) {
  for (let j = 0; j < secondNum.length; j++) {
    console.log(`${firstNum[i]}${secondNum[j]}`);
  }
}
