import React from 'react'
import { Routes, Route } from "react-router-dom";
import SignIn from './SignIn'
import SignUp from './SignUp'
import Dashboard from './Dashboard'

function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default Router