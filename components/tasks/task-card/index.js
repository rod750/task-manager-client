import { Card } from "react-bootstrap";

export function TaskCard({
  task,
  onEdit = () => {},
  onDelete = () => {}
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{ task.name }</Card.Title>
        <Card.Text>{ task.description }</Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link onClick={onEdit}>Editar</Card.Link>
        <Card.Link onClick={onDelete}>Eliminar</Card.Link>
      </Card.Body>
    </Card>
  )
}
