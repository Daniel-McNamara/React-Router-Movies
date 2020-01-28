import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import axios from 'axios';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
   /* movie data for props*/
   const [movies, setMovies] = useState([]);
   useEffect(() => {
     const getMovies = () => {
       axios
         .get('http://localhost:5000/api/movies')
         .then(response => {
           setMovies(response.data);
         })
         .catch(error => {
           console.error('Server Error', error);
         });
     }
 
     getMovies();
   }, []);
 
/*add route for movielist, add route to take id param for /movies/ */
  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/">
          <MovieList movies={movies} />
        </Route>
        <Route path="/movies/:movieId">
          <Movie movies={movies}/>
        </Route>
      </div>
    </div>
  );
};

export default App;
