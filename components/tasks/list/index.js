import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ApolloContext } from "../../../contexts/shared/apollo/context";
import { tasks } from "../../../graphql/tasks";

export function TasksList() {
  const { client } = useContext(ApolloContext)

  const { data, loading, error } = useQuery(tasks.queries.getTasks, { client })

  if(loading || error) {
    return null
  }

  return (
    <Row>
      { data?.TaskMany?.map(i => <Col>{i.name}</Col>) }
    </Row>
  )
}
