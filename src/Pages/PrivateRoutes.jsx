import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Settings } from './Settings';

export const PrivateRoutes = () => {

  return (
    <div>
        <Routes>
            <Route path='/dashboard' element={ <Dashboard /> } >
                <Route path='settings' element={ <Settings /> } />
            </Route>
        </Routes>
    </div>
  )
}
