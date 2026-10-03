import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';
import { Link } from 'react-router-dom';

function MovieCard({Title, Year, Poster, Type, imdbID}) {
  return (
    <article className="movie-card">
      <Link to={`/movie/${imdbID}`} type="button" className="movie-card__poster-button" aria-label="Открыть страницу фильма «Joker»">
        <img
          className="movie-card__poster"
          src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/f8426a65-c2d7-4c71-94bd-970b6e0eb9ad/3840x"
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
