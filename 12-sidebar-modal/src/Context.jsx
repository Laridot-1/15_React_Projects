import React, { useState, useContext } from 'react'

const AppProvider = React.createContext()

export const useGlobalContext = () => {
  return useContext(AppProvider)
}

const AppContext = ({ children }) => {
  const [modalShown, setModalShown] = useState(false)
  const [sidebarShown, setSidebar] = useState(false)

  const showModal = () => setModalShown(true)
  const hideModal = () => setModalShown(false)

  const showSidebar = () => setSidebar(true)
  const hideSidebar = () => setSidebar(false)

  const obj = { modalShown, showModal, hideModal, sidebarShown, showSidebar, hideSidebar }

  return (
    <AppProvider.Provider value={obj}>
      {children}
    </AppProvider.Provider>
  )
}

export default AppContext
