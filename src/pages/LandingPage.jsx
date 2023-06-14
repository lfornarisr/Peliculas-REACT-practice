import { MoviesGrid } from "../components/MoviesGrid";
import styles from "../App.module.css";

export function LandingPage() {
  return (
    <>
      <header className={styles.titulo}>
        <h1>Movies</h1>
      </header>
      <main>
        <MoviesGrid />
      </main>
    </>
  );
}
