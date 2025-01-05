let stock = [
    { product: "Notebook", amount: 3, minimum: 5 },
    { product: "Smartphone", amount: 10, minimum: 8 },
    { product: "Tablet", amount: 2, minimum: 4 }
];

stock.forEach(item => {
    if (item.amount < item.minimum) {
        item.amount *= 2;
    }
});

console.log(stock);

