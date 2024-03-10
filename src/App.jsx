import React from "react"
import SideNavBar from "./components/SideNavBar"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <div>
      <SideNavBar />
      <div>
        <Routes>
          <Route path="/" element={<A/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
