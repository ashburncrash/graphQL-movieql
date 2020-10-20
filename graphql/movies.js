import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/";
const API_LIST_URL = `${API_URL}list_movies.json?`;
const API_MOVIE_URL = `${API_URL}movie_details.json?`;
const API_SUGGESTION_URL = `${API_URL}movie_suggestions.json?`;

export const listMovies = (limit, rating) => {
    let REQUEST_URL = API_LIST_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }
    if (rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`
    }

    return fetch(REQUEST_URL)
            .then(response => response.json())
            .then(json => json.data.movies);
};

export const getMovie = (id) => {
    let REQUEST = API_MOVIE_URL;
    if(id > 0) {
        REQUEST += `movie_id=${id}`;
    }

    return fetch(REQUEST)
            .then(response => response.json())
            .then(json => json.data.movie);
}

export const getSuggestions = (id) => {
    let REQUEST = API_SUGGESTION_URL;
    if(id > 0) {
        REQUEST += `movie_id=${id}`;
    }

    return fetch(REQUESt)
            .then(response => response.json())
            .then(json => json.data.movie);
}
