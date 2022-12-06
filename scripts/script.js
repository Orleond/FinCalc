'use strict';

let money = prompt('Ваш месячный доход?'),                          // Месячный доход
    income = 'Фриланс',                                             // Дополнительный доход
    // Дополнительные расходы:
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?'),            // Депозит    
    expenses1 = prompt('Введите обязательную статью расходов?'),    // Обязательная статья расходов
    amount1 = prompt('Во сколько это обойдется?'),                  // Размер обязательного расхода
    expenses2 = prompt('Введите обязательную статью расходов?'),    // Обязательная статья расходов
    amount2 = prompt('Во сколько это обойдется?'),                  // Размер обязательного расхода
    budgetMonth = money - amount1 - amount2,                        // Бюджет на месяц 
    budgetDay = Math.floor(budgetMonth / 30),                       // Бюджет на день
    mission = 5000,                                                 // Цель
    period = Math.ceil(mission / budgetMonth);                      // Время на выполнение цели

console.log('Месячный бюджет равен ' + budgetMonth + ' рублей.');
console.log('Дневной бюджет равен ' + budgetDay + ' рублей.');
console.log('Период равен ' + period + ' месяцев. Цель заработать ' + mission + ' рублей.');

if (budgetDay >= 100) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay < 100 && budgetDay >= 50) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 50 && budgetDay >= 0) {
    console.log('К сожалению, ваш уровень дохода ниже среднего');
} else {
    console.log('Что-то пошло не так');
}

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);


addExpenses = addExpenses.toLowerCase().split(', ');
console.log(addExpenses);
alert('Сообщение с любым текстом');
console.log('Сообщение с любым текстом');
