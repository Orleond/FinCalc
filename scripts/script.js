'use strict';

let money = +prompt('Ваш месячный доход?', 1600),                                   // Месячный доход
    income = 'Фриланс',                                                             // Дополнительный доход
    // Дополнительные расходы:
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Такси, кофе'),
    deposit = confirm('Есть ли у вас депозит в банке?'),                            // Депозит    
    expenses1 = prompt('Введите обязательную статью расходов?', 'Коммуналка'),      // Обязательная статья расходов
    amount1 = +prompt('Во сколько это обойдется?', 80),                             // Размер обязательного расхода
    expenses2 = prompt('Введите обязательную статью расходов?', 'Аренда'),          // Обязательная статья расходов
    amount2 = +prompt('Во сколько это обойдется?', 125),                            // Размер обязательного расхода
    budgetDay,                                                                      // Бюджет на день
    mission = 5000,                                                                 // Цель
    period;                                                                         // Время на выполнение цели

// Уровень дохода
let getStatusIncome = function() {
    if (budgetDay >= 100) {
        return 'У вас высокий уровень дохода';
    } else if (budgetDay < 100 && budgetDay >= 50) {
        return 'У вас средний уровень дохода';
    } else if (budgetDay < 50 && budgetDay >= 0) {
        return 'К сожалению, ваш уровень дохода ниже среднего';
    } else {
        return 'Что-то пошло не так';
    }
};

// Сумма обязательных расходов за месяц
let getExpensesMonth = function() {
    return amount1 + amount2;
};

// Накопления за месяц
let getAccumulatedMonth = function() {
    return money - amount1 - amount2;
};

let accumulatedMonth = getAccumulatedMonth();

// Период для достижения цели
let getTargetMonth = function() {
    return Math.floor(mission / accumulatedMonth);
};

// Вывод в консоль типа данных переменных
let showTypeOf = function(data) {
    console.log(data, typeof data);
};

budgetDay = accumulatedMonth / 30;
addExpenses = addExpenses.toLowerCase().split(', ');

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Расходы за месяц равны ' + getExpensesMonth());
console.log(addExpenses);
console.log('Срок достижения цели равен ' + getTargetMonth() + ' месяцев. Цель заработать ' + mission + ' рублей.');
console.log('Бюджет на день равен ' + budgetDay);
console.log(getStatusIncome());         // Вывод в консоль уровня дохода
