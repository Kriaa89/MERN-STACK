import { BrowserRouter, Routes, Route} from "rreact-router-dome";
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import wordColor from "./components/WordColor";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={< Home/>}></Route>
        <Route path="/:id" element={< Number/>}></Route>
        <Route path="/word" element={<Word/>}></Route>
        <Route path="/:word/" element={< word/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}