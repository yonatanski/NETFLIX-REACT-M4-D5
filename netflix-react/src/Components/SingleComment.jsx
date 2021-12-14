import React, { Component } from "react"
import { ListGroup, Badge } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { AiFillDelete } from "react-icons/ai"
import { AiFillEdit } from "react-icons/ai"

class SingleComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: 0,
    },
    editMode: false,
  }
  componentDidMount() {
    this.setState({
      comment: {
        comment: this.props.comment.comment,
        rate: this.props.comment.rate,
      },
    })
  }

  handeleDelete = async () => {
    await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.comment._id,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMjM5MDY4YjNlMDAwMTViN2FkMTUiLCJpYXQiOjE2MzkwNjQ0NjQsImV4cCI6MTY0MDI3NDA2NH0.qzHAd11ImXmCz4nXdz6nuk8SmkBEgdjIKSt6uJVPpLM",
        },
      }
    )
  }
  handleEdit = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        [e.target.id]: e.target.value,
      },
    })
  }
  sumbitComment = async () => {
    try {
      await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.comment._id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIyMjM5MDY4YjNlMDAwMTViN2FkMTUiLCJpYXQiOjE2MzkwNjQ0NjQsImV4cCI6MTY0MDI3NDA2NH0.qzHAd11ImXmCz4nXdz6nuk8SmkBEgdjIKSt6uJVPpLM",
          },
          body: JSON.stringify(this.state.comment),
        }
      )
      this.setState({ editMode: false })
    } catch (error) {
      alert(error)
    }
  }
  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item className="text-dark">
            {this.props.comment.comment},
            <Badge pill variant="info" className="ml-5">
              {this.props.comment.rate}
            </Badge>
            ,
            <AiFillDelete
              variant="info"
              className="ml-5"
              onClick={this.handeleDelete}
            />
            <AiFillEdit
              className="ml-5"
              onClick={() => this.setState({ editMode: true })}
            />
            {this.state.editMode && (
              <div>
                <input
                  type="text"
                  id="comment"
                  value={this.state.comment.comment}
                  onChange={this.handleEdit}
                />{" "}
                <input
                  type="number"
                  id="rate"
                  value={this.state.comment.rate}
                  onChange={this.handleEdit}
                />
                <button onClick={this.sumbitComment}>Edit</button>
              </div>
            )}
            {/* <i className="bi bi-trash-fill text-dark mr-auto "></i>
            <i className="bi bi-pencil-square text-dark   "></i> */}
          </ListGroup.Item>
        </ListGroup>
      </>
    )
  }
}

export default SingleComment
