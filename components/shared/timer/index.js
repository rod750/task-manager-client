import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import { RiPlayFill, RiPauseFill, RiStopFill } from "react-icons/ri";

export function Timer({taskId}) {
  const { state, setState } = useState()

  return (
    <ToggleButtonGroup type="radio" name="timer">
      <ToggleButton
        aria-label="play"
        variant="secondary"
        value="play">
        <RiPlayFill />
      </ToggleButton>
      <ToggleButton
        aria-label="pause"
        variant="secondary"
        value="pause">
        <RiPauseFill />
      </ToggleButton>
      <ToggleButton
        aria-label="stop"
        variant="secondary"
        value="stop">
        <RiStopFill />
      </ToggleButton>
      <ToggleButton
        aria-label="current time"
        disabled
        variant="secondary">
        10:00
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
