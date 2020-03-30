import React, { useState, useEffect } from 'react';
import genres from './genres';
import Genre from './Genre';
import Container from './Genre';
import GenreForm from './GenreForm';

import styled from 'styled-components';

const GenreBody = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
    180deg,
    rgba(185, 49, 107, 1) 0%,
    rgba(121, 48, 113, 1) 54%,
    rgba(52, 47, 120, 1) 100%
  );
  .container {
    width: 100%;
    max-width: 832px;
    margin: 0 auto;
    padding: 10px 15px;
    color: white;
    .genres {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const GenresPage = () => {
  const [Genres, setGenres] = useState(genres);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const filteredGenres = Genres.filter((genre) => {
      return genre.includes(searchQuery.toLowerCase());
    });
    setGenres(filteredGenres);
    console.log(Genres);
  }, [Genres, searchQuery]);

  return (
    <GenreBody>
      <main className="container">
        <GenreForm
          className="genre-form"
          searchQuery={searchQuery}
          handleChange={handleChange}
        />
        <div className="genres">
          {Genres.map((genre, i) => {
            return <Genre key={i} genre={genre} />;
          })}
        </div>
      </main>
    </GenreBody>
  );
};

export default GenresPage;
