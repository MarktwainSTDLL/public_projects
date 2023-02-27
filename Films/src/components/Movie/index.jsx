import React from 'react';

import Play from '../assets/img/play.svg'
import { BsFillPlayFill, BsPlus } from 'react-icons/bs'

function MovieInfo(props) {
  const { title, overview, poster_path, year, runtime, genres, age, trailer } = props;

  return (
    <div>
      <div className="banner">
        <img className='bgImage' src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />

        <div className="content">
          <h1 className='title'>{title}</h1>
          <h4>
            <span>{year}</span>
            <span><b>{age}+</b></span>
            <span>{runtime} min</span>
          </h4>
          <p>
            {overview}
          </p>

          <span className='genres'>
            {genres.map((genre, index) => (
              <React.Fragment key={genre.id}>
                <h4>{genre.name}</h4>
                {index === genres.length - 1 ? null : <span>,</span>}
              </React.Fragment>
            ))}
          </span>

          <div className="btnGroup">
            <a href="#"><BsFillPlayFill className="icon" /> Play</a>
            <a href="#"><BsPlus /> My list</a>
          </div>

          <a className='playTrailer' href={`https://www.youtube.com/watch?v=${trailer}`}><img src={Play} alt="Play Image" /> Watch Trailer</a>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;
