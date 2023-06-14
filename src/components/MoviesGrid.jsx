import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { useEffect, useState } from "react";
import { getJSON } from "../request";

export function MoviesGrid() {
  const [MoviesList, setMoviesList] = useState([]);
  useEffect(() => {
    getJSON("/discover/movie").then((data) => setMoviesList(data.results));
  }, []);

  return (
    <ul className={styles.moviesGrid}>
      {MoviesList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
