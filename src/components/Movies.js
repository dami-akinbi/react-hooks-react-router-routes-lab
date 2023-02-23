import React from "react";
import { movies } from "../data";

function Movies() {
  // console.log("Movies:", movies);
  return (
    <>
      <h1>Movies Page</h1>
      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            <h2>{movie.title}</h2>
            <p>{movie.time} minutes</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Movies;
