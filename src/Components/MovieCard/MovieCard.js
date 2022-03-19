import React from 'react';
import "./movieCard.css";

const MovieCard = ({ele}) => {
  return (
    <div className="MovieCard">
      <div>
        <img src={ele.posterUrl} alt={ele.title} width="300" />
      </div>
      <div >
        <h2>{ele.title}</h2>
        <p>{ele.description}</p>
        <h3>Rate: {ele.rate}</h3>
        </div>
    </div>
  )
}

export default MovieCard