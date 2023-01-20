import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";

import Movies from "./pages/Movies";
import Bookmark from "./pages/Bookmark";
import Search from "./components/Search";
import { useContext } from "react";
import { Context } from "./context/context";

function App() {
  const { allMovies, allTV } = useContext(Context);
  return (
    <div className="App flex flex-col xl:flex-row ">
      <Nav />

      <div className=" w-full  xl:h-[94vh] xl:mt-[3vh] xl:w-[85vw] xl:ml-48 ">
        <Routes>
          <Route path="/entertainment" element={<Home />} />
          <Route
            path="/movie"
            element={<Movies type="movie" data={allMovies} />}
          />
          <Route path="/tv" element={<Movies type="tv" data={allTV} />} />
          <Route path="/bookmark" element={<Bookmark />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
