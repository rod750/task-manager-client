import { useState } from "react";
import { TaskModalContext } from "./context";
import { TaskModal } from "./modal";

export default function TaskModalContextProvider({ children }) {
  const [state, setState] = useState({ isModalVisible: false, edit: undefined })

  const openModal = (edit) => {
    setState({ isModalVisible: true, edit })
  }

  const closeModal = () => {
    setState({ isModalVisible: false, edit: undefined })
  }

  return (
    <TaskModalContext.Provider value={{ openModal, closeModal }}>
      <TaskModal
        onCancel={closeModal}
        onSave={closeModal}
        visible={state.isModalVisible}
        edit={state.edit} />
      { children }
    </TaskModalContext.Provider>
  )
}
