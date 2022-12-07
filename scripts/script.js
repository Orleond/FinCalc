'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let money,                                                                          // Месячный доход
    income = 'Фриланс',                                                             // Дополнительный доход
    // Дополнительные расходы:
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Такси, кофе'),
    deposit = confirm('Есть ли у вас депозит в банке?'),                            // Депозит    
    expenses = [],                                                                  // Обязательная статья расходов
    amount,                                                                         // Размер обязательного расхода
    budgetDay,                                                                      // Бюджет на день
    mission = 5000,                                                                 // Цель
    period;                                                                         // Время на выполнение цели


let start = function() {
    do {
        money = prompt('Ваш месячный доход?');
    } while(!isNumber(money));
};

start();

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
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        expenses[i] = prompt('Введите обязательную статью расходов?');
        do {
            amount = prompt('Во сколько это обойдется?');
        } while(!isNumber(amount));
        sum += +amount;
    }
    console.log(expenses);
    return sum;
};
let expensesAmount = getExpensesMonth();

// Накопления за месяц
let getAccumulatedMonth = function() {
    return money - expensesAmount;
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

console.log('Расходы за месяц равны ' + expensesAmount);
console.log(addExpenses);
if (getTargetMonth() < 0) {
    console.log('Цель не будет достигнута');
} else {
    console.log('Срок достижения цели равен ' + getTargetMonth() + ' месяцев. Цель заработать ' + mission + ' рублей.');
}
console.log('Бюджет на день равен ' + budgetDay);
console.log(getStatusIncome());         // Вывод в консоль уровня дохода
