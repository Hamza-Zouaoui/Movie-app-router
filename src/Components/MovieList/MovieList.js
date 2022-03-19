import React from 'react';
import "./movieList.css";
import MovieCard from "../MovieCard/MovieCard.js";
import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
  return (
    <div className="MovieList">{movies.map((ele,index)=>(
      <Link key={index} to={"/"+index}>
      <MovieCard key={index} ele={ele} />
      </Link>
    ))}</div>
  )
}

export default MovieList