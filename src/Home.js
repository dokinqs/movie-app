import React from 'react';
import styled from "styled-components";
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';
import Movie from "./Movie";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 5px;
`;

const Home = () => (
    <Container>
        <Query query={HOME_PAGE}>
            { ({ loading, data, error }) => {
                if (loading) return <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
                if (error) return "ERROR - movies";
                return data.movies.map(movie => (
                    <Movie
                        id={movie.id}
                        key={movie.id}
                        poster={movie.medium_cover_image}
                        title={movie.title}
                        rating={movie.rating}
                    />
                ));
            }}
        </Query>
    </Container>
);

export default Home;