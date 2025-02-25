import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import BookList from './views/BookList'
import BookDetails from './views/BookDetails'
import BookForm from './views/BookForm'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<BookList/>}></Route>
        <Route path='/books/new' element={<BookForm/>}></Route>
        <Route path='/books/:id' element={<BookDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App
