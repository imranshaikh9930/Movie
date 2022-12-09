// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import MovieListHeading from "./Component/MovieListHeading";
import SearchInput from './Component/SearchInput';
import MovieList from "./Component/MovieList";
import AddFavorite from './Component/AddFavorite';
import RemoveFav from './Component/RemoveFav';

import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async (search) => {
    const url = `http://www.omdbapi.com/?s=${search}s&apikey=263d22d8`;
    const resp =  await fetch(url);
    const data =  await resp.json();
    // setMovies(data);

    if (data.Search) {
      setMovies(data.Search);
    }
  }
  useEffect(() => {
    getMovies(search);
  }, [search])
  
  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );

    setFavorites(movieFavourites);
  }, []);
  
  const saveLLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites',JSON.stringify(items))
  }
  const  AddMovie = (movie)=> {
    const updatedList = [...favorites, movie];
    // console.log(updatedList)
    setFavorites(updatedList);
    saveLLocalStorage(updatedList);
    
    
  }
  const RemoveFavList = (movie) => {
    const newList = favorites.filter(favorites => favorites.imdbID !== movie.imdbID);

    setFavorites(newList);
    saveLLocalStorage(newList);
  }

  
  return (
    <div className='container-fluid movie-app'>
     <div className='row d-flex align-items-center mt-4 mb-4'> 
       <MovieListHeading heading="Movies" />
        <SearchInput search={search} setSearch={setSearch} /> 
     </div> 
      <div className="container">
        <MovieList
          movies={movies}
          favoriteComponent={AddFavorite}
          handleClick={AddMovie}
         
        />
      </div>
      
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favourites' />
      </div>
      
     
      <div className='container'>
        <MovieList
          movies={favorites}
          handleClick={RemoveFavList}
          favoriteComponent={RemoveFav} />
      </div>
    </div>
  );
}

export default App;
