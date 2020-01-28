import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
/*add route for movielist, add route to take id param for /movies/ */
  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/movies/:movieId">
          <Movie movies={movies}/>
        </Route>
      </div>
    </div>
  );
};

export default App;
