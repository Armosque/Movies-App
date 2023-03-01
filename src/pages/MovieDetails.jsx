import './MovieDetails.css';
import movies from '../movies.json'

export function MovieDetails() {
    
    return (
        
        <div className='detailsContainer'>
        {
            movies.map((movie)=>( 
                <img key={movie.id} src={'http://image.tmdb.org/t/p/w500'+ movie.poster_path} alt={movie.title} />
            ))
        }
    
        </div>
    )
}