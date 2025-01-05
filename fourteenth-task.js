let company = {
    departments: [
        {
            name: "Desenvolvimento",
            employees: [
                { name: "Carlos" },
                { name: "Ana" }
            ]
        },
        {
            name: "Marketing",
            employees: [
                { name: "Pedro" },
                { name: "Mariana" }
            ]
        },
        {
            name: "Recursos Humanos",
            employees: [
                { name: "João" },
                { name: "Maria" }
            ]
        }
    ]
};

for (let i in company.departments) {
    let department = company.departments[i];
    for (let funcionario of department.employees) {
        console.log(`Departamento: ${department.name}, Funcionário: ${funcionario.name}`);
    }
}
