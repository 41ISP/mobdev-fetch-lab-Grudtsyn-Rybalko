import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';
import { Link } from 'react-router-dom';

function MovieCard({Title, Year, Poster, Type, imdbID}) {
  return (
    <article className="movie-card">
      <Link to={`/movie/${imdbID}`} type="button" className="movie-card__poster-button" aria-label="Открыть страницу фильма «Joker»">
        <img
          className="movie-card__poster"
          src={`${Poster} == 'N/A' ? "Постер отсутствует" : ${Poster}`}
          alt={Title}
        />
        <span className="movie-card__type">{Type}</span>
      </Link>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title="Joker">{Title}</h3>
        <p className="movie-card__year">{Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;
