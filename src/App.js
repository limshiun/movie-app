import React, { useState , useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/movielistheading';
import Searchbox from './components/searchbox';
import AddFavourites from './components/AddFavourites';

const App =()=>{
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState ('');
  
  const getMovieRequest = async(searchValue)=>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7a1251d1`;

    const response = await fetch (url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue]);

  return(
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies'/>
        <Searchbox searchValue={searchValue} setSearchValue={setSearchValue}/>

      </div>
      <div className='row'>
        <MovieList movies={movies} favouriteComponent={AddFavourites}/>
      </div>
    </div>
  );
};

export default App;