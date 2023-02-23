import React from "react";
import { actors } from "../data";

function Actors() {
  // console.log("Actors:", actors);
  return (
    <>
      <h1>Actors Page</h1>
      {actors.map((actor) => {
        return (
          <div key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Actors;
