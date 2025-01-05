let sales = [
    { product: "Notebook", amount: 2, price: 3000 },
    { product: "Smartphone", amount: 5, price: 2000 },
    { product: "Tablet", amount: 3, price: 1500 }
];

let totalPrice = 0;
sales.forEach(sale => {
    totalPrice += sale.amount * sale.price;
});

console.log(`Preço total de sales: ${totalPrice}`);
