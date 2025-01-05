let customers = [
    { name: "Lucas", age: 35, city: "Porto Alegre" },
    { name: "Mariana", age: 28, city: "São Paulo" },
    { name: "Carlos", age: 40, city: "Rio de Janeiro" },
    { name: "Ana", age: 32, city: "Belo Horizonte" },
    { name: "Geraldo", age: 39, city: "Sergipe" },
    { name: "Paulo", age: 44, city: "São Leopoldo" }
];

let counter = 0;
customers.forEach(customer => {
    if (customer.age > 30) {
        counter++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${counter}`);
