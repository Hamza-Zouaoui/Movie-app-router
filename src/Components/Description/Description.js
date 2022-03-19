import React from 'react';
import { useParams } from 'react-router-dom';
import "./description.css";
import MovieCard from "../MovieCard/MovieCard.js";


const Description = ({movies}) => {
  
  let params=useParams();
  return (
    <div className="desc">
      { ((isNaN(params.id)) || (parseInt(params.id) >= movies.length))?
      <p>No Movie With this id </p> : 
      <>
      <MovieCard ele={movies[params.id]} />
      <iframe width="560" height="315" src={movies[params.id].trailer}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
      </> }
    </div>
  )
}

export default Description