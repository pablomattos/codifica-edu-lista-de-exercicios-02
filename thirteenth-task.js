let cart = {
    itens: [
        { name: "Notebook", amount: 2, unitPrice: 3000 },
        { name: "Smartphone", amount: 3, unitPrice: 2000 },
        { name: "Tablet", amount: 1, unitPrice: 1500 }
    ]
};

let totalValue = 0;
cart.itens.forEach(item => {
    totalValue += item.amount * item.unitPrice;
});

console.log(`Valor total do carrinho: ${totalValue}`);
