import React, { Component } from "react"
import SingleComment from "./SingleComment"

class CommentList extends Component {
  state = {
    comments: [],
    newComment: {
      comment: "",
      rate: 0,
      elmentId: "",
    },
  }

  componentDidMount = () => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        elmentId: this.props.movieId,
      },
    })
    this.fetchComments()
  }

  fetchComments = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.movieId,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMjM5MDY4YjNlMDAwMTViN2FkMTUiLCJpYXQiOjE2MzkwNjQ0NjQsImV4cCI6MTY0MDI3NDA2NH0.qzHAd11ImXmCz4nXdz6nuk8SmkBEgdjIKSt6uJVPpLM",
        },
      }
    )
    let comment_Api = await response.json()
    this.setState({ comments: comment_Api }, () =>
      console.log(this.state.comments)
    )
  }
  handleChange = (e) => {
    this.setState({
      newComment: {
        ...this.state.newComment,
        [e.target.id]: e.target.value,
      },
    })
  }
  // function for posting comment
  sumbitPost = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMjM5MDY4YjNlMDAwMTViN2FkMTUiLCJpYXQiOjE2MzkwNjQ0NjQsImV4cCI6MTY0MDI3NDA2NH0.qzHAd11ImXmCz4nXdz6nuk8SmkBEgdjIKSt6uJVPpLM",
        },
        body: JSON.stringify(this.state.newComment),
      }
    )
  }

  render() {
    return (
      <>
        {" "}
        <div clasName="mb-3">
          {this.state.comments &&
            this.state.comments.map((comm) => <SingleComment comment={comm} />)}
        </div>
        <div className="d-flex ">
          <textarea
            id="comment"
            className="text-dark mr-3"
            onChange={this.handleChange}
          ></textarea>
          <input
            type="number"
            className="text-dark mr-3"
            id="rate"
            onChange={this.handleChange}
          ></input>
          <button className=" mr-3 btn-primary" onClick={this.sumbitPost}>
            Comment
          </button>
        </div>
      </>
    )
  }
}

export default CommentList
