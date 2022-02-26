import './App.css';
import { PrivateRoutes } from './Pages/PrivateRoutes';
import { RoutesFile } from './Pages/Routes';
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';


function App() {

  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  console.log( "IS Auth : ", isAuthenticated );
  console.log( "Toggle Auth : ", toggleAuth );

  return (
    <div className="App">
      {
        isAuthenticated ? <PrivateRoutes /> : <RoutesFile />
      }
      
      
    </div>
  );
}

export default App;
