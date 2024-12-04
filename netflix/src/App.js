import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from './Components/TvShows';
import NavBar from './Components/CustomNavBar';
import MovieDetails from './Components/MovieDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/TvShows' element={<TvShows />} />
          <Route path='/movies/:id' element ={<MovieDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
