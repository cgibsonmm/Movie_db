import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends PureComponent {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=4e6eb092db339f700c65629871b5e34d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1').then(res => res.json()).then(data => this.setState({ movies: data.results }));
    } catch (e) {
      console.warn(e);
    }
  }


  render() {
    const { movies } = this.state;
    return (
      <MovieGrid>
        {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: flex;
  width: 100vw;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
`;
