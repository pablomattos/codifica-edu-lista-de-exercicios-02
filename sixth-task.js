let employees = [
    { name: "Carlos", position: "Desenvolvedor", salary: 5000 },
    { name: "Ana", position: "Designer", salary: 4000 },
    { name: "Pedro", position: "Gerente", salary: 7000 },
    { name: "Mariana", position: "Analista", salary: 3000 }
];

let specificValue = 4500;

for (let employee of employees) {
    if (employee.salary > specificValue) {
        console.log(`Nome: ${employee.name}, Cargo: ${employee.position}, Salário: ${employee.salary}`);
    }
}
