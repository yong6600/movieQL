import  { getMovies, getById, addMovie,deleteMovie } from './db';



const resolvers = {
    Query: {
        movies:(_, { rating, limit }) => getMovies(limit, rating)
        // movie: (_, { id } ) => getById(id),

    
    }
};

export default resolvers;

