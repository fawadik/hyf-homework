fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        let badMovies = response.filter(movie => movie.rating < 6.0);
        console.log(badMovies);

        let badMovies2000 = badMovies.filter(movie => movie.rating < 7.0 && movie.year >= 2000);
        console.log(badMovies2000);

        let movieTitles2000 = badMovies2000.map(movie => movie.title);
        console.log(movieTitles2000);
    });