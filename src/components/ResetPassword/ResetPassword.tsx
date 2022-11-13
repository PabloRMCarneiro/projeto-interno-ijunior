import React, { useState } from "react";
import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";

import Logo from "../../img/logo.png";
import AlertModal from "../../utils/AlertModal";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [alertNewPassword, setAlertNewPassword] = useState(false);
  const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewPassword(e.target.value);

  const [confirmedNewPassword, setConfirmedNewPassword] = useState("");
  const [alertConfirmedNewPassword, setAlertConfirmedNewPassword] =
    useState(false);
  const handleConfirmedNewPassword = (e: React.ChangeEvent<HTMLInputElement>) =>
    setConfirmedNewPassword(e.target.value);

  function validationNewPassword(): boolean {
    if (newPassword !== "") {
      setAlertNewPassword(false);
      return true;
    } else {
      setAlertNewPassword(true);
      return false;
    }
  }

  function validationConfirmedNewPassword(): boolean {
    if (confirmedNewPassword === newPassword) {
      setAlertConfirmedNewPassword(false);
      return true;
    } else {
      setAlertConfirmedNewPassword(true);
      return false;
    }
  }

  const handleSubmit = () => {
    if (validationNewPassword() && validationConfirmedNewPassword())
      navigate("/");
  };

  return (
    <div className="container">
      <div className="reset-modal">
        <img src={Logo} alt="" className="reset-logo" />
        <h1 className="reset-title">Nova Senha</h1>
        <p className="reset-legend">
          Escolha sua nova senha de acesso. Lembre-se de escolher uma senha
          segura, mas que você não vá esquecer de novo!
        </p>
        <div className="reset-inputs">
          { alertNewPassword && <AlertModal message="Senha inválida!" />}
          <input
            type="password"
            placeholder="Senha"
            className="reset-password-input"
            onChange={handleNewPassword}
            value={newPassword}
          />
          { alertConfirmedNewPassword && <AlertModal message="Senhas não conferem!" />}
          <input
            type="password"
            placeholder="Confirmar Senha"
            className="reset-confirm-password-input"
            onChange={handleConfirmedNewPassword}
            value={confirmedNewPassword}
          />
          <button className="reset-button" onClick={() => handleSubmit()}>
            Redefinir Senha
          </button>
        </div>
      </div>
    </div>
  );
}
