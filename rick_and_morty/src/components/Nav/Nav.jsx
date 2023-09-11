import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styled from "./Nav.module.css";
import PATHROUTES from "../../helpers/PathRoutes";

const Nav = (props) => {
  const { onSearch } = props;

  const [id, setId] = useState("");

  function handleChange(evento) {
    setId(evento.target.value);
  }

  return (
    <div className={styled.container}>
      <div className={styled.containerDos}>
        <input
          type="search"
          onChange={handleChange}
          value={id}
          className={styled.barraBuscar}
        />
        <button onClick={() => onSearch(id)} className={styled.navigatorBoton}>
          Agregar
        </button>
      </div>
      <div className={styled.barraBuscar}>
        <Link to={PATHROUTES.ABOUT}>
          <button className={styled.navigatorAbout}> About </button>
        </Link>
        <Link to={PATHROUTES.HOME}>
          <button className={styled.navigatorHome}> Home </button>
        </Link>
        <Link to={PATHROUTES.FAVORITES}>
          <button className={styled.navigatorFavs}> Favorites </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
