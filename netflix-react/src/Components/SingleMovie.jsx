import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

class SingleMovie extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} className=" p-3 movie-cover rounded" alt="" />
      </div>
    )
  }
}

export default SingleMovie
