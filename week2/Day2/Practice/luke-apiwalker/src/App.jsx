import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Character from "./views/Character";
import Planets from "./views/Planets";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <SearchForm/>
        <Routes>
          <Route path="/people/:id" element={<Character/>}/>
          <Route path="/planets/:id" element={<Planets/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
