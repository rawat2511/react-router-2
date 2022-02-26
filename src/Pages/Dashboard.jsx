import React, {useContext} from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export const Dashboard = () => {

  const { isAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const goToSettings = () => {
    navigate("/dashboard/settings")
  }
  
  if( !isAuthenticated ) {
    return <Navigate to="/login" />
  }
  else
  return (
    <div>
        <h1>Welcome to Dashboard !!!</h1>
        <button onClick={goToSettings}>Settings Page</button>
        <Outlet />
    </div>
  )
}

 