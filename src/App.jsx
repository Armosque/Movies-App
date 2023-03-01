import './App.css';
import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <Router>
    <header>
    <Link to='/'>
     <h1 className='title'>Movies</h1>
     </Link> 
    </header>
     <main>
      <Routes>
      <Route path="/" element={< LandingPage/>}/>
      <Route path="/movies/:movieId" element={< MovieDetails/>}/>
     
      </Routes>
      </main>
    </Router> 
   
   
  
  );
}

export default App;
