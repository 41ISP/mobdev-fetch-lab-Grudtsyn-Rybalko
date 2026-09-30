import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';

function MovieList({movies}) {
  return (
    <ul className="movie-list">
      {movies.map((e) => {
                    const { key, ...props } = e
                    return <li key={e.key}><MovieCard {...props} movieKey={e.imdbID}/></li>
                })}
    </ul>
  );
}

export default MovieList;
