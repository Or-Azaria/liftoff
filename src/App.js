import React from 'react'
import { Route, Routes } from 'react-router-dom'
import V from './pages/VolunteerForm'
import J from './pages/JuniorForm'
import C from './pages/CreateProfile'

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<C />}>
      <Route
        path="VolenteerForm"
        element={<J />}
      />
      <Route path="JuniorForm" element={<V />} />
    </Route>
  </Routes>
  )
}

