import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/dashboard.css'

function Dashboard() {
  return (
    <>
      <div className="container my-4">
        <h1 className="text-white">Dashboard</h1>
        <Link to="/signin" className="btn btn-danger">Sign Out</Link>
      </div>
    </>
  )
}

export default Dashboard