import React, { useState, useEffect } from 'react';

function LandingPage() {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
 
    const apiKey = 'cfe422613b250f702980a3bbf9e90716';

    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setMovies(data.results);
        }
      } catch (error) {
        console.error('Error fetching popular movies: ', error);
      }
    };


    const fetchMovies = async () => {
      if (searchQuery) {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=${apiKey}`
          );

          if (response.ok) {
            const data = await response.json();
            setMovies(data.results);
          }
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      } else {
        fetchPopularMovies();
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div>
      <form action="" className='search'>
        <input
          type='search'
          placeholder='Enter Movie Title'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <ul className='movies'>
        {movies.map((movie) => (
          <li key={movie.id} className='movie-card'>
            <div className='movie'>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`}
                  alt={movie.original_title}
                  className='movie-image'
                />
                <figcaption className='movie-title-overlay'>
                  <h2 className='movie__title'>{movie.original_title}</h2>
                </figcaption>
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
