import { Routes, BrowserRouter, Route } from "react-router-dom";
import PokemonLists from "./pages/PokemonList";
import MyNavbar from "./components/Navbar/Navbar";
import PokemonDetail from "./pages/PokemonDetail";
import MyPokemonList from "./pages/MyPokemonList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <MyNavbar /> */}
        <div>
          <Routes>
            <Route
              exact
              path="/pokemon-list"
              element={<PokemonLists />}
            ></Route>
            <Route
              exact
              path="/pokemon-detail"
              element={<PokemonDetail />}
            ></Route>
            <Route
              exact
              path="/my-pokemon-list"
              element={<MyPokemonList />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
