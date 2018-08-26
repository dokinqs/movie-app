import gql from "graphql-tag";

export const HOME_PAGE = gql`
    query {
        movies(limit: 50, rating: 7) {
            id
            title
            genres
            rating
        }
    }
`;

// takes a while for the query results to load in the Apollo extension the first time, cuz on a free server