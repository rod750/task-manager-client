import { Container } from "react-bootstrap"
import { MainMenu, TasksList } from "../components/tasks"
import TaskModalContextProvider from "../contexts/shared/task-modal/provider"
import { withApollo } from "../hocs/with-apollo"

function Index() {
  return (
    <TaskModalContextProvider>
      <MainMenu />
      <Container fluid>
        <TasksList />
      </Container>
    </TaskModalContextProvider>
  )
}

export default withApollo(Index)
