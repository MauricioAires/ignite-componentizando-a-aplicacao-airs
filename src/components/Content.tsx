import { useMovie } from '../hooks/user-movies';

import { MovieCard } from '../components/MovieCard';
import { Header } from './Header';

import '../styles/content.scss';

export function Content() {
  const { movies } = useMovie();

  return (
    <div className="container">
      <Header />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
