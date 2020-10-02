import { useMutation } from "@apollo/client"
import { useContext } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { Controller, useForm } from "react-hook-form"
import { tasks } from "../../../graphql/tasks"
import { ApolloContext } from "../apollo/context"
import ms from "ms"
import { IntervalInput } from "../../../components/shared"

export function TaskModal({
  onCancel = () => {},
  onSave = () => {},
  visible,
  edit
}) {
  const { register, handleSubmit, control } = useForm()
  const { client } = useContext(ApolloContext)

  const [createTask] = useMutation(tasks.mutations.createTask, {
    refetchQueries: [{
      query: tasks.queries.getTasks
    }],
    awaitRefetchQueries: true,
    client
  })

  const onSubmit = async data => {
    try {
      const response = await createTask({
        variables: { record: data }
      })
  
      onSave(response)
    }
    catch (e) {
      console.error(e)
      alert("An error has ocurred, please try again.")
    }
    
  }

  return (
    <Modal
      show={visible}
      onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Create new task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Task name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              ref={register} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              ref={register}
              rows={5} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Controller
              name="duration"
              control={control}
              as={IntervalInput} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={onCancel}
          variant="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant="primary">
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
