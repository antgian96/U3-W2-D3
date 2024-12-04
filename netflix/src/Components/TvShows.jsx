import React, { useState, useEffect } from "react";
import { Spinner, Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

const TvShows = () => {
  const [remoteMovies, setRemoteMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = () => {
    const searchTerm = "star wars"; 
    const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=63cf26bb`;

    fetch(url)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel fetch dei film");
        }
      })
      .then((data) => {
        if (data.Search) {
          setRemoteMovies(data.Search);
        } else {
          throw new Error("Nessun film trovato");
        }
      })
      .catch((e) => {
        console.error("Errore nella fetch:", e);
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isLoading) {
    return (
      <div className="text-center mt-4">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

  return (
    <div>
        <h4 className="text-start">Watch it Again</h4>
        {/* Layout a griglia per visualizzare le card */}
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
          {remoteMovies.length > 0 ? (
            remoteMovies.slice(0, 6).map((movie) => (
              <Col key={movie.imdbID} className="mb-4">
                <MovieCard movie={movie} /> {/* Passiamo ogni film alla card */}
              </Col>
            ))
          ) : (
            <p>Loading...</p> // Se non ci sono film da mostrare
          )}
        </Row>
      </div>
  );
};

export default TvShows;
