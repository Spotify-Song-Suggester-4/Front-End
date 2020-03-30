import React, { useState, useEffect } from 'react';
import genres from './genres';
import Genre from './Genre';
import Container from './Genre';
import GenreForm from './GenreForm';

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
  }, [searchQuery]);

  return (
    <div>
      <GenreForm searchQuery={searchQuery} handleChange={handleChange} />
      {Genres.map((genre, i) => {
        return <Genre key={i} genre={genre} />;
      })}
    </div>
  );
};

export default GenresPage;
