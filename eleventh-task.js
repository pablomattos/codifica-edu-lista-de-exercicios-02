let orders = [
    { customer: "João", product: "Notebook", amount: 2 },
    { customer: "Maria", product: "Smartphone", amount: 1 },
    { customer: "João", product: "Tablet", amount: 3 },
    { customer: "Ana", product: "Notebook", amount: 1 },
    { customer: "Maria", product: "Tablet", amount: 2 }
];

let totalPerCostumer = {};

orders.forEach(order => {
    if (totalPerCostumer[order.customer]) {
        totalPerCostumer[order.customer] += order.amount;
    } else {
        totalPerCostumer[order.customer] = order.amount;
    }
});

console.log(totalPerCostumer); 
