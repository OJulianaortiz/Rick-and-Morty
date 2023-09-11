import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./views/About";
import Home from "./views/Home";
import Detail from "./components/Detail/Detail";
import PATHROUTES from "./helpers/PathRoutes";
import Form from "./components/Form/Form";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const { pathname } = useLocation();
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "julianaagustina@gmail.com";
  const PASSWORD = "kOholahola2#";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(
      characters.filter((character) => {
        return character.id !== Number(id);
      })
    );
  }

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      {/* <Cards characters={characters} onClose={onClose} /> */}
      {/* <Form login={this.login} /> */}

      <Routes>
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
