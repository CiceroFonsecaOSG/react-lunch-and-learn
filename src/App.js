import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Page from "./components/Page";
import "./scss/styles.scss";

import { routes } from "./data";

function App() {
  return (
    <BrowserRouter>
      <Header routes={routes} />
      <Routes>
        {renderRoutes}
        <Route path="*" element={<Navigate to={routes[0].url} />} />
      </Routes>
    </BrowserRouter>
  );
}

const renderRoutes = routes.map((route) => {
  return (
    <Route
      key={route.url}
      path={route.url}
      element={
        <Page componentName={route.name} componentUrl={`/${route.url}`} />
      }
    />
  );
});

export default App;
