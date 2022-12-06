'use strict';

let money = 1400,                                       // Доход за месяц
    income = 'Фриланс',                                 // Дополнительный доход
    addExpenses = 'интернет, коммуналка, продукты',     // Дополнительные расходы
    deposit = false,                                    // Депозит в банке
    mission = 5000,                                     // Цель
    period = 12;                                        // Время на выполнение цели

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев. Цель заработать ' + mission + ' рублей.');

addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);

let budgetDay = Math.floor(money / 30);                             // Дневной бюджет
console.log(budgetDay);

alert('Сообщение с любым текстом');
console.log('Сообщение с любым текстом');