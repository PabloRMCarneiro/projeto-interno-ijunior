import React, { useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../img/logo.png";

export default function Login() {
  // temporário, só para poder entrar na página Home
  useEffect(() => {
    localStorage.setItem("stateLog", "true");
  }, []);

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="login-modal">
        <img src={Logo} alt="" className="login-logo" />
        <h1 className="login-title">Login</h1>
        <input type="email" placeholder="Email" className="login-email-input" />
        <input
          type="password"
          placeholder="Senha"
          className="login-password-input"
        />
        <button className="login-button" onClick={() => navigate("/home")}>
          Entrar
        </button>
        <p
          onClick={() => navigate("/recuperar-senha")}
          className="login-forgot-password"
        >
          Esqueceu sua senha?
        </p>
      </div>
    </div>
  );
}
