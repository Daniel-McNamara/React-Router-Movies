import React from 'react';
import {useHistory, Link} from 'react-router-dom';

/* setup home button*/
const SavedList = props => {
  const history = useHistory();
  
  function goHome() {
    history.push('/');
  }


  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => {
        console.log(movie);
        return (
          <Link to={`/movies/${movie.id}`}>
            <span className="saved-movie">{movie.title}</span>
          </Link>
        );
      })}
    <div onClick={goHome} className="home-button">Home</div>
  </div>
  );
};

export default SavedList;
