import React from "react";
import "./Navbar.css";

import Logo from "../../img/logo.png";
import ProjectIcon from "../../img/project-icon.png";
import ContractIcon from "../../img/contract-icon.png";
import UserIconPrimary from "../../img/user-icon-primary.png";
import UserIconSecond from "../../img/user-icon-second.png";
import EngineIcon from "../../img/engine-icon.png";
import OutIcon from "../../img/out-icon.png";
import HambuguerIcon from "../../img/hambuguer-icon.png";

import { useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate();
  
  const OpenModal = () => {
    if(document.querySelector('.navbar-modal').style.visibility === 'hidden')
      document.querySelector('.navbar-modal').style.visibility = 'visible';
    else
      document.querySelector('.navbar-modal').style.visibility = 'hidden';
  }

  return (
    <div className="navbar-container">
      <div className="navbar-container-logo">
        <img src={Logo} alt="" className="navbar-logo" />
      </div>
      <div className="navbar-links">
        <p className="project-link">
          <img src={ProjectIcon} alt="" />
          Projetos
        </p>
        <p className="contract-link">
          <img src={ContractIcon} alt="" />
          Contratos
        </p>
        <p className="user-link">
          <img src={UserIconPrimary} alt="" />
          Usuários
        </p>
      </div>

      <div className="navbar-modal" >
        <p className="my-datas" onClick={() => navigate('/home')}>
          <img src={HambuguerIcon} alt="" />
          Meus dados
        </p>
        <p className="get-out" onClick={() => navigate('/')}>
          <img src={OutIcon} alt="" />
          Sair
        </p>
      </div>

      <div className="navbar-user-perfil" onClick={() => {
        OpenModal()
      }}>
        <div className="navbar-user-perfil-container">
          <div className="avatar">
            <img src={UserIconSecond} alt="" />
          </div>
          <p className="user-name">Julia</p>
          <img src={EngineIcon} alt="" className="icon-navbar-user" />
        </div>
      </div>
    </div>
  );
}
