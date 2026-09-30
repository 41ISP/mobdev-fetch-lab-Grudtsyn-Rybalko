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
  useEffect(() => {
        const loadMovies = async () => {
            try {
                setIsLoading(true)
                setError(null)
                const res = await fetch(
                    "https://www.omdbapi.com/?apikey=" + import.meta.env.VITE_OMDB_API_KEY + "&s=" + query,
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
    }, [queryParam])
  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar query={query} setQuery={setQuery} />

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
