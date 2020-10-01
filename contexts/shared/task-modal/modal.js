import { useMutation } from "@apollo/client"
import { useContext, useState } from "react"
import { Modal, Button, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { tasks } from "../../../graphql/tasks"
import { ApolloContext } from "../apollo/context"
import ms from "ms"

export function TaskModal({ onCancel = () => {}, onSave = () => {}, visible }) {
  const { register, handleSubmit } = useForm()
  const { client } = useContext(ApolloContext)

  const [createTask] = useMutation(tasks.mutations.createTask, { client })

  const onSubmit = async data => {
    data.duration = ms(data.duration)

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
            <Form.Control
              name="duration"
              type="text"
              ref={register} />
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
