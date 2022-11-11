import React from "react";
import "./EditPerfil.css";

import Navbar from "../Navbar/Navbar";
import PerfilImg from "../../img/perfil.png";

import { useNavigate } from "react-router-dom";

export default function EditPerfil() {

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <div className="perfil-container">
        <div className="menu-container">
          <h1 className="title">Editar dados</h1>
        </div>
        <div className="perfil-content-edit">
          <div className="aux-container">
            <div className="right-container">
              <img src={PerfilImg} alt="" />
              <button className="change-img">Editar foto</button>
            </div>
            <div className="vertical-line"></div>
            <div className="left-container">
              <form action="" className="forms-edit-perfil">
                <p className="title">Nome</p>
                <input type="text" placeholder="Nome" className="nome-edit" />
                <p className="title">Email</p>
                <input
                  type="email"
                  placeholder="Email"
                  className="email-edit"
                />
                <p className="title">Celular</p>
                <input
                  type="tel"
                  placeholder="Celular"
                  className="fone-edit"
                  pattern="^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$"
                  required
                />
                <p className="title">Data de nascimento</p>
                <input
                  type="date"
                  placeholder="Data de nascimento"
                  className="bith-date-edit"
                />
              </form>
            </div>
          </div>
          .<button className="save-editions" onClick={() => navigate('/home')}>Salvar Alterações</button>
          <button className="password-edit" onClick={() => navigate('/editar-senha')}>Editar Senha</button>
        </div>
      </div>
    </div>
  );
}
