let movies = [
    { title: "O Poderoso Chefão", director: "Francis Ford Coppola", yearRelease: 1972 },
    { title: "Pulp Fiction", director: "Quentin Tarantino", yearRelease: 1994 },
    { title: "A Origem", director: "Christopher Nolan", yearRelease: 2010 }
];

let titles = [];
movies.forEach(movie => {
    titles.push(movie.title);
});

console.log(titles); 
