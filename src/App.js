import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import Detail from "./components/Detail/Detail";
import axios from "axios";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import UserCreate from "./components/UserCreate/UserCreate.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import { useDispatch } from "react-redux";
import { getFav } from "./components/redux/actions.js";

function App() {
  //crear estado
  let [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  // const myFavorites = useSelector((state) => state.myFavorites);
  

  // // Funcion login con Express esta parte esta mala me redirecciona a una url con
  // datos que evio esta falla esta usando post y get por igual sospecho que es
  //  backend quien causa el error
  const login = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
    // axios(`${URL}?email=${email}&password=${password}`).then(({ data }) => {
    axios
      .post(URL, {
        email,
        password,
      })
      .then(({ data }) => {
        const { access } = data;
        if (access) {
          setAccess(true);
          dispatch(getFav());
          navigate("/home");
        } else {
          setAccess(false);
          alert("algo mal");
        }
      })
      .catch((error) => {
        alert("Usuario/clave no registrada");
        navigate("/createuser");
      });
  };
  const crearUser = async (userData) => {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/usuario/";
    axios
      .post(URL, {
        email,
        password,
      })
      .then(({ data }) => {
        if (data.crearUserDone) {
          navigate("/");
        } else {
          navigate("/createuser");
        }
      })
      .catch((error) => alert("Huvo un error"));
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    if (id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            const characterExists = characters.findIndex(
              (charac) => charac.id === Number(id)
            );

            if (characterExists === -1) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else
              alert("este personaje ya esta en lista elije otro id: " + id);
          } else {
            alert("¡No hay personajes con este ID!");
          }
        })
        .catch(() => {
          alert("Error al Consultar Id Personaje");
        });
    } else randoCharacter();
  };
  const randoCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    axios(`http://localhost:3001/rickandmorty/character/` + randomId).then(
      ({ data }) => {
        const characterExists = characters.includes(data);

        if (characterExists) {
          randoCharacter();
        } else {
          setCharacters((characters) => [...characters, data]);
        }
      }
    );
  };

  const onClose = (id) => {
     characters.filter(
      (character) => character.id !== Number(id)
    );
  };
  function verificarRuta() {
    if (location.pathname === "/") return false;
    if (location.pathname === "/createuser") return false;
    else return true;
  }

  return (
    <div className="App">
      {verificarRuta() && <Nav onSearch={onSearch}></Nav>}
      <Routes>
        <Route path={"/"} element={<Form login={login} />} />
        <Route
          path={"/home"}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route
          path="/createuser"
          element={<UserCreate crearUser={crearUser} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
