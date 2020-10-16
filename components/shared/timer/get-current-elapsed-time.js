import moment from "moment"
import { TaskModal } from "../../../contexts/shared/task-modal"

export function getCurrentElapsedTime(task = { elapsedTime: 0 }) {
  let currentElapsedTime

  if(task.status === "ongoing") {
    const lastStartAt = moment(task.lastStartAt)
    const currentTime = moment()

    return currentTime.diff(lastStartAt) + task.elapsedTime
  }

  return task.elapsedTime
}
