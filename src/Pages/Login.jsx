import React, {useContext} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

export const Login = () => {

  const navigate = useNavigate();

  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const loginUser = () => {
    toggleAuth();
    navigate('/dashboard');
  }

  return (
    <div>
        <h1>Login Page</h1>
        {
          !isAuthenticated && <button onClick={loginUser} >Login</button>
        }
    </div>
  )
}
