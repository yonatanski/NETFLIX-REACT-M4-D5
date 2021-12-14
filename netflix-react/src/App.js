import logo from "./logo.svg"

import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./Components/NavBar"
import Header from "./Components/Header"
import RowOfMovies from "./Components/RowOfMovies"
import Banner from "./Components/Banner"
import Footer from "./Components/Footer"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Header />
      <div className="row-container">
        <RowOfMovies title="Star Wars" />
        <RowOfMovies title="Harry Potter" />
        <RowOfMovies title="The Avengers" />
        <Footer />
      </div>
    </div>
  )
}

export default App
