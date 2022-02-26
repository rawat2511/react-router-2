import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { Home } from "./Home";
import { Login } from "./Login";
import { Settings } from "./Settings";

export const RoutesFile = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};

const PageNotFound = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <Link to="/">Go to Home Page</Link>
      &nbsp;
      <Link to="/login">Go to Login Page</Link>
    </div>
  );
};
