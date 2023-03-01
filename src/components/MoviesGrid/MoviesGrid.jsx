import movies from '../../movies.json'
import './MoviesGrid.css';
import { MovieCard } from '../MovieCard/MovieCard';
export function MoviesGrid() {
    console.log(movies)
    return (
        
        <ul className='moviesGrid'>
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
        
    )
}
