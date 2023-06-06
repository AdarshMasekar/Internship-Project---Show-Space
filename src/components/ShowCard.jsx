import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShowCard = ({ Show }) => {
  const defaultImage =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/booking', { state: { Show } });
  };

  return (
    <div className="Show">
      <div>
        <img className="showImage" src={Show?.image?.medium || defaultImage} alt={Show.name} />
      </div>
      <div>
        <span>
          <br />
          <p>Genres: {Show?.genres?.[0] + ' ' + Show?.genres?.[1]} </p>
          <p>Type: {Show.type}</p>
        </span>
        <h4 className="name">{Show.name}</h4>
      </div>
      <button className='book' onClick={handleBookClick}>Book Show</button>
    </div>
  );
};

export default ShowCard;