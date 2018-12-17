let movies = [
    {
        id : 1,
        name : "Star Wars",
        score : 1
    },
    {
        id: 2,
        name : "Avengers",
        score : 7
    },
    {
        id: 3,
        name : "The Goodfather",
        score : 9
    },
    {
        id: 4,
        name : "Logan",
        score : 30
    },
    {
        id: 5,
        name : "Black Yard",
        score : 30
    }

];


export const getMovies = () => movies;

export const getById = id => {
    const fileteredMovies = movies.filter(movie =>  movie.id === id);
    console.log('filteredMovie',fileteredMovies);
    return fileteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if(movies.length > cleanedMovies.length ){
        
        movies = cleanedMovies;
        console.log('true')
        return true;
      
    } else {
        return false;
        
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;

};