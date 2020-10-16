import { useMutation } from "@apollo/client";
import { useContext, useEffect, useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { RiPlayFill, RiPauseFill, RiStopFill } from "react-icons/ri";
import { ApolloContext } from "../../../contexts/shared/apollo/context";
import { tasks } from "../../../graphql/tasks";
import { getCurrentElapsedTime } from "./get-current-elapsed-time";
import { TimeDisplay } from "./time-display";

export function Timer({task, onComplete = () => {}}) {
  const [state, setState] = useState({
    currentElapsedTime: 0,
    status: undefined
  })

  const [isActive, setIsActive] = useState(false)

  const { client } = useContext(ApolloContext)

  const [startTaskById] = useMutation(tasks.mutations.startTaskById, { client })
  const [pauseTaskById] = useMutation(tasks.mutations.pauseTaskById, { client })
  const [stopTaskById] = useMutation(tasks.mutations.stopTaskById, { client })

  const startTask = async () => {
    try {
      const updatedTask = await startTaskById({ variables: { id: task._id } })
      setState(state => ({ ...state, status: updatedTask.status }))
    }
    catch(e) {
      console.error(e)
      alert("An error has ocurred please try again later")
    }
  }

  const pauseTask = async () => {
    try {
      const updatedTask = await pauseTaskById({ variables: { id: task._id } })
      setState(state => ({
        ...state,
        status: updatedTask.status,
        currentElapsedTime: updatedTask.elapsedTime
      }))
    }
    catch(e) {
      console.error(e)
      alert("An error has ocurred please try again later")
    }
  }

  const stopTask = async () => {
    try {
      const updatedTask = await stopTaskById({ variables: { id: task._id } })
      setState(state => ({
        ...state,
        status: updatedTask.status,
        currentElapsedTime: updatedTask.elapsedTime
      }))
    }
    catch(e) {
      console.error(e)
      alert("An error has ocurred please try again later")
    }
  }

  const onToggleChange = value => {
    switch(value) {
      case "ongoing":
        startTask()
        break
      case "paused":
        pauseTask()
        break
      case "stop":
        stopTask()
        break
      default:
        return false
    }
  }

  useEffect(() => {
    let interval = null

    setState({
      status: task?.status,
      currentElapsedTime: getCurrentElapsedTime(task)
    })

    if(state.status === "ongoing") {
      interval = setInterval(() => {
        const currentElapsedTime = getCurrentElapsedTime(task)

        if(currentElapsedTime <= task.duration) {
          setState(state => ({
            ...state,
            currentElapsedTime
          }))
        }
        else {
          setState(state => ({
            ...state,
            status: "completed",
            currentElapsedTime: task.duration
          }))
          onComplete(task)
        }
      }, 1000)
    }
    else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [state.status, task])

  return (
    <ToggleButtonGroup
      type="radio"
      name="status"
      value={state.status}
      onChange={onToggleChange}>
      <ToggleButton
        aria-label="start"
        variant="secondary"
        value="ongoing"
        disabled={state.status === "completed"}>
        <RiPlayFill />
      </ToggleButton>
      <ToggleButton
        aria-label="pause"
        variant="secondary"
        value="paused"
        disabled={state.status === "completed"}>
        <RiPauseFill />
      </ToggleButton>
      <ToggleButton
        aria-label="stop"
        variant="secondary"
        value="stop"
        disabled={state.status === "completed"}>
        <RiStopFill />
      </ToggleButton>
      <ToggleButton
        aria-label="current time"
        disabled
        variant="secondary">
        <TimeDisplay milliseconds={state.currentElapsedTime} />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
