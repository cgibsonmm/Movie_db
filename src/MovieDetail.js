import React, { Component } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import Moment from 'react-moment';
import { Poster } from './Movie';

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280/';
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154/';

class MoviesDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=4e6eb092db339f700c65629871b5e34d&language=en-US`)
        .then(res => res.json())
        .then(movie => this.setState({ movie }));
    } catch (e) {
      console.log(e);
    }
  }


  render() {
    const { movie } = this.state;
    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h2>{movie.title}</h2>
            <a href={movie.homepage}>{movie.homepage}</a>
            <h4>
                Release Date:
              {' '}
              <Moment format="MM/DD/YYYY">{movie.release_date}</Moment>
            </h4>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MoviesDetail;

const MovieWrapper = styled.div`
  positions: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div{
    margin-left: 20px;
  }
  img{
    position: relative;
    top: -5em;
  }
  h2, h3, h4, a {
    margin: 4px;
  }
  a{
    color: rgb(106, 106, 106);
    font-size: .9rem;
  }

`;
