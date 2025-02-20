import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Character from "./views/Character";
import Planet from "./views/Planet";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <SearchForm/>
        <Routes>
          <Route path="/people/:id" element={<Character/>}/>
          <Route path="/planetes/:id" element={<Planet/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
