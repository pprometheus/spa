import React from 'react'
import { Route, Routes,Navigate } from "react-router-dom";
import Cards from './Components/Cards';
import Admin from './Admin/Admin';

const Layout = ({userRole}) => {
    console.log(userRole)
  return (
    <Routes>
        <Route to="/admin" element={<Admin />} />
        <Route to="/cards" element={<Cards />} />
        <Route
            path="/cards"
            element={<Navigate to="/cards" />} />

    </Routes>
  )
}

export default Layout