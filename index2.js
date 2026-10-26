// 1Стартовый баланс
let balance = 1000;

// 2 Бесконечный цикл
while (true) {
    // 3 Показываем меню и получаем выбор
    let choice = prompt("Выберите действие:\n1 - Проверить баланс\n2 - Пополнить счет\n3 - Снять наличные\n0 - Выйти");

    // 4 Обработка выбора
    if (choice === "0") {
        alert("Спасибо за визит!");
        break; // Выходим из цикла
    } 
    else if (choice === "1") {
        alert("Ваш баланс: " + balance + " руб.");
    } 
    else if (choice === "2") {
        let summa = Number(prompt("Введите сумму для пополнения:"));
        balance = balance + summa;
        alert("Счет пополнен! Новый баланс: " + balance + " руб.");
    } 
    else if (choice === "3") {
        let summa = Number(prompt("Введите сумму для снятия:"));
        
        // Важная проверка
        if (summa > balance) {
            alert("Недостаточно средств!");
        } else {
            balance = balance - summa;
            alert("Вы сняли " + summa + " руб. Остаток: " + balance + " руб.");
        }
    } 
    else {
        alert("Неверная операция!");
    }
}