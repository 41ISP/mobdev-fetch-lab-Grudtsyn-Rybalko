import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import './HomePage.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';

function HomePage() {
  const [searchParams] = useSearchParams()
  const queryParam = searchParams.get('q') || ''
  const [query, setQuery] = useState(queryParam)
  const [movies, setMovies] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
        const loadMovies = async (e) => {
          e.preventDefault()
            try {
                setIsLoading(true)
                setError(null)
                const res = await fetch(
                    "https://www.omdbapi.com/?apikey=" + import.meta.env.VITE_OMDB_API_KEY + "&s=" + query,
                )

                const data = await res.json()
                if (!res.ok || data.Response === "False") {
                    const errorData = await res.json()

                    throw new Error(errorData.detail[0].msg || "Something is wrong")
                }
                
                console.log(data)
                setMovies(data.Search)
            } catch (error) {
                console.error(error)
                setError(error.message)
            } finally {
                setIsLoading(false)
            }

        }
  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar query={query} setQuery={setQuery} loadMovies={loadMovies}/>

        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
            {isLoading && <Loader />}
            {!isLoading && error && <ErrorMessage />}
            {!isLoading && !error && <MovieList movies={movies}/>}
        </section>
      </div>
    </main>
  );
}

export default HomePage;
