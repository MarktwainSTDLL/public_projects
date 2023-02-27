import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import './Search.css';
import { searchMovies } from './api';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.length >= 3) {
      searchMovies(event.target.value).then((data) => {
        setSearchResults(data);
      });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="containerFilms">
      <div className="searchFilm">
        <button className="btn">
          <BsSearch />
        </button>
        <input
          type="text"
          className="search"
          placeholder="Search film"
          value={searchTerm}
          onChange={handleInputChange}
        />
        {searchResults.length > 0 && (
          <div className="searchResults">
            {searchResults.map((result) => (
              <div key={result.id} className="searchResult">
                <a href={result.id}>{result.title}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
