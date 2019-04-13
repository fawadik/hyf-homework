console.log(movies);
//1. for short title movies
const shortTitleMovies = movies.filter(function(movie) {
                                        return movie.title.length<=15;
                                        });
console.log(shortTitleMovies);

//2. for long title movies
const longTitleMovies = movies.filter(function(movie) {
    return movie.title.length>15;
} );
console.log(longTitleMovies);

//3. Number of movies between 1980 and 1989
const movies1980 = movies.filter(function(selectedMovie) {
    return selectedMovie.year >= 1980;
});
const movies1989 = movies1980.filter(function(movie1980To1989) {
     return movie1980To1989.year <=1989;
});
console.log("The number of movies between 1980 and 1989 is "+ movies1989.length);

//4. Movies with tags
const movieTags = movies.map(function(movie) {
    if (movie.rating >= 7) {
      movie.tag = "Good";
      return movie;
    }
    else if (movie.rating >= 4) {
      movie.tag = "Average";
      return movie
    }
    else {
      movie.tag = "Bad";
      return movie;
    }
});
console.log(movieTags);

//5. chaining for rating of movies
const highRatedMovies = movies.filter(movie => movie.rating > 6)
                               .map(movie => movie.rating);

console.log(highRatedMovies);

//6. Number of movies with some keywords
const filteredMovies = movies.filter(function(movie) {
    if (movie.title.toLowerCase().includes("surfer") || 
        movie.title.toLowerCase().includes("alien") ||
        movie.title.toLowerCase().includes("benjamin"))
      return movie;       
});
console.log("The number of movies containing the kewords 'Surfer', 'Alien' and 'Benjamen' is "+ filteredMovies.length);

//7. 