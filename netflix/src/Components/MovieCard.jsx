import React from "react";
import { Card, Image } from "react-bootstrap"; 
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
      <Card className="col p-0 text-center movie-card">
        <Image src={movie.Poster} alt="Movie Poster" fluid className="movie-img" />
        <ul>
            <li>{movie.title}</li>
            <li>{movie.year}</li>
            <li>{movie.genre}</li>
            <li>{movie.actors}</li>
            <li>{movie.plot}</li>
            <li>{movie.language}</li>
            <li>{movie.country}</li>
        </ul>

      </Card>
    </Link>
  );
};

export default MovieCard;
