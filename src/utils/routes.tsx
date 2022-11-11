import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/Login/Login";
import RecoverPassword from "../components/RecoverPassword/RecoverPassword";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import Home from "../components/Home/Home";
import EditPerfil from "../components/EditPerfil/EditPerfil";
import EditPassword from "../components/EditPassword/EditPassword";

import PrivateRoutes from "./PrivateRoutes";

export default function routes() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes/>}>
          <Route path="/home" element={<Home/>} />
          <Route path="/editar-perfil" element={<EditPerfil/>} />
          <Route path="/editar-senha" element={<EditPassword/>} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/recuperar-senha" element={<RecoverPassword />} />
        <Route path="/redefinir-senha" element={<ResetPassword />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </Router>
  );
}
