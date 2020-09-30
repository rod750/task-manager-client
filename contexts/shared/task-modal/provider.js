import { useState } from "react";
import { TaskModalContext } from "./context";
import { TaskModal } from "./modal";

export default function TaskModalContextProvider({ children }) {
  const [state, setState] = useState({ isModalVisible: false })

  const openModal = () => {
    setState({ isModalVisible: true })
  }

  const closeModal = () => {
    setState({ isModalVisible: false })
  }

  return (
    <TaskModalContext.Provider value={{ openModal, closeModal }}>
      <TaskModal
        onCancel={closeModal}
        visible={state.isModalVisible} />
      { children }
    </TaskModalContext.Provider>
  )
}
