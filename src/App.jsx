import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";

export function Aplication() {
  return (
    <div className={styles.titulo}>
      <header>Movies</header>
      <main>
        <MoviesGrid />
      </main>
    </div>
  );
}
