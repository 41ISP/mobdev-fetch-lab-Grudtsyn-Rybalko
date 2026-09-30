import LikeButton from '../LikeButton/LikeButton';
import RatingBadge from '../RatingBadge/RatingBadge';
import './MovieDetails.css';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieDetails() {
  const { imdbID } = useParams()
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
          const loadMovies = async () => {
              try {
                  setIsLoading(true)
                  setError(null)
                  const res = await fetch(
                      "https://www.omdbapi.com/?apikey=" + import.meta.env.VITE_OMDB_API_KEY + "&s=" + imdbID,
                  )
                  if (!res.ok || Response.json == null) {
                      const errorData = await res.json()
  
                      throw new Error(errorData.detail[0].msg || "Something is wrong")
                  }
                  
                  const data = await res.json()
                  console.log(data)
                  setMovies(data.docs)
              } catch (error) {
                  console.error(error)
                  setError(error.message)
              } finally {
                  setIsLoading(false)
              }
  
          }
          loadMovies()
      }, [imdbID])
  return (
    <article className="movie-details">
      <Link to="/" type="button" className="movie-details__back">
        ← Ко всем фильмам
      </Link>

      <div className="movie-details__layout">
        <div className="movie-details__poster-col">
          <img
            className="movie-details__poster"
            src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_QL75_UX380_CR0,0,380,562_.jpg"
            alt="Joker"
          />
        </div>

        <div className="movie-details__main">
          <div className="movie-details__heading">
            <div>
              <h1 className="movie-details__title">Joker</h1>
              <p className="movie-details__meta">2019 · R · 122 min</p>
            </div>
            <LikeButton />
          </div>

          <p className="movie-details__genre">Crime, Drama, Thriller</p>

          <p className="movie-details__plot">
            Arthur Fleck, a party clown and a failed stand-up comedian, leads an
            impoverished life with his ailing mother. However, when society
            shuns him and brands him as a freak, he decides to embrace the life
            of chaos in Gotham City.
          </p>

          <div className="movie-details__ratings">
            <RatingBadge />
            <div className="rating-badge">
              <span className="rating-badge__value">68%</span>
              <span className="rating-badge__source">Rotten Tomatoes</span>
            </div>
            <div className="rating-badge">
              <span className="rating-badge__value">59/100</span>
              <span className="rating-badge__source">Metacritic</span>
            </div>
          </div>

          <dl className="movie-details__facts">
            <div className="movie-details__fact"><dt>Режиссёр</dt><dd>Todd Phillips</dd></div>
            <div className="movie-details__fact"><dt>Сценарий</dt><dd>Todd Phillips, Scott Silver, Bob Kane</dd></div>
            <div className="movie-details__fact"><dt>В ролях</dt><dd>Joaquin Phoenix, Robert De Niro, Zazie Beetz</dd></div>
            <div className="movie-details__fact"><dt>Дата выхода</dt><dd>04 Oct 2019</dd></div>
            <div className="movie-details__fact"><dt>Язык</dt><dd>English, German</dd></div>
            <div className="movie-details__fact"><dt>Страна</dt><dd>United States, Canada, Australia</dd></div>
            <div className="movie-details__fact"><dt>Награды</dt><dd>Won 2 Oscars. 120 wins &amp; 247 nominations total</dd></div>
            <div className="movie-details__fact"><dt>Сборы</dt><dd>$335,477,657</dd></div>
          </dl>
        </div>
      </div>
    </article>
  );
}

export default MovieDetails;
