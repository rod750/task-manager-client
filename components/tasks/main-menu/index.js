import { useContext } from "react"
import { Form, Navbar, Button, Nav } from "react-bootstrap"
import { TaskModalContext } from "../../../contexts/shared/task-modal"

export function MainMenu({actions}) {
  const { openModal } = useContext(TaskModalContext)

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Task Manager</Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Form inline>
        <Button
          onClick={() => openModal()}
          variant="primary">
          New task
        </Button>
      </Form>
    </Navbar>
  )
}
