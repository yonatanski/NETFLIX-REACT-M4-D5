import logo from "./logo.svg"

import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./Components/NavBar"
import Header from "./Components/Header"
import RowOfMovies from "./Components/RowOfMovies"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <div className="row-container">
        <RowOfMovies title="Star Wars" />
        <RowOfMovies title="Harry Potter" />
        <RowOfMovies title="The Avengers" />
      </div>
    </div>
  )
}

export default App
