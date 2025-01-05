let transactions = [
    { type: "entrada", value: 1000 },
    { type: "saida", value: 500 },
    { type: "entrada", value: 200 },
    { type: "saida", value: 300 }
];

let finalBalance = 0;
transactions.forEach(transaction => {
    if (transaction.type === "entrada") {
        finalBalance += transaction.value;
    } else if (transaction.type === "saida") {
        finalBalance -= transaction.value;
    }
});

console.log(`Saldo final: ${finalBalance}`);
