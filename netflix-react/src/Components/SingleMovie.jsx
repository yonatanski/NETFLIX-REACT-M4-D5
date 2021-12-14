import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Modal, Button } from "react-bootstrap"
import { useState } from "react"
import CommentList from "./CommentList"

function SingleMovie(props) {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <img
        src={props.img}
        className=" p-3 movie-cover rounded"
        alt=""
        onClick={handleShow}
      />
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-dark">
          <CommentList movieId={props.id} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default SingleMovie

//     return (
//       <>
//         <Button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </Button>

//
//       </>
//     );
//   }

//   render(<Example />);
