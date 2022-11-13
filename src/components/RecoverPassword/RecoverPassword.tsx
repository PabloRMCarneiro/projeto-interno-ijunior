import React, { useState } from "react";
import "./RecoverPassword.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../img/logo.png";
import AlertModal from "../../utils/AlertModal";

export default function RecoverPassword() {
  const navigate = useNavigate();

  const currentEmail = "teste@gmail.com"; // email enquanto não tem API

  const [email, setEmail] = useState("");
  const [alertEmail, setAlertEmail] = useState(false);
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);

  const [confimedEmail, setConfirmedEmail] = useState("");
  const [alertConfirmedEmail, setAlertConfirmedEmail] = useState(false);
  const handleConfirmedEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmedEmail(e.target.value);

  function validationEmail(): boolean {
    if (email === currentEmail) {
      setAlertEmail(false);
      return true;
    } else {
      setAlertEmail(true);
      return false;
    }
  }

  function validationConfirmedEmail(): boolean {
    if (confimedEmail === email) {
      setAlertConfirmedEmail(false);
      return true;
    } else {
      setAlertConfirmedEmail(true);
      return false;
    }
  }

  const handleSubmit = () => {
    console.log('aqui')
    if (validationEmail() && validationConfirmedEmail()) navigate("/");
  };

  return (
    <div className="container">
      <div className="recover-modal">
        <img src={Logo} alt="" className="recover-logo" />
        <h1 className="recover-title">Esqueceu sua Senha?</h1>
        <p className="recover-legend">
          Insera seu endereço de e-mail e enviaremos um código para redefinir
          sua senha!
        </p>
        <div className="recover-inputs">
          {alertEmail && <AlertModal message="Email inválido!" />}
          <input
            type="email"
            placeholder="Email"
            className="recover-email-input"
            onChange={handleEmail}
            value={email}
            />
          {alertConfirmedEmail && <AlertModal message="Emails não conferem!" />}
          <input
            type="email"
            placeholder="Confirmar Email"
            className="recover-confirm-email-input"
            onChange={handleConfirmedEmail}
            value={confimedEmail}
          />
          <button 
            className="recover-button" 
            onClick={() => handleSubmit()}>
            Redefinir Senha
          </button>
          <p
            className="recover-forgot-confirm-email"
            onClick={() => navigate("/")}
          >
            Já tem conta? Faça Login
          </p>
        </div>
      </div>
    </div>
  );
}
