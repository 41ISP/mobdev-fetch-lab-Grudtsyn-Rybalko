import LikeButton from '../LikeButton/LikeButton';
import RatingBadge from '../RatingBadge/RatingBadge';
import './MovieDetails.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieDetails({Title, Plot, Director, Poster, Year, Rated, Runtime, Released, Genre, Writer, Language, Actors, Awards, Country, BoxOffice, Ratings}) {
  
  return (
    <article className="movie-details">
      <Link to="/" type="button" className="movie-details__back">
        ← Ко всем фильмам
      </Link>

      <div className="movie-details__layout">
        <div className="movie-details__poster-col">
          <img
            className="movie-details__poster"
            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/f8426a65-c2d7-4c71-94bd-970b6e0eb9ad/3840x"
            alt={Title}
          />
        </div>

        <div className="movie-details__main">
          <div className="movie-details__heading">
            <div>
              <h1 className="movie-details__title">{Title}</h1>
              <p className="movie-details__meta">{Year} · {Rated} · {Runtime}</p>
            </div>
            <LikeButton />
          </div>

          <p className="movie-details__genre">{Genre}</p>

          <p className="movie-details__plot">
            {Plot}
          </p>

          <div className="movie-details__ratings"> {Ratings && Ratings.length > 0 ? ( Ratings.map((e) => <RatingBadge key={e.Source || e.Value || Math.random()} {...e} />) ) : ( <p className="movie-details__ratings-empty">Оценки отсутствуют</p> )} </div>

          <dl className="movie-details__facts">
            <div className="movie-details__fact"><dt>Режиссёр</dt><dd>{Director}</dd></div>
            <div className="movie-details__fact"><dt>Сценарий</dt><dd>{Writer}</dd></div>
            <div className="movie-details__fact"><dt>В ролях</dt><dd>{Actors}</dd></div>
            <div className="movie-details__fact"><dt>Дата выхода</dt><dd>{Released}</dd></div>
            <div className="movie-details__fact"><dt>Язык</dt><dd>{Language}</dd></div>
            <div className="movie-details__fact"><dt>Страна</dt><dd>{Country}</dd></div>
            <div className="movie-details__fact"><dt>Награды</dt> <dd> {Awards && Awards.includes('&') ? `${Awards.split('&')[0].trim()} & ${Awards.split('&')[1].trim()}` : Awards || 'Нет данных' } </dd> </div>
            <div className="movie-details__fact"><dt>Сборы</dt><dd>{BoxOffice}</dd></div>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default MovieDetails;
