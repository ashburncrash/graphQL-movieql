import { listMovies, getMovie, getSuggestions } from './movies';

const resolvers = {
    Query: {
        movies: (_, { limit, rating }) => listMovies(limit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
}

export default resolvers;