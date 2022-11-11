import React from "react";
import "./EditPassword.css";

import Navbar from "../Navbar/Navbar";

import { useNavigate } from "react-router-dom";

export default function EditPassword() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <div className="perfil-container">
        <div className="menu-container">
          <h1 className="title">Editar senha</h1>
        </div>
        <div className="perfil-content-edit-pass">
          <form action="" className="forms-edit-perfil-edit-pass">
            <p className="title">Nova senha</p>
            <input type="password" placeholder="Nome" className="pass-edit" />
            <p className="title">Confirmar nova senha</p>
            <input type="password" placeholder="Confirmar nova senha" className="new-pass-edit" />
            <button className="salve" onClick={(e)=>{
              e.preventDefault();
              navigate('/editar-perfil');
            }}>Salvar alterações</button>
          </form>
        </div>
      </div>
    </div>
  );
}
