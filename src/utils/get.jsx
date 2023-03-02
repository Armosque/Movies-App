const Api= 'https://api.themoviedb.org/4';
export function get(path) {
    return (
        fetch(Api + path, {
            headers: { 
                Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmU1Zjc5MDhmZjE5ZjQxODIyYzU2OGU0MTBiZDAzYiIsInN1YiI6IjYyOWJmYzNlOTkyZmU2MDBhNjAwOGQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mIYo80ugNjU0mxRxoW9L4b8QRZvZPYImeKwI211DI8w',
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        .then(res=>res.json())
    )
}
