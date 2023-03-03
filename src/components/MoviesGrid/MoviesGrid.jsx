//import movies from '../../movies.json'
import './MoviesGrid.css';
import { MovieCard } from '../MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { get } from '../../utils/get';
import { useQuery } from '../../hooks/useQuery';
import { Spinner } from '../Spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component"



export function MoviesGrid() {

    const [movies, setMovies]= useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)
    
    const query = useQuery();
    const search =query.get("search");
    
    const pageNext=()=>{
        setPage((prevPage)=>prevPage+ 1)
    }

    useEffect(() => {

        setLoading(true)

        const searchUrl= search ? '/search/movie?query='+ search + '&page='+ page : '/discover/movie?page='+ page;
        
        get(searchUrl).then(data=>{
            setMovies((prevMovies)=>prevMovies.concat(data.results))
            setHasMore(data.page < data.total_pages)
            setLoading(false)
    })

    }, [search, page]);
    

    console.log(movies)
    return (
        <InfiniteScroll
        dataLength={movies.length}
        next={pageNext}
        hasMore={hasMore}
        loader={<Spinner/>}
        >
        
        <ul className='moviesGrid'>
            {movies.map((movie) =>(
               
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
        </InfiniteScroll>
    )
}
