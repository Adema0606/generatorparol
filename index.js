const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const numbers   = ['0','1','2','3','4','5','6','7','8','9'];
const symbols   = ['!','@','#','$','%','^','&','*','(',')','_','+','-'];

// 1 Длина пароля (число)
const length = Number(prompt("Длина пароля:"));

// 2 Цифры? (true/false)
const includeNumbers = confirm("Включать цифры?");

// 3 Спецсимволы? (true/false)
const includeSymbols = confirm("Включать спецсимволы?");

// 4 Пустой массив для разрешённых символов
let allowedSymbols = [];

// 5 Буквы добавляем всегда
allowedSymbols = allowedSymbols.concat(lowercase);
allowedSymbols = allowedSymbols.concat(uppercase);

// 6 Если Да добавить цифры
if (includeNumbers) {
  allowedSymbols = allowedSymbols.concat(numbers);
}

// 7 Если Да добавить спецсимволы
if (includeSymbols) {
  allowedSymbols = allowedSymbols.concat(symbols);
}

// 8 Пустой пароль
let password = "";

// 9 Цикл на длину пароля
for (let i = 0; i < length; i++) {

  // 10 Случайный символ прибавить к паролю
  const randomIndex = Math.floor(Math.random() * allowedSymbols.length);
  password = password + allowedSymbols[randomIndex];
}

// 11 
alert("Ваш пароль: " + password);