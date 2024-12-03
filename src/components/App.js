import React, { useState } from "react";
import AddMovieForm from "./AddMovieForm";
import MovieList from "./MovieList";

export default function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = (title) => {
    // TODO: Implement adding a new movie to the list
    setMovies((prevTitle) => {
      return [...prevTitle, title]
    })
  };

  const handleToggleWatched = (id) => {
    // TODO: Implement toggling a movie's watched status
    setMovies((prevTitle) => prevTitle.map(
      (title) => title.id === id ? {...title, watched: ! title.watched} : title
    ))
  };

  const handleDeleteMovie = (id) => {
    // TODO: Implement deleting a movie from the list
    setMovies((prevTitle) =>
    prevTitle.filter((title) => title.id !== id))
  };

  return (
    <div>
      <h1>Favorite Movies</h1>
      <AddMovieForm onAddMovie={handleAddMovie}/>
      <MovieList
      movies={movies}
      onDeleteMovie={handleDeleteMovie}
      onToggleWatched={handleToggleWatched}/>
    </div>
  );
}

