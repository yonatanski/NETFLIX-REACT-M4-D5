import React, { Component } from "react"
import { Carousel, Row } from "react-bootstrap"
import SingleMovie from "./SingleMovie"

class RowOfMovies extends Component {
  state = {
    movies: [],
  }
  OMDB_URL = "https://www.omdbapi.com/?apikey=9fe5dcf6"
  componentDidMount = () => {
    this.fetchMovies()
  }
  // fetch request-------(
  fetchMovies = async () => {
    try {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=9fe5dcf6&s="${this.props.title.toLowerCase()}"&type=movie&page=1`
      )
      console.log(response)
      let movies_Api = await response.json()
      this.setState({ movies: movies_Api })
    } catch (error) {}
  }
  // fetch request --------)
  render() {
    return (
      <>
        <h2 className="text-white">{this.props.title}</h2>
        <div>
          <Row className=" d-flex row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 text-center">
            {this.state.movies.Search &&
              this.state.movies.Search.slice(0, 6).map((movie) => (
                <SingleMovie
                  img={movie.Poster}
                  title={movie.Title}
                  id={movie.imdbID}
                  className="p-3"
                />
              ))}
          </Row>
        </div>
      </>
    )
  }
}

export default RowOfMovies
