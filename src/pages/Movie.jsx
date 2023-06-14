import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getJSON } from "../request";
import { useState } from "react";
import styles from "./Movie.module.css";

export function Movie() {
  let { movieID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getJSON(`/movie/${movieID}`).then((data) => setMovie(data));
  }, [movieID, setMovie]);

  if (!movie) return null;

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;

  return (
    <div className={styles.container}>
      {<img className={styles.img + ` ${styles.col}`} src={imageUrl} alt={movie.title} />}
      <div className={styles.col}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>{movie.vote_average + " of 10"}</p>
      </div>
    </div>
  );
}
