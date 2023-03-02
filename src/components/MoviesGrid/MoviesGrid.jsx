//import movies from '../../movies.json'
import './MoviesGrid.css';
import { MovieCard } from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { get } from '../../utils/get';
export function MoviesGrid() {

    const [movies, setMovies]= useState([]);

    useEffect(() => {
        
      get('/discover/movie').then(data=>{
            setMovies(data.results)
        })

    }, []);

    console.log(movies)
    return (
        
        <ul className='moviesGrid'>
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}
