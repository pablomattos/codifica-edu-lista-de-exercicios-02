let car = {
    mark: 'Toyota',
    model: 'colorolla',
    year: 2021,
    color: 'Branco'
};



for (let property in car) {
    console.log(`${property}: ${car[property]}`);
}

