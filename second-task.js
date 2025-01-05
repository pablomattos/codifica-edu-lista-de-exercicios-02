
let book = {
    title: 'Dom Quixote',
    author: 'Miguel de Cervantes',
    yearPublication: 1605,
    gender: 'Romance'
};


let existingPublisher = false;

for (let property in book) {
    if (property === 'editora') {
        existingPublisher = true;
        break;
    }
}


if (!existingPublisher) {
    book.publisher = 'Editora desconhecida';
}


for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}
