import React, { useState, useEffect } from "react";

const MovieDetails = ({ id }) => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = () => {
        const url = `https://www.omdbapi.com/?i=${id}&apikey=63cf26bb`;

      fetch(url)
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          } else {
            throw new Error("Errore nella risposta del server");
          }
        })
        .then((data) => {
          console.log("Risposta JSON dal server:", data);
          setMovie(data);
        })
        .catch((e) => {
          console.error("Errore:", e);
          setError(e.message);
        });
    };

    fetchMovieDetails();
  }, [id]); // Effettua la chiamata ogni volta che l'ID cambia

  if (error) {
    return <div>Errore: {error}</div>;
  }

  if (!movie) {
    return <div>Caricamento...</div>;
  }

  return (
    <div>
      <h1> {movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <ul>
           
            <li>{movie.Year}</li>
            <li>{movie.Genre}</li>
            <li>{movie.Actors}</li>
            <li>{movie.Plot}</li>
            <li>{movie.Language}</li>
            <li>{movie.Country}</li>
        </ul>

    </div>
  );
};

export default MovieDetails;
