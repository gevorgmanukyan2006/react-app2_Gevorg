import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Deletemodal({
  isOpenDeleteModal,
  onHide,
  handleDeleteAllTasks,
  count,
  checkedTasks,
  task,
  handleDeleteTask,
  deletedTask,
  isOpenHandleDeleteModal,
}) {
  if (deletedTask.has(task.id)) {
    return (
      <Modal
        show={isOpenHandleDeleteModal}
        onHide={() => onHide("isOpenHandleDeleteModal")}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure, you want to delete the task "{task.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => onHide("isOpenHandleDeleteModal")}
          >
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDeleteTask(task.id)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  if (count > 1) {
    return (
      <Modal
        show={isOpenDeleteModal}
        onHide={() => onHide("isOpenDeleteModal")}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure, you want to delete {count} tasks?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => onHide("isOpenDeleteModal")}
          >
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteAllTasks}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  if (count === 1 && checkedTasks.has(task.id)) {
    return (
      <Modal
        show={isOpenDeleteModal}
        onHide={() => onHide("isOpenDeleteModal")}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure, you want to delete the task "{task.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => onHide("isOpenDeleteModal")}
          >
            Close
          </Button>
          <Button variant="danger" onClick={handleDeleteAllTasks}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Deletemodal;
