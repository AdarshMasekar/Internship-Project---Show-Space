import React from 'react';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ShowCard from './ShowCard';

export const Home = () => {
    const [searchTerm, setSearchTerm] = useState('kung fu panda   ');
    const [Shows, setShows] = useState([]);
  
    useEffect(() => {
      if (searchTerm.trim() !== '') {
        fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
          .then(response => response.json())
          .then(data => {
            const showData = data.map(result => result.show);
            setShows(showData);
            // console.log(showData)
  
          })
          .catch(error => {
            // console.error('Error:', error);
          });
      }
    }, [searchTerm]);
  
    const handleSearch = event => {
      setSearchTerm(event.target.value);
    };
  
   
  
  return (
    <div className='app content-container'>
        <header className='nav'>
            <h3>Show Space</h3>
            <Link to="/register"><h3>Logout</h3></Link>
        </header>

    <div className="search">
      <input
        type="text"
        placeholder="search for your shows..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <svg
        width={40}
        color='white'
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>

            {Shows?.length > 0 ? (
            <div className="container" >
                {Shows.map(Show => (

                <ShowCard key={Show.id} Show = {Show} />
            
                ))}
            </div>
            ) : (
            <div className="empty">
                <h2>No shows found</h2>
            </div>
            
            )}
  </div>
  )
}
