import './MovieDetails.css';
import {useParams} from 'react-router-dom';
import movie from '../movies.json'

export function MovieDetails() {
    
    const {movieId} = useParams();
    console.log(movie)
    const pelis = movie.find((e)=>e.id===Number(movieId));
  
    
    return (
        
        <div className='detailsContainer'>
        
        <img className='col movieImage' src={`http://image.tmdb.org/t/p/w300${pelis.poster_path}`} alt="" />
        <div className='col movieDetails'>
     <p><strong className='encabezado'>Title:</strong> {pelis.original_title}</p>
     <p><strong className='encabezado'>Description:</strong> {pelis.overview}</p>
     <p><strong className='encabezado'>Score:</strong> {pelis.vote_average}</p>
     {/* <p><strong>{movie.genres.map(genre=>genre.name).join(', ')}</strong></p> */}
     </div>
        </div>
    )
}