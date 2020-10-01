import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ApolloContext } from "../../../contexts/shared/apollo/context";
import { tasks } from "../../../graphql/tasks";
import { TaskCard } from "../task-card";

export function TasksList() {
  const { client } = useContext(ApolloContext)

  const { data, loading, error } = useQuery(tasks.queries.getTasks, { client })

  if(loading || error) {
    return null
  }

  return (
    <Row>
      { data?.TaskMany?.map(c =>
        <Col
          sm={12}
          key={c._id}>
          <TaskCard card={c} />
        </Col>
      ) }
    </Row>
  )
}
