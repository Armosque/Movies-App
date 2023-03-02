import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/get";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get("/movie/" + movieId).then((data)=>{
        setMovie(data);
        
    })
  }, [movieId]);
  if (!movie) {
    return null;
  }
  const imageUrl ="https://image.tmdb.org/t/p/w500"+ movie.poster_path;
  console.log(imageUrl);
  

  return (
    <div className="detailsContainer">
      <img className="col movieImage" src={imageUrl} alt={movie.title} />
      <div className="col movieDetails">
        <p>
          <strong className="encabezado">Title:</strong> {movie.title}
        </p>
        {/* <p>
          <strong className="encabezado">Genres:</strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p> */}
        <p>
          <strong className="encabezado">Description:</strong> {movie.overview}
        </p>
        <p>
          <strong className="encabezado">Score:</strong> {movie.vote_average}
        </p>
       
      </div>
    </div>
  );
}
