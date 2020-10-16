import { Button, Card, Nav } from "react-bootstrap"
import { Timer } from "../../shared"
import { RiPencilFill, RiDeleteBinFill, RiCheckFill } from "react-icons/ri"

export function TaskCard({
  task,
  onEdit = () => {},
  onDelete = () => {},
  onSuccess = () => {}
}) {
  return (
    <Card>
      <Card.Header>
      </Card.Header>
      <Card.Body>
        <Card.Title>{ task.name }</Card.Title>
        <Card.Text>{ task.description }</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link><Timer task={task} /></Card.Link>
        <Card.Link>
          <Button
            onClick={onSuccess}
            disabled={task.status === "completed"}
            variant="success">
            <RiCheckFill /> {task.status === "completed" ? "Completed" : "Mark as complete"}
          </Button>
        </Card.Link>
        <Card.Link>
          <Button
            onClick={onEdit}>
            <RiPencilFill /> Edit
          </Button>
        </Card.Link>
        <Card.Link>
          <Button
            onClick={onDelete}
            variant="danger">
            <RiDeleteBinFill /> Delete
          </Button>
        </Card.Link>
      </Card.Body>
    </Card>
  )
}
