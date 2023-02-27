import React, { useEffect, useState } from 'react';
import '../components/assets/css/styles.css';

import MovieInfo from '../components/Movie';
import Search from '../components/Search';

function Home() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/558?api_key=KEY_API&language=en-US&append_to_response=release_dates,videos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const year = new Date(data.release_date).getFullYear();
                data.release_year = year;
                const certification = data?.release_dates?.results?.find(result => result.iso_3166_1 === 'BR')?.release_dates[0]?.certification;
                data.certification = certification;
                const trailerId = data.videos.results[0].key;
                setFilms([data]);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className='container'>
            <Search/>
            {films.map(film => (
                <MovieInfo
                    key={film.id}
                    title={film.title}
                    overview={film.overview}
                    poster_path={film.poster_path}
                    age={film.certification}
                    year={film.release_year}
                    runtime={film.runtime}
                    genres={film.genres}
                    trailer={film.videos.results[0].key}
                />

            ))}
        </div>
    )
}

export default Home;
