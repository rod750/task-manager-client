import { useMutation } from "@apollo/client"
import { useContext } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { Controller, useForm } from "react-hook-form"
import { tasks } from "../../../graphql/tasks"
import { ApolloContext } from "../apollo/context"
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

  const [updateTask] = useMutation(tasks.mutations.updateTask, {
    refetchQueries: [{
      query: tasks.queries.getTasks
    }],
    awaitRefetchQueries: true,
    client
  })

  const onSubmit = async data => {
    try {
      if(edit) {
        data = { _id: edit._id, ...data }
      }

      const mutation = edit?._id ? updateTask : createTask;

      debugger

      const response = await mutation({
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
        <Modal.Title>{ edit ? "Edit task" : "Create new task" }</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Task name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              defaultValue={edit?.name}
              ref={register} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              as="textarea"
              defaultValue={edit?.description}
              ref={register}
              rows={5} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Controller
              name="duration"
              control={control}
              as={IntervalInput}
              defaultValue={edit?.duration} />
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
