import './SearchBar.css';
import { useNavigate } from 'react-router-dom'

function SearchBar({ query, setQuery, loadMovies }) {
  /*const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() === '') return
    navigate('/&s=' + encodeURIComponent(query.trim()))
  }*/
  return (
    <form onSubmit={loadMovies} className="search-bar">
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      <div className="search-bar__row">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
        />
        <button type="submit" className="search-bar__button">Искать</button>
      </div>
    </form>
  );
}

export default SearchBar;
