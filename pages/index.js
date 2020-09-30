import { Container, Row } from "react-bootstrap"
import { MainMenu } from "../components/tasks"
import TaskModalContextProvider from "../contexts/shared/task-modal/provider"

export default function Index() {
  return (
    <TaskModalContextProvider>
      <MainMenu />
      <Container fluid>
      </Container>
    </TaskModalContextProvider>
  )
}
