import MovieDetails from '../../components/MovieDetails/MovieDetails';
import './MovieDetailsPage.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetailsPage() {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
          const loadMovies = async () => {
              try {
                  setIsLoading(true)
                  setError(null)
                  const res = await fetch(
                      "https://www.omdbapi.com/?apikey=" + import.meta.env.VITE_OMDB_API_KEY + "&i=" + imdbID,
                  )
                  const data = await res.json()
                  if (!res.ok || data.Response === "False") {
                      const errorData = await res.json()
  
                      throw new Error(errorData.detail[0].msg || "Something is wrong")
                  }
                  
                  
                  console.log(data)
                  setMovie(data)
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
    <main className="movie-details-page">
      <div className="container">
        <MovieDetails {...movie}/>
      </div>
    </main>
  );
}

export default MovieDetailsPage;
