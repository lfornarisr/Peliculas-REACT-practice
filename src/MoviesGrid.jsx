import { MovieCard } from "./MovieCard";
import MoviesList from "./MoviesList.json";
import styles from "./MoviesGrid.module.css"

export function MoviesGrid() {
  return (
    <ul className={styles.moviesGrid}>
      {MoviesList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
