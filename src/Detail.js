import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';
import { Link } from "react-router-dom";
import Movie from "./Movie";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));
  margin-bottom: 50px;
`;

const Card = styled.div`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  margin: auto;
`;

const Image = Card.withComponent("img");

const Title = styled.h1`
  font-size: 34px;
  padding: 10px;
  margin-bottom: 5px;
  align-self: center;  
`;

const Title2 = styled.h1`
  font-size: 28px;
  padding: 10px;
  margin-bottom: 10px;
  align-self: center;  
`;

const Paragraph = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  padding: 10px 0px 0px 20px;
  line-height: 30px;
  display: block;
  font-style: ${props => (props.italic ? "italic" : "none")};
  @media screen and (max-width: 506px) {
    font-size: 20px;
  }
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 30px;
`;

const Detail = ({
    match: {
        params: {
            movieId
        }
    }
    }) => <Query query={MOVIE_DETAILS} variables={{ movieId }}>
            { ({loading, error, data}) => {
                if (loading) return <div className="loader"></div>;
                if (error) return "ERROR - detail";
                return (
                    <>
                        <Link to="/">
                            <h3>Home</h3>
                        </Link>
                        <br />
                        <Container>
                            <Image src={data.movie.medium_cover_image} />
                            <div>
                                <Title>{data.movie.title}</Title>
                                <Paragraph italic>Rating: {data.movie.rating}</Paragraph>
                                <Paragraph>{data.movie.description_intro}</Paragraph>
                            </div>
                        </Container>
                        <Title2>Suggested Movies: </Title2>
                        <MovieContainer>
                            {data.suggestions.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title}
                                    rating={movie.rating}
                                    poster={movie.medium_cover_image}
                                />
                            ))}
                        </MovieContainer>
                    </>
                );
            }}
    </Query>;

export default Detail;