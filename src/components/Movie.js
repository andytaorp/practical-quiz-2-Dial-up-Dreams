import React from "react";

/**
 * TODO: implement the Movie component
 * A single movie item in the movie list, with a checkbox to mark it
 * watched, a text span for the title, and a delete button.
 */
export default function Movie({movieToWatch, onDeleteMovie, onToggleWatched}) {
    return(
        <li>
            <input
            type="checkbox"
            onClick={()=> onToggleWatched(movieToWatch.id)}/>
            <span style={movieToWatch.watched ? {textDecoration:"line-through"} : {}}>
                {movieToWatch.title}
            </span>
            <button onClick={()=> onDeleteMovie(movieToWatch.id)}>Delete</button>
        </li>
    )
};
