import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();

    if(!title.trim()) return
    const newMovie={
      id: Date.now(),
      title,
      watched:false
    }

    onAddMovie(newMovie)
    setTitle("");

  };
  function handleTitleChange(e){
    setTitle(e.target.value)
  }

  return(
    <form className="add-form" onSubmit={handleSubmit}>
      <input
      id="movie"
      type="text"
      placeholder="Movie Title"
      value={title}
      onChange={handleTitleChange}/>

      <button>Add Movie</button>

    </form>
  ) // TODO: add a form to add a new movie
}
