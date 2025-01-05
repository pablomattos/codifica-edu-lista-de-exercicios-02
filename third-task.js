function filterProperties(product, specificValue) {
    let newObject = {};
    for (let property in product) {
        if (product[property] > specificValue) {
            newObject[property] = product[property];
        }
    }
    return newObject;
}

let product = {
    price: 150,
    weight: 2,
    amount: 10,
    discount: 5
};

let specificValue = 5;
let result = filterProperties(product, specificValue);
console.log(result); 
