import { Routes, BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import PokemonLists from "./pages/PokemonList";
import MyNavbar from "./components/Navbar/Navbar";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonList from "./pages/MyPokemonList";

import { keepData } from "./redux/actions/pokemonActions";

function App() {
  const dispatch = useDispatch();

  const localData = localStorage.getItem("dataPokemon");
  if (localData) {
    const myPokemon = JSON.parse(localData);

    dispatch(keepData(myPokemon));
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* <MyNavbar /> */}

        <Routes>
          <Route
            exact
            path="/pokemon-detail/:name"
            element={<PokemonDetail />}
          ></Route>
          <Route exact path="/pokemon-list" element={<PokemonLists />}></Route>

          <Route
            exact
            path="/my-pokemon-list"
            element={<MyPokemonList />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
