let title = "My Project";
let screens = "Простые, сложные, Интерактивные";
let screenPrice = 17000;
let rollback = 30;
let fullPrice = 1500;
let adaptive = true;

console.log(typeof title, title);
console.log(typeof fullPrice, fullPrice);
console.log(typeof adaptive, adaptive);
console.log(title.length);
console.log('Стоимость верстки экранов ' + screenPrice + ' рублей \n Стоимость разработки сайта ' + fullPrice + ' рублей');
console.log(screens.toUpperCase().split(', '))
console.log('Процент отката посреднику ' + fullPrice*(rollback/100));





