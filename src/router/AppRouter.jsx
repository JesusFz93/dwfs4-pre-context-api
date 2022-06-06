import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { NavBar } from "../components/NavBar";

import { CapturaPage } from "../pages/CapturaPage";
import { HomePage } from "../pages/HomePage";
import { ListaPage } from "../pages/ListaPage";

export const AppRouter = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="captura" element={<CapturaPage />} />
        <Route path="lista" element={<ListaPage />} />

        <Route path="/*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
};
