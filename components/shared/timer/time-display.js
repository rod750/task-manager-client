import moment from "moment"

export function TimeDisplay({ milliseconds = 0 }) {
  return moment.duration(milliseconds).format("h:mm:ss", {trim: false})
}
