import './Search.css';
import {FaSearch} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useQuery } from '../../hooks/useQuery';

export function Search() {

    const [searchText, setSearchText]=useState('');
    const history = useNavigate();
    
    const query=useQuery();
    const search = query.get('search');

    useEffect(() => {
        setSearchText(search || '');
    }, [search]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        history('/?search='+ searchText)

    }
    const change=(e)=>{
        setSearchText(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1));
        
    }

    return (
        <form className='searchContainer' onSubmit={handleSubmit}>
            <div className='searchBox'>
                <input className='searchInput' type='text' value={searchText} onChange={change}/>
                <button className='searchButton' type='submit'><FaSearch size={20}/>

                </button>
               
            </div>
        </form> 
    )
}
