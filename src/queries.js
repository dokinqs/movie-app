import gql from "graphql-tag";

export const HOME_PAGE = gql`
    {
        movies(limit: 50, rating: 8) {
            id
            title
            rating
            medium_cover_image
        }
    }
`;

export const MOVIE_DETAILS = gql`
    query getMovieDetails($movieId: Int!) {
        movie(id: $movieId) {
            title
            rating
            description_intro
            medium_cover_image
        }
        suggestions(id: $movieId) {
            id
            title
            rating
            medium_cover_image
        }
    }
`;