import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'
const ShowCard = ({ Show }) => {
  const defaultImage =
    'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate('/booking', { state: { Show } });
  };

  return (
    <div className="Show" onClick={handleBookClick}>
      <div className='image-container'>
        <img className="showImage" src={Show?.image?.medium || defaultImage} alt={Show.name} />
      </div>
        <h4 className="name">{Show.name}</h4>
    </div>
  );
};

export default ShowCard;