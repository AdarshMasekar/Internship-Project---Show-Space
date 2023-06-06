import React from 'react';
import {useLocation} from 'react-router-dom';

const BookingPage = () => { 
    const location = useLocation();
    const { Show } = location.state;

    const defaultImage = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
  
  return (
      <div className='container side'>
        <div className="left">
        <div>
            <img className='showImage' src={Show?.image?.medium || defaultImage} alt={Show.name}/>
        </div>
        <h4 className="name">{Show.name}</h4>
        <span>
            <br />
            <p>Type: {Show.type}</p>
        </span>
        </div>

        <div className="right">
            <h3>Genres: {Show?.genres?.[0] + ' ' + Show?.genres?.[1]}</h3>
            <h3>Language : {Show.language}</h3>
            <h3>Rating : {Show.rating.average}</h3>
            <h3>year : {Show.ended}</h3>
            <h3>summary : {Show.summary}</h3>
        </div>
    </div>
  );
}

export default BookingPage;