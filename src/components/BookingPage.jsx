import React from 'react';
import {useLocation} from 'react-router-dom';
import {useState} from 'react';

const BookingPage = () => { 
    const location = useLocation();
    const { Show } = location.state;

    const defaultImage = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
    const [isBooked, setIsBooked] = useState(false);

    function handleBooking() {
      setIsBooked(!isBooked);
    }

  return (
      <div className='container side'>
        <h1>Booking Page</h1>
        <div className="left">
        <div>
            <img className='bookImage' src={Show?.image?.medium || defaultImage} alt={Show.name}/>
        </div>
            
        <h4 className="showName">{Show.name}</h4>
        </div>

        <div className="right">
            <h3><strong>Genres:</strong> {Show?.genres?.[0] + ' ' + Show?.genres?.[1]}</h3>
            <h3><strong>Language</strong> : {Show.language}</h3>
            <h3><strong>Type</strong>: {Show.type}</h3>
            <h3><strong>Rating</strong> : {Show.rating.average}</h3>
            <h3><strong>Premiered</strong> : {Show.ended}</h3>
            <h3><strong>Summary</strong> : {Show.summary? Show.summary:"summary not available"}</h3>
            <button className='book' onClick={handleBooking} >{isBooked? "Cancel Booking":"Book Now"}</button>
            <h2 className='booked'>{isBooked? Show.name+" is booked":" "}</h2>
        </div>
    </div>
  );
}

export default BookingPage;