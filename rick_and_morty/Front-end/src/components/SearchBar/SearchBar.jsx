import styles from "./SearchBar.module.css";
import { useState } from "react";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  function handleChange(evento) {
    setId(evento.target.value);
  }

  return (
    <div className={styles.botonFondo}>
      {
        <>
          <input
            className={styles.barraBuscar}
            type="search"
            onChange={handleChange}
            value={id}
          />
          <button onClick={() => onSearch()} className={styles.botonBarra}>
            Agregar
          </button>
        </>
      }
    </div>
  );
}
