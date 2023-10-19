import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AddTask(props) {
  return (
    <Modal
      show={props.isOpenAddModal}
      onHide={() => props.onHide("isOpenAddModal")}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              placeholder="Title"
              autoFocus
              onChange={props.inputOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              onChange={props.inputOnChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => props.onHide("isOpenAddModal")}
        >
          Close
        </Button>
        <Button variant="primary" onClick={props.submit}>
          Add Task
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddTask;
