import React from "react";
import "./RecoverPassword.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../img/logo.png";

export default function RecoverPassword() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="recover-modal">
        <img src={Logo} alt="" className="recover-logo" />
        <h1 className="recover-title">Esqueceu sua Senha?</h1>
        <p className="recover-legend">
          Insera seu endereço de e-mail e enviaremos um código para redefinir
          sua senha!
        </p>
        <input
          type="email"
          placeholder="Email"
          className="recover-email-input"
        />
        <input
          type="email"
          placeholder="Confirmar Email"
          className="recover-confirm-email-input"
        />
        <button className="recover-button" onClick={() => navigate("/")}>
          Redefinir Senha
        </button>
        <p
          onClick={() => navigate("/")}
          className="recover-forgot-confirm-email"
        >
          Já tem conta? Faça Login
        </p>
      </div>
    </div>
  );
}
