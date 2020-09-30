import { Modal, Button } from "react-bootstrap"

export function TaskModal({ onCancel = () => {}, onSave = () => {}, visible }) {
  return (
    <Modal
      show={visible}
      onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Create new task</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button
          onClick={onCancel}
          variant="secondary">
          Cancel
        </Button>
        <Button
          onClick={onSave}
          variant="primary">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
