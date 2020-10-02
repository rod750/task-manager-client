import { useState } from "react"
import ms from "ms"
import { Form, Button, InputGroup } from "react-bootstrap"

export function IntervalInput({
  onChange = () => {},
  ref,
  defaultValue = 0,
  value = "0s",
  ...props
}) {
  const [state, setState] = useState({ displayValue: ms(value) })
  defaultValue = ms(parseFloat(defaultValue))

  const handleOnChange = e => {
    const newValue = e.target.value

    let value = ms(newValue === "" ? "0s" : newValue)

    if(value > 7200000) {
      value = 7200000
      setState({ displayValue: "2h" })
    }
    else {
      setState({ displayValue: newValue })
    }

    e.target.value = value
    
    onChange(e)
  }

  const setPreset = preset => {
    const displayValue = preset
    const value = ms(preset)

    onChange(value)

    setState({ displayValue })
  }

  return (
    <InputGroup>
      <InputGroup.Prepend>
        <Button
          onClick={() => setPreset("30m")}
          variant="outline-secondary">
          Short
        </Button>
        <Button
          onClick={() => setPreset("1h")}
          variant="outline-secondary">
          Medium
        </Button>
        <Button
          onClick={() => setPreset("2h")}
          variant="outline-secondary">
          Large
        </Button>
      </InputGroup.Prepend>
      <Form.Control
        ref={ref}
        value={state.displayValue}
        defaultValue={defaultValue}
        onChange={handleOnChange}
        type="input"
        {...props} />
    </InputGroup>
  )
}
