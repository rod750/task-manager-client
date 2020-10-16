import "../styles/index.sass"

import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment)

export default function TaskManager({ Component, pageProps }) {
  return (
    <Component { ...pageProps } />
  )
}
