import { Card } from "react-bootstrap";

export function TaskCard({ card }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{ card.name }</Card.Title>
        <Card.Text>{ card.description }</Card.Text>
      </Card.Body>
    </Card>
  )
}
