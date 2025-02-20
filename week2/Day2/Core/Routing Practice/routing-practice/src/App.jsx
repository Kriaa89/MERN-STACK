import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import  WordColor from "./components/WordColor";

import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={< Home/>}></Route>
        <Route path="/:id" element={< Number/>}></Route>
        <Route path="/word" element={<Word/>}></Route>
        <Route path="/:word/:textColor/:bgColor" element={<WordColor/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;