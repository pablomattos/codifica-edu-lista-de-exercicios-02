let products = [
    { name: "Notebook", price: 3000, discount: 0 },
    { name: "Smartphone", price: 2000, discount: 0 },
    { name: "Tablet", price: 1500, discount: 0 }
];

products.forEach(product => {
    product.price = product.price * 0.9; 
    console.log(`Nome: ${product.name}, Novo Preço: ${product.price.toFixed(2)}`);
});
