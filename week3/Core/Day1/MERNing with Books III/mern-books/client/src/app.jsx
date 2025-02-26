import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import BookList from "./components/BookList"
import UpdateBook from "./components/UpdateBook"
import BookForm from "./components/BookForm"
import BookDetails from "./components/BookDetails"


function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<BookList />} />
          <Route path="/books/new" element={<BookForm />} />
          <Route path="/books/:id" element={<BookDetails />}></Route>
          <Route path="/books/:id/edit" element={<UpdateBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
