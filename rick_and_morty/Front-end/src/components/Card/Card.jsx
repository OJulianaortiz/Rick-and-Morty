import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../Redux/Actions/Actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = (props) => {
  const {
    id,
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav ? removeFav(id) : props.addFav(props.character);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.carta}>
      {isFav ? (
        <button onClick={handleFavorite} className={styles.corazon}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} className={styles.corazon}>
          🤍
        </button>
      )}

      <button onClick={() => onClose(id)} className={styles.botoncin}>
        X
      </button>
      <Link to={`/detail/${id}`} className={styles.link}>
        <h2 className={styles.nombre}>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender} </h2>
      <h2> {origin}</h2>
      <img src={image} alt="" className={styles.img} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },

    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
