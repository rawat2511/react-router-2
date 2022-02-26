import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate( "/login" );
  }

  return (
    <div>
      <h1>Welcome To Our Website</h1>
      <button onClick={goToLogin} >Go To Login Page</button>
    </div>

  )
}
