import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { ApolloContext } from "../../../contexts/shared/apollo/context";
import { tasks } from "../../../graphql/tasks";
import { TaskCard } from "../task-card";

export function TasksList() {
  const { client } = useContext(ApolloContext)

  const { data, loading, error } = useQuery(tasks.queries.getTasks, {
    client,
    fetchPolicy: "network-only"
  })

  const [deleteTaskById] = useMutation(tasks.mutations.deleteTaskById, {
    refetchQueries: [{
      query: tasks.queries.getTasks
    }],
    awaitRefetchQueries: true,
    client
  })

  if(loading || error) {
    return null
  }

  const onDelete = id => async () => {
    try {
      await deleteTaskById({ variables: { id } })
    }
    catch(e) {
      console.error(e)
      alert("An error has ocurred. Please try again.")
    }
  }

  return (
    <Row>
      { data?.TaskMany?.map(t =>
        <Col
          sm={12}
          key={t._id}>
          <TaskCard
            task={t}
            onDelete={onDelete(t._id)} />
        </Col>
      ) }
    </Row>
  )
}
