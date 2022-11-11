import React from "react";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../img/logo.png";

export default function ResetPassword() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="reset-modal">
        <img src={Logo} alt="" className="reset-logo" />
        <h1 className="reset-title">Nova Senha</h1>
        <p className="reset-legend">
          Escolha sua nova senha de acesso. Lembre-se de escolher uma senha
          segura, mas que você não vá esquecer de novo!
        </p>
        <input
          type="password"
          placeholder="Senha"
          className="reset-password-input"
        />
        <input
          type="password"
          placeholder="Confirmar Senha"
          className="reset-confirm-password-input"
        />
        <button className="reset-button" onClick={()=> navigate('/')}>Redefinir Senha</button>
      </div>
    </div>
  );
}
