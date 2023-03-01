import './MovieCard.css';
import { Link } from 'react-router-dom';
export function MovieCard({movie}) {
    const imageUrl='http://image.tmdb.org/t/p/w300'+movie.poster_path
    return (
        <Link to={'/movies/'+ movie.id}>
       <li className='movieCard'>
       <img width={230} height={345} className='movieImage' src={imageUrl} alt={movie.title}/>
       <div>{movie.title}</div>
       </li>
       </Link>
    )
}
